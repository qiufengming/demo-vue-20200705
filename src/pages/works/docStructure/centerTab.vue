<template>
    <div class="center-tab">
        <el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-date"></i> 全文</span>
                <fullText></fullText>
            </el-tab-pane>
            <el-tab-pane label="规则" :disabled="!isRule">规则</el-tab-pane>
            <el-tab-pane label="相关规则">相关规则</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import fullText from './fullText.vue';
    export default {
        components: { fullText },
        data(){
            return {
                mymsg: '这是第二个页面哦~',
                isRule: false,
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
    .center-tab{
        padding: 2px; background-color: #b6f7c7;
    }
</style>