<template>
    <div class="second-app">
        {{ mymsg }}
        <p><router-link to="/first">去第一个页面</router-link></p>
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
<style></style>