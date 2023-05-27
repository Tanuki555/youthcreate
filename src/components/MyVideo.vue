<template>
    <div class="div-video" >
        <el-icon style="position: absolute;right: 34px;top: 24px;color: white;font-size: 30px;text-align: center;" @click="cancel"  class="icon"><CircleClose/></el-icon>
      <video :src="src" alt="" class="video" controls="controls" preload="none" poster="../assets/logo.png"></video>
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
        this.$emit('cancelVideo', this.comename);
      }
    },
  };
  </script>
  
  <style lang="less" scoped>
  .div-video{
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
  .video{
    width: 70%;
  }
  .icon:hover{
cursor: pointer;
  }
  </style>