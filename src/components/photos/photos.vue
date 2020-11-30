<template>
<div>
  <ul class="mdc-image-list my-image-list">
    <li class="mdc-image-list__item">
      <div class="mdc-image-list__image-aspect-container">
        <img class="mdc-image-list__image" src="https://images11.esquire.ru/upload/img_cache/acf/acfbe9979332a4bab9cec3485f678f61_ce_1080x673x0x0_cropped_960x600.jpg">
      </div>
      <div class="mdc-image-list__supporting">
        <span class="mdc-image-list__label"></span>
      </div>
    </li>
    ...
  </ul>
</div>
</template>
<script>
export default {
  name: 'photos',
  computed: {
    getPhotos(){
      return this.$store.getters.getPhotos;
    },
  },
  mounted() {
    this.$store.dispatch('fetchPhotos');
  },
}

</script>