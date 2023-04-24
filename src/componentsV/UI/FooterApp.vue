<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_wrapper">
        <a href="#" class="footer_logo">
          <img src="@/assets/icons/logo_footer.svg" alt="" />
        </a>
        <div class="footer_social">
          <a target="_blank" href="#">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </a>
          <a target="_blank" href="#">
            <font-awesome-icon icon="fa-brands fa-telegram" />
          </a>
          <a target="_blank" href="#">
            <font-awesome-icon icon="fa-brands fa-tiktok" />
          </a>
          <a target="_blank" href="#">
            <font-awesome-icon icon="fa-solid fa-envelope" />
          </a>
        </div>
        <div class="footer_info">
          <span>Точки самовывоза</span>
          <div class="footer_adress">
            <font-awesome-icon icon="fa-solid fa-map-location-dot" />
          </div>
        </div>
        <div class="footer_copyright">
          <span>
            <router-link :to="{ name: 'policy' }"
              >Политика Конфиденциальности.</router-link
            >
            © 2023</span
          >
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterApp",
};
</script>
