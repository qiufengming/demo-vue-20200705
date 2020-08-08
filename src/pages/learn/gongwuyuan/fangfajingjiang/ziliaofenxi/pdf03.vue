<template>
    <div class="pdf-wrap" id="pdf03">
        <!-- 公式参考： https://blog.csdn.net/qq_42454244/article/details/104612666?utm_medium=distribute.pc_relevant.none-task-blog-baidulandingword-3&spm=1001.2101.3001.4242 -->
        <div class="pdf-cover">
            <h1 class="text-c pdf-t"><span>方法精讲 - 资料</span></h1>
        </div>
        
        <div class="chapter-wrap">
            <h2 class="text-c chapter-t"><span>第二章 | 资料分析</span></h2>
            <div class="section-wrap">
                <h3 class="text-c section-t">第一节  速算技巧</h3>
                <div class="section-c">
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、截位直除</h4>
                        <div class="modal-c"></div>
                        <el-card class="summary">
                            <div slot="header" class="clearfix">
                                <span>截位直除</span>
                            </div>
                            <el-tree :data="summary.d1" :props="defaultProps" default-expand-all></el-tree>
                        </el-card>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、分数比较</h4>
                        <div class="modal-c"></div>
                        <el-card class="summary">
                            <div slot="header" class="clearfix">
                                <span>分数比较</span>
                            </div>
                            <el-tree :data="summary.d2" :props="defaultProps" default-expand-all></el-tree>
                        </el-card>
                    </div>
                </div>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第二节  材料阅读</h3>
                <div class="section-c"></div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>材料阅读</span>
                    </div>
                    <el-tree :data="summary.d3" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第三节 基期与现期</h3>
                <div class="section-c">
                    <div class="border-radius">
                        <p>基本术语：</p>
                        <p>基期量与现期量</p>
                        <p>资料分析中常涉及两个量的比较，作为对比参照的时期称为基期，对应的量称为基期量；而相对于基期的时期称为现期，所对应的量称为现期量。</p>
                        <p>增长量与增长率</p>
                        <p>增长量：用来表述基期量与现期量变化的绝对量。</p>
                        <p>增长率：用来表述基期量与现期量变化的相对量。</p>
                        <p>同比与环比</p>
                        <p>同比：一般与上年同一时期相比较。</p>
                        <p>环比：与相邻的上一个时期相比较。</p>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、基期量</h4>
                        <div class="modal-c"></div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、现期量</h4>
                        <div class="modal-c"></div>
                    </div>
                </div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>基期与现期</span>
                    </div>
                    <el-tree :data="summary.d4" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第四节 一般增长率</h3>
                <div class="section-c">
                    <div class="border-radius">
                        <p>基本术语：</p>
                        <p>增长率</p>
                        <p>增长率是用来表述基期量与现期量变化的相对量。增长率又称增速、增幅或增长幅度、增值率等。增长率为负时表示下降，下降率也可直接写成负的增长率。</p>
                        <p>百分数与百分点</p>
                        <p>百分数：用来反映量之间的比例关系。</p>
                        <p>百分点：用来反映百分数的变化。</p>
                        <p>增长率与倍数</p>
                        <p>增长率指比基数多出的比率；倍数指两数的直接比值。</p>
                        <p>若 A 是 B 的 n 倍，则 n=r+1（r 指 A 与 B 相比的增长率）。</p>
                        <p>成数与翻番</p>
                        <p>成数：几成相当于十分之几。</p>
                        <p>翻番：翻一番为原来的 2 倍；翻两番为原来的 4 倍；依次类推，翻 n 番为原来的 2<sup>n</sup>倍。</p>
                        <p>增幅、降幅与变化幅度</p>
                        <p>增幅一般就是指增长率，有正有负。</p>
                        <p>降幅指下降的幅度，降幅比较大小时，前提必须为下降。</p>
                        <p>变化幅度指增长或下降的绝对比率，变化幅度比较大小时用增幅（降幅）的绝对值。</p>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、计算</h4>
                        <div class="modal-c"></div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、比较</h4>
                        <div class="modal-c"></div>
                    </div>
                </div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>一般增长率</span>
                    </div>
                    <el-tree :data="summary.d5" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第五节 增长量</h3>
                <div class="section-c">
                    <div class="border-radius">
                        <p>基本术语：</p>
                        <p>增长量是用来表述基期量与现期量变化的绝对量，增长率则是用来表述两者变化的相对量。</p>
                        <p>年均增长量=（现期量-基期量）÷年份差。</p>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、计算</h4>
                        <div class="modal-c"></div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、比较</h4>
                        <div class="modal-c"></div>
                    </div>
                </div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>增长量</span>
                    </div>
                    <el-tree :data="summary.d6" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第六节 比重</h3>
                <div class="section-c">
                    <div class="border-radius">
                        <p>基本术语：</p>
                        <p>比重指部分在总体中所占的比率，有时也用贡献率、利润率等表述方式。</p>
                        <p>增长贡献率指部分增量在总体增量中所占的比例。</p>
                        <p>资料分析中的利润率特指利润在收入中的占比。</p>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、现期比重</h4>
                        <div class="modal-c"></div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、基期比重</h4>
                        <div class="modal-c"></div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">三、两期比重</h4>
                        <div class="modal-c"></div>
                    </div>
                </div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>比重</span>
                    </div>
                    <el-tree :data="summary.d7" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第七节 平均数</h3>
                <div class="section-c">
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、现期平均数</h4>
                        <div class="modal-c"></div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、基期平均数</h4>
                        <div class="modal-c"></div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">三、两期平均数</h4>
                        <div class="modal-c"></div>
                    </div>
                </div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>平均数</span>
                    </div>
                    <el-tree :data="summary.d8" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第八节 倍数</h3>
                <div class="section-c">
                    <div class="border-radius">
                        <p>基本术语：</p>
                        <p>倍数用来表示两者的相对关系。</p>
                        <p>若 A 是 B 的 n 倍，则 n=r+1（r 指 A 与 B 相比的增长率）。</p>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、现期倍数</h4>
                        <div class="modal-c"></div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、基期倍数</h4>
                        <div class="modal-c"></div>
                    </div>
                </div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>倍数</span>
                    </div>
                    <el-tree :data="summary.d9" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
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
            };
        },
        created(){
            this.initData();
        },
        mounted(){
            let self = this;
            if(self.commonsVariable.isMathjaxConfig){//判断是否初始配置，若无则配置。
                self.commonsVariable.initMathjaxConfig();
            }
            self.commonsVariable.MathQueue('pdf03');
        },
        methods: {
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
            // 总结1内容(截位直除)
            getSummary1(){
                let self = this;
                let data = [{
                    label: '截谁',
                    children: [
                        {label: '一步除法：建议只截分母'},
                        {label: '多步计算：建议上下都截'},
                    ]
                },{
                    label: '截几位',
                    children: [
                        {
                            label: '选项差距大，截两位',
                            children: [
                                {label: '选项首位不同'},
                                {label: '选项首位相同，次位差大于首位'},
                            ],
                        },
                        {label: '选项差距小，截三位：选项首位相同且次位差小于等于首位'},
                    ]
                }];
                self.$set(self.summary, 'd1', data);
            },
            // 总结2内容(分数比较)
            getSummary2(){
                let self = this;
                let data = [{
                    label: '一大一小直接看',
                    children: [
                        {label: '根据分子比大小'},
                        {label: '分子大的分数大，分子小的分数小'},
                    ]
                },{
                    label: '同大同小',
                    children: [
                        {label: '竖着直接除'},
                        {label: '横着看速度'},
                        {label: '横竖哪个好看看哪个'},
                    ]
                }];
                self.$set(self.summary, 'd2', data);
            },
            // 总结3内容(材料阅读)
            getSummary3(){
                let self = this;
                let data = [{
                    label: '文字材料',
                    children: [
                        {label: '标记段落主题词，与题干进行匹配'},
                        {label: '注意相近词、时间、单位等'},
                    ]
                },{
                    label: '表格材料',
                    children: [
                        {label: '横纵标目、标题、单位、备注'},
                    ]
                },{
                    label: '图形材料',
                    children: [
                        {label: '标题、单位、图例'},
                    ]
                },{
                    label: '结合材料',
                    children: [
                        {label: '不同类型材料之间的关系、材料结构'},
                    ]
                }];
                self.$set(self.summary, 'd3', data);
            },
            // 总结4内容(基期与现期)
            getSummary4(){
                let self = this;
                let data = [{
                    label: '基期量',
                    children: [
                        {label: '识别：求前面某个时期的量'},
                        {label: '公式：基期量=现期量-增长量； 基期量=现期量÷(1+r)'},
                        {label: '速算：r大截位直除，r小化除为乘'},
                        {label: '基期和差：先用现期量和正负排除再计算'},
                    ]
                },{
                    label: '现期量',
                    children: [
                        {label: '识别：求后面某个时期的量'},
                        {label: '公式：现期量=基期量+增长量； 现期量=基期量×(1+r)'},
                        {label: '速算：截位计算，特殊数字'},
                    ]
                }];
                self.$set(self.summary, 'd4', data);
            },
            // 总结5内容(一般增长率)
            getSummary5(){
                let self = this;
                let data = [{
                    label: '计算',
                    children: [
                        {label: '识别：增长/下降+%，乘，倍；增长最快/慢'},
                        {
                            label: '方法：',
                            children: [
                                {label: '给百分点，直接加减'},
                                {label: '无百分点，r=增长量÷基期量'},
                            ],
                        },
                        {label: '速算：截位直除'},
                    ]
                },{
                    label: '比较',
                    children: [
                        {label: '识别：增长最快/慢；增长率最高/低'},
                        {
                            label: '方法：',
                            children: [
                                {label: '现期量÷基期量≥2，比较“现期量÷基期量”'},
                                {label: '现期量÷基期量＜2，比较“增长量÷基期量”'},
                            ],
                        },
                        {label: '速算：分数比较法'},
                    ]
                }];
                self.$set(self.summary, 'd5', data);
            },
            // 总结6内容(并列关系)
            getSummary6(){
                let self = this;
                let data = [{
                    label: '计算',
                    children: [
                        {label: '识别：增长+单位（人/元/吨）'},
                        {
                            label: '公式',
                            children: [
                                {label: '增长量=现期量-基期量=基期量×r=`((现期量)/(1+r))×r`'},
                                {label: '年均增长量=(现期量-基期量)÷年份差'},
                            ],
                        },
                        {
                            label: '速算',
                            children: [
                                {label: '百分数化分数：近似转化、区中转化、倍数转化'},
                                {label: '若|r|≈`1/N`，增长量≈`(现期量)/(N+1)`；下降量≈`(现期量)/(N-1)`'},
                            ],
                        },
                        {
                            label: '比较',
                            children: [
                                {label: '识别：增长最多/少'},
                                {
                                    label: '速算',
                                    children: [
                                        {label: '给出每年数据：直接两两相减，柱状图还可用直尺标注'},
                                        {label: '给出现期量和r：两者都大则增量必然大，否则百分化计算'},
                                    ]
                                },
                            ],
                        },
                    ]
                }];
                self.$set(self.summary, 'd6', data);
            },
            // 总结7内容(比重)
            getSummary7(){
                let self = this;
                let data = [{
                    label: '现期比重',
                    children: [
                        {label: '识别：问题时间和材料一致，占，比重'},
                        {label: '公式：比重=`(部分)/(总体)`；总体=`(部分)/(比重)`；部分=总体×比重'},
                        {label: '速算：截位直除'},
                    ]
                },{
                    label: '基期比重',
                    children: [
                        {label: '识别：问题时间在材料之前，占，比重'},
                        {label: '公式：`A/(1+a)÷B/(1+b)=A/B×(1+b)/(1+a)`'},
                        {label: '速算：（1）截位直除；（2）先计算现期比重，再判断大小'},
                    ]
                }, {
                    label: '两期比重',
                    children: [
                        {label: '识别：两个年份，一个比重'},
                        {label: '公式：`A/B×(a-b)/(1+a)`'},
                        {label: '升降判断：比较部分与总体增长率，部分大则升、小则降'},
                        {label: '速算：比重差的绝对值小于增长率之差的绝对值，即`|A/B×(a-b)/(1+a)|＜|a-b|`'},
                    ]
                }];
                self.$set(self.summary, 'd7', data);
            },
            // 总结8内容(平均数)
            getSummary8(){
                let self = this;
                let data = [{
                    label: '现期平均数',
                    children: [
                        {label: '识别：问题时间与材料一致+平均（均/每/单位）'},
                        {label: '公式：平均数=总数÷个数  后面÷前面'},
                        {label: '技巧：（1）截位直除；（2）削峰填谷'},
                    ]
                },{
                    label: '基期平均数',
                    children: [
                        {label: '识别：问题时间在材料之前+平均（均/每/单位）'},
                        {label: '公式：`A/(1+a)÷B/(1+b)=A/B×(1+b)/(1+a)`'},
                        {label: '速算：（1）截位直除；（2）先计算现期平均数，再判断大小'},
                    ]
                },{
                    label: '两期平均数',
                    children: [
                        {label: '识别：问题中涉及两个时间+平均（均/每/单位）'},
                        {label: '升降判断：看分子、分母增长率，分子大则升、小则降'},
                        {
                            label: '平均数的增长率',
                            children: [
                                {label: '（1）先找出分子的增速a和分母的增速b'},
                                {label: '（2）代入公式：`(a-b)/(1+b)`'},
                            ],
                        },
                    ]
                }];
                self.$set(self.summary, 'd8', data);
            },
            // 总结9内容(倍数)
            getSummary9(){
                let self = this;
                let data = [{
                    label: '现期倍数',
                    children: [
                        {label: '识别：问题时间与材料一致，A是B的多少倍'},
                        {label: '公式：A÷B'},
                        {label: '速算：截位直除'},
                    ]
                },{
                    label: '基期倍数',
                    children: [
                        {label: '识别：问题时间在材料之前，A是B的所少倍'},
                        {label: '公式：`A/(1+a)÷B/(1+b)=A/B×(1+b)/(1+a)`'},
                        {label: '速算：（1）截位直除；（2）先算现期倍数，再判断大小'},
                    ]
                },{
                    label: '倍数与增长',
                    children: [
                        {label: 'A是B的n倍：n=A÷B'},
                        {label: 'A比B增长（多）r倍：r=A÷B-1'},
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