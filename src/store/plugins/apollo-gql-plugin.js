import Vuex from 'vuex'

function isPromise (val) {
    return val && typeof val.then === 'function'
}

function patchAction (store, type, handler, local) {
    const entry = store._actions[type] || (store._actions[type] = [])

    if (entry.length > 0) entry.pop()

    entry.push(function wrappedActionHandler (payload, cb) {
        let res = handler({
            dispatch: local.dispatch,
            commit: local.commit,
            getters: local.getters,
            state: local.state,
            rootGetters: store.getters,
            rootState: store.state,
            apollo: store.$apollo,
            gql: store.$gql
        }, payload, cb)

        if (!isPromise(res)) res = Promise.resolve(res)
        if (store._devtoolHook) {
            return res.catch(err => {
                store._devtoolHook.emit('vuex:error', err)
                throw err
            })
        } else {
            return res
        }
    })
}

function patchModule (store, path, module, hot) {
    const namespace = store._modules.getNamespace(path)
    const local = module.context

    module.forEachAction((action, key) => patchAction(store, (namespace + key), action, local))
    module.forEachChild((child, key) => patchModule(store, path.concat(key), child, hot))
}

export default store => {
    patchModule(store, [], store._modules.root)

    const orig = Vuex.Store.prototype.registerModule
    Vuex.Store.prototype.registerModule = function registerModule (path, rawModule) {
        orig.call(this, path, rawModule)
        patchModule(this, [].concat(path), this._modules.get([path]))
        this.dispatch(`${path}/INIT`)
    }
}
