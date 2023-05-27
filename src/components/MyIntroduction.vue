<template>
    <div class="common-layout">
        <el-container class="box">
            <el-header class="header">
                <div class="title">团队介绍</div>
                <div class="title-border"></div>
            </el-header>
            <el-main class="main-lineheight">
                <div class="main-context">
                    优创校园Youth Create是国内领先的创赛服务品牌，由多位省国赛评委、国金项目负责人和设计行业大咖联合创立，以专业视觉设计+国金内容制作为特色，用内容赋能，技术支撑，重新定义创赛服务。
                    <br />
                    优创校园隶属于山东优品文化传媒集团，于2018年在济南成立，拥有济南阿顿网络技术有限公司、山东智敬人力资源有限公司及山东优品推手文化传媒有限公司，在济南设立总部（济南国际人才创新中心B225），同时在汉中、上海等地设有分部。公司深耕高校双创服务多年，助力高校双创教育，致力于成为国内顶尖的双创教育服务品牌。
                </div>
                <div class="side-bar">
                    <div class="side-bd">
                        <div class="side-bd-header">
                            <div class="icon-box">
                                <el-icon class="icon">
                                    <School />
                                </el-icon>
                            </div>
                            <div class="side-bar-header">累计服务近80所高校</div>
                        </div>
                        <div class="side-bar-body">优创校园已经为山东大学、北京化工大学、华东理工大学、中南大学、暨南大学、对外经济贸易大学等高校的数千名师生提供了优质服务。</div>
                    </div>
                    <div class="side-bd">
                        <div class="side-bd-header">
                            <div class="icon-box">
                                <el-icon class="icon">
                                    <Trophy />
                                </el-icon>
                            </div>
                            <div class="side-bar-header">辅导300+创赛项目</div>
                        </div>
                        <div class="side-bar-body">互联网+、挑战杯、三创赛等累计：150+项省级获奖，60+项国家级获奖。<br />2022年互联网+大赛：已帮助13个项目进入金银奖争夺赛。
                        </div>
                    </div>
                </div>
            </el-main>
        </el-container>
</div>
</template>

<script>
import { School } from '@element-plus/icons-vue';

export default {
    name: "YchuangMyIntroduction",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { School }
};
</script>

<style lang="less" scoped>
@media screen and (max-width:768px) {
    .main-context {
        width: 60%;
        font-size: .1828rem !important;
        margin-top: 10px;
    }
    
    .side-bar {
    display: flex;
    margin-left: .2957rem;
    margin-left: .3844rem;
    margin-top: 10px;
    flex-direction: column;
    width: 40%;}
    .side-bar-header {
        margin-left: 2%;
        font-size: .2064rem !important;
        margin-top: 2px!important;
    }

    .icon {
        position: absolute;
        font-size: .2301rem !important;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    .side-bar-body {
        margin-left: 16% !important;
        font-size: .155rem !important;
        line-height: .25rem;
    }

    .icon-box {
        position: relative;
        height: .3957rem !important;
        width: .3957rem !important;
        border-radius: 50%;
        background-color: orange;
    }

    .side-bar-header {
        margin-left: 3% !important;
        font-size: .1064rem;
        margin-top: .0118rem;
    }

    .title {
        font-size: .3rem !important;
        line-height: .3rem !important;
        text-align: center;
    }

    .title-border {
        width: 15% !important;
        border-bottom: 1px solid #f4ae19;
        margin-left: auto;
        margin-right: auto;
        margin-top: .1183rem;

    }
}

.header {
    width: 100%;
    margin-top: 5%;
    --el-header-height: .3548rem;
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
}

.main-lineheight {
    display: flex;
    width: 100%;
    line-height: .3rem;
    padding-bottom: 5%;
}

.main-context {
    width: 60%;
    font-size: .0828rem;
}

.side-bar {
    display: flex;
    margin-left: .2957rem;
    margin-left: .3844rem;
    flex-direction: column;
    width: 40%;

    .side-bd {
        flex: 1;
    }

    .side-bd-header {
        display: flex;
    }

    .side-bar-header {
        margin-left: 2%;
        font-size: .1064rem;
    }

    .icon-box {
        position: relative;
        height: .2957rem;
        width: .2957rem;
        border-radius: 50%;
        background-color: orange;
    }

    .icon {
        position: absolute;
        font-size: .1301rem;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    .side-bar-body {
        margin-left: 12%;
        font-size: .071rem;
        line-height: .25rem;
    }
}

.el-main {
    --el-main-padding: .1183rem;
}</style>