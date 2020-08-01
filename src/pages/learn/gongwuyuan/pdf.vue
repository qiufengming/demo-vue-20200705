<template>
    <div class="pdf-page-wrap">
        <el-container>
            <el-header class="header">Header</el-header>
            <el-main class="main">
                <pdf01 />
            </el-main>
            <el-footer class="footer">Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
    import pdf01 from './fangfajingjiang/yanyu/pdf01.vue';
    export default {
        components: {pdf01},
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