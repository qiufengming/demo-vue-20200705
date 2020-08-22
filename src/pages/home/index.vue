<template>
    <div class="index_wrap">
        <el-container>
            <el-header class="header">Header</el-header>
            <el-main class="main">
                <table>
                    <tbody>
                        <tr class="row1">
                            <td>
                                <el-row>
                                    <el-link v-for="(item, i) in data1" :key="i" @click="goPage(item.routeName)" class="font">{{ item.name }}</el-link>
                                </el-row>
                            </td>
                        </tr>
                        <tr class="row2">
                            <td>
                                <el-row>
                                    <el-link v-for="(item, i) in data2" :key="i" @click="goPage(item.routeName)" class="font">{{ item.name }}</el-link>
                                </el-row>
                            </td>
                        </tr>
                        <tr class="row3">
                            <td>
                                <el-row>
                                    <el-link v-for="(item, i) in data3" :key="i" @click="goPage(item.routeName)" class="font">{{ item.name }}</el-link>
                                </el-row>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <el-row></el-row>
                <el-row></el-row>
                <el-row></el-row>
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
                self.getData1();
                self.getData2();
                self.getData3();
            },
            // 获取data1 数据
            getData1(){
                let self = this;
                self.data1 = [
                    {name: 'Ueditor 富文本编辑器', routeName: 'Ueditor', routePath: '/ueditor'},
                ];
            },
            // 获取data2 数据
            getData2(){
                let self = this;
                self.data2 = [
                    {name: '工作 - 条目化', routeName: 'docStructure', routePath: '/works/docstructure'},
                ];
            },
            // 获取data3 数据
            getData3(){
                let self = this;
                self.data3 = [
                    {name: '公务员', routeName: 'gongwuyuan', routePath: '/learn/gongwuyuan'},
                ];
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
.index_wrap{
    .header{ background-color: #1989fa; color: #fff; font-size: 30px; text-align: center; line-height: 60px; }
    .main{
        background-color: #ecf8ff; min-height: calc(100vh - 120px); position: relative; text-align: center; padding: 0;
        table{ height: auto; min-height: calc(100vh - 120px); width: 100%; }
        .row1{ background-color: #fddbe2; }
        .row2{ background-color: #f9c6d2; }
        .row3{ background-color: #f7b1c2; }
        .font{
            background-color: #f71f52;
            border-radius: 3px;
            display: inline-block;
            padding: 2px 8px;
            margin: 3px 10px;
            font-size: 18px;
            text-decoration: none;
            color: #fddbe2;
        }
    }
    .footer{ background-color: #50bfff; color: #fff; font-size: 30px; text-align: center; line-height: 60px; }
}
</style>
