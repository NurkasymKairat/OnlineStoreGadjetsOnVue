<template>
  <section class="product">
    <div class="container">
      <div class="product_wrapper">
        <CatalogApp :links="link" :product="products">
          <router-link style="text-decoration: none" to="/">Назад</router-link>
        </CatalogApp>
        <div class="product_card">
          <div class="product_title">
            {{ productTitle }}
          </div>
          <div class="product_img">
            <img :src="productImg" alt="" />
          </div>

          <div class="product_info">
            <div class="product_price">{{ productPrice }}</div>
            <button @click="decreaseTotal">
              <font-awesome-icon icon="fa-solid fa-angle-left" />
            </button>
            <input type="number" @input="limitValue" v-model="total" />
            <button @click="increaseTotal">
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </button>
          </div>
          <div class="product_descr">Бесплатная доставка в Алмату</div>
          <button @click="addProductCart(products)" class="product_cart">
            Добавить в корзину
          </button>
          <button @click="handleDelete(productId)" class="product_cart">
            Удалить из корзины
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CatalogApp from "@/componentsV/CatalogApp.vue";
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "ProductPages",
  components: { CatalogApp },
  data() {
    return {
      link: false,
    };
  },
  watch: {},
  computed: {
    item() {
      return this.$store.state.AllProducts.items;
    },
    id() {
      return this.$route.params.id;
    },
    products() {
      return this.item.filter((item) => item.id == this.id);
    },
    productId() {
      const product = this.item.find((item) => item.id == this.id);
      return product ? product.id : "";
    },
    productTitle() {
      const product = this.item.find((item) => item.id == this.id);
      return product ? product.name : "";
    },
    productImg() {
      const product = this.item.find((item) => item.id == this.id);
      return product ? product.img : "";
    },
    productPrice() {
      const product = this.item.find((item) => item.id == this.id);
      return product ? product.price : "";
    },
    productFilters() {
      const filteredProducts = this.allProduct.flat();
      return console.log(filteredProducts);
    },
    ...mapGetters("product", ["total"]),
    ...mapGetters("cart", ["allProduct", "btnCart"]),
  },
  methods: {
    limitValue(event) {
      const input = event.target;
      if (input.value > 5) {
        input.value = 5;
      }
      console.log(this.products);
    },

    ...mapActions("product", ["increaseTotal", "decreaseTotal"]),
    ...mapActions("cart", ["addProductCart", "handleDelete"]),
  },
  //   watch: {
  //   allProduct(newValue, oldValue) {
  //     console.log('allProduct changed!', newValue, oldValue);
  //     localStorage.setItem("AllProduct", JSON.stringify(this.allProduct));
  //   }
  // },
  created() {
    // const dataProduct = localStorage.getItem("AllProduct");

    // if(dataProduct) {
    //   this.allProduct = JSON.parse(dataProduct);
    // }

  }
};
</script>
<style lang="scss">
.product {
  &_wrapper {
    display: flex;
    justify-content: space-around;
  }

  &_card {
    margin-top: 2rem;
    text-align: center;
    width: 20rem;
    background-color: #fff;
  }

  &_title {
    font-weight: 700;
    font-size: 2rem;
  }

  &_info {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 77px;
    height: 38px;
    margin: 0 auto;
    input {
      text-align: center;
      width: 2rem;
      outline: none;
      border: none;
    }

    button {
      outline: none;
      background: none;
      border: none;
      font-size: 1rem;
      cursor: pointer;
    }
  }

  &_price {
    margin-right: 1rem;
    font-weight: 900;
  }

  &_descr {
    margin-top: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  &_cart {
    outline: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 700;
    font-size: 11px;
    background-color: rgba(255, 255, 255, 0);
    outline: none;
    border: 1px solid #eb2d66;
    color: #eb2d66;
    padding: 10px;
    cursor: pointer;
    transition: 0.2s linear;
    &:hover {
      background-color: #eb2d66;
      color: #fff;
    }
  }

  @media (max-width: 720px) {
    .product {
      &_wrapper {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
