<template>
    <component :is='ComName' :src="src" @cancelImg="cancelimg"></component>
    <component :is='videocomename' :src="videosrc" @cancelVideo="cancelimg"></component>
    <div style="background-color: #e0e0e0;">
        <div class="banner">
            <img src="../assets/contact/youchuang.jpg" alt="">
            <p>WORKS</p>
        </div>
        <div class="header">
            <div @click="jump()" style="display: flex;"><el-icon class="icon">
                    <House />
                </el-icon>
                <div class="back">回到首页</div>
            </div>
            <div class="title">PPT演示</div>
        </div>
        <div class="border"></div>
        <div class="main">
            <ul>
                <li v-for="item in list" :key="item.id" class="main-img" @click="changeComName(item.url)">
                    <img :src="item.url" alt="">
                </li>
            </ul>
        </div>
        <div class="title" style="margin-top: 5%;">视频演示</div>
        <div class="border"></div>
        <div class="main">
            <ul>
                <li v-for="item in videoList" :key="item.id" class="main-video" @click="changeVideoComName(item.url)">
                    <img :src="item.imageUrl" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import MyImg from './MyImg.vue';
import MyVideo from './MyVideo.vue'
export default {
    name: 'YchuangMyMoreWorks',

    data() {
        return {
            list: [
                { id: 1, url: '/1.jpg' },
                { id: 2, url: '/2.jpg' },
                { id: 3, url: '/3.jpg' },
                { id: 4, url: '/4.jpg' },
                { id: 5, url: '/5.jpg' },
                { id: 6, url: '/6.jpg' },
                { id: 7, url: '/7.jpg' },
                { id: 8, url: '/8.jpg' },
                { id: 9, url: '/9.jpg' },
                { id: 10, url: '/10.jpg' },
                { id: 11, url: '/11.jpg' },
                { id: 12, url: '/12.jpg' },
                { id: 13, url: '/13.jpg' },
                { id: 14, url: '/14.jpg' },
                { id: 15, url: '/15.jpg' },
                { id: 16, url: '/16.jpg' },
                { id: 17, url: '/17.jpg' },
                { id: 18, url: '/18.jpg' },
                { id: 19, url: '/19.jpg' },
                { id: 20, url: '/20.jpg' },
                { id: 21, url: '/21.jpg' },
                { id: 22, url: '/22.jpg' },
                { id: 23, url: '/23.jpg' },
                { id: 24, url: '/24.jpg' },
                { id: 25, url: '/25.jpg' },
                { id: 26, url: '/26.jpg' },
                { id: 27, url: '/27.jpg' },
                { id: 28, url: '/28.jpg' },
                { id: 29, url: '/29.jpg' },
                { id: 30, url: '/30.jpg' },
                { id: 31, url: '/31.jpg' },
                { id: 32, url: '/32.jpg' },
            ],
            videoList: [
                { id: 1, url: "/aba.mp4", imageUrl: "/aba.jpg" },
                { id: 2, url: "/adun.mp4", imageUrl: "/adun.jpg" },
                { id: 3, url: "/ganai.mp4", imageUrl: "/ganai.jpg" },
                { id: 4, url: "/jiuzai.mp4", imageUrl: "/jiuzai.jpg" },
                { id: 5, url: "/yifei.mp4", imageUrl: "/yifei.jpg" },
                { id: 6, url: "/zhongyue.mp4", imageUrl: "/zhongyue.jpg" },
                { id: 7, url: "/dian1.mp4", imageUrl: "/dian1.jpg" },
                { id: 8, url: "/dian2.mp4", imageUrl: "/dian2.jpg" },
                { id: 9, url: "/shiliu.mp4", imageUrl: "/shiliu.jpg" },
            ],
            ComName: '',
            videocomename: '',
        };
    },

    mounted() {

    },

    methods: {
        jump() {
            this.$router.push('/home')
        },
        changeComName(url) {
            this.src = url
            this.ComName = 'MyImg'
        },
        cancelimg(comename) {
            this.ComName = comename
            this.videocomename = comename
        },
        changeVideoComName(url) {
            this.videosrc = url
            this.videocomename = 'MyVideo'
        },
    },
    components: {
        MyImg,
        MyVideo
    }
};
</script>

<style lang="less" scoped>
@media screen and (max-width:640px) {
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
}
.body {
    min-width: 320px;
    height: 100%;

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



    .back {
        margin-left: 2px;
        line-height: 16px;
        font-size: 15px;
        vertical-align: middle;
        cursor: pointer;
    }
}

.title {
    font-size: 30px;
    font-weight: bold;
    color: #2c2c2c;
    text-align: center;
}

.border {
    width: 20%;
    height: 20px;
    margin: 0 auto;
    border-bottom: 2px solid #2c2c2c;
}

.main ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 80%;
    margin: 0 auto;
    padding-top: 3%;

    .main-img {
        flex: 30%;
        margin: 2%;
        border-radius: 5%;
        overflow: hidden;

        img {
            width: 100%;
            transition: all.4s;
        }

        img:hover {
            transform: scale(1.2);
            cursor: zoom-in;
        }
    }

    .main-video {
        flex: 25%;
        margin: 2%;
        border-radius: 5%;
        overflow: hidden;

        img {
            width: 100%;
            transition: all.4s;
        }

        img:hover {
            cursor: pointer;
            transform: scale(1.2);
            filter: brightness(0.8);
        }
    }


}
</style>