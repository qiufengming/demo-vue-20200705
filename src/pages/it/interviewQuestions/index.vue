<template>
    <div class="interview_questions_wrap">
        <div class="list" v-show="isShowList">
            <el-row>
                <el-link class="name" @click="showOne('js')">JS</el-link>
                <el-link class="name" @click="showOne('jquery')">jQuery</el-link>
                <el-link class="name" @click="showOne('h5')">H5</el-link>
                <el-link class="name" @click="showOne('vue')">vue</el-link>
                <el-link class="name" @click="showOne('webpack')">webapck</el-link>
                <el-link class="name" @click="showOne('css')">CSS</el-link>
                <el-link class="name" @click="showOne('npm')">npm</el-link>
                <el-link class="name" @click="showOne('gulp')">gulp</el-link>
                <el-link class="name" @click="showOne('es6')">ES6</el-link>
                <el-link class="name" @click="showOne('1')">vue</el-link>
                <el-link class="name" @click="showOne('1')">vue</el-link>
            </el-row>
        </div>
        <div class="one_wrap" v-show="!isShowList">
            <el-row>
                <el-button type="text" @click="backList">&lt;&lt;返回列表</el-button>
            </el-row>
            <el-row>
                <js v-if="active == 'js'"></js>
            </el-row>
        </div>
    </div>
</template>

<script>
    import js from './js.vue';
    export default {
        components: { js },
        data(){
            return {
                isShowList: false,
                active: 'js',
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
            // 
            showOne(demoNum){
                let self = this;
                self.isShowList = false;
                self.active = demoNum;
                // self.$set(self, 'active', demoNum);
            },
            // 返回列表
            backList(){
                let self = this;
                self.isShowList = true;
                self.active = '';
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
.interview_questions_wrap{
    padding: 20px;
    .list{
        .name{
            background-color: #32adf5;
            border-radius: 3px;
            display: inline-block;
            padding: 2px 8px;
            margin: 3px 10px;
            font-size: 18px;
            text-decoration: none;
            color: #ecf8ff;
        }
    }
}
</style>
