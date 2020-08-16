<template>
    <div class="pdf-page-wrap">
        <el-container>
            <el-header class="header">Header</el-header>
            <el-main class="main">
                <yanyuPdf04 />
            </el-main>
            <el-footer class="footer">Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
    import yanyuPdf01 from './fangfajingjiang/yanyu/pdf01.vue';
    import yanyuPdf02 from './fangfajingjiang/panduan/pdf02.vue';
    import yanyuPdf03 from './fangfajingjiang/ziliaofenxi/pdf03.vue';
    import yanyuPdf04 from './fangfajingjiang/shenlun/pdf04.vue';
    export default {
        components: { yanyuPdf01, yanyuPdf02, yanyuPdf03, yanyuPdf04 },
        data(){
            return {
                mymsg: '这是第二个页面哦~',
                data: [],
            };
        },
        created(){
            this.initData();
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