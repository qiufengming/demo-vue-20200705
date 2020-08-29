<template>
    <div class="code_demo_wrap">
        <div class="demo_list" v-show="!isShowDemo">
            <el-row>
                <el-link class="name" @click="showDemo('1')">元素宽度可拉伸</el-link>
            </el-row>
        </div>
        <div class="demo_wrap" v-show="isShowDemo">
            <el-row>
                <el-button type="text" @click="backDemoList">&lt;&lt;返回列表</el-button>
            </el-row>
            <el-row>
                <elWidthChange v-if="activeDemo == '1'"></elWidthChange>
            </el-row>
        </div>
        <el-row>
            <el-col :span="24"></el-col>
        </el-row>
    </div>
</template>

<script>
    import elWidthChange from './elWidthChange.vue';
    export default {
        components: { elWidthChange },
        data(){
            return {
                isShowDemo: false,
                activeDemo: '',
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
            showDemo(demoNum){
                let self = this;
                self.isShowDemo = true;
                self.activeDemo = demoNum;
                // self.$set(self, 'activeDemo', demoNum);
            },
            backDemoList(){
                let self = this;
                self.isShowDemo = false;
                self.activeDemo = '';
            },

        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.code_demo_wrap{
    padding: 20px;
    .demo_list{
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
    .demo_wrap{}
}
</style>
