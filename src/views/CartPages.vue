<template>
  <section class="cart">
    <div class="container">
      <div class="cart_wrapper">
        <div class="cart_block">
          <div class="cart_text">
            <div class="cart_title">Продолжить покупки</div>
          </div>
          <div class="cart_descr">
            <div class="cart_subtitle">Корзина</div>
            <div class="cart_sub">
              В вашей корзине находится <span>{{ totalCart }}</span> вида товара
            </div>
          </div>
          <div class="cart_items">
            <TransitionGroup name="list">
              <div
                v-for="(item, i) in productFilter"
                :key="i"
                class="cart_item"
              >
                <div class="cart_img">
                  <img :src="item.img" alt="" />
                </div>
                <div class="cart_item_info">
                  <div class="cart_item_title">{{ item.name }}</div>
                  <div class="cart_item_subtitle">{{ item.color }}</div>
                </div>
                <div class="cart_item_count">
                  <span>{{ item.totals }}</span>
                  <div @click="decreaseTotals(item)" class="cart_item_counters">
                    <font-awesome-icon icon="fa-solid fa-angle-left" />
                  </div>
                  <div @click="increaseTotals(item)" class="cart_item_counters">
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                  </div>
                </div>
                <div class="cart_item_price">
                  {{ parseFloat(item.price) * item.totals + "тг" }}
                </div>
                <div @click="deleteToCart(item)" class="cart_item_delete">
                  <font-awesome-icon icon="fa-solid fa-trash-can" />
                </div>
              </div>
            </TransitionGroup>
          </div>
        </div>

        <form v-if="totalCart > 0" class="cart_info">
          <div class="cart_card">
            <div class="cart_card_title">Card Details</div>
            <div class="cart_card_subtitle">Card type</div>
            <div class="cart_card_social">
              <div class="cart_card_item">
                <font-awesome-icon icon="fa-brands fa-cc-paypal" />
              </div>
              <div class="cart_card_item">
                <font-awesome-icon icon="fa-brands fa-cc-mastercard" />
              </div>
              <div class="cart_card_item">
                <font-awesome-icon icon="fa-brands fa-cc-visa" />
              </div>
              <div class="cart_card_item">
                <font-awesome-icon icon="fa-brands fa-google-pay" />
              </div>
            </div>

            <div class="cart_pay">
              <div class="cart_pay_item">
                <div class="cart_pay_title">Имя держателя карты</div>
                <input required placeholder="name" type="text" />
              </div>
              <div class="cart_pay_item">
                <div class="cart_pay_title">Номер карты</div>
                <input required placeholder="54121 54541111 11" type="number" />
              </div>
              <div class="cart_pay_info">
                <div class="cart_pay_info_block">
                  <div class="cart_pay_title">Срок действия</div>
                  <input required placeholder="mm/yy" type="number" />
                </div>
                <div class="cart_pay_info_block">
                  <div class="cart_pay_title">CVV</div>
                  <input required placeholder="CVV" type="number" />
                </div>
              </div>
            </div>

            <div class="cart_check">
              <div class="cart_check_text">
                Общая сумма <span>{{ totalCartPrice }}тг</span>
              </div>
              <div class="cart_check_btn">
                <button type="button">
                  <span>{{ totalCartPrice }}тг</span>
                  <span
                    >Оформить достовку
                    <font-awesome-icon icon="fa-solid fa-arrow-right"
                  /></span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "CartPages",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("cart", ["allProduct", "allTotal"]),
    item() {
      return this.$store.state.AllProducts.items;
    },
    totalCart() {
      return this.allProduct.length;
    },

    totalCartPrice() {
      const flattenedProducts = this.allProduct.flat();
      return flattenedProducts.reduce((total, item) => {
        return total + parseFloat(item.price) * item.totals;
      }, 0);
    },
    productFilter() {
      const filteredProducts = this.allProduct.flat();
      return filteredProducts;
    },
  },
  methods: {
    ...mapActions("cart", ["deleteToCart", "setAllProduct", "handleDelete"]),
    increaseTotals(item) {
      if (item.totals >= 5) {
        return false;
      } else {
        item.totals += 1;
      }
      localStorage.setItem("allProduct", JSON.stringify(this.allProduct));
    },
    decreaseTotals(item) {
      if (item.totals <= 1) {
        return false;
      } else {
        item.totals -= 1;
      }
      localStorage.setItem("allProduct", JSON.stringify(this.allProduct));
    },
  },
  mounted() {
    if (localStorage.getItem("allProduct")) {
      const allProduct = JSON.parse(localStorage.getItem("allProduct"));
      this.setAllProduct(allProduct);
      console.log(this.totalCartPrice);
    }
    this.totalCart;
  },
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
