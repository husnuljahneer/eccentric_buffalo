<template>
  <div>
    <div class="max-w-5xl mx-auto px-6 py-12">
      <div class="flex flex-wrap -m-3">
        <div
          v-for="product in products"
          :key="product.id"
          class="flex w-full p-3 md:w-1/2 lg:w-1/3"
        >
          <Product :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      products: [],
    };
  },
  components: {
    Product,
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios
        .get("/products")
        .then((response) => {
          this.products = response.data.products;
          console.log(this.products);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
