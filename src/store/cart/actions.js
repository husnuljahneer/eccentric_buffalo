export default {
    addToCart({ commit }, product) {
        commit("add-to-product", product);
    },
    removeFromCart({ commit }, product) {
        commit("remove-from-product", product);
    },
};