<template>
    <div class="body">
        <div class="banner">
            <img src="../assets/contact/youchuang.jpg" alt="">
            <p>CONTACT US</p>
        </div>

        <div class="header">
            <div @click="jump()" style="display: flex;"><el-icon class="icon">
                    <House />
                </el-icon>
                <div class="back">回到首页</div>
            </div>
            <div class="title">联系我们</div>
        </div>
        <div class="border"></div>
        <ul>
            <li><img src="../assets/contact/erweima.jpg" alt=""></li>
            <li class="context">+联络地址：山东省济南市历下区华润置地广场6号楼308</li>
            <li class="context">+邮政编码：250000</li>
            <li class="context">+联络电话：18950921790</li>
            <li class="context">+联系人：黄先生18950921790</li>
            <li class="context">+微信号：YouthcreateHUANG</li>
            <li class="context">+邮箱地址：youthcreate@163.com</li>
            <li class="context">+微信公众号ID：优创校园YouthCreate</li>
        </ul>
        <div class="end">©2018优创校园工作室 版权所有</div>
    </div>
</template>

<script>
export default {
    name: 'YchuangMyContact',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        jump() {
            this.$router.push('/home')
        }
    },
};
</script>

<style lang="less" scoped>
@media screen and (max-width:640px){
    .icon {
        margin-left: 10%;
        font-size: 10px!important;
        vertical-align: middle;
        cursor: pointer;
    }

    .back {
        margin-left: 2px;
        line-height: 11px!important;
        font-size: 11px!important;
        vertical-align: middle;
        cursor: pointer;
    }
    .context{
        font-size: 0.4rem;
    }
}
.body {
    min-width: 320px;
    height: 100%;
    background-color: #e0e0e0;
}

.banner {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.banner img {
    width: 100%;
    filter: brightness(0.6);

}

.banner p {
    position: absolute;
    right: 30px;
    bottom: 10px;
    font-size: 35px;
    font-weight: 500;
    color: rgba(239, 239, 239, .5)
}

.header {
    position: relative;
    margin-top: 50px;

    .icon {
        margin-left: 10%;
        font-size: 15px;
        vertical-align: middle;
        cursor: pointer;
    }

    .title {
        font-size: 30px;
        font-weight: bold;
        color: #2c2c2c;
        text-align: center;
    }

    .back {
        margin-left: 2px;
        line-height: 16px;
        font-size: 15px;
        vertical-align: middle;
        cursor: pointer;
    }
}

.border {
    width: 20%;
    height: 20px;
    margin: 0 auto;
    border-bottom: 2px solid #2c2c2c;
}

.context {
    text-align: center;
    margin: 40px;
}

ul li img {
    display: block;
    margin: 0 auto;
    margin-top: 50px;
}

.end {
    margin-top: 120px;
    text-align: center;
    font-size: 10px;
    color: #6e6e6e;
    padding-bottom: 10px;
}
</style>