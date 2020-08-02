<template>
    <div class="pdf-wrap">
        <div class="pdf-cover">
            <h1 class="text-c pdf-t"><span>第二篇  判断推理</span></h1>
        </div>
        
        <div class="chapter-wrap">
            <h2 class="text-c chapter-t"><span>第一章 | 图形推理</span></h2>
            <div class="section-wrap">
                <h3 class="text-c section-t">第一节  位置规律</h3>
                <div class="section-c">
                    <div class="border-radius">
                        <p>题目特征：元素组成相同</p>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、平移</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>1. 方向：上下、左右、对角线、顺逆时针</p>
                                <p>2. 常见步数：恒定、递增</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、旋转、翻转</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>旋转：</p>
                                <p>1. 方向：顺时针、逆时针</p>
                                <p>2. 常见角度：30°、45°、60°、90°、180°</p>
                            </div>
                            <div class="border-radius">
                                <p>翻转：</p>
                                <p>1. 左右翻转：图形沿竖轴对称</p>
                                <p>2. 上下翻转：图形沿横轴对称</p>
                            </div>
                        </div>
                    </div>
                </div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>位置规律</span>
                    </div>
                    <el-tree :data="summary.d1" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第二节  样式规律</h3>
                <div class="section-c">
                    <div class="border-radius">
                        <p>题目特征：元素组成相似</p>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、加减同异</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>图形特征：线条重复出现</p>
                                <p></p>
                                <p>1. 相加、相减</p>
                                <p>2. 求同、求异</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、黑白运算</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>1. 题目特征：图形轮廓和分割区域相同，不同区域“黑白”颜色不同，且黑块数量不成规律</p>
                                <p>2. 解题技巧：按照对应位置进行“黑白”相加运算，将所得规律应用于所求图形</p>
                            </div>
                        </div>
                    </div>
                </div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>样式规律</span>
                    </div>
                    <el-tree :data="summary.d2" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第三节  属性规律</h3>
                <div class="section-c">
                    <div class="border-radius">
                        <p>题目特征：元素组成不相同、不相似</p>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、对称性</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>1. 轴对称（沿着线折叠后，线两边的部分能够完全重合）</p>
                                <p>2. 中心对称（图形旋转 180°后和原图形完全重合）</p>
                                <p>3. 轴对称 + 中心对称：有两条相互垂直的对称轴</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、曲直性</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>题目特征：题干图形由全曲线图、全直线图或者既有曲线又有直线的图形构成</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">三、开闭性</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>题目特征：题干图形由全开放图、全封闭图或半开半闭图构成</p>
                            </div>
                        </div>
                    </div>
                </div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>属性规律</span>
                    </div>
                    <el-tree :data="summary.d3" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第四节  特殊规律</h3>
                <div class="section-c">
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、图形间关系</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>题目特征：题干每幅图都出现两个或多个封闭图形连在一起</p>
                                <p>考点：</p>
                                <p>1. 相离：图形分开，没有公共部分</p>
                                <p>2. 相交：</p>
                                <p>（1）相交于点</p>
                                <p>（2）相交于线</p>
                                <p>（3）相交于面：相交面的形状</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、功能元素</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>观察功能元素对其他图形的标记作用</p>
                            </div>
                        </div>
                    </div>
                </div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>特殊规律</span>
                    </div>
                    <el-tree :data="summary.d4" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第五节  数量规律</h3>
                <div class="section-c">
                    <div class="border-radius">
                        <p>题目特征：元素组成不相同、不相似且无属性规律</p>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、面数量</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>特征图：图形被分割，封闭面明显</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、线数量</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>特征图：</p>
                                <p>1. 直线数：多边形、单一直线</p>
                                <p>2. 曲线数：曲线图形（全曲线图、圆、弧）</p>
                            </div>
                            <div class="border-radius">
                                <p>一笔画：</p>
                                <p>1. 线条之间全部连通</p>
                                <p>2. 奇点数为 0 或 2 个</p>
                                <p>奇点：发射出奇数条线的点</p>
                                <p>注：所有的端点都是奇点，数奇点时要数上端点</p>
                                <p></p>
                                <p>多笔画：</p>
                                <p>连通图笔画数 = 奇点数 ÷2（任何图形的奇点数一定为偶数）</p>
                                <p></p>
                                <p>常见笔画数特征图：</p>
                                <p>五角星、“日”、“田”、“日”和“田”的变形图、圆和圆相切与相交、多端点图形</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">三、点数量</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>特征图：线条和线条交叉明显</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">四、素数量</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>1. 元素种类</p>
                                <p>2. 元素个数</p>
                            </div>
                            <div class="border-radius">
                                <p>3. 部分数</p>
                            </div>
                        </div>
                    </div>
                </div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>数量规律</span>
                    </div>
                    <el-tree :data="summary.d5" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第六节  空间重构</h3>
                <div class="section-c">
                    <div class="border-radius">
                        <p>解题思维：</p>
                        <p>1. 注意折向——平面图为纸盒的外表面</p>
                        <p>2. 利用相对关系和相邻关系排除错误选项</p>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、相对面</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>应用：一组相对面出现 2 个的选项——排除</p>
                                <p></p>
                                <p>展开图中如何判断相对面？</p>
                                <p>1. 同行或同列相隔一个面</p>
                                <p>2. “Z”字形两端</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、相邻面</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>应用：折叠前后相邻关系保持不变</p>
                            </div>
                            <div class="border-radius">
                                <p>画边法排除错误相邻关系</p>
                            </div>
                        </div>
                    </div>
                </div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>空间类 - 六面体</span>
                    </div>
                    <el-tree :data="summary.d6" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
            </div>
        </div>

        <!-- ******************* 只写到这里，下次接着第二章 *********************************************************** -->

        <div class="chapter-wrap">
            <h2 class="text-c chapter-t"><span>第二章 | 语言表达</span></h2>
            <div class="section-wrap">
                <h3 class="text-c section-t">第一节  语句排序题 </h3>
                <div class="section-c">
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
                </div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>语句排序题</span>
                    </div>
                    <el-tree :data="summary.d9" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第二节  语句填空题</h3>
                <div class="section-c">
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
                </div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>语句填空题</span>
                    </div>
                    <el-tree :data="summary.d10" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第三节  接语选择题</h3>
                <div class="section-c">
                    <dl class="outline">
                        <dt>【提问方式】</dt>
                        <dd>作者接下来最有可能讲述的是……</dd>
                    </dl>
                    <div class="border-radius">
                        <p>理论要点：重点关注文段最后一句话</p>
                        <p></p>
                        <p>干扰项特征：文段中已经论述过的内容</p>
                    </div>
                </div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>接语选择题</span>
                    </div>
                    <el-tree :data="summary.d11" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
            </div>
        </div>

        <div class="chapter-wrap">
            <h2 class="text-c chapter-t"><span>第三章 | 逻辑填空</span></h2>
            <div class="section-wrap">
                <h3 class="text-c section-t">第一节  词的辨析</h3>
                <div class="section-c">
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
                </div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>词的辨析</span>
                    </div>
                    <el-tree :data="summary.d12" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第二节  语境分析</h3>
                <div class="section-c">
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
        mounted(){},
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
            // 总结1内容(图形推理)
            getSummary1(){
                let self = this;
                let data = [{
                    label: '题目特征：元素组成相同',
                },{
                    label: '考点',
                    children: [{
                        label: '平移',
                        children: [
                            {label: '方向：直线（上下、左右、对角线）、绕圈（顺逆时针）'},
                            {label: '步数：恒定、递增'},
                        ],
                    },{
                        label: '旋转',
                        children: [
                            {label: '方向：顺逆时针'},
                            {label: '角度：30°、45°、60°、90°、180°'},
                        ],
                    },{
                        label: '翻转',
                        children: [
                            {label: '方向：上下翻转（图形沿横轴对称）、左右翻转（图形沿竖轴对称）'},
                        ],
                    },{
                        label: '技巧',
                        children: [
                            {label: '比较思维：既可以比较题干，也可以比较选项'},
                        ],
                    }],
                }];
                self.$set(self.summary, 'd1', data);
            },
            // 总结2内容(样式规律)
            getSummary2(){
                let self = this;
                let data = [{
                    label: '题目特征：元素组成相似',
                },{
                    label: '考点',
                    children: [{
                        label: '加减同异',
                        children: [
                            {label: '相加、相减'},
                            {label: '求同'},
                            {label: '求异'},
                            {label: '注意：位置+样式的复合考法'},
                        ],
                    },{
                        label: '黑白运算',
                        children: [
                            {label: '（1）特征：图形轮廓和分割区域相同，内部的颜色不同'},
                            {label: '（2）方法：相同位置运算'},
                            {label: '（3）小技巧：优先考虑黑白运算后，从问号处着手解题更快，边找边验证'},
                            {label: '注意：位置+样式的复合考法'},
                        ],
                    }]
                }];
                self.$set(self.summary, 'd2', data);
            },
            // 总结3内容(属性规律)
            getSummary3(){
                let self = this;
                let data = [{
                    label: '题目特征：元素组成不相同、不想似',
                },{
                    label: '考点',
                    children: [{
                        label: '对称性',
                        children: [
                            {
                                label: '轴对称',
                                children: [
                                    {label: '对称轴方向、数量'},
                                    {label: '对称轴和图形的关系'},
                                ],
                            },
                            {label: '中心对称'},
                            {label: '轴对称 + 中心对称'},
                        ]
                    },{
                        label: '曲直线：优先全直线或全曲线',
                    },{
                        label: '开闭性：优先全开放或全封闭',
                    }],
                }];
                self.$set(self.summary, 'd3', data);
            },
            // 总结4内容(特殊规律)
            getSummary4(){
                let self = this;
                let data = [{
                    label: '图形间关系',
                    children: [
                        {label: '题目特征：题干每幅图都出现两个或多个封闭图形连在一起'},
                        {
                            label: '考点',
                            children: [
                                {label: '相离：图形分开，没有公共部分'},
                                {
                                    label: '相交',
                                    children: [
                                        {label: '相交于点'},
                                        {
                                            label: '相交于点',
                                            children: [
                                                {label: '相交边数量'},
                                                {label: '相交边样式：长/短'},
                                            ],
                                        },
                                        {label: '相交于面：相交面的形状'},
                                    ],
                                },
                            ],
                        },
                    ]
                },{
                    label: '功能元素',
                    children: [
                        {label: '题目特征：题干每幅图都出现小黑点或小箭头等小元素'},
                        {label: '考点：标记位置'},
                    ],
                }];
                self.$set(self.summary, 'd4', data);
            },
            // 总结5内容(数量规律)
            getSummary5(){
                let self = this;
                let data = [{
                    label: '题目特征',
                    children: [
                        {label: '元素组成不同且无属性规律'},
                        {label: '数量规律明显'},
                    ]
                },{
                    label: '考点',
                    children: [{
                        label: '面数量',
                        children: [
                            {label: '图形被分割，封闭面明显'},
                            {label: '注意面的细化考法'},
                        ],
                    }, {
                        label: '线数量',
                        children: [
                            {label: '直线数特征图：多边形、单一直线'},
                            {label: '曲线数特征图：曲线图形（全曲线图、圆、弧）'},
                            {
                                label: '笔画数',
                                children: [{
                                    label: '一笔画图形',
                                    children: [
                                        {label: '（1）连通图'},
                                        {label: '（2）奇点数=0或2'},
                                    ],
                                }, {
                                    label: '多笔画图形',
                                    children: [
                                        {label: '笔画数=奇点数÷2'},
                                        {label: '如果存在多部分，则每个部分的笔画单独算，再相加'},
                                    ],
                                }, {
                                    label: '常见特征图',
                                    children: [
                                        {label: '五角星、“日”、“田”、“日”、和“田”的变形图、圆和圆相切与相交、多端点图形'},
                                    ],
                                }],
                            },
                        ],
                    }, {
                        label: '点数量',
                        children: [
                            {
                                label: '特征图',
                                children: [{
                                    label: '（1）线条交叉明显',
                                }, {
                                    label: '（2）乱糟糟一团线交叉',
                                }, {
                                    label: '（3）相切较多',
                                }],
                            },
                            {label: '细化考点：曲直交点、内外交点'},
                        ],
                    }, {
                        label: '素数量',
                        children: [
                            {label: '元素种类'},
                            {label: '元素个数'},
                            {
                                label: '部分数',
                                children: [{
                                    label: '线条连在一起叫一部分',
                                }, {
                                    label: '常考查生活化粗线条图形',
                                }],
                            },
                            
                        ],
                    }]
                }];
                self.$set(self.summary, 'd5', data);
            },
            // 总结6内容(空间类 - 六面体)
            getSummary6(){
                let self = this;
                let data = [{
                    label: '想对面',
                    children: [
                        {label: '（1）两个面在同一行或同一列，且中间隔了一个面'},
                        {label: '（2）两个面在“Z”字形两端，且紧靠着“Z”字形中间那条线'},
                        {label: '应用：在立体图只能看到三个面的情况，想对面只能出现一个'},
                    ]
                },{
                    label: '想邻面',
                    children: [
                        {label: '（1）平面图中直接相邻的两个面的公共边'},
                        {label: '（2）平面图中构成直角的两条边是同一条边'},
                        {label: '（3）一排四个面，两头的两条边是同一条边'},
                        {label: '相对位置法：图形方向明显时可考虑相对位置'},
                        {
                            label: '画边法',
                            children: [
                                {label: '（1）结合选项，找一个特殊面的唯一点或唯一边'},
                                {label: '（2）顺/逆时针方向描边标号（描同一个面）'},
                                {label: '（3）题干与选项对应面不一致 ———— 排除'},
                            ],
                        },
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