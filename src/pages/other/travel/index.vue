<template>
    <div class="travel_wrap">
        <div class="list" v-show="isShowList">
            <el-row>
                <el-link class="name" @click="showOne('1')">西北大环线（2020-09-05 至 2020-09-12）</el-link>
            </el-row>
        </div>
        <div class="one_wrap" v-show="!isShowList">
            <el-row>
                <el-button type="text" @click="backList">&lt;&lt;返回列表</el-button>
            </el-row>
            <el-row>
                <travel01 v-if="active == '1'"></travel01>
            </el-row>
        </div>
        <el-row>
            <el-col :span="24"></el-col>
        </el-row>
    </div>
</template>

<script>
    import travel01 from './travel01.vue';
    export default {
        components: { travel01 },
        data(){
            return {
                isShowList: true,
                active: '',
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
            showOne(demoNum){
                let self = this;
                self.isShowList = false;
                self.active = demoNum;
                // self.$set(self, 'active', demoNum);
            },
            backList(){
                let self = this;
                self.isShowList = true;
                self.active = '';
            },

        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.travel_wrap{
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
    .one_wrap{}
}
</style>
