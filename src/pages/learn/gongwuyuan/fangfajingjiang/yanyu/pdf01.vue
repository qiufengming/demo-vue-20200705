<template>
    <div class="pdf-wrap">
        <div class="pdf-cover">
            <h1 class="text-c pdf-t"><span>第一篇  言语理解与表达</span></h1>
        </div>
        
        <div class="chapter-wrap">
            <h2 class="text-c chapter-t"><span>第一章 | 片段阅读</span></h2>
            <div class="border-radius">
                <p>解题顺序：</p>
                <p>提问—文段—选项</p>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t" @click="sectionOpenClose('c1s1')">第一节  中心理解题 </h3>
                <div class="section-c" v-show="sectionOpen.c1s1">
                    <dl class="outline">
                        <dt>【提问方式】</dt>
                        <dd>这段文字主要 / 旨在 / 重在 / 意在 / 想要说明（论述、强调）的是……</dd>
                        <dd>这段文字的主旨 / 主题 / 观点是……</dd>
                        <dd>对这段文字概括最恰当的一项是……</dd>
                        <dd>……</dd>
                    </dl>
                    <div class="border-radius">
                        <p>1. 重点词语</p>
                        <p>2. 行文脉络</p>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、重点词语之关联词</h4>
                        <div class="modal-c">
                            <dl class="knowledge">
                                <dt>（一）转折关系</dt>
                                <dd>典型标志词：</dd>
                                <dd>虽然……但是……</dd>
                                <dd>尽管……可是……</dd>
                                <dd>…………不过……</dd>
                                <dd>…然而……</dd>
                                <dd>…却…… </dd>
                                <dd>其实 / 事实上 / 实际上</dd>
                                <dd>……</dd>
                            </dl>
                            <div class="border-radius">
                                <p>理论要点：</p>
                                <p>转折之后是重点</p>
                            </div>
                            <div class="border-radius">
                                <p>粉笔提示：</p>
                                <p>错误选项特征：</p>
                                <p>1. 转折前的内容</p>
                                <p>2. 围绕例子的表述</p>
                                <p>3. 围绕原因的表述</p>
                                <p>4. 无中生有</p>
                                <p>略读句子特征：例子、原因……</p>
                            </div>
                            <el-card class="summary">
                                <div slot="header" class="clearfix">
                                    <span>转折关系（转折之后是重点）</span>
                                </div>
                                <el-tree :data="summary.d1" :props="defaultProps" default-expand-all></el-tree>
                            </el-card>
                            <div class="border-radius">
                                <p>重点词语之主题词：</p>
                                <p>1. 文段围绕其展开</p>
                                <p>2. 一般高频出现</p>
                                <p>3. 多为名词</p>
                                <p>4. 前有引入或后有解释说明</p>
                            </div>
                            <el-card class="summary">
                                <div slot="header" class="clearfix">
                                    <span>主题词</span>
                                </div>
                                <el-tree :data="summary.d2" :props="defaultProps" default-expand-all></el-tree>
                            </el-card>
                            <dl class="knowledge">
                                <dt>（二）因果关系</dt>
                                <dd>典型标志词：</dd>
                                <dd>因为……所以……</dd>
                                <dd>由于……因此……</dd>
                            </dl>
                            <div class="border-radius">
                                <p>理论要点：结论是重点</p>
                                <p>引导结论的标志词：</p>
                                <p>1. 所以、因此、因而、故而、于是、可见、看来（为什么、为何）</p>
                                <p>2. 导致、致使、使得、造成</p>
                            </div>
                            <div class="border-radius">
                                <p>知识链接：</p>
                                <p>结论句出现在文段开头 / 中间，之后仍有其他语句</p>
                                <p>1. 之后的语句是进一步解释说明，此时中心句仍为结论句</p>
                                <p>2. 之后又出现并列、因果、转折、对策等，需结合多种关联词共同分析</p>
                            </div>
                            <el-card class="summary">
                                <div slot="header" class="clearfix">
                                    <span>因果关系（结论是重点）</span>
                                </div>
                                <el-tree :data="summary.d3" :props="defaultProps" default-expand-all></el-tree>
                            </el-card>
                            <dl class="knowledge">
                                <dt>（三）必要条件关系</dt>
                                <dd>典型格式：只有……才……</dd>
                            </dl>
                            <div class="border-radius">
                                <p>理论要点：</p>
                                <p>必要条件是重点</p>
                                <p>必要条件即“只有”和“才”之间的部分</p>
                            </div>
                            <div class="border-radius">
                                <p>知识链接：对策常考，很重要</p>
                                <p></p>
                                <p>对策标志词：</p>
                                <p>1. 应该、应当、必须、需要、亟（jí）须、亟待 + 做法</p>
                                <p>2. 通过 / 采取……手段 / 途径 / 措施 / 方式 / 方法 / 渠道，才能……</p>
                                <p>3. 呼吁、倡导、提倡、提醒、建议 + 做法</p>
                                <p>4. 前提、基础、保障 、关键</p>
                                <p></p>
                                <p>行文脉络：</p>
                                <p>1. 提出问题 + 分析问题 + 解决问题</p>
                                <p>2. 提出问题 + 解决问题 + 解释说明（意义效果）</p>
                                <p>3. 对策 + 正反论证 / 原因论证</p>
                            </div>
                            <div class="border-radius">
                                <p>知识链接：反面论证</p>
                                <p>典型格式：如果 / 倘若 / 一旦……+ 不好的结果</p>
                                <p>具体应用：把前面的做法反过来，即为正确答案</p>
                            </div>
                            <div class="border-radius">
                                <p>知识链接：</p>
                                <p>当文段中只有“提出问题 + 分析问题”的部分时，“解决问题”通常会作为正确答案出现在选项里</p>
                            </div>
                            <el-card class="summary">
                                <div slot="header" class="clearfix">
                                    <span>必要条件关系（“只有...才”中间是重点）</span>
                                </div>
                                <el-tree :data="summary.d4" :props="defaultProps" default-expand-all></el-tree>
                            </el-card>
                            <div class="border-radius">
                                <p>重点词语之程度词 :</p>
                                <p>标志词：更、尤其、正是、特别是、真正、根本、最（核心、突出）等</p>
                                <p>理论要点：程度词所在的语句通常为重点</p>
                            </div>
                            <el-card class="summary">
                                <div slot="header" class="clearfix">
                                    <span>程度词</span>
                                </div>
                                <el-tree :data="summary.d5" :props="defaultProps" default-expand-all></el-tree>
                            </el-card>
                            <dl class="knowledge">
                                <dt>（四）并列关系</dt>
                            </dl>
                            <div class="border-radius">
                                <p>理论要点：概括全面完整</p>
                                <p></p>
                                <p>文段特征：</p>
                                <p>1. 包含并列关联词及标点，如此外、另外、同时、以及、“ ；”</p>
                                <p>2. 句式相同或相近</p>
                                <p>3. 无明显其他关联词语</p>
                                <p></p>
                                <p>选项特征：</p>
                                <p>1. 两方面情况：和、及、与、同</p>
                                <p>2. 更多种情况：许多、一些、不同、各种、一系列</p>
                            </div>
                            <el-card class="summary">
                                <div slot="header" class="clearfix">
                                    <span>并列关系（概括全面完整）</span>
                                </div>
                                <el-tree :data="summary.d6" :props="defaultProps" default-expand-all></el-tree>
                            </el-card>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、行文脉络</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>理论要点：把握中心句及分述句的特征</p>
                                <p></p>
                                <p>中心句特征：</p>
                                <p>观点（对策、结论、评价）</p>
                                <p></p>
                                <p>分述句特征：</p>
                                <p>1. 举例子：“比如”“例如”“……就是例证”等</p>
                                <p>2. 调查报告、数据资料等</p>
                                <p>3. 正反论证</p>
                                <p>4. 原因解释</p>
                                <p>5. 并列分述</p>
                            </div>
                            <div class="border-radius">
                                <p>知识链接：总—分（观点 + 解释说明）</p>
                                <p></p>
                                <p>中心句后为不同类型的解释说明</p>
                            </div>
                            <div class="border-radius">
                                <p>知识链接：分—总</p>
                                <p></p>
                                <p>1. 结论、对策</p>
                                <p>2. 代词（“这”“此”）引导的尾句需关注</p>
                            </div>
                            <el-card class="summary">
                                <div slot="header" class="clearfix">
                                    <span>行文脉络</span>
                                </div>
                                <el-tree :data="summary.d7" :props="defaultProps" default-expand-all></el-tree>
                            </el-card>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t" @click="sectionOpenClose('c1s2')">第二节  细节判断题</h3>
                <div class="section-c" v-show="sectionOpen.c1s2"> 
                    <dl class="outline">
                        <dt>【提问方式】</dt>
                        <dd>以下对文段理解正确 / 不正确的是……</dd>
                        <dd>符合 / 不符合这段话意思的是……</dd>
                        <dd>从文段中可以得知 / 推出的是……</dd>
                        <dd>……</dd>
                    </dl>
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、典型细节题</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>错误选项类型：</p>
                                <p></p>
                                <p>1. 无中生有</p>
                                <p>2. 偷换概念（替换、混搭）</p>
                                <p>3. 偷换时态</p>
                                <p> - 将来时（将要、立刻、趋势、以后）</p>
                                <p> - 完成时（已、已经、了、完成）</p>
                                <p> - 进行时（正在、在……中、着）</p>
                                <p>4. 偷换逻辑</p>
                            </div>
                            <div class="border-radius">
                                <p>快速解题技巧：</p>
                                <p></p>
                                <p>1. 对比项</p>
                                <p>标志词：A 比 B 更……</p>
                                <p> - A 高于 / 优于 B</p>
                                <p> - 利大于弊</p>
                                <p> - ……</p>
                                <p>2. 相对绝对项</p>
                                <p> - 绝对表述：一定、必定、都……</p>
                                <p> - 相对表述：可能、也许、往往……</p>
                                <p>3. 表述与实际不符项</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、细节主旨化</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>理论要点：</p>
                                <p></p>
                                <p>优选契合主旨的选项</p>
                            </div>
                        </div>
                    </div>
                    <el-card class="summary">
                        <div slot="header" class="clearfix">
                            <span>细节判断题</span>
                        </div>
                        <el-tree :data="summary.d8" :props="defaultProps" default-expand-all></el-tree>
                    </el-card>
                </div>
                
            </div>
        </div>
        <div class="chapter-wrap">
            <h2 class="text-c chapter-t"><span>第二章 | 语言表达</span></h2>
            <div class="section-wrap">
                <h3 class="text-c section-t" @click="sectionOpenClose('c2s1')">第一节  语句排序题 </h3>
                <div class="section-c" v-show="sectionOpen.c2s1">
                    <dl class="outline">
                        <dt>【提问方式】</dt>
                        <dd>将以上 / 以下几个句子重新排列，语序正确的是……</dd>
                    </dl>
                    <div class="border-radius">
                        <p>理论要点：</p>
                        <p></p>
                        <p>1. 根据选项提示，对比后确定首句</p>
                        <p>2. 确定捆绑集团 / 确定顺序 / 确定尾句</p>
                        <p>3. 验证（只验证你基本锁定的答案，而非全部验证）</p>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、确定首句</h4>
                        <div class="modal-c">
                            <dl class="knowledge">
                                <dt>（一）下定义（……就是 / 是指）</dt>
                            </dl>
                            <dl class="knowledge">
                                <dt>（二）背景引入（随着、近年来、在……大背景 / 环境下）</dt>
                            </dl>
                            <dl class="knowledge">
                                <dt>（三）非首句特征（指代词、关联词后半部分）</dt>
                            </dl>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、确定捆绑集团</h4>
                        <div class="modal-c">
                            <dl class="knowledge">
                                <dt>（一）指代词捆绑</dt>
                            </dl>
                            <dl class="knowledge">
                                <dt>（二）关联词捆绑</dt>
                            </dl>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">三、确定顺序</h4>
                        <div class="modal-c">
                            <dl class="knowledge">
                                <dt>（一）时间顺序</dt>
                            </dl>
                            <dl class="knowledge">
                                <dt>（二）逻辑顺序</dt>
                            </dl>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">四、确定尾句（因此、所以、看来、于是、这、应该、需要）</h4>
                    </div>
                    <el-card class="summary">
                        <div slot="header" class="clearfix">
                            <span>语句排序题</span>
                        </div>
                        <el-tree :data="summary.d9" :props="defaultProps" default-expand-all></el-tree>
                    </el-card>
                </div>
                
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t" @click="sectionOpenClose('c2s2')">第二节  语句填空题</h3>
                <div class="section-c" v-show="sectionOpen.c2s2">
                    <dl class="outline">
                        <dt>【提问方式】</dt>
                        <dd>填入画横线部分最恰当的一句 / 项是……</dd>
                    </dl>
                    <div class="border-radius">
                        <p>理论要点：</p>
                        <p></p>
                        <p>横线在结尾：</p>
                        <p>1. 总结前文</p>
                        <p>2. 提出对策</p>
                    </div>
                    <div class="border-radius">
                        <p>理论要点：</p>
                        <p></p>
                        <p>横线在开头：</p>
                        <p>需概括文段的中心内容</p>
                    </div>
                    <div class="border-radius">
                        <p>理论要点：</p>
                        <p></p>
                        <p>横线在中间：</p>
                        <p>1. 注意与上下文的联系</p>
                        <p>2. 把握好主题词，保证与文段话题一致</p>
                    </div>
                    <el-card class="summary">
                        <div slot="header" class="clearfix">
                            <span>语句填空题</span>
                        </div>
                        <el-tree :data="summary.d10" :props="defaultProps" default-expand-all></el-tree>
                    </el-card>
                </div>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t" @click="sectionOpenClose('c2s3')">第三节  接语选择题</h3>
                <div class="section-c" v-show="sectionOpen.c2s3">
                    <dl class="outline">
                        <dt>【提问方式】</dt>
                        <dd>作者接下来最有可能讲述的是……</dd>
                    </dl>
                    <div class="border-radius">
                        <p>理论要点：重点关注文段最后一句话</p>
                        <p></p>
                        <p>干扰项特征：文段中已经论述过的内容</p>
                    </div>
                    <el-card class="summary">
                        <div slot="header" class="clearfix">
                            <span>接语选择题</span>
                        </div>
                        <el-tree :data="summary.d11" :props="defaultProps" default-expand-all></el-tree>
                    </el-card>
                </div>
            </div>
        </div>

        <div class="chapter-wrap">
            <h2 class="text-c chapter-t"><span>第三章 | 逻辑填空</span></h2>
            <div class="section-wrap">
                <h3 class="text-c section-t" @click="sectionOpenClose('c3s1')">第一节  词的辨析</h3>
                <div class="section-c" v-show="sectionOpen.c3s1">
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、词义侧重</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>辨析方法：</p>
                                <p></p>
                                <p>1. 用不一样的字组词</p>
                                <p>2. 整体进行搭配组词</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、固定搭配</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>理论要点：</p>
                                <p></p>
                                <p>找准搭配对象（常用词、热点词）</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">三、程度轻重</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>理论要点：</p>
                                <p></p>
                                <p>所填词语的程度轻重与文段意思的轻重保持一致</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">四、感情色彩</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>理论要点：</p>
                                <p></p>
                                <p>1. 褒义、贬义、中性</p>
                                <p>2. 所填词语的感情色彩与文段的感情色彩保持一致</p>
                            </div>
                        </div>
                    </div>
                    <el-card class="summary">
                        <div slot="header" class="clearfix">
                            <span>词的辨析</span>
                        </div>
                        <el-tree :data="summary.d12" :props="defaultProps" default-expand-all></el-tree>
                    </el-card>
                </div>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t" @click="sectionOpenClose('c3s2')">第二节  语境分析</h3>
                <div class="section-c" v-show="sectionOpen.c3s2">
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、关联关系</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>转折</p>
                                <p></p>
                                <p>理论要点：前后语义相反</p>
                            </div>
                            <div class="border-radius">
                                <p>递进</p>
                                <p></p>
                                <p>理论要点：语义程度前轻后重</p>
                            </div>
                            <div class="border-radius">
                                <p>并列</p>
                                <p></p>
                                <p>理论要点：</p>
                                <p>1. 同义并列：顿号（、）、逗号（，）</p>
                                <p>2. 反义并列：不是……而是……、是……不是……、相反、反之等</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、对应关系</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>解释类对应</p>
                                <p></p>
                                <p>题干特点：分句，______，分句</p>
                                <p>标志词：即、就是、可以说、可谓、无异于、比如、例如等</p>
                                <p>标点：冒号（ ：）、破折号（——）</p>
                            </div>
                            <div class="border-radius">
                                <p>重点词句对应</p>
                                <p></p>
                                <p>1. 重点词：指代词 / 主题词 / 形象表达</p>
                                <p>2. 重点句：完整语句</p>
                            </div>
                            <div class="border-radius">
                                <p>提示：</p>
                                <p></p>
                                <p>文段中的完整语句可作为解题的提示</p>
                            </div>
                        </div>
                    </div>
                    <el-card class="summary">
                        <div slot="header" class="clearfix">
                            <span>语境分析</span>
                        </div>
                        <el-tree :data="summary.d13" :props="defaultProps" default-expand-all></el-tree>
                    </el-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                mymsg: '这是第二个页面哦~',
                summary: {
                    d1: [],
                    d2: [],
                    d3: [],
                    d4: [],
                    d5: [],
                    d6: [],
                    d7: [],
                    d8: [],
                    d9: [],
                    d10: [],
                    d11: [],
                    d12: [],
                    d13: [],
                    d14: [],
                },
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                sectionOpen:{},
            };
        },
        created(){
            this.initData();
        },
        mounted(){},
        methods: {
            sectionOpenClose(sectionNum){
                let self = this;
                self.$set(self.sectionOpen, sectionNum, !self.sectionOpen[sectionNum]);
            },
            // 初始化数据
            initData(){
                let self = this;
                self.getSummary1();
                self.getSummary2();
                self.getSummary3();
                self.getSummary4();
                self.getSummary5();
                self.getSummary6();
                self.getSummary7();
                self.getSummary8();
                self.getSummary9();
                self.getSummary10();
                self.getSummary11();
                self.getSummary12();
                self.getSummary13();
            },
            // 总结1内容(转折关系)
            getSummary1(){
                let self = this;
                let data = [{
                    label: '典型标志词',
                    children: [
                        {label: '虽然...但是...'},
                        {label: '尽管...可是...'},
                        {label: '不过'},
                        {label: '然而'},
                        {label: '却'},
                        {label: '其实/事实上/实际上'},
                    ]
                },{
                    label: '非典型标志词',
                    children: [
                        {label: '殊不知'},
                        {label: '截然不同'},
                        {label: '截然相反'},
                        {label: '全新的研究'},
                        {label: '一种误读'},
                        {label: '相对而言'},
                    ]
                },{
                    label: '提示',
                    children: [{
                        label: '错误选项特征',
                        children: [
                            {label: '转折前的内容'},
                            {label: '围绕例子的表述'},
                            {label: '围绕原因的表述'},
                            {label: '无中生有'},
                        ],
                    },{
                        label: '略读句子特征： 例子、原因……'
                    }],
                }];
                self.$set(self.summary, 'd1', data);
            },
            // 总结2内容(主题词)
            getSummary2(){
                let self = this;
                let data = [{
                    label: '特征',
                    children: [
                        {label: '文段围绕其展开'},
                        {label: '一般高频出现'},
                        {label: '多为名词'},
                        {label: '前有引入或后有解释说明'},
                    ]
                },{
                    label: '理论要点',
                    children: [
                        {label: '正确选项中需包含文段主题词'},
                    ]
                },{
                    label: '干扰选项',
                    children: [{
                        label: '范围扩大/缩小/偷换',
                    }],
                }];
                self.$set(self.summary, 'd2', data);
            },
            // 总结3内容(因果关系)
            getSummary3(){
                let self = this;
                let data = [{
                    label: '典型标志词',
                    children: [
                        {label: '因为...所以...'},
                        {label: '由于...因此...'},
                    ]
                },{
                    label: '因果标志词',
                    children: [
                        {label: '所以、因此、因而、故而、于是、可见、看来（为什么、为何）'},
                        {label: '导致、致使、使得、造成'},
                    ]
                },{
                    label: '文段特征',
                    children: [{
                        label: '结论句在结尾：多为文段中心句',
                    },{
                        label: '结论句在开头/中间',
                        children: [
                            {label: '后为进一步解释说明：结论句为中心句'},
                            {label: '后有其他关联关系：需结合多种关联词共同分析'},
                        ]
                    }],
                }];
                self.$set(self.summary, 'd3', data);
            },
            // 总结4内容(必要条件关系)
            getSummary4(){
                let self = this;
                let data = [{
                    label: '典型格式',
                    children: [
                        {label: '只有……才……'},
                    ]
                },{
                    label: '对策标志词',
                    children: [
                        {label: '应该、应当、必须、需要、亟须、亟待+做法'},
                        {label: '通过/采取……手段/途径/措施/方式/方法/渠道，才能……'},
                        {label: '呼吁、倡导、提倡、提醒、建议+做法'},
                        {label: '前提、基础、保障、关键'},
                    ]
                },{
                    label: '文段特征',
                    children: [
                        {label: '对策在结尾：提出问题+分析问题+解决问题'},
                        {label: '对策在中间：提出问题+解决问题+解释说明（意义效果）'},
                        {label: '对策在开头：对策+正反论证/原因论证'},
                    ],
                },{
                    label: '反面论证',
                    children: [
                        {label: '典型格式：如果/倘若/一旦……+不好的结果'},
                        {label: '具体应用：把前面的做法反过来，即为正确答案'},
                    ],
                },{
                    label: '知识链接',
                    children: [
                        {label: '文段中只出现“提出问题+分析问题”，“解决问题”可能出现在选项中作为正确答案'},
                        {label: '对策不万能，一定要注意'},
                    ],
                }];
                self.$set(self.summary, 'd4', data);
            },
            // 总结5内容(程度词)
            getSummary5(){
                let self = this;
                let data = [{
                    label: '标志词',
                    children: [
                        {label: '更、尤其、正是、特别是、真正、根本、最（核心、突出）等'},
                    ]
                },{
                    label: '理论要点',
                    children: [
                        {label: '程度词所在的语句通常为重点'},
                    ]
                }];
                self.$set(self.summary, 'd5', data);
            },
            // 总结6内容(并列关系)
            getSummary6(){
                let self = this;
                let data = [{
                    label: '文段特征',
                    children: [
                        {label: '包含并列关联词及标点，如此外、另外、同时、以及、“；”'},
                        {label: '句式相同或相近'},
                        {label: '无明显其他关联词'},
                    ]
                },{
                    label: '选项特征',
                    children: [
                        {label: '两方面情况：和、及、与、同'},
                        {label: '更多种情况：许多、一些、不同、各种、一系列'},
                    ]
                }, {
                    label: '提示',
                    children: [
                        {label: '表述片面的选项需排除'},
                    ]
                }];
                self.$set(self.summary, 'd6', data);
            },
            // 总结7内容(程度词)
            getSummary7(){
                let self = this;
                let data = [{
                    label: '理论要点',
                    children: [
                        {label: '把握中心句及分述句的特征'},
                    ]
                },{
                    label: '中心句特征：观点',
                    children: [
                        {label: '对策'},
                        {label: '结论'},
                        {label: '评价'},
                    ]
                }, {
                    label: '分述句特征',
                    children: [
                        {label: '举例子：“比如”“例如”“……就是例证”等'},
                        {label: '调查报告、数据资料等'},
                        {label: '正反论证'},
                        {label: '原因解释'},
                        {label: '并列分述'},
                    ]
                }, {
                    label: '提示：选项陷阱总结',
                    children: [
                        {label: '非重点，迷你眼'},
                        {label: '无中生有不能选'},
                    ]
                }];
                self.$set(self.summary, 'd7', data);
            },
            // 总结8内容(细节判断题)
            getSummary8(){
                let self = this;
                let data = [{
                    label: '提问方式',
                    children: [
                        {label: '以下对文段理解正确/不正确的是...'},
                        {label: '符合/不符合这段话意思的是...'},
                        {label: '从文段中可以得知/推出的是...'},
                    ]
                },{
                    label: '错误选项类型',
                    children: [
                        {label: '无中生有'},
                        {  
                            label: '偷换概念',
                            children: [
                                {label: '替换'},
                                {label: '混搭'},
                            ]
                        },
                        {
                            label: '偷换时态',
                            children: [
                                {label: '将来时（将要、立刻、趋势、以后）'},
                                {label: '完成时（已、已经、了、完成）'},
                                {label: '进行时（正在、在...中、着）'},
                            ]
                        },
                        {label: '偷换逻辑'},
                    ]
                }, {
                    label: '快速解题技巧',
                    children: [
                        {label: '对比项'},
                        {label: '相对绝对项'},
                        {label: '表述与实际不符项'},
                    ]
                }, {
                    label: '细节主旨化',
                    children: [
                        {label: '优选契合主旨的选项'},
                    ]
                }];
                self.$set(self.summary, 'd8', data);
            },
            // 总结9内容(语句排序题)
            getSummary9(){
                let self = this;
                let data = [{
                    label: '提问方式',
                    children: [
                        {label: '将以上/以下几个句子重新排序,语序正确的是...'},
                    ]
                },{
                    label: '解题要点：从选项入手',
                    children: [
                        {label: '确定首句'},
                        {label: '确定捆绑集团/确定顺序/确定尾句'},
                    ]
                }, {
                    label: '确定首句',
                    children: [
                        {
                            label: '首句特征',
                            children: [
                                {label: '下定义：...就是/是指'},
                                {label: '背景引入：随着、近年来、在...大背景/环境下'},
                            ],
                        },
                        {
                            label: '非首句特征',
                            children: [
                                {label: '指代词：这、那、他、其、该、此'},
                                {label: '关联词后半部分：但、却、而且'},
                            ],
                        },
                    ]
                }, {
                    label: '确定捆绑集团',
                    children: [
                        {
                            label: '指代词',
                            children: [
                                {label: '这、那、他、其、该、此'},
                            ],
                        },
                        {
                            label: '关联词',
                            children: [
                                {label: '配套出现确定捆绑'},
                                {label: '单个出现分析句意'},
                            ],
                        },
                    ]
                }, {
                    label: '确定顺序',
                    children: [
                        { label: '时间顺序', },
                        {
                            label: '逻辑顺序',
                            children: [
                                {label: '观点+解释说明'},
                                {label: 'A和B'},
                            ],
                        },
                    ]
                }, {
                    label: '确定尾句',
                    children: [
                        { label: '因此、所以、看来、于是、这...引导的总结性尾句', },
                        { label: '对策' },
                    ]
                }];
                self.$set(self.summary, 'd9', data);
            },
            // 总结10内容(语句填空题)
            getSummary10(){
                let self = this;
                let data = [{
                    label: '提问方式',
                    children: [
                        {label: '填入画横线部分最恰当的一项是'},
                    ]
                },{
                    label: '横线在结尾',
                    children: [
                        {label: '总结前文'},
                        {label: '提出对策'},
                    ]
                }, {
                    label: '横线在开头：需概括文段的中心内容',
                }, {
                    label: '横线在中间',
                    children: [
                        {
                            label: '注意与上下文的联系',
                        },
                        {
                            label: '把握好主题词，保证与文段话题一致',
                        },
                    ]
                }];
                self.$set(self.summary, 'd10', data);
            },
            // 总结11内容(接语选择题)
            getSummary11(){
                let self = this;
                let data = [{
                    label: '提问方式',
                    children: [
                        {label: '作者接下来最有可能讲述的是……'},
                    ]
                },{
                    label: '理论要点',
                    children: [
                        {label: '重点关注文段最后一句话'},
                    ]
                }, {
                    label: '干扰项特征',
                    children: [
                        {label: '文段中已经论述过的内容'},
                    ]
                }, {
                    label: '提示',
                    children: [
                        {label: '理解要紧紧依托文段，不能无中生有'},
                    ]
                }];
                self.$set(self.summary, 'd11', data);
            },
            // 总结12内容(词的辨析)
            getSummary12(){
                let self = this;
                let data = [{
                    label: '词义侧重：辨析方法',
                    children: [
                        {label: '第一种：拆字组词：用不一样的字单独组词'},
                        {label: '第二种：整词搭配：用整个词进行组词搭配'},
                    ]
                },{
                    label: '固定搭配',
                    children: [
                        {
                            label: '搭配一个词：瞻前顾后找准搭配对象',
                        },
                        {
                            label: '搭配多个词',
                            children: [
                                {label: '横线所填词语搭配由“和”“及”“与”引导的并列结构'},
                                {label: '需与并列结构搭配恰当'},
                            ],
                        },
                    ]
                }, {
                    label: '程度轻重',
                    children: [
                        {
                            label: '区分词的程度轻重',
                            children: [
                                {label: '程度轻：大相径庭：相差很大，相差很多'},
                                {label: '程度重：截然不同：完全相反，完全不同'},
                            ],
                        },
                        {
                            label: '理论要点：所填词语的程度轻重与文段意思的轻重保持一致',
                        },
                    ]
                }, {
                    label: '感情色彩',
                    children: [
                        {
                            label: '区分词的感情色彩',
                            children: [
                                {label: '褒义：成果'},
                                {label: '贬义：后果'},
                                {label: '中性：结果'},
                            ],
                        },
                        {label: '理论要点：所填词语的感情色彩与文段的感情色彩保持一致'},
                    ]
                }];
                self.$set(self.summary, 'd12', data);
            },
            // 总结13内容(语境分析)
            getSummary13(){
                let self = this;
                let data = [{
                    label: '关联关系',
                    children: [{
                        label: '转折',
                        children: [
                            {label: '标志词：但是、然而、却等'},
                            {label: '理论要点：前后语义相反'},
                        ],
                    },{
                        label: '递进',
                        children: [
                            {label: '标志词：而且、甚至、更等'},
                            {label: '理论要点：语义程度前轻后重'},
                        ],
                    },{
                        label: '并列',
                        children: [
                            {
                                label: '标志词：而且、甚至、更等',
                                children: [
                                    {label: '同义并列：顿号（、）、逗号（，）'},
                                    {label: '反义并列：不是……而是……、是……不是……、相反、反之等'},
                                ]
                            },
                            {label: '理论要点：同义并列连接前后语义相近；反义并列连接前后语义相反'},
                            {label: '提示：相同句式也可表示并列'},
                        ],
                    }]
                },{
                    label: '对应关系',
                    children: [{
                        label: '解释类对应',
                        children: [
                            {label: '题干特点：分句， ，分句'},
                            {label: '标志词：即、就是、可以说、可谓、无异于、比如、例如等'},
                            {label: '标点：冒号（：）、破折号（——）'},
                        ],
                    },{
                        label: '重点词句对应',
                        children: [
                            {label: '重点词：指代词、主题词、形象表达'},
                            {label: '重点句：完整语句'},
                        ],
                    },{
                        label: '提示',
                        children: [
                            {label: '找准对应关系，要基于对整个文段意思的理解与把握'},
                        ],
                    }]
                }];
                self.$set(self.summary, 'd13', data);
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .pdf-wrap{
    }
</style>
<style lang="less" rel="stylesheet/less">
    @import "./../../style.less";
</style>