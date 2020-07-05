<template>
    <div class="right-wrap">
        右侧评论
    </div>
</template>

<script>
    export default {
        components: {},
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
    .right-wrap{
        padding: 2px; background-color: #f7e3b6;
    }
</style>