<template>
    <div class="ueditor-app">
        <vue-ueditor-wrap v-model="msg" @ready="ready" @beforeInit="addCustomDialog" :config="myConfig"></vue-ueditor-wrap>
        <div class="showMsg" v-html="msg"></div>
        <button @click="get">获取</button>
    </div>
</template>

<script>
// 1、引入VueUeditorWrap组件
    import VueUeditorWrap from 'vue-ueditor-wrap' // ES6 Module
    // const VueUeditorWrap = require('vue-ueditor-wrap') // CommonJS
    export default {
        components: {
            VueUeditorWrap
        },
        data(){
            return {
                msg: '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>~',
                myConfig: {
                    // 编辑器不自动被内容撑高
                    autoHeightEnabled: false,
                    // 初始容器高度
                    initialFrameHeight: 240,
                    // 初始容器宽度
                    initialFrameWidth: '100%',
                    // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
                    serverUrl: 'http://35.201.165.105:8000/controller.php',
                    // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
                    UEDITOR_HOME_URL: '/static/UEditor/'
                },
            };
        },
        methods: {
            get(){
                let self = this;
                console.log(self.msg);
            },
            ready(editorInstance){
                console.log(`编辑器实例${editorInstance.key}: `, editorInstance);
            },
            // 自定义按钮 Demo
            addCustomButtom(editorId){
                window.UE.registerUI('test-button', function(editor, uiName){
                    // 注册按钮执行时的 command 命令，使用命令默认就会带有回退操作
                    editor.registerCommand(uiName, {
                        execCommand: function () {
                            editor.execCommand('inserthtml', `<span>这是一段由自定义按钮添加的文字</span>`)
                        }
                    })

                    // 创建一个 button
                    var btn = new window.UE.ui.Button({
                        // 按钮的名字
                        name: uiName,
                        // 提示
                        title: '鼠标悬停时的提示文字',
                        // 需要添加的额外样式，可指定 icon 图标，图标路径参考常见问题 2
                        cssRules: "background-image: url('/test-button.png') !important;background-size: cover;",
                        // 点击时执行的命令
                        onclick: function () {
                            // 这里可以不用执行命令，做你自己的操作也可
                            editor.execCommand(uiName)
                        }
                    })

                    // 当点到编辑内容上时，按钮要做的状态反射
                    editor.addListener('selectionchange', function () {
                        var state = editor.queryCommandState(uiName)
                        if (state === -1) {
                            btn.setDisabled(true)
                            btn.setChecked(false)
                        } else {
                            btn.setDisabled(false)
                            btn.setChecked(state)
                        }
                    })
                    return btn
                }, 0, editorId);
            },
            // 自定义弹窗 Demo
            addCustomDialog (editorId) {
                window.UE.registerUI('test-dialog', function (editor, uiName) {
                    // 创建 dialog
                    var dialog = new window.UE.ui.Dialog({
                        // 指定弹出层中页面的路径，这里只能支持页面，路径参考常见问题 2
                        iframeUrl: '/static/customizeDialogPage.html',
                        // 需要指定当前的编辑器实例
                        editor: editor,
                        // 指定 dialog 的名字
                        name: uiName,
                        // dialog 的标题
                        title: '这是一个自定义的 Dialog 浮层',
                        // 指定 dialog 的外围样式
                        cssRules: 'width:600px;height:300px;',
                        // 如果给出了 buttons 就代表 dialog 有确定和取消
                        buttons: [{
                            className: 'edui-okbutton',
                            label: '确定',
                            onclick: function () {
                                dialog.close(true)
                            }
                        },{
                            className: 'edui-cancelbutton',
                            label: '取消',
                            onclick: function () {
                                dialog.close(false)
                            }
                        }]
                    })

                    // 参考上面的自定义按钮
                    var btn = new window.UE.ui.Button({
                        name: 'dialog-button',
                        title: '鼠标悬停时的提示文字',
                        cssRules: `background-image: url('/test-dialog.png') !important;background-size: cover;`,
                        onclick: function () {
                            // 渲染dialog
                            dialog.render()
                            dialog.open()
                        }
                    })
                    return btn
                }, 0 /* 指定添加到工具栏上的那个位置，默认时追加到最后 */, editorId /* 指定这个UI是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */)
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.ueditor-app{
    padding: 10px;
}
</style>