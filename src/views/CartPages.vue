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
              В вашей корзине находится <span>3</span> товара
            </div>
          </div>
          <div class="cart_items">
            <div v-for="(item, i) in productFilter" :key="i" class="cart_item">
              <div class="cart_img">
                <img :src="item.img" alt="" />
              </div>
              <div class="cart_item_info">
                <div class="cart_item_title">{{ item.name }}</div>
                <div class="cart_item_subtitle">{{ item.color }}</div>
              </div>
              <div class="cart_item_count">
                <span>1</span>
                <div class="cart_item_counters">
                  <font-awesome-icon icon="fa-solid fa-angle-left" />
                </div>
                <div class="cart_item_counters">
                  <font-awesome-icon icon="fa-solid fa-angle-right" />
                </div>
              </div>
              <div class="cart_item_price">{{ item.price }}</div>
              <div @click="deleteToCart(item)" class="cart_item_delete">
                <font-awesome-icon icon="fa-solid fa-trash-can" />
              </div>
            </div>
          </div>
        </div>

        <form class="cart_info">
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
                Общая сумма <span>1,672тг</span>
              </div>
              <div class="cart_check_btn">
                <button type="button">
                  <span>1,672тг</span>
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
import { mapGetters, mapActions } from "vuex";

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
    totalPrice() {
      
    },
    productId() {
      const product = this.item.find((item) => item.id == this.id);
      return product ? product.id : "";
    },
    productFilter() {
      const filteredProducts = this.allProduct.flat();
      return filteredProducts;
    },
  },
  methods: {
    ...mapActions("cart", ["deleteToCart", "setAllProduct", "handleDelete"]),
  },
  mounted() {},
};
</script>
