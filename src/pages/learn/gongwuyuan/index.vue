<template>
    <div class="gongwuyuan-wrap">
        <el-container>
            <el-header class="header">Header</el-header>
            <el-main class="main">
                <div v-for="(item, i) in data" :key="i">
                    <el-divider content-position="left" >{{item.name}}</el-divider>
                    <dl v-for="(obj, j) in item.children"  :key="j">
                        <dt v-if="obj.isLink" ><el-link type="primary" @click="toPdf(obj.pdfId)">{{ obj.name }}</el-link></dt>
                        <dt v-else>{{ obj.name }}</dt>

                        <dd v-if="obj.children && obj.children.length" v-for="(pdf, n) in obj.children" :key="n">
                            <el-link v-if="pdf.isLink" type="primary" @click="toPdf(pdf.pdfId)">{{ pdf.name }}</el-link>
                            <span v-else>{{ pdf.name }}</span>
                        </dd>
                    </dl>
                </div>
            </el-main>
            <el-footer class="footer">Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
    // import leftNav from './leftNav.vue';
    // import centerTab from './centerTab.vue';
    // import right from './right.vue';
    export default {
        // components: {leftNav, centerTab, right},
        data(){
            return {
                mymsg: '这是第二个页面哦~',
                data: [],
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
                self.data = [{
                    id: 1, name: '1、方法精讲', isLink: false,
                    children: [
                        {
                            id: 11, name: '1、方法精讲-言语-郭熙', isLink: false, children: [
                                {id: 111, name: '公务员考试·笔试系统讲义（2021国考）-言语讲义', isLink: true, pdfId: '1'},
                                {id: 112, name: '2020.03.09 方法精讲-言语1 郭熙 （全部讲义+本节课笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 113, name: '2020.03.10 方法精讲-言语2 郭熙 （笔记）（2021国考笔试大班-1期)', isLink: true, pdfId: '1'},
                                {id: 114, name: '2020.03.11 方法精讲-言语3 郭熙 （笔记）（2021国考笔试大班-1期) ', isLink: true, pdfId: '1'},
                                {id: 115, name: '2020.03.12 方法精讲-言语4 郭熙 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 116, name: '2020.03.13 方法精讲-言语5 郭熙 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 117, name: '2020.03.14 方法精讲-言语6 郭熙 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                            ]
                        },
                        {
                            id: 12, name: '2、方法精讲-判断-宋文涛、徐来', isLink: false, children: [
                                {id: 121, name: '公务员考试·笔试系统讲义（2021国考）-判断讲义', isLink: true, pdfId: '1'},
                                {id: 122, name: '2020.03.16 方法精讲-判断1 宋文涛 （全部讲义+本节课笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 123, name: '2020.03.17 方法精讲-判断2 宋文涛 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 124, name: '2020.03.18 方法精讲-判断3 宋文涛 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 125, name: '2020.03.19 方法精讲-判断4 宋文涛 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 126, name: '2020.03.20 方法精讲-判断5 徐来 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 127, name: '2020.03.21 方法精讲-判断6 徐来 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 128, name: '2020.03.23 方法精讲-判断7 徐来 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 129, name: '2020.03.24 方法精讲-判断8 徐来 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                            ]
                        },
                        {
                            id: 13, name: '3、方法精讲-资料分析-杜岩', isLink: false, children: [
                                {id: 131, name: '2020.03.25 方法精讲-资料1 杜岩 （全部讲义+本节课笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 132, name: '2020.03.26 方法精讲-资料2 杜岩（笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 133, name: '2020.03.27 方法精讲-资料3 杜岩 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 134, name: '2020.03.28 方法精讲-资料4 杜岩 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                            ]
                        },
                        {
                            id: 14, name: '4、方法精讲-申论-李梦圆', isLink: false, children: [
                                {id: 141, name: '2020.03.30 方法精讲-申论1 李梦圆 （全部讲义+本节课笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 142, name: '2020.03.31 方法精讲-申论2 李梦圆 （笔记）（2021国考笔试大班1期）', isLink: true, pdfId: '1'},
                                {id: 143, name: '2020.04.01  方法精讲-申论3 李梦圆 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 144, name: '2020.04.02 方法精讲-申论4 李梦圆 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 145, name: '2020.04.03 方法精讲-申论5 李梦圆 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 146, name: '2020.04.04 方法精讲-申论6 李梦圆 （笔记）（2021国考笔试大班1期）', isLink: true, pdfId: '1'},
                                {id: 147, name: '2020.04.06 方法精讲-申论7 李梦圆 （笔记）（2021国考笔试大班1期）', isLink: true, pdfId: '1'},
                            ]
                        },
                        {
                            id: 15, name: '5、方法精讲-数量关系-唐宋', isLink: false, children: [
                                {id: 151, name: '2020.04.07  方法精讲-数量1 唐宋 （全部讲义+本节课笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 152, name: '2020.04.08 方法精讲-数量2 唐宋 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 153, name: '2020.04.09 方法精讲-数量3 唐宋 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 154, name: '2020.04.10 方法精讲-数量4 唐宋 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                            ]
                        },
                    ],
                },{
                    id: 2, name: '2、强化练习', isLink: false,
                    children: [
                        {
                            id: 21, name: '1、言语理解-常新雨', isLink: false, children: [
                                {id: 211, name: '2020.04.11 强化练习-言语1 常新雨 （全部讲义+本节课笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 212, name: '2020.04.13 强化练习-言语2 常新雨 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 213, name: '2020.04.14  强化练习-言语3 常新雨 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 214, name: '2020.04.15 强化练习-言语4 常新雨 （笔记）', isLink: true, pdfId: '1'},
                            ]
                        },
                        {
                            id: 22, name: '2、判断推理-魏倩', isLink: false, children: [
                                {id: 221, name: '2020.04.16 强化练习-判断1 魏倩 （全部讲义+本节课笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 222, name: '2020.04.17 强化练习-判断2 魏倩 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 223, name: '2020.04.18 强化练习-判断3  魏倩 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 224, name: '2020.04.20 强化练习-判断4 魏倩 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                            ]
                        },
                        {
                            id: 23, name: '3、申论-陈苏', isLink: false, children: [
                                {id: 231, name: '2020.04.21 强化练习-申论1 陈苏 （全部讲义+本节课笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 232, name: '2020.04.22 强化练习-申论2 陈苏 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 233, name: '2020.04.23 强化练习-申论3 陈苏 （笔记）', isLink: true, pdfId: '1'},
                                {id: 234, name: '2020.04.24 强化练习-申论4 陈苏 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                            ]
                        },
                        {
                            id: 24, name: '4、数资-程梓', isLink: false, children: [
                                {id: 241, name: '2020.04.25 强化练习-数资1 程梓 （全部讲义+本节课笔记）', isLink: true, pdfId: '1'},
                                {id: 242, name: '2020.04.27 强化练习-数资2 程梓 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                                {id: 243, name: '2020.04.28 强化练习-数资3 程梓 （笔记）', isLink: true, pdfId: '1'},
                                {id: 244, name: '2020.04.29 强化练习-数资4 程梓 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1'},
                            ]
                        },
                        {
                            id: 25, name: '02 强化练习题（国考版）上册', isLink: true, pdfId: '1'
                        },
                        {
                            id: 26, name: '03 强化练习题（国考版）下册', isLink: true, pdfId: '1'
                        },
                    ],
                },{
                    id: 3, name: '3、真题实践', isLink: false,
                    children: [
                        { id: 31, name: '04行测极致真题题本（国考卷）', isLink: true, pdfId: '1' },
                        { id: 32, name: '05行测极致真题解析（国考卷）', isLink: true, pdfId: '1' },
                        { id: 33, name: '06申论极致真题题本（国考卷）', isLink: true, pdfId: '1' },
                        { id: 34, name: '07申论极致真题解析（国考卷）', isLink: true, pdfId: '1' },
                    ],
                },{
                    id: 4, name: '课上讲义7本（配套视频书本）', isLink: false,
                    children: [
                        { id: 41, name: '01笔试系统讲义（2021国考版）', isLink: true, pdfId: '1' },
                        { id: 42, name: '02 强化练习题（国考版）上册', isLink: true, pdfId: '1' },
                        { id: 43, name: '03 强化练习题（国考版）下册', isLink: true, pdfId: '1' },
                        { id: 44, name: '04行测极致真题题本（国考卷）', isLink: true, pdfId: '1' },
                        { id: 45, name: '05行测极致真题解析（国考卷）', isLink: true, pdfId: '1' },
                        { id: 46, name: '06申论极致真题题本（国考卷）', isLink: true, pdfId: '1' },
                        { id: 47, name: '07申论极致真题解析（国考卷）', isLink: true, pdfId: '1' },
                    ],
                }];
            },
            // 跳转到pdf
            toPdf(id){
                let self = this;
                let routeUrl = self.$router.resolve({
                    name: 'pdf',
                    query: {id : id}
                });
                window.open(routeUrl.href, '_blank');
                // html 取参  $route.query.id
                // script 取参  this.$route.query.id

                // vue路由跳转有四种方式
                // 1. router-link
                // 2. this.$router.push() (函数里面调用)
                // 3. this.$router.replace() (用法同push)
                // 4. this.$router.go(n)
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .gongwuyuan-wrap{
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