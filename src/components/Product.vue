<template>
  <div class="w-full max-w-sm mx-auto rounder-md shadow-md overflow-hidden">
    <div
      :style="{ 'background-image': `url(${product.image})` }"
      class="flex items-end justify-end h-56 w-full bg-cover"
    >
      <button class="flex-column items-end justify-end border rounded-full text-white mx-5 "
      :class="isAdded?'bg-red-500 hover:bg:red-400 focus:bg-red:600':'bg-blue-500 hover:bg:blue-400 focus:bg-blue:600'"
      @click.prevent="addToCart(product)">
        <span  >add to cart</span>
        <span >remove from cart</span>
      </button>
    </div>
    <div class="px-5 py-3">
      <h3>
        {{ product.name }}
      </h3>
      <span>{{ product.price }} $</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    },
    removeFromCart(product) {
      this.$emit('remove-from-cart', product);
    },
    
  }
}
</script>