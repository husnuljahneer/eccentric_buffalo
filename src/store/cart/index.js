import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
    carts: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [],
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}