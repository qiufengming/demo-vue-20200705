<template>
    <div class="left-nav">
        <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
        <el-tree class="filter-tree" :data="data" :props="defaultProps" @node-click="nodeClick" default-expand-all :filter-node-method="filterNode" ref="tree"></el-tree>
    </div>
</template>

<script>
    export default {
        components: {},
        data(){
            return {
                filterText: '',
                data: [{
                    id: 100000,
                    label: '单片机原理及其应用​',
                    children: [{
                        id: 110000,
                        label: '1 单片机的基础知识',
                        children: [{
                            id: 110001,
                            label: '1.1 不同进位计数制及其互换'
                        }, {
                            id: 110002,
                            label: '1.2 带符号的二进制数'
                        },{
                            id: 110003,
                            label: '1.3 BCD码及文字符号代码'
                        }, {
                            id: 110004,
                            label: '1.4 单片机系统的组成'
                        },{
                            id: 110005,
                            label: '1.5 8051单片机的结构'
                        }, {
                            id: 110006,
                            label: '1.6 8051单片机的复位和低功耗工作方式'
                        }]
                    }, {
                        id: 120000,
                        label: '2 MCS．51指令系统',
                        children: [{
                            id: 120001,
                            label: '2.1 概述'
                        }, {
                            id: 120002,
                            label: '2.2 数据传送指令'
                        },{
                            id: 120003,
                            label: '2.3 算术与逻辑运算指令'
                        }, {
                            id: 120004,
                            label: '2.4 控制转移指令'
                        },{
                            id: 120005,
                            label: '2.5 位操作指令'
                        }]
                    }, {
                        id: 130000,
                        label: '3 汇编语言程序设计',
                        children: [{
                            id: 130001,
                            label: '3.1 汇编语言程序的格式'
                        }, {
                            id: 130002,
                            label: '3.2 伪指令'
                        },{
                            id: 130003,
                            label: '3.3 汇编语言程序的编写步骤及基本结构'
                        }, {
                            id: 130004,
                            label: '3.4 程序设计举例'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        watch: {
            filterText(val) {
                this.$refs.tree.filter(val);
            }
        },
        methods: {
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            // 点击树节点
            nodeClick(data, node, treeNode){
                let self = this;
                let id = data.id;
                let hasChild = data.children&&data.children.length ? true : false;
                document.getElementById('nav_'+id).scrollIntoView();
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .left-nav{
        padding: 2px; background-color: #f7b6ec;
    }
</style>