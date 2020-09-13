<template>
    <div class="page_wrap">
        <el-container>
            <el-header class="header">Header</el-header>
            <el-main class="main">
                <router-view/>
            </el-main>
            <el-footer class="footer">Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        components: {},
        data(){
            return {
                data1: [],
                data2: [],
                data3: [],
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
            },
            // 页面跳转
            goPage(pathName){
                let self = this;
                let routeUrl = self.$router.resolve({
                    name: pathName
                });
                window.open(routeUrl.href, '_blank');

                // html 取参  $route.query.id
                // script 取参  this.$route.query.id

                // vue路由跳转有四种方式
                // 1. router-link
                // 2. this.$router.push() (函数里面调用)
                // 3. this.$router.replace() (用法同push)
                // 4. this.$router.go(n)
            },

        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.page_wrap{
    .header{ background-color: #1989fa; color: #fff; font-size: 30px; text-align: center; line-height: 60px; }
    .main{
        background-color: #fff; min-height: calc(100vh - 120px); position: relative; padding: 0;
    }
    .footer{ background-color: #50bfff; color: #fff; font-size: 30px; text-align: center; line-height: 60px; }
}
</style>
