<template>
  <div @click="cancel">
    <img :src="src" alt="" class="img">
  </div>
</template>

<script>
export default {
  props:['src'],
  name: 'YchuangMyImg',
  data() {
    return {
      comename:''
    };
  },

  created() {

  },

  methods: {
    cancel(){
      this.$emit('cancelImg', this.comename);
    }
  },
};
</script>

<style lang="less" scoped>
div{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img{
  width: 70%;
}
.img:hover{
  cursor: zoom-out;
}
</style>