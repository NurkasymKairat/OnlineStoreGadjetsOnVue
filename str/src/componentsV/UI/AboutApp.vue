<template>
  <section class="about">
    <div class="container">
      <div class="about_title">О “Гаджетариуме” в цифрах</div>
      <div class="about_wrapper">
        <div v-for="about in abouts" class="about_item">
          <div class="about_num">{{about.num}}</div>
          <div class="about_text">{{about.text}}</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AboutApp",
  data() {
    return {
      abouts: [
        {
          num: "58",
          text: "Филиалов по всей стране",
        },
        {
          num: "100+",
          text: "Товаров в каталоге, здесь у меня пока мало",
          spans: 'просто у меня сейчас нет сервера и я сам сделал имитацию JSON серевера в коде можно посмотреть'
        },
        {
          num: "4688    ",
          text: "Покупателей",
        },
        {
          num: "12",
          text: "Часов доставка по городам",
        },
      ],
    };
  },
};
</script>
