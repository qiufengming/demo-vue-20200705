<template>
    <div class="doc-structure">
        <el-container>
            <el-header class="header">Header</el-header>
            <el-main class="main">
                <el-row>
                    <el-col :span="5">
                        <leftNav></leftNav>
                    </el-col>
                    <el-col :span="14">
                        <centerTab></centerTab>
                    </el-col>
                    <el-col :span="5">
                        <right></right>
                    </el-col>
                </el-row>
            </el-main>
            <el-footer class="footer">Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
    import leftNav from './leftNav.vue';
    import centerTab from './centerTab.vue';
    import right from './right.vue';
    export default {
        components: {leftNav, centerTab, right},
        data(){
            return {
                mymsg: '这是第二个页面哦~',
            };
        },
        methods: {
            getMessage(val){
                alert(val);
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .doc-structure{
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