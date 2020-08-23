<template>
    <div class="pdf-page-wrap">
        <el-container>
            <el-header class="header">Header</el-header>
            <el-main class="main">
                <fFJJYanyu v-if="pdfId == 'yanyu'" />
                <fFJJPanduan v-if="pdfId == 'panduan'" />
                <fFJJZiliaofenxi v-if="pdfId == 'ziliaofenxi'" />
                <fFJJShenlun v-if="pdfId == 'shenlun'" />
                <fFJJShenliangguanxi v-if="pdfId == 'shuliangguanxi'" />
            </el-main>
            <el-footer class="footer">Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
    import fFJJYanyu from './fangfajingjiang/yanyu/pdf01.vue';
    import fFJJPanduan from './fangfajingjiang/panduan/pdf02.vue';
    import fFJJZiliaofenxi from './fangfajingjiang/ziliaofenxi/pdf03.vue';
    import fFJJShenlun from './fangfajingjiang/shenlun/pdf04.vue';
    import fFJJShenliangguanxi from './fangfajingjiang/shuliangguanxi/pdf05.vue';
    export default {
        components: { fFJJYanyu, fFJJPanduan, fFJJZiliaofenxi, fFJJShenlun, fFJJShenliangguanxi },
        data(){
            return {
                mymsg: '这是第二个页面哦~',
                data: [],
                pdfId: '',
            };
        },
        created(){
            let self = this;
            this.initData();
            self.pdfId = self.$route.query.id;
        },
        mounted(){},
        methods: {
            // 初始化数据
            initData(){
                let self = this;
                self.data = [];
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .pdf-page-wrap{
        .header{
            line-height: 60px; background-color: #1989fa; color: #fff; text-align: center; font-size: 16px;
        }
        .main{
            padding: 10px; min-height: calc(100vh - 120px);
        }
        .footer{
            line-height: 60px; background-color: #3d97cb; color: #fff; text-align: center; font-size: 16px;
        }
    }
</style>