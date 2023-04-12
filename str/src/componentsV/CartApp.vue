<template>
  <div class="cart">
    <div class="cart_wrapper">
      <a href="#" class="cart_icon">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      </a>
      <div class="cart_price">4665 тенге.<span>2</span></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.cart {
  z-index: 30;
  &_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
  }
  &_icon {
    font-size: 1.3rem;
    transition: 0.2s linear;
    &:hover {
      color: #eb2d66;
    }
  }

  &_price {
    position: relative;
    font-weight: 700;
    font-size: 12px;
    color: #2d2e32;
    span {
      position: absolute;

      border-radius: 50%;
      width: 1rem;

      color: #fff;
      background-color: #eb2d66;
      display: flex;
      justify-content: center;
      align-items: center;
      top: -15px;
      right: 5px;
    }
  }
}
</style>
