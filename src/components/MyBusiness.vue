<template>
    <div>
        <div class="common-layout">
            <el-container class="box">
                <el-header class="header">
                    <div class="title">业务领域</div>
                    <div class="title-border"></div>
                    
                </el-header>
                <el-main class="main-lineheight">
                    <div class="col">
                        <div><img src="../assets/01.jpg" alt="" class="img"></div>
                        <div class="side-bar-header">PPT制作</div>
                        <div class="main-context">
                            业内顶尖设计师+国赛项目负责人=最强创赛定制，累计完成上百个创赛ppt定制案例，团队经验非常丰富。承接ppt内容代做+美化定制，专业创赛ppt设计师定制设计，国奖教练主笔修改制作ppt内容，内容+设计强强联合助力项目更进一步！
                    </div>
                    </div>
                    <div class="col">
                        <div><img src="../assets/02.png" alt="" class="img"></div>
                        <div class="side-bar-header">视频制作</div>
                        <div class="main-context">
                            承接创赛1分钟项目介绍视频制作，可选实景视频剪辑、mg动画等多种呈现形式，专为创赛打造，提供视频文案+视频制作的全包服务，由国赛教练定制视频文案，专业视频设计师ps、ae剪辑制作，助力视频内容+美观度双向提升。
                    </div>
                    </div>
                    <div class="col">
                        <div><img src="../assets/03.png" alt="" class="img"></div>
                        <div class="side-bar-header">项目支撑材料打磨</div>
                        <div class="main-context">
                            (1) 新闻稿撰写、央级媒体主流媒体发布，增强项目社会影响力。（2）创投机构融资签约、企业合作对接，丰富项目商业化程度。（3）产品建模、样品制作、app网页平台搭建，完善项目产品体系。（4）正规知识产权机构实用新型、发明专利、软著撰写及申请，加强项目科研背书。所有服务由集团自营知识产权公司、网媒公司、投资公司提供，无任何中介平台费用。
                    </div>
                    </div>
                    <div class="col">
                        <div><img src="../assets/04.png" alt="" class="img"></div>
                        <div class="side-bar-header">商业计划书制作</div>
                        <div class="main-context">
                            承接商业计划书代写、精修、美化。内容修改服务包括指定章节精修、财务报表制作、全篇重做等，国赛团队根据项目定制撰写，绝非模版。美化排版服务包括封面页+章节页+页眉页脚+封底页全套美化、内容页提炼+排版美化升级服务，专业平面设计师定制设计，打破传统word大段文字呈现方式，内容可视化快速传递重点信息，提高评委好感度。
                    </div>
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyBusiness',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
@media screen and (max-width:640px) {
    .main-lineheight {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    line-height: .3rem;
    padding-bottom: 5%;
}
.side-bar-header {
        padding-top: 0px;
        font-size: .2478rem!important;
    }
    .main-context{
        width: 80%;
        font-size: .171rem!important;
        text-align:left;
        margin-left: auto;
        margin-right: auto;
        margin-top: .0591rem;
    }
    .title {
    font-size: .3rem!important;
    line-height: .3rem!important;
    text-align: center;
}
.title-border {
    width: 15%!important;
    border-bottom: 1px solid #f4ae19;
    margin-left: auto;
    margin-right: auto;
    margin-top: .1183rem;

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
    background-color: rgb(255, 255, 255);
    width: 100%;
}

.main-lineheight {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    line-height: .3rem;
    padding-bottom: 5%;
}

.col {
    flex: 50%;
    text-align: center;
    margin-top: .1183rem;
    .side-bar-header {
        padding-top: 0px;
        font-size: .1478rem;
    }

    .img {
        width: 20%;
    }
    .main-context{
        width: 80%;
        font-size: .071rem;
        text-align:left;
        margin-left: auto;
        margin-right: auto;
        margin-top: .0591rem;
    }
}
.el-main{
    --el-main-padding: .1183rem;
}
.el-header{
    --el-header-height: .3548rem;  
}
</style>