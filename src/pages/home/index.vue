<template>
    <div class="home_wrap">
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
                    {name: 'Git', routeName: 'git', routePath: '/it/git'},
                    {name: 'React', routeName: 'react', routePath: '/it/react'},
                    {name: 'codeDemo', routeName: 'codeDemo', routePath: '/it/codeDemo'},
                    {name: 'Vue', routeName: 'vue', routePath: '/it/vue'},
                    {name: '面试题', routeName: 'interviewQuestions', routePath: '/it/interviewQuestions'},
                    {name: 'Kinetic.js', routeName: 'kinetic', routePath: '/it/kinetic'},
                ];
            },
            // 获取data2 数据
            getData2(){
                let self = this;
                self.data2 = [
                    {name: '工作 - 条目化', routeName: 'docStructure', routePath: '/works/docstructure'},
                    {name: '简历', routeName: 'resume', routePath: '/works/resume'},
                    {name: 'KineticJS画流程图', routeName: 'kineticFlowCahrt', routePath: '/works/kineticFlowCahrt'},
                ];
            },
            // 获取data3 数据
            getData3(){
                let self = this;
                self.data3 = [
                    {name: '公务员', routeName: 'gongwuyuan', routePath: '/learn/gongwuyuan'},
                    {name: '旅游', routeName: 'travel', routePath: '/travel'},
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
.home_wrap{
        height: 100%; position: relative; text-align: center;
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
</style>
