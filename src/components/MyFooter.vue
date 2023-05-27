<template>
    <div>
        <div class="end" @mouseover="hover">
            <p class="text" ref="help">优创校园 做有温度最放心的服务</p>

            <div class="min-box" ref="linkme" @click="jump()">联系我们</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'YchuangMyFooter',
    emits: ['changeflag'],
    data() {
        return {
            flag: ''
        };
    },

    mounted() {

    },

    methods: {
        hover() {
            console.log(this.$refs.linkme);
            this.$refs.linkme.style.opacity = 0.8
            this.$refs.help.style.marginTop = 0.45+'rem'
        },
        jump: function () {
            this.$router.push('/contact')
            this.flag = false
            this.$emit('changeflag', this.flag);
        }
    },
};
</script>

<style lang="less" scoped>
@media screen and (max-width:768px){
    .min-box {
        width: 1.1688rem !important;
        height: .3661rem !important;
        font-size: .1414rem !important;
    }
    
}
.end {
    background-image: url(../assets/linkme.jpg);
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 1.7741rem;
    background-size: 100% 160%;
    margin: 0px;
    background-position-y: center;
    transition: all.4s;
    justify-content: center;
}

.text {
    width: 100%;
    height: .2365rem;
    text-align: center;
    margin-top: .7096rem;
    font-size: .207rem;
    color: #f4ae19;
    cursor: default;
    transition: .8s;
}
.end:hover {
    background-position-y: -0.0591rem;
}

.min-box {
    width: .7688rem;
    height: .2661rem;
    display: flex;
    margin-top: -0.1183rem;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: .0828rem;
    border: .0188rem solid rgb(113, 113, 113);
    opacity: 0;
    transition: all.8s;
}

.min-box:hover {
    cursor: pointer;
    border: .0188rem solid #f4ae19;
    color: #f4ae19;
}
</style>