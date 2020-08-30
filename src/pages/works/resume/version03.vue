<template>
    <div class="version_03_wrap">
            <div class="modal_wrap basic_info">
                <h1 class="t_a_c">XXX &nbsp;&nbsp; Web前端开发工程师</h1>
                <table class="basic_info_t">
                    <tbody>
                        <tr> <td class="t_a_r">YYYY年MM月</td> <td class="t_a_l">66666666666</td> </tr>
                        <tr> <td class="t_a_r">籍贯：XX</td> <td class="t_a_l"></td> </tr>
                        <tr> <td class="t_a_r">现居：XX</td> <td class="t_a_l"></td> </tr>
                        <tr> <td class="t_a_r">学历：本科</td> <td class="t_a_l">88888888@163.com</td> </tr>
                    </tbody>
                </table>
                <div class="t_a_c img_wrap">头像</div>
            </div>
            <el-divider content-position="left">教育背景</el-divider>
            <div class="modal_wrap education_wrap">
                <table>
                    <tbody>
                        <tr>
                            <td class="t-a-r" width="300">
                                <!-- <img src="https://pt.tjpu.edu.cn/zfca/login/logo/logo_school.png" alt="天津工业大学"> -->
                            </td>
                            <td>
                                <h3>YYYY-MM 至 YYYY-MM  XXXXXX大学</h3>
                                <p>学院：XXXXXX学院</p>
                                <p>专业：XXXXXXXX</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <el-divider content-position="left">专业技能</el-divider>
            <div class="modal_wrap skill_wrap">
                <div class="border_radius">
                    <dl>
                        <dt><label class="name">【基础技能】</label></dt>
                        <dd>HTML(5)、CSS(3)、LESS、JavaScript、Ajax</dd>
                        <dt><label class="name">【使用过的框架】</label></dt>
                        <dd>jQuery + Bootstrap、jQuery + Jalor、VUE + Element UI</dd>
                        <dt><label class="name">【使用过的插件】</label></dt>
                        <dd>Bootstrap、jQuery-easyUI、Echarts、百度地图、Element UI</dd>
                        <dt><label class="name">【了解】</label></dt>
                        <dd>ES6、React、AngularJS、gulp、webpack、Photoshop、yarn、npm</dd>
                    </dl>
                </div>
                
            </div>
            <el-divider content-position="left">工作经历</el-divider>
            <div class="modal_wrap work_wrap">
                <el-timeline>
                    <el-timeline-item
                      v-for="(item, i) in workExperienceData"
                      :key="i"
                      :icon="item.icon"
                      :type="item.type"
                      :color="item.color"
                      :size="item.size"
                      :timestamp="item.time">
                      {{ item.company + '&nbsp;&nbsp;' + item.post }}
                    </el-timeline-item>
                </el-timeline>
            </div>
            <div>
                <br/><br/>
            </div>
            
            <el-divider content-position="left">项目经验</el-divider>
            <div class="modal_wrap project_wrap">
                <el-timeline>
                    <el-timeline-item
                        v-for="(item, i) in projectData"
                        :key="i"
                        :icon="item.icon"
                        :type="item.type"
                        :color="item.color"
                        :size="item.size"
                        :timestamp="item.time">
                        <h3 v-text="item.name"></h3>
                        <dl>
                            <dt>系统描述：</dt>
                            <dd v-html="item.discript"></dd>
                            <dt>工作内容/收获：</dt>
                            <dd v-html="item.workContent"></dd>
                        </dl>
                    </el-timeline-item>
                </el-timeline>
            </div>
            <el-divider content-position="left">自我评价</el-divider>
            <div class="modal_wrap self_evaluation_wrap">
                <ol>
                    <li>适应能力较强，自制力较好，执行力强。</li>
                    <li>性格开朗、自信热情、好学、有责任心、能吃苦耐劳、富有时间观念、有团队合作精神和集体荣誉感。</li>
                    <li>优点：执行力强、工作认真、善于团队合作、好学、乐于助人、爱干净。</li>
                    <li>缺点：急性子，谁还没个缺点呢~</li>
                </ol>
            </div>
    </div>
</template>

<script>
    export default {
        components: {  },
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
                /*
                self.workExperienceData = [
                    {time: '2018-10 至今', company: '上海易宝软件有限公司深圳分公司', post: 'Web 前端开发工程师', size: 'large', color: '#4285F4'},
                    {time: '2017-10 至 2018-09', company: '深圳市零壹金数据科技有限公司', post: 'Web 前端开发工程师', color: '#FBBC05'},
                    // {time: '2018-03 至 2018-09', company: '深圳市零壹金数据科技有限公司', post: 'Web 前端开发工程师', color: '#EA4335'},
                    // {time: '2017-10 至 2018-02', company: '深圳市更元科技有限公司', post: 'Web 前端开发工程师', color: '#FBBC05'},
                    {time: '2015-12 至 2017-09', company: '天津天地伟业科技有限公司', post: 'Web 前端开发工程师', color: '#34A853'},
                ];
                */
                self.workExperienceData = [
                    {time: 'YYYY-MM 至今', company: 'AAAAAAAAAAAA公司', post: 'Web 前端开发工程师', size: 'large', color: '#4285F4'},
                    {time: 'YYYY-MM 至 YYYY-MM', company: 'BBBBBBBBBBBBB科技有限公司', post: 'Web 前端开发工程师', color: '#FBBC05'},
                    {time: 'YYYY-MM 至 YYYY-MM', company: 'CCCCCCCCCC科技有限公司', post: 'Web 前端开发工程师', color: '#34A853'},
                ];
            },
            getProjectData(){
                let self = this;
                self.projectData = [
                    {time: '2020-05 至今', name: '文档结构化', post: 'web 前端开发', discript: '该系统主要实现功能是在线写作，使得文档结构化，可实现多人同时共同编辑同一篇文档。编写完毕后可进行发布供他人在线预览，并作者或管理员可进行后期维护。', workContent: '（1）输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，进行功能开发（web前端）；并进行 Code Review。<br/>（2）该项目的前端使用 <b>Vue</b> 进行开发的微服务，实现前后台分离。使用 <b>Element UI</b> 为基础组件', size: 'large', color: '#4285F4'},
                    // {time: '2019-02 至今', name: 'DFX系统平台（工作空间服务）', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4'},
                    // {time: '2019-02 至今', name: 'DFX系统平台（项目服务）', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4'},
                    // {time: '2019-02 至今', name: 'DFX系统平台（组件服务）', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4'},
                    // {time: '2019-07 至今', name: '多样性管理服务平台', post: 'web 前端开发', discript: '主要是管理各产品信息实时查查看各产品的状态轨迹图，通过自动和手动同步 SBOM、EBOM，实时查看 SBOM、EBOM 对应编码的发货量信息。', workContent: '参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发。', size: 'large', color: '#4285F4'},
                    // {time: '2019-07 至 2019-08', name: '产品配置', post: 'web 前端开发', discript: '基于产品、编码、同步 PDM 物料信息进行配置整合。对已有逻辑规则提交评审，启动评审流程，有专家和主审人进行评审，给出评审意见。', workContent: '参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发。', size: 'large', color: '#4285F4'},
                    {time: '2018-10 至今', name: '华为公司内部技术标准规范库', post: 'web 前端开发', discript: '规范华为公司内部技术标准规范的管理，指导内部规范的需求、规划、制定、发布、实施、维护等全生命周期活动，形成内部规范端到端的闭环管理机制。', workContent: '（1）参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发。<br/>（2）该项目的前端以华为的 <b>Jalor</b> 框架为基础搭建，Jalor 框架是以 <b>jQuery</b> 框架为基础的。', size: 'large', color: '#4285F4'},
                    // {time: '2018-10 至 2019-07', name: 'DigiSMART 设计平台', post: 'web 前端开发', discript: '建立公司级统一的 DFSC 设计平台（WEB 界面），清晰定义各项可供应性设计活动的输入输出及其关联数据库，支持 step by step 的设计，通过 DFSC 设计平台，实现跨产品线知识共享，指导产品设计人员 step by step 进行可供应性设计，提升设计人员工作效率，实现产品可供应性能力的提升。', workContent: '参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发，并对整个平台进行 UI 整改。', size: 'large', color: '#4285F4'},
                    // {time: '2018-06 至 2018-09', name: '国际数字资产交易中心后台', post: 'web 前端开发', discript: '该系统实现基本的运营管理、数据统计、交易查询等功能', workContent: '该系统参与度较低，主要是帮助修改添加一些内容。另外单独做了发行方的移动端页面，和大 BOSS 专用系统', size: 'large', color: '#4285F4'},
                    // {time: '2018-03 至 2018-05', name: '国际区块链 IBC', post: 'web 前端开发', discript: 'IBC 是基于稳定价值货币美元（USD）的数字货币，1IBC=1 美元，用户可以随时使用 IBC 与美元进行 1:1 兑换。国际区块链严格遵守 1:1 准备金保证，即每发行1 个 IBC，其银行账户都会有 1 美元的资金 保障。用户可以在 IBC 平台进行资金查询，以保障透明度。', workContent: '：负责编写前端页面代码及前后台数据交互。主要用到 mui、jquery.localize、artTemplate、bootstrap、clipboard 等插件。该项目适应 PC 端和移动端，第一次使用模板（template），第一次实现多语言切换。', size: 'large', color: '#4285F4'},
                    // {time: '2017-10 至 2018-01', name: '朗威物流系统', post: 'web 前端开发', discript: '这是一个货运代理平台，该系统功能主要是实现用户在该平台上下单，可以减少传统手写订单中的失误，用户还可以在该平台上实时查询运费了解该公司及行业动态等。', workContent: '设计并开发系统的页面，及前后端联调。', size: 'large', color: '#4285F4'},
                    {time: '2017-11 至 2017-12', name: 'LED 灯产品官网', post: 'web 前端开发', discript: '该系统的主要功能是实现公司产品的展示，用户可以在这里查看该公司的所有产品信息及报价，还可以给公司留言、下载产品的相关说明书及相关软件。', workContent: '首次接触 <b>UI</b> 设计工作', size: 'large', color: '#FBBC05'},
                    {time: '2016-10 至 2017-09', name: '功夫中国门户网站', post: 'web 前端开发', discript: '该平台由三部分组成，即：后台管理系统、PC 端门户网站和手机 APP，其中手机 APP 又包括 android 版和 IOS 版本。该系统是集新闻资讯、赛事直播、直播室聊天、送礼物、发弹幕、视频回放、现场门票购买、特卫预约、学员招募、赛事定制、会员充值、赛事竞猜、词条编写等为一体的门户网站。', workContent: '（1）该项目的前端以 <b>jQuery</b>、<b>Boostrap</b> 为基础进行开发的。<br/>（2）在该项目中我提高了自己的代码可读性，学会了使用<b>百度地图</b>插件，用前端代码实现各种效果，学习到了一些规范。', size: 'large', color: '#34A853'},
                    {time: '2015-12 至 2016-07', name: '株洲市城市建设管理及公共信息平台', post: 'web 前端开发', discript: '该项目包括以下几个系统：<br/>（1）节能减排评价与推广平台<br/>（2）节能减排评价与推广平台后台管理系统<br/>（3）建筑工程安监应用平台<br/>（4）燃气信息系统<br/>（5）污水处理信息系统<br/>（6）自来水信息系统<br/>（7）垃圾处理信息系统<br/>（8）平台后台管理系统', workContent: '（1）责平台展示页面和后台管理系统页面开发部分实现一些简单的动态效果，并实现前后台数据交互。<br/>（2）主要用到 <b>easyUI</b>、<b>eCharts</b>、<b>bootstrap</b> 等插件。在该项目的开发中我了解到了什么是插件，学会了使用 easyUI、eCharts 等插件、学会了看 API 文档，更重要的是学会了如何团队合作。', size: 'large', color: '#34A853'},
                ];
            },
        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.version_03_wrap{
    padding: 20px;
    width: 793px; background-color: #fff; padding: 20px; margin: auto;
    .modal_wrap{ padding: 10px 20px; }
    .modal_title{ font-size: 26px; font-weight: bold; color: #166086; }
    .basic_info{
        position: relative;
        h1{ font-size: 36px; margin: 0px auto 30px; }
        .basic_info_t{ margin-left: 50px; width: 400px; color: #166086; }
        td{ padding: 3px 10px; font-size: 20px; }
        td.t_a_r{ border-right: 1px solid #166086; }
        .img_wrap{ position: absolute; width: 100px; height: 140px; line-height:138px; color: #ffd4d4; border:1px solid #ffd4d4; top: 85px; right: 110px;}
    }
    .el-divider--horizontal{ margin: 50px 0 24px; }
    .el-divider__text.is-left{ font-size: 20px; font-weight: 600; color: #166086; }
    .education_wrap{
        table{ width: 100%; }
        td{ padding: 10px;}
    }
    .skill_wrap{
        dt{ padding-bottom: 10px; }
        dd{ padding-bottom: 10px; }
        .name{
            display: inline-block;
            padding: 2px 8px;
            margin: 3px 10px;
            font-size: 16px;
            text-decoration: none;
            color: #333;
            font-weight: 600;
        }
    }
    .work_wrap{}
    .project_wrap{}
    .self_evaluation_wrap{}
    .border_radius{
        border: 1px solid #999; border-radius: 10px; padding: 10px; margin: 5px 0;
        p{ padding: 3px 0; }
    }
}
</style>
