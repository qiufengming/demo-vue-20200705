<template>
    <div class="ueditor-app">
        <script ref="script" name="myueditor" type="text/plain"></script>
        <el-row>
            <el-button type="primary" @click="getEditorHtml">获取编辑器内容</el-button>
        </el-row>
        <p>getContent:</p>
        <div v-html="ueditorCont"></div>
        <p>getAllHtml:</p>
        <div v-html="ueditorHtml"></div>
    </div>
</template>

<script>
    // import './static/UE/ueditor.config.js'
    // import 'static/UE/ueditor.all.min.js'

    export default {
        data(){
            return {
                initValue: '',
                defaultConfig: {
                    // VUE CLI 3 会添加 process.env.BASE_URL 的环境变量，而 VUE CLI 2 没有，所以借此设置 UEDITOR_HOME_URL，能涵盖大部分 Vue 开发者的使用场景
                    UEDITOR_HOME_URL: process.env.BASE_URL ? process.env.BASE_URL + 'UEditor/' : '/static/UEditor/',
                    enableAutoSave: false
                },
                ueditorCont: '',
                ueditorHtml: '',
            };
        },
        props: {},
        computed: {},
        created(){},
        mounted(){
            this.initUEditor();
        },
        methods:{
            // 实例化编辑器
            initUEditor(){
                this.$refs.script.id = this.id = 'editor_' + Math.random().toString(16).slice(-6); // 这么做是为了支持 Vue SSR，因为如果把 id 属性放在 data 里会导致服务端和客户端分别计算该属性的值，而造成 id 不匹配无法初始化的 BUG
                this.editor = UE.getEditor(this.id, {});
            },
            // 获取内容
            getEditorHtml(){
                let self = this;
                self.ueditorCont = self.editor.getContent()
                self.ueditorHtml = self.editor.getAllHtml()
            },
        },
    };
</script>

<style lang="less" scoped>
    .ueditor-app{
        padding: 10px;
    }
</style>