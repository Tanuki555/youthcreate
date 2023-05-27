<template>
    <Splide :options="{ rewind: true,autoplay:true,arrows:false,interval:3000 }" class="splide">
      <SplideSlide>
        <img src="../assets/lunbotu1.jpg" class="img">
      </SplideSlide>
      <SplideSlide>
        <img src="../assets/lunbotu2.jpg" class="img">
      </SplideSlide>
      <SplideSlide>
        <img src="../assets/lunbotu3.jpg" class="img">
      </SplideSlide>
      <SplideSlide>
        <img src="../assets/lunbotu4.jpg" class="img">
      </SplideSlide>
    </Splide>
  </template>
 
  <script>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import { defineComponent } from 'vue';
  import '@splidejs/splide/dist/css/themes/splide-default.min.css';
  
  export default defineComponent( {
    components: { Splide, SplideSlide },
  } );
  </script>

<style lang="less" scoped>
.splide{
    width:100% ;
    position: absolute;
    left: 0ch;
    z-index: -1;
}
.img{
    width:100% ;
}

</style>