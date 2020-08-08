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

        <div class="chapter-wrap">
            <h2 class="text-c chapter-t"><span>第二章 | 类比推理</span></h2>
            <div class="border-radius">
                <p>题目要求：</p>
                <p>给出一组相关的词，要求通过观察分析，在备选答案中找出一组与之在逻辑关系上最为贴近或相似的词</p>
                <p></p>
                <p>常见题型：</p>
                <p>1. 两词型——A ∶ B</p>
                <p>2. 三词型——A ∶ B ∶ C</p>
                <p>3. 填空型——A  对于  （    ） 相当于  （    ）  对于  B</p>
            </div>

            <div class="section-wrap">
                <h3 class="text-c section-t">第一节  语义关系</h3>
                <div class="section-c">
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、近义关系、反义关系</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>1. 近义关系：词语意义相近</p>
                                <p>例：理想∶梦想 锲而不舍∶坚持不懈</p>
                                <p></p>
                                <p>2. 反义关系：词语意义相反</p>
                                <p>例：成功∶失败 半途而废∶有始有终</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、比喻义、象征义</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>比喻义、象征义：把一种事物比喻成另外的事物，或者词语本身的含义同时是另外一种事物的象征</p>
                                <p>例：月亮∶玉盘  松鹤∶长寿</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第二节   逻辑关系</h3>
                <div class="section-c">
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、全同关系</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p> 全同关系：词语意义完全相同</p>
                                <p>例：西红柿∶番茄</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、并列关系</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>1. 矛盾关系：是指对立的两种情况，不存在第三种情况，二者是非此即彼的关系</p>
                                <p>例：生∶死  正义∶非正义</p>
                                <p>2. 反对关系：是指在对立的两种情况之外，还存在其他情况，二者不是非此即彼的关系</p>
                                <p>例：红色∶白色  苹果∶香蕉</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">三、包容关系</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>1. 种属关系：A 是 B 的一种</p>
                                <p>例：苹果∶水果义</p>
                                <p>2. 组成关系∶ A 是 B 的一个组成部分</p>
                                <p>例：轮胎∶汽车</p>
                                <p>区分：包容关系中如果能用“是”造句子造得通顺，那么就是种属关系</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">四、交叉关系</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>高频对应关系：</p>
                                <p>1. 材料    ⇒ 例：木材∶家具</p>
                                <p>2. 工艺    ⇒ 例：蚕丝∶织造</p>
                                <p>3. 属性    ⇒ 例：盐∶咸</p>
                                <p>4. 功能    ⇒ 例：银行卡∶支付</p>
                                <p>5. 时间顺序 ⇒ 例：预习∶上课</p>
                                <p>6. 因果    ⇒ 例：炎热∶中暑</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">五、对应关系</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>交叉关系：有的 A 是 B 并且有的 A 不是 B</p>
                                <p>&nbsp;&nbsp; 有的 B 是 A 并且有的 B 不是 A</p>
                                <p>例：女士∶公务员</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第三节  语法关系</h3>
                <div class="section-c">
                    <h4>技巧：造句子</h4>
                    <div class="border-radius">
                        <p>1. 主谓关系</p>
                        <p>例：学生∶学习</p>
                        <p></p>
                        <p>2. 动宾关系</p>
                        <p>例：学习∶功课</p>
                        <p></p>
                        <p>3. 主宾关系</p>
                        <p>例：学生∶功课</p>
                    </div>
                </div>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第四节  词语拆分</h3>
                <div class="section-c">
                    <h4>技巧：造句子</h4>
                    <div class="border-radius">
                        <p>拆分思维：</p>
                        <p>什么时候拆分看？</p>
                        <p>1. 单字拆分</p>
                        <p>例：寒∶寒冷</p>
                        <p>2. 成语被拆分</p>
                        <p>例：南征∶北战</p>
                        <p>3. 两组词语之间没有明显逻辑关系</p>
                        <p>例：成败∶呼吸</p>
                    </div>
                </div>
            </div>
            <el-card class="summary">
                <div slot="header" class="clearfix">
                    <span>类比推理</span>
                </div>
                <el-tree :data="summary.d7" :props="defaultProps" default-expand-all></el-tree>
            </el-card>
        </div>

        <div class="chapter-wrap">
            <h2 class="text-c chapter-t"><span>第三章 | 定义判断</span></h2>
            <div class="border-radius">
                <p>解题思维：</p>
                <p>1. 看清提问方式，为“属于 / 符合”“不属于 / 不符合”定义等/p>
                <p>2. 识别有效信息——找准关键词、关键句</p>
                <p>3. 逐一分析选项，当纠结时采用对比的思维进行排除，最终选择更符合题干要求的选项</p>
            </div>
            <div class="modal-wrap">
                <h4 class="modal-t">一、快速识别有效信息</h4>
                <div class="modal-c">
                    <div class="border-radius">
                        <p>方法一：关键词——主体、客体</p>
                        <p></p>
                        <p>主体、客体错误的选项一定不符合定义</p>
                    </div>
                    <div class="border-radius">
                        <p>方法二：句式</p>
                        <p></p>
                        <p>常见关键词：</p>
                        <p>通过、利用</p>
                        <p>以、达到</p>
                        <p>因为、由于</p>
                        <p>导致、从而</p>
                        <p>当……时、在……过程中、在……前 / 后</p>
                    </div>
                    <div class="border-radius">
                        <p>方法三：句号与补充说明</p>
                        <p></p>
                        <p>1. 优先看定义所在的句子</p>
                        <p>2. 当定义所在句子不好理解时，可重点关注后面的补充说明部分</p>
                        <p></p>
                        <p>常见补充说明关键词：即、包括、也就是说、换言之……</p>
                    </div>
                    <div class="border-radius">
                        <p>多定义：</p>
                        <p></p>
                        <p>1. 问哪个定义优先看哪个定义</p>
                        <p>2. 在两个选项中纠结时，再与其他定义做对比</p>
                    </div>
                </div>
            </div>
            <div class="modal-wrap">
                <h4 class="modal-t">二、小技巧——拆词 / 同构选项排除法</h4>
                <div class="modal-c">
                    <div class="border-radius">
                        <p>1. 拆词</p>
                        <p>2. 同构选项特征：</p>
                        <p>（1）意思相近</p>
                        <p>（2）结构相似</p>
                    </div>
                </div>
            </div>
            <el-card class="summary">
                <div slot="header" class="clearfix">
                    <span>定义判断</span>
                </div>
                <el-tree :data="summary.d8" :props="defaultProps" default-expand-all></el-tree>
            </el-card>
        </div>

        <div class="chapter-wrap">
            <h2 class="text-c chapter-t"><span>第四章 | 逻辑判断</span></h2>
            <div class="section-wrap">
                <h3 class="text-c section-t">第一节  翻译推理</h3>
                <div class="section-c">
                    <div class="border-radius">
                        <p>题型特征：</p>
                        <p>1. 题干和选项中出现比较明显的逻辑关联词</p>
                        <p>2. 提问方式为“可以推出”“不能推出”等</p>
                        <p></p>
                        <p>解题思维：</p>
                        <p>1. 先翻译（将题干中逻辑关联词所在句子翻译成用箭头推出的关系）</p>
                        <p>2. 再推理</p>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、翻译规则之“前推后”</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>典型逻辑关联词：</p>
                                <p>如果……那么……</p>
                                <p>若……则……</p>
                                <p>只要……就……</p>
                                <p>所有……都……</p>
                                <p>为了……一定（必须）……</p>
                                <p>……是……的充分条件</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、推理规则之“逆否等价”</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>符号表示：A → B = － B →－ A</p>
                                <p>文字表示：肯前必肯后，否后必否前，否前肯后无必然结论（可能 / 可能不）</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">三、翻译规则之“后推前”</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>典型逻辑关联词：</p>
                                <p>只有……才……</p>
                                <p>不……不……</p>
                                <p>除非……否则不……</p>
                                <p>……是……的基础 / 假设 / 前提 / 关键</p>
                                <p>……是……的必要条件 / 必不可少的条件</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">四、翻译规则之“且、或”</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>二者同时成立</p>
                                <p>符号表示：A 且 B</p>
                                <p>典型逻辑关联词：</p>
                                <p>……和……</p>
                                <p>……并且……</p>
                                <p>既……又……</p>
                                <p>不仅……而且……</p>
                                <p>虽然……但是……</p>
                                <p></p>
                                <p>二者至少一个成立</p>
                                <p>符号表示：A 或 B</p>
                                <p>典型逻辑关联词：</p>
                                <p>……或者……</p>
                                <p>或者……或者……</p>
                                <p>……和……至少一个</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">五、推理规则之“否一推一”</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>文字表示：当“或”关系为真时，否定一项可以得到另一项</p>
                                <p>符号表示：A 或 B 为真，-A → B/-B → A</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">六、推理规则之“德·摩根定律”</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>-（A 且 B）＝ -A 或 -B</p>
                                <p>-（A 或 B）＝ -A 且 -B</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">七、推理方式</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>提问方式：以下哪项的推理方式 / 结构与题干的推理方式 / 结构相同</p>
                            </div>
                        </div>
                    </div>

                </div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>翻译推理</span>
                    </div>
                    <el-tree :data="summary.d9" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
            </div>
            <div class="section-wrap">
                <h3 class="text-c section-t">第二节  组合排列</h3>
                <div class="section-c">
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、排除法、代入法</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>1. 排除法</p>
                                <p>2. 代入法</p>
                                <p>题干信息确定优先使用排除法，题干信息不确定优先使用代入法</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、辅助技巧</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>（1）最大信息：以题干中出现次数最多的信息为推理起点</p>
                                <p>（2）符号：＞、＝、＜</p>
                                <p>（3）列表格</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">三、特殊题型：材料题</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>1. 与非材料题的解题方法一致</p>
                                <p>2. 通过材料直接推出来的结论可以直接应用于所有题目</p>
                            </div>
                        </div>
                    </div>
                </div>
                <el-card class="summary">
                    <div slot="header" class="clearfix">
                        <span>组合排列</span>
                    </div>
                    <el-tree :data="summary.d10" :props="defaultProps" default-expand-all></el-tree>
                </el-card>
            </div>

            <div class="section-wrap">
                <h3 class="text-c section-t">第三节  逻辑论证</h3>
                <div class="section-c">
                    <div class="modal-wrap">
                        <h4 class="modal-t">一、削弱之否定论点</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>选项特征：与论点表述的意思相反</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">二、削弱之拆桥</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>题型特征：论点和论据讨论的话题不一致</p>
                                <p>&nbsp;&nbsp; 提问方式为问“削弱论证”时，优先考虑拆桥</p>
                                <p></p>
                                <p>选项特征：同时包含论点和论据中的关键词，并否定论点和论据之间的必然联系</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">三、削弱之否定论据</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>题型特征：题干中出现支持方、反对方观点相反，经常采用否定论据来削弱</p>
                                <p>&nbsp;&nbsp; 题干存在论据并且在找不到否定论点和拆桥的情况下，考虑否定论据</p>
                                <p></p>
                                <p>选项特征：与论据表述的意思相反</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">四、削弱之因果倒置和他因削弱</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>题型特征：论点具有因果关系</p>
                                <p></p>
                                <p>选项特征：</p>
                                <p>1. 因果倒置：将论点中的因果关系顺序颠倒</p>
                                <p>2. 他因削弱：在原来原因 1 的基础上，选项增加另一个同时存在的原因 2 也能导致相同的结果，削弱的是原来原因的重要性或者唯一性</p>
                            </div>
                        </div>
                    </div>
                    <el-card class="summary">
                        <div slot="header" class="clearfix">
                            <span>削弱论证</span>
                        </div>
                        <el-tree :data="summary.d11" :props="defaultProps" default-expand-all></el-tree>
                    </el-card>
                    <div class="modal-wrap">
                        <h4 class="modal-t">五、加强之补充论据</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>1. 解释：说明论点成立的原因</p>
                                <p></p>
                                <p>2. 举例：证明论点成立的例子</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">六、加强之搭桥</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>题型特征：论点和论据讨论的话题不一致</p>
                                <p>&nbsp;&nbsp;提问方式为问前提、假设、必要条件、支持论证时，优先考虑搭桥</p>
                                <p></p>
                                <p>选项特征：同时包含论点和论据中的关键词，并肯定论点和论据之间的关系</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-wrap">
                        <h4 class="modal-t">七、加强之必要条件</h4>
                        <div class="modal-c">
                            <div class="border-radius">
                                <p>必要条件：选项为论点成立的必要条件</p>
                            </div>
                        </div>
                    </div>
                    <el-card class="summary">
                        <div slot="header" class="clearfix">
                            <span>加强论证</span>
                        </div>
                        <el-tree :data="summary.d12" :props="defaultProps" default-expand-all></el-tree>
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
            // 总结7内容(类比推理)
            getSummary7(){
                let self = this;
                let data = [{
                    label: '解题方法：',
                    children: [{
                        label: '语义关系',
                        children: [
                            {label: '近义/反义关系  感情色彩'},
                            {label: '比喻义、象征义'},
                        ],
                    }, {
                        label: '逻辑关系',
                        children: [
                            {label: '全同关系'},
                            {
                                label: '并列关系',
                                children: [
                                    {label: '矛盾关系：非A即B'},
                                    {label: '反对关系：除了A、B，还有其他情况'},
                                ],
                            },
                            {
                                label: '包容关系',
                                children: [
                                    {label: '种属关系：小技巧：用“是”造句，造的通顺'},
                                    {label: '组成关系'},
                                ],
                            },
                            {label: '交叉关系： 小技巧：用“有的A是B”与“有的A不是B”造句，正反都能造得通'},
                            {
                                label: '对应关系',
                                children: [
                                    {label: '材料'},
                                    {label: '工艺：物理变化、化学变化'},
                                    {label: '属性：必然属性、或然属性'},
                                    {label: '功能'},
                                    {label: '时间顺序：主体一致、主体不一致'},
                                    {label: '因果'},
                                ],
                            },
                        ],
                    }, {
                        label: '语法关系',
                        children: [
                            {label: '主谓关系'},
                            {label: '动宾关系'},
                            {label: '主宾关系'},
                        ],
                    }]
                },{
                    label: '解题技巧：词语拆分 ⇒ 什么时候拆分看？',
                    children: [
                        {label: '单字拆分'},
                        {label: '成语被拆分'},
                        {label: '两组词语之间没有明显逻辑关系'},
                    ]
                }];
                self.$set(self.summary, 'd7', data);
            },
            // 总结8内容(定义判断)
            getSummary8(){
                let self = this;
                let data = [{
                    label: '解题思路',
                    children: [
                        {label: '看清提问方式：属于/符合；不属于/不符合'},
                        {label: '识别有效信息：找准关键字、关键句'},
                        {label: '逐一分析选项：对比选项'},
                    ]
                },{
                    label: '快速识别有效信息',
                    children: [
                        {label: '主体、客体'},
                        {label: '句式'},
                        {label: '包含定义的句子优先看'},
                        {label: '补充说明'},
                        {label: '多定义问谁先看谁'},
                    ]
                },{
                    label: '小技巧',
                    children: [
                        {label: '拆词'},
                        {label: '同构选项'},
                    ]
                }];
                self.$set(self.summary, 'd8', data);
            },
            // 总结9内容(翻译推理)
            getSummary9(){
                let self = this;
                let data = [{
                    label: '题型特征',
                    children: [
                        {label: '题干和选项中出现比较明显的逻辑关联词'},
                        {label: '提问方式是“可以推出” “不能推出” 等'},
                    ]
                },{
                    label: '解题思维',
                    children: [
                        {label: '先翻译，后推理 ：  注意：不要通过理解语义来解题'},
                    ]
                },{
                    label: '翻译规则',
                    children: [{
                        label: '前推后',
                        children: [
                            {label: '（1）如果……那么……'},
                            {label: '（2）若……则……'},
                            {label: '（3）只要……就……'},
                            {label: '（4）所有……都……'},
                            {label: '（5）为了……一定（必须）……'},
                            {label: '（6）……是……的充分条件'},
                        ],
                    }, {
                        label: '后推前',
                        children: [
                            {label: '（1）只有……才……'},
                            {label: '（2）不……不……'},
                            {label: '（3）除非……否则不……'},
                            {label: '（4）……是……的基础 / 假设 / 前提 / 关键'},
                            {label: '（5）……是……的必要条件 / 必不可少的条件'},
                            {label: '（6）……是……的充分条件'},
                        ],
                    }, {
                        label: '易错点',
                        children: [
                            {label: '谁是必要条件，谁放在箭头后面'},
                            {label: '除非……否则……'},
                        ],
                    }]
                }, {
                    label: '推理规则',
                    children: [
                        {
                            label: '逆否等价',
                            children: [
                                {label: 'A → B = － B →－ A'},
                                {label: '肯前必肯后，否后必否前，否前肯后无必然结论'},
                            ],
                        },
                        {
                            label: '传递规则',
                            children: [
                                {label: '① → ②，② → ③ ⇒ ① → ③'},
                                {label: '关联词后半部分：但、却、而且'},
                            ],
                        },
                    ]
                }, {
                    label: '且和或关系',
                    children: [
                        {
                            label: '“且”关系',
                            children: [
                                {label: '（1）……和……'},
                                {label: '（2）……并且……'},
                                {label: '（3）既……又……'},
                                {label: '（4）不仅……而且……'},
                                {label: '（5）虽然……但是……'},
                            ],
                        },
                        {
                            label: '“或”关系',
                            children: [
                                {label: '（1）……或者……'},
                                {label: '（2）或者……或者……'},
                                {label: '（3）……和……至少一个'},
                                {label: '当“或”关系为真时，否定一项可以推出另一项，即“否一推一”'},
                            ],
                        },
                        {
                            label: '德·摩根定律',
                            children: [
                                {label: '-（A 且 B）＝ -A 或 -B'},
                                {label: '-（A 或 B）＝ -A 且 -B'},
                            ],
                        },
                    ]
                }, {
                    label: '推理方式',
                    children: [
                        { label: '提问方式：推理方式/结构与题干的推理方式/结构相同', },
                        { label: '解题思路：不要考虑推理是否正确，只考虑与题干是否一致', },
                    ]
                }];
                self.$set(self.summary, 'd9', data);
            },
            // 总结10内容(组合排列)
            getSummary10(){
                let self = this;
                let data = [{
                    label: '题型特征：题干中给出一组对象和相关信息，要求把对象和信息进行匹配',
                },{
                    label: '常用方法',
                    children: [{
                        label: '排除法',
                        children: [
                            {label: '何时用：题干信息确定',},
                            {label: '如何用：读一句，排一句',},
                        ],
                    }, {
                        label: '代入法',
                        children: [{
                            label: '何时用',
                            children: [
                                {label: '（1）题干信息不确定'},
                                {label: '（2）提问为“可能/不可能”'},
                                {label: '（3）提问为“补充以下哪个条件”'},
                            ],
                        }, {
                            label: '如何用：把选项代入题干验证'
                        }],
                    }]
                }, {
                    label: '辅助技巧',
                    children: [
                        {label: '最大信息：以题干中出现次数最多的信息为推理起点'},
                        {label: '符号：出现大小比较，借助“>” “=” “<” 推理'},
                        {label: '列表格：对象和信息比较多，借助列表推理'},
                    ]
                }, {
                    label: '特殊题型：材料题',
                    children: [
                        {
                            label: '与非材料题的解题方法一致',
                        },
                        {
                            label: '通过材料直接推出来的结论可以直接应用于多有题目',
                        },
                    ]
                }];
                self.$set(self.summary, 'd10', data);
            },
            // 总结11内容(削弱论证)
            getSummary11(){
                let self = this;
                let data = [{
                    label: '题型特征：提问中包含“削弱” “质疑” “反驳” “否定” 等',
                },{
                    label: '削弱方式',
                    children: [{
                        label: '否定论点',
                        children: [
                            {label: '选项特征：与论点表述的意思相反'},
                            {
                                label: '解题步骤：',
                                children: [
                                    {label: '（1）找出论点'},
                                    {label: '（2）想出与论点相反意思的表述'},
                                    {label: '（3）寻找对应选项'},
                                ],
                            },
                        ]
                    }, {
                        label: '拆桥',
                        children: [
                            {label: '题型特征：论点和论据讨论的话题不一致'},
                            {label: '选项特征：同时包含论点和论据中的关键词，并否定论点和论据之间的必然联系'},
                            {label: '注：提问方式为问“削弱论证”时，优先考虑拆桥'},
                        ]
                    }]
                }, {
                    label: '否定论证',
                    children: [
                        {
                            label: '题型论证',
                            children: [
                                {label: '题干中出现支持方、反对方观点相反，经常采用否定论据来削弱'},
                                {label: '题干存在论据并且在找不到否定论点和拆桥的情况下，考虑否定论据'},
                            ]
                        },
                        {label: '选项特征：与论据表述的意思相反'},
                    ]
                }, {
                    label: '因果类',
                    children: [
                        {label: '因果倒置：将论点中的因果关系顺序颠倒'},
                        {label: '他因削弱：在原来原因1的基础上，选项增加另一个同时存在的原因2也能导致相同的结果，削弱的是原来原因的重要性或者唯一性'},
                    ]
                }];
                self.$set(self.summary, 'd11', data);
            },
            // 总结12内容(加强论证)
            getSummary12(){
                let self = this;
                let data = [{
                    label: '题型特征：提问中包含“支持” “加强” “前提/假设” 等',
                },{
                    label: '加强方式：',
                    children: [{
                        label: '补充论据',
                        children: [
                            {label: '题型特征：论点和论据讨论的话题一致'},
                            {label: '解释 ： 选项特征 ： 说明论点成立的原因'},
                            {label: '举例 ： 选项特征 ： 证明论点成立的例子'},
                        ],
                    }, {
                        label: '搭桥',
                        children: [
                            {label: '题型特征：论点和论据讨论的话题不一致'},
                            {label: '选项特征：同时包含论点和论据中的关键词，并肯定论点和论据之间的关系'},
                            {label: '注：提问方式为问前提、假设、必要条件、支持论证时，优先考虑搭桥'},
                        ],
                    }, {
                        label: '必要条件',
                        children: [
                            {label: '题型特征：提问方式为问前提、假设、必要条件、支持论证，无搭桥项'},
                            {label: '选项判断：没它不行'},
                        ],
                    }, {
                        label: '小贴士',
                        children: [
                            {label: '类比加强的力度非常弱，类比加强只有在其他加强方式都没有的情况下，才有可能是正确答案'},
                        ],
                    }]
                }];
                self.$set(self.summary, 'd12', data);
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