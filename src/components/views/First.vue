<template>
    <div class="first-app">
        {{ mymsg }}
        <Confirm text="注册" @message="getMessage"></Confirm>
        <p><router-link to="/second">去第二个页面</router-link></p>
    </div>
</template>

<script>
    import Confirm from '../sub/Confirm';
    export default {
        name: 'First',
        components: {
            Confirm
        },
        data(){
            return {
                mymsg: '欢迎来到第一个页面呢~',
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
.first-app{
    font-size: 30px;
    .link {
        a{
            color: red;
        }
    }
}
</style>