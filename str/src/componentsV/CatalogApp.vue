<template>
  <div class="catalog">
    <div class="catalog_wrapper">
      <transition-group name="list">
      <div
        v-for="item in product"
        :style="{ marginRight: styles }"
        class="catalog_item"
      >
        <div class="catalog_item_title">{{ item.name }}</div>
        <div class="catalog_item_img">
          <img :src="item.img" alt="" />
        </div>
        <div class="catalog_item_text">
          <div class="catalog_item_descr">
            <ul>
              <li v-for="op in item.option">{{ op }}</li>
            </ul>
          </div>
          <div class="catalog_item_info">
            <ul>
              <li>{{ item.corpus }}</li>
              <li>{{ item.size }}</li>
              <li>{{ item.color }}</li>
              <li>{{ item.battery }}</li>
              <li>{{ item.tips }}</li>
            </ul>
          </div>
        </div>
        <div class="catalog_next">
          <div class="catalog_price">{{ item.price }}</div>
          <router-link :to="`/product/${item.id}`" class="catalog_arrow">
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </router-link>
        </div>
      </div>
    </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  name: "CatalogApp",
  props: {
    product: Array,
    styles: String,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss">
.catalog {
  padding: 2.5rem 0;
  &_wrapper {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
  }

  &_item {
    padding: 1.875rem;
    text-align: center;
    width: 16.5rem;
    height: 30rem;
    background-color: #fff;
    box-shadow: 0px 15px 50px rgba(67, 76, 109, 0.08);
    &_text {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
    &_descr {
      text-align: left;
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
          font-weight: 400;
          font-size: 1rem;
          color: #1a6ebd;
          margin-bottom: 0.3rem;
        }
      }
    }

    &_title {
      font-weight: 900;
      font-size: 1rem;
      color: #2d2e32;
      margin-bottom: 1rem;
    }

    &_info {
      text-align: right;
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
          font-weight: 400;
          font-size: 1rem;
          color: #2d2e32;
          margin-bottom: 0.3rem;
        }
      }
    }
  }
  &_next {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4rem;
  }
  &_price {
    font-weight: 900;
    font-size: 1rem;
    color: #0c76d8;
  }

  &_arrow {
    font-size: 1.5rem;
    color: #eb2d66;
    cursor: pointer;
  }

  @media (max-width: 720px) {
    .catalog {
      &_item {
        width: 14rem;
      }
    }
  }
}

.list-move {
  transition: all 0.4s linear;
}
.list-enter-active ,
.list-leave-active {
  transition: all 0.8s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-130px);
}
</style>
