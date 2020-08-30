<template>
    <div class="resume_wrap">
        <version03 />
    </div>
</template>

<script>
    import version01 from './version01.vue';
    import version02 from './version02.vue';
    import version03 from './version03.vue';
    export default {
        components: { version01, version02, version03 },
        data(){
            return {
                isShowList: true,
                active: '',
                workExperienceData: [],
                projectData: [],
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
                self.getWorkData();
                self.getProjectData();
            },
            getWorkData(){
                let self = this;
                self.workExperienceData = [
                    {time: '2018-10 至今', company: '上海易宝软件有限公司深圳分公司', post: 'Web 前端开发工程师', size: 'large', color: '#4285F4'},
                    {time: '2018-03 至 2018-09', company: '深圳市零壹金数据科技有限公司', post: 'Web 前端开发工程师', color: '#EA4335'},
                    {time: '2017-10 至 2018-02', company: '深圳市更元科技有限公司', post: 'Web 前端开发工程师', color: '#FBBC05'},
                    {time: '2015-12 至 2017-09', company: '天津天地伟业科技有限公司', post: 'Web 前端开发工程师', color: '#34A853'},
                ];
            },
            getProjectData(){
                let self = this;
                self.projectData = [
                    {time: '2020-05 至今', name: '文档结构化', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4'},
                    {time: '2019-02 至今', name: 'DFX系统平台（工作空间服务）', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4'},
                    {time: '2019-02 至今', name: 'DFX系统平台（项目服务）', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4'},
                    {time: '2019-02 至今', name: 'DFX系统平台（组件服务）', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4'},
                    {time: '2019-07 至今', name: '多样性管理服务平台', post: 'web 前端开发', discript: '主要是管理各产品信息实时查查看各产品的状态轨迹图，通过自动和手动同步 SBOM、EBOM，实时查看 SBOM、EBOM 对应编码的发货量信息。', workContent: '参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发。', size: 'large', color: '#4285F4'},
                    {time: '2019-07 至 2019-08', name: '产品配置', post: 'web 前端开发', discript: '基于产品、编码、同步 PDM 物料信息进行配置整合。对已有逻辑规则提交评审，启动评审流程，有专家和主审人进行评审，给出评审意见。', workContent: '参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发。', size: 'large', color: '#4285F4'},
                    {time: '2018-10 至今', name: '华为公司内部技术标准规范库', post: 'web 前端开发', discript: '规范华为公司内部技术标准规范的管理，指导内部规范的需求、规划、制定、发布、实施、维护等全生命周期活动，形成内部规范端到端的闭环管理机制。 担任角色：web 前端开发', workContent: '参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发；学习到了 Jalor5 框架。', size: 'large', color: '#4285F4'},
                    {time: '2018-10 至 2019-07', name: 'DigiSMART 设计平台', post: 'web 前端开发', discript: '建立公司级统一的 DFSC 设计平台（WEB 界面），清晰定义各项可供应性设计活动的输入输出及其关联数据库，支持 step by step 的设计，通过 DFSC 设计平台，实现跨产品线知识共享，指导产品设计人员 step by step 进行可供应性设计，提升设计人员工作效率，实现产品可供应性能力的提升。', workContent: '：参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发，并对整个平台进行 UI 整改。', size: 'large', color: '#4285F4'},
                    {time: '2018-06 至 2018-09', name: '国际数字资产交易中心后台', post: 'web 前端开发', discript: '该系统实现基本的运营管理、数据统计、交易查询等功能', workContent: '该系统参与度较低，主要是帮助修改添加一些内容。另外单独做了发行方的移动端页面，和大 BOSS 专用系统', size: 'large', color: '#4285F4'},
                    {time: '2018-03 至 2018-05', name: '国际区块链 IBC（https://bak.ibcasset.io/）', post: 'web 前端开发', discript: 'IBC 是基于稳定价值货币美元（USD）的数字货币，1IBC=1 美元，用户可以随时使用 IBC 与美元进行 1:1 兑换。国际区块链严格遵守 1:1 准备金保证，即每发行1 个 IBC，其银行账户都会有 1 美元的资金 保障。用户可以在 IBC 平台进行资金查询，以保障透明度。', workContent: '：负责编写前端页面代码及前后台数据交互。主要用到 mui、jquery.localize、artTemplate、bootstrap、clipboard 等插件。该项目适应 PC 端和移动端，第一次使用模板（template），第一次实现多语言切换。', size: 'large', color: '#4285F4'},
                    {time: '2017-10 至 2018-01', name: '朗威物流系统（http://www.lonways.com）', post: 'web 前端开发', discript: '这是一个货运代理平台，该系统功能主要是实现用户在该平台上下单，可以减少传统手写订单中的失误，用户还可以在该平台上实时查询运费了解该公司及行业动态等。', workContent: '设计并开发系统的页面，及前后端联调。', size: 'large', color: '#4285F4'},
                    {time: '2017-11 至 2017-12', name: 'LED 灯产品官网（http://wixure.com）', post: 'web 前端开发', discript: '该系统的主要功能是实现公司产品的展示，用户可以在这里查看该公司的所有产品信息及报价，还可以给公司留言、下载产品的相关说明书及相关软件。', workContent: '首次接触 UI 设计工作', size: 'large', color: '#4285F4'},
                    {time: '2016-10 至 2017-09', name: '功夫中国门户网站（http://www.chinakung.com/）', post: 'web 前端开发', discript: '该平台由三部分组成，即：后台管理系统、PC 端门户网站和手机 APP，其中手机 APP 又包括 android 版和 IOS 版本。该系统是集新闻资讯、赛事直播、直播室聊天、送礼物、发弹幕、视频回放、现场门票购买、特卫预约、学员招募、赛事定制、会员充值、赛事竞猜、词条编写等为一体的门户网站。', workContent: '工作内容/收获：在该项目中我提高了自己的代码可读性，学会了使用百度地图插件，用前端代码实现各种效果，学习到了一些规范。', size: 'large', color: '#4285F4'},
                    {time: '2015-12 至 2016-07', name: '株洲市城市建设管理及公共信息平台', post: 'web 前端开发', discript: '该项目包括以下几个系统：<br/>（1）节能减排评价与推广平台<br/>（2）节能减排评价与推广平台后台管理系统<br/>（3）建筑工程安监应用平台<br/>（4）燃气信息系统<br/>（5）污水处理信息系统<br/>（6）自来水信息系统<br/>（7）垃圾处理信息系统<br/>（8）平台后台管理系统', workContent: '负责平台展示页面和后台管理系统页面开发部分实现一些简单的动态效果，并实现前后台数据交互。主要用到 easyUI、eCharts、bootstrap 等插件。在该项目的开发中我了解到了什么是插件，学会了使用 easyUI、eCharts 等插件、学会了看 API 文档，更重要的是学会了如何团队合作。', size: 'large', color: '#4285F4'},
                ];
            },
        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.resume_wrap{
    padding: 20px;
    .wrap{
        width: 793px; background-color: #fff; padding: 20px; margin: auto;
        .modal_wrap{ margin: 20px; }
        .modal_title{ font-size: 26px; font-weight: bold; color: #166086; }
    }
    .basic_info{
        position: relative;
        h1{ font-size: 36px; }
        .basic_info_t{ margin-left: 50px; width: 400px; color: #166086; }
        td{ padding: 3px 10px; font-size: 20px; }
        td.t_a_r{ border-right: 1px solid #166086; }
        .img_wrap{ position: absolute; width: 100px; height: 140px; background-color: #ffd4d4; top: 75px; right: 90px;}
    }
    .education_wrap{
        table{ width: 100%; }
        td{ padding: 10px;}
    }
    .skill_wrap{
        .skill{
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
    }
    .work_wrap{}
    .project_wrap{}
    .self_evaluation_wrap{}
}
.el-main{ overflow: visible; }
</style>
