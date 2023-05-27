<template>
    <component :is='ComName' :src="src" @cancelImg="cancelimg"></component>
    <component :is='videocomename' :src="videosrc" @cancelVideo="cancelimg"></component>
    <div class="common-layout">
        <el-container class="box">
            <el-header class="header">
                <div class="title">作品展示</div>
                <div class="title-border"></div>
            </el-header>
            <el-main class="main-lineheight">
                <div class="title-min">PPT演示</div>
                <ul class="col">
                    <li class="box-media" v-for="item in List" :key="item.id" @click="changeComName(item.url)"><img
                            :src="item.url" alt=""></li>
                </ul>
                <div class="title-min-1">视频演示</div>
                <ul class="col">
                    <li class="box-media-video" v-for="item in videoList" :key="item.id"
                        @click="changeVideoComName(item.url)"><img :src="item.imageUrl" alt="">
                    </li>
                </ul>
                <div class="min-box" @click="jump()">更多作品</div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import { School } from '@element-plus/icons-vue';
import MyImg from './MyImg.vue';
import MyVideo from './MyVideo.vue'
export default {
    name: "YchuangMyIntroduction",
    emits: ['changeflag-works'],
    data() {
        return {
            List: [
            { id: 1, url: '/1.jpg' },
                { id: 2, url: '/2.jpg' },
                { id: 3, url: '/3.jpg' },
                { id: 4, url: '/4.jpg' },
                { id: 5, url: '/5.jpg' },
                { id: 6, url: '/6.jpg' },
            ],
            videoList: [
                { id: 1, url: "aba.mp4", imageUrl: "aba.jpg" },
                { id: 2, url: "adun.mp4", imageUrl: "adun.jpg" },
                { id: 3, url: "ganai.mp4", imageUrl: "ganai.jpg" },
                { id: 4, url: "jiuzai.mp4", imageUrl: "jiuzai.jpg" },
                { id: 5, url: "yifei.mp4", imageUrl: "yifei.jpg" },
                { id: 6, url: "zhongyue.mp4", imageUrl: "zhongyue.jpg" },
            ],
            ComName: '',
            src: '',
            videosrc: '',
            videocomename: '',
            flag: ''
        };
    },
    mounted() {

    }
    ,
    methods: {
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
        jump() {
            this.$router.push('/works')
            this.flag = false
            this.$emit('changeflag-works', this.flag);
            window.scrollTo(0, 0)
        }
    }
    ,
    components: { School, MyImg, MyVideo }
};
</script>

<style lang="less" scoped>
@media screen and (max-width:768px) {
    .title {
    font-size: .3rem!important;
    line-height: .3rem!important;
    text-align: center;
}
    .min-box {
        width: 1.1688rem !important;
        height: .3661rem !important;
        font-size: .1414rem !important;
    }
    .title-min {
    text-align: center;
    font-size: .2301rem!important;
    margin-top: .1183rem;
    margin-bottom: .1183rem;
}
.title-min-1 {
    text-align: center;
    font-size: .2301rem!important;;
    margin-top: .1183rem;
    margin-bottom: .1183rem;
}
.title-border {
    width: 15%!important;
    border-bottom: 1px solid #f4ae19;
    margin-left: auto;
    margin-right: auto;
    margin-top: .1183rem;

}
.box-media{
    flex:35%!important
}
.box-media-video{
    flex:35%!important
}
}

.header {
    margin-top: 5%;
}

.title {
    font-size: .2rem;
    line-height: .2rem;
    text-align: center;
}

.title-border {
    width: 8%;
    border-bottom: 1px solid #f4ae19;
    margin-left: auto;
    margin-right: auto;
    margin-top: .1183rem;

}

.common-layout {
    background-color: rgb(232, 232, 232);
    width: 100%;

}

.main-lineheight {
    line-height: .3rem;

}

.title-min {
    text-align: center;
    font-size: .1301rem;
    margin-top: .1183rem;
    margin-bottom: .1183rem;
}

.title-min-1 {
    text-align: center;
    font-size: .1301rem;
    margin-top: .1183rem;
    margin-bottom: .1183rem;
}

.col {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 80%;
    margin: 0 auto;

    .box-media {
        flex: 28%;
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

    .box-media-video {
        flex: 28%;
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

.min-box {
    width: .7688rem;
    height: .2661rem;
    margin-top: 2%;
    margin-bottom: 2%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: .0828rem;
    border: .0188rem solid rgb(113, 113, 113);
    transition: all.4s
}

.min-box:hover {
    cursor: pointer;
    transform: scale(1.05);
}

.el-main {
    --el-main-padding: .1183rem;
}

.el-header {
    --el-header-height: .3548rem;
}
</style>