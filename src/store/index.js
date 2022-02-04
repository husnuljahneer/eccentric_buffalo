import Vuex from 'vuex';
import cart from './cart';

const store = new Vuex.Store({
    modules: {
        cart,
    },
});

export default store;