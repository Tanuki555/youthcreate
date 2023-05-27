<template>
  <div v-if="flag">
    <el-container>
      <el-header>
        <div ref="jump1"></div>
        <div style=" position: relative;z-index: 1;" ref="el-main">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect" >
            <el-menu-item index="0" class="el-menu-item-logo-padding"><a href=""><img src="./assets/logo.png" alt=""
                  class="imgSize"></a></el-menu-item>
            <el-menu-item index="1" class="el-menu-item-padding" @click="handleScroll1(index)">首页</el-menu-item>
            <el-menu-item index="2" class="el-menu-item-padding" @click="handleScroll2(index)">团队介绍</el-menu-item>
            <el-menu-item index="3" class="el-menu-item-padding" @click="handleScroll3(index)">业务领域</el-menu-item>
            <el-menu-item index="4" class="el-menu-item-padding" @click="handleScroll4(index)">作品展示</el-menu-item>
            <el-menu-item index="5" class="el-menu-item-padding el-menu-item-padding5"
              @click="jump()">联系我们</el-menu-item>
          </el-menu>
        </div>
        <div style="padding-top: 60px;"><my-slide></my-slide></div>
      </el-header>
      <el-main class="mainPostion">
        <div ref="jump2"></div>
        <my-introduction></my-introduction>
        <div ref="jump3"></div>
        <my-business></my-business>
        <div ref="jump4"></div>
        <my-works @changeflag-works="ChangeF"></my-works>
      </el-main>
      <el-footer>
        <div ref="jump5"></div><my-footer @changeflag="ChangeF(f)"></my-footer>
      </el-footer>
    </el-container>
  </div>
  <router-view v-if="!flag"></router-view>
</template>


<script>
import MySlide from './components/MySlide.vue';
import MyIntroduction from './components/MyIntroduction.vue';
import MyBusiness from './components/MyBusiness.vue';
import MyWorks from './components/MyWorks.vue';
import MyFooter from './components/MyFooter.vue'
import { Bottom } from '@element-plus/icons-vue';
export default {
  name: 'YchuangApp',

  data() {
    return {
      flag: true
    };
  },

  mounted() {
   window.addEventListener('scroll',this.scroll)
  },

  methods: {
    handleScroll1() {
      console.log(this.$refs.jump1);
      this.$refs['jump1'].scrollIntoView(true);
    },
    handleScroll2() {
      console.log(this.$refs.jump2);
      this.$refs['jump2'].scrollIntoView(true);
    },
    handleScroll3() {
      console.log(this.$refs.jump3);
      this.$refs['jump3'].scrollIntoView(true);
    },
    handleScroll4() {
      console.log(this.$refs.jump4);
      this.$refs['jump4'].scrollIntoView(true);
    },
    jump: function () {
      this.$router.push('/contact')
      this.flag = false
    },
    scroll() {
      var t = document.documentElement.scrollTop || document.body.scrollTop
      if (t >= 60) {
        this.$refs['el-main'].style.opacity=0.7
      }
    },
    ChangeF(f){
      this.flag=f
    }
  },
  components: {
    MySlide,
    MyIntroduction,
    MyBusiness,
    MyWorks,
    MyFooter
  }
};
</script>

<style lang="less" scoped>
@media screen and (max-width:768px) {
  img{
    height: 40px!important;
  }
  .el-menu-item{
  font-size: .1828rem!important;
  width: .2957rem;
}
}
.imgSize {
  height: 70px;
  align-items: center;
}

.nav {
  width: 100%;
  min-width: 320px!important;
}

.el-menu-demo {
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  height: 60px;
  width: 10rem;
  justify-content: space-around;
  padding: 0 8%;
  min-width: 320px!important;

  .el-menu-item-logo-padding {
    flex: 2;
    z-index: 3;
    a{
      display: flex;
    }
  }

  .el-menu-item-padding {
    flex: 1;
  }

  .el-menu-item{
  font-size: .0828rem;
  width: .2957rem;
}
}

.el-menu--horizontal {
  border: 0ch;
}



.mainPostion {
  margin-top: 50%;
}

.el-main {
  --el-main-padding: 0;
  display: block;
  flex: 1 1 auto;
  padding: var(--el-main-padding);
}

.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover {
  background-color: rgb(255, 255, 255);
  color: #f4ae19;
}

.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 2px solid #f4ae19;
  color: #f4ae19 !important;
}

.el-footer {
  --el-footer-padding: 0;
}
</style>