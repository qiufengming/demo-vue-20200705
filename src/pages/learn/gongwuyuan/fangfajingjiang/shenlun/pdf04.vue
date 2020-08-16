<template>
    <div class="pdf-wrap" id="pdf04">
        <!-- 公式参考： https://blog.csdn.net/qq_42454244/article/details/104612666?utm_medium=distribute.pc_relevant.none-task-blog-baidulandingword-3&spm=1001.2101.3001.4242 -->
        <div class="pdf-cover">
            <h1 class="text-c pdf-t"><span>方法精讲 - 申论</span></h1>
        </div>
        <div class="border-radius">
            <p>1.晨读资料怎么用：</p>
            <p>（1）晨读资料是从《新华网》、《人民日报》等官方网站上收集的新闻热点，一般以热点评论文的形式呈现，例如针对改善民生，加强社会治理的现象，评论员写了一篇文章。每天早上粉笔的官方微博、圈子、班级群中都会发热点资料，统称为晨读资料。</p>
            <p>（2）如何运用：</p>
            <p>①晨读资料主要针对作文，小题主要从资料中找答案，只有作文会遇到材料之外的素材，例如举例论证一个观点，或者用名人名言来论证一个观点，这时需要用到材料之外的素材，如果都用材料内的素材，则不能体现“结合实际，不拘泥于‘给定资料’”。这些素材需要平时多读多看、养成习惯得来，看晨读资料就是提炼其中好的素材，这是最基础的。</p>
            <p>②申论考的是大家对一些社会现象能否有逻辑地分析出来，分析不是凭空捏造的，而是根据资料进行分析，即申论考查大家是否能够将一篇资料有逻辑地分析、整理出来。晨读资料就是一篇很长的、有逻辑的资料，大家是否能将晨读资料有逻辑地分析出来，所以更高层次阅读晨读资料要划分出逻辑。例如资料一共有 5 段，段 1 引出话题，段 2 按照多个主体分析原因，接下来提出了一些对策，如果能像这样将资料按逻辑划分出来，这样大家的逻辑水平就得到了提升，利于大家理解申论材料。</p>
            <p>（3）如果大家考上了公务员，简称“文山会海”，天天看文件、开会、帮领导写材料，这些都与文字打交道，那么怎么考查大家是否具备处理文字的能力。</p>
            <p>①首先要能听懂领导的话，例如国家领导人去企业视察讲话，提到我们要尽快让中小企业复工，恢复生产，中间的规范词就是恢复生产、尽早复工、提升产生力，核心关键词就能体现大家是否听懂了，即对于文字材料能够听懂。</p>
            <p>②然后还要“输出”，即能够写出文字资料、简洁清晰的答案、一篇作文、一篇公文，申论就是考查文字处理的能力，晨读资料那么长，大家能否读懂，并且加工出来，这些就是文字加工、处理的能力。</p>
            <p>2.关于字迹：字好看会占便宜，主要体现在作文，例如两个人的作文都是 27 分的水平，但 A 的字迹非常大方、工整、漂亮，在此基础上会酌情加 3-5 分，这是锦上添花的效果，如果作文只考了 12 分，就算加 5 分，也还是三类问题，起不到效果。使用黑色的签字笔，或者钢笔，笔芯的粗细根据自己的喜好而定，建议用签字笔，因为钢笔的墨水容易弄黑试卷。</p>
            <p>3.行书、楷书都可以，写草书会扣分。字丑没关系，只要工整、干净即可，阅卷人不会因为字丑扣分，只会因为字好看加 3 分左右。</p>
            <p>4.写错字了轻轻划掉，接着写即可，如果在作文中写错了可以不改，不要用透明胶、涂改液、用口水擦。不改可能还看不到，一改就看到了。</p>
            <p>5.是否需要用铅笔写一遍，再誊写：不需要用铅笔写一遍，再誊写，直接在题本上标注，例如标注“问题 1”“D1”，或者不同水彩笔标注，只要标注清楚，然后往答题纸上抄，题本上可以随意标注，但不能在答题纸上乱涂乱画，就算打草稿，也只是在题本上简要标注，没有时间让大家写一遍，再抄一遍。</p>
            <p>6.申论提高不难，很多同学从 40 分提到了 80 分。</p>
        </div>
        
        <div class="chapter-wrap">
            <h2 class="text-c chapter-t" @click="sectionOpenClose('s1')"><span>第一章 | 申论基础</span></h2>
            <div class="section-wrap" v-show="sectionOpen.s1">
                <div class="modal-wrap">
                    <h4 class="modal-t">一、答题要素与基本题型</h4>
                    <div class="modal-c">
                        <div class="border-radius">
                            <p>1.要素：问题、影响（危害、意义）、对策等。</p>
                            <p>2.题型：单一题、综合题、公文题、文章写作题</p>
                        </div>
                    </div>
                </div>
                <div class="modal-wrap">
                    <h4 class="modal-t">二、申论答题步骤</h4>
                    <div class="modal-c">
                        <dl class="knowledge">
                            <dt>（一）审题</dt>
                            <dd>1.审作答范围：</dd>
                            <dd>2.审作答主题与结构：</dd>
                            <dd>3.审作答要求：</dd>
                        </dl>
                        <dl class="knowledge">
                            <dt>（二）阅读资料</dt>
                            <dd>1.摘抄</dd>
                            <dd>2.概括归纳</dd>
                            <dd>3.推导</dd>
                        </dl>
                        <dl class="knowledge">
                            <dt>（三）组织答案</dt>
                            <dd>1.加序号</dd>
                            <dd>常见的方法是在要点前加“1.2.3.”或“①②③”或“一、二、三、”。</dd>
                            <dd>2.分类整理</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>

        <div class="chapter-wrap">
            <h2 class="text-c chapter-t" @click="sectionOpenClose('s2')"><span>第二章 | 单一题</span></h2>
            <div class="section-wrap" v-show="sectionOpen.s2">
                <div class="modal-wrap">
                    <h4 class="modal-t">一、问题</h4>
                    <div class="modal-c">
                        <div class="border-radius">
                            <p>1.常见的命题方式</p>
                            <p>问题、不足、困境、瓶颈、挑战、难点等。</p>
                            <p>2.答题技巧</p>
                            <p>寻找负面的标志性词汇：不科学、不合理、不到位、不均衡、不完善、不健全、不足；缺乏、缺少、流失；少、低、差、弱、陈旧、单一等</p>
                        </div>
                    </div>
                </div>
                <div class="modal-wrap">
                    <h4 class="modal-t">二、影响</h4>
                    <div class="modal-c">
                        <div class="border-radius">
                            <p>1.常见问法影响大致可以分成正面影响和负面影响两类</p>
                            <p>（1）正面影响的常见问法：意义、效果、成果、积极作用等。</p>
                            <p>（2）负面影响的常见问法：危害、后果等。</p>
                            <p>2.答题技巧一些标志性词汇构成的词组往往是影响的得分词。常见的表影响的标志性词汇有：</p>
                            <p>（1）正面影响：激发、促进、实现、提升...；有利于、有助于、感动着、推动了、巩固了...</p>
                            <p>（2）负面影响：引发、导致、造成、危及、损害...；消解着、割裂着、破坏了、阻碍了、致使...</p>
                        </div>
                    </div>
                </div>
                <div class="modal-wrap">
                    <h4 class="modal-t">三、对策</h4>
                    <div class="modal-c">
                        <div class="border-radius">
                            <p>1.常见问法</p>
                            <p>答题元素中表对策的常见词汇有：对策、措施、举措、建议、意见、做法、解决方法、经验、启示等。</p>
                            <p>2.答题技巧</p>
                            <p>（1）直接摘抄。资料中出现表对策的标志性动词时，该处往往有得分点。</p>
                            <p>常见的动词有：建立、健全、统筹、创新、规范、整顿、打击、扶持、规划、设置等。</p>
                            <p>（2）问题反推：解决资料中的现有问题。</p>
                            <p>（3）经验借鉴：其他地区或国家的成功经验可以拿来借鉴。</p>
                        </div>
                    </div>
                </div>
                <div class="modal-wrap">
                    <h4 class="modal-t">四、特殊要素</h4>
                    <div class="modal-c">
                        <div class="border-radius">
                            <p>1.常见问法变化、特点、优点、成绩、争议等。</p>
                            <p>2.答题技巧按照日常用语理解题目问法，并去资料中找寻相应信息。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="chapter-wrap">
            <h2 class="text-c chapter-t" @click="sectionOpenClose('s3')"><span>第三章 | 综合题</span></h2>
            <div class="section-wrap" v-show="sectionOpen.s3">
                <div class="border-radius">
                    <p>词句解释题</p>
                    <p>针对一个或多个词汇、短语或句子进行理解和分析的题目。</p>
                    <p></p>
                    <table width="100%">
                        <thead>
                            <tr> <td>题型</td> <td>词句解释题</td> </tr>
                        </thead>
                        <tbody>
                            <tr> 
                                <td>题型判断</td> 
                                <td>谈...的含义；对...进行解释和；谈对...的理解</td> 
                            </tr>
                            <tr> 
                                <td>常规思路</td> 
                                <td>释义（一般根据与所要解释的词句相近的句子，如专家观点、权威观点、总结句等，得出词句的字面含义） + 分析相关要素（问题、危害、意义、事例等）+对策（应该怎么做）</td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="chapter-wrap">
            <h2 class="text-c chapter-t" @click="sectionOpenClose('s4')"><span>第四章 | 公文题</span></h2>
            <div class="section-wrap" v-show="sectionOpen.s4">
                <div class="modal-wrap">
                    <h4 class="modal-t">一、典型例题</h4>
                    <div class="modal-c">
                    </div>
                </div>
                <div class="modal-wrap">
                    <h4 class="modal-t">二、阅卷要求</h4>
                    <div class="modal-c">
                        <div class="border-radius">
                            <p>格式分：标题、称谓（主送机关）、落款。</p>
                            <p>内容分：问题、危害、意义、对策等。</p>
                            <p>语言分：通俗易懂、表达生动、有感染力、有号召力、态度诚恳、建议口吻等。</p>
                        </div>
                    </div>
                </div>
                <div class="modal-wrap">
                    <h4 class="modal-t">三、格式</h4>
                    <div class="modal-c">
                        <dl class="knowledge">
                            <dt>（一）具体格式</dt>
                            <dd>1.标题</dd>
                            <dd>（1）自拟标题。</dd>
                            <dd>&nbsp;&nbsp;- 例如：女神妈祖，天下一家。</dd>
                            <dd>（2）一般写法。</dd>
                            <dd>&nbsp;&nbsp;- 发文机关+“关于”+事由+“的”+文种。</dd>
                            <dd>&nbsp;&nbsp;- 例如：国务院关于坚决稳定市场物价的通知。</dd>
                            <dd>（3）书写格式。</dd>
                            <dd>&nbsp;&nbsp;- 标题要居中书写（不带有书名号）。</dd>
                            <dd>2.称谓（主送机关）</dd>
                            <dd>（1）称谓（对象为人物）。</dd>
                            <dd>&nbsp;&nbsp;- 例如：尊敬的与会嘉宾、广大家长朋友们等。</dd>
                            <dd>（2）主送机关（对象为单位）。</dd>
                            <dd>&nbsp;&nbsp;- 例如：各社区、各街道办等。</dd>
                            <dd>（3）书写格式。</dd>
                            <dd>&nbsp;&nbsp;- 顶格书写。</dd>
                            <dd>3.落款</dd>
                            <dd>（1）单位（个人）。</dd>
                            <dd>&nbsp;&nbsp;- 例如：某企业工会（写在时间上一行）。</dd>
                            <dd>（2）时间</dd>
                            <dd>&nbsp;&nbsp;- 例如：2020年××月××日或者××××年××月××日。</dd>
                            <dd>（3）书写格式。</dd>
                            <dd>&nbsp;&nbsp;- 落款位于正文右下方，日期右空四个格子，发文者位于日期上面居中。</dd>
                        </dl>
                        <dl class="knowledge">
                            <dt>（二）公文有无格式对应表</dt>
                            <dd>
                                <table>
                                    <thead> <tr> <td>题目</td> <td>标题</td> <td>称为</td> <td>落款</td> </tr> </thead>
                                    <tbody>
                                        <tr> <td>报告、通告、意见、通知等</td> <td>有</td> <td>有</td> <td>有</td> </tr>
                                        <tr> <td>倡议书、公开信、宣传稿</td> <td>有</td> <td>有</td> <td>有</td> </tr>
                                        <tr> <td>经验发言稿、事件处理发言稿</td> <td>有</td> <td>有</td> <td>根据格子确定</td> </tr>
                                        <tr> <td>时评、网评、新闻稿等</td> <td>有</td> <td>无</td> <td>有</td> </tr>
                                        <tr> <td>调查问卷、活动方案</td> <td>有</td> <td>无</td> <td>有</td> </tr>
                                        <tr> <td>编者按、内容要点</td> <td>无</td> <td>无</td> <td>有</td> </tr>
                                        <tr> <td>明确要求不写公文格式的命题方式</td> <td>无</td> <td>无</td> <td>有</td> </tr>
                                    </tbody>
                                </table>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div class="modal-wrap">
                    <h4 class="modal-t">四、分类及真题演练</h4>
                    <div class="modal-c">
                        <dl class="knowledge">
                            <dt>（一）分类的标准</dt>
                            <dd>根据身份、对象和目的意图的不同，公文在内容要点的侧重点、语言表达和书写格式等方面略有不同。按不同目的意图，公文大致分为四类：方案类、宣传类、总结类、评论类。</dd>
                        </dl>
                        <dl class="knowledge">
                            <dt>（二）具体类别</dt>
                            <dd>1.方案类</dd>
                            <dd>（1）如何识别方案类公文。</dd>
                            <dd>&nbsp;&nbsp;- 方案类公文主要是为某个或者某些对象能够更好地完成工作或任务而进行的规划，一般侧重对策、建议、具体做法。</dd>
                            <dd>（2）典型的方案类公文。</dd>
                            <dd>&nbsp;&nbsp;- 指导意见、建议、活动方案等</dd>
                            <dd>（3）方案类公文常规思路。</dd>
                            <dd>
                                <div class="border-radius">
                                    <p style="text-align: center;">“关于”+事由+“的”+文种</p>
                                    <p>主送机关（发文对象）：</p>
                                    <p style="padding-left: 20px;">开头：交代缘由（背景、根据、目的、意义、问题等）</p>
                                    <p style="padding-left: 20px;">主体：具体解决问题的对策</p>
                                    <p style="padding-left: 20px;">结尾</p>
                                    <p style="text-align: right;padding-right: 20px;">发文机关（发文者）</p>
                                    <p style="text-align: right;">××××年××月××日</p>
                                </div>
                            </dd>
                            <dd>（4）真题演练。</dd>
                            <dd></dd>
                            <dd>2.宣传类</dd>
                            <dd>（1）如何识别宣传类公文。</dd>
                            <dd>宣传类公文的主要目的是通过说服、劝解、号召、宣传等转变认知、看法，增长知识，进而倡导被宣传对象采取某些行动或者措施。</dd>
                            <dd>（2）典型的宣传类公文。</dd>
                            <dd>公开信、倡议书、宣传稿等。</dd>
                            <dd>（3）宣传类公文常规思路。</dd>
                            <dd>
                                <div class="border-radius">
                                    <p style="text-align: center;">“关于”+事由+“的”+文种</p>
                                    <p>主送机关（发文对象）：</p>
                                    <p style="padding-left: 20px;">开头：介绍情况（背景、根据等）</p>
                                    <p style="padding-left: 20px;">主体：劝服（问题、危害、意义等）+倡议（对策）</p>
                                    <p style="padding-left: 20px;">结尾：呼吁号召</p>
                                    <p style="text-align: right;padding-right: 20px;">发文机关（发文者）</p>
                                    <p style="text-align: right;">××××年××月××日</p>
                                </div>
                            </dd>
                            <dd></dd>
                            <dd>3.总结类</dd>
                            <dd>（1）如何识别总结类公文。总结类公文主要目的是把具体情况告知或汇报给某个或者某些对象。（其中具体情况中的要素要根据给定资料来确定）</dd>
                            <dd>（2）典型的总结类公文。汇报（提纲）、讲话稿、发言稿、调查报告、编者按等。</dd>
                            <dd>（3）总结类公文常规思路。</dd>
                            <dd>
                                <div class="border-radius">
                                    <p style="text-align: center;">“关于”+事由+“的”+文种</p>
                                    <p>主送机关（发文对象）：</p>
                                    <p style="padding-left: 20px;">开头：引出主题（背景、根据、目的等）</p>
                                    <p style="padding-left: 20px;">主体：总结与主题相关的要素（问题、危害、意义、对策等）结尾+倡议（对策）</p>
                                    <p style="text-align: right;">发文机关（发文者）</p>
                                    <p style="text-align: right;">××××年××月××日</p>
                                </div>
                            </dd>
                            <dd>（4）真题演练。</dd>
                            <dd></dd>
                            <dd>4.评论类</dd>
                            <dd>（1）如何识别评论类公文。评论类公文的目的是对某些现象或观点进行评价。</dd>
                            <dd>（2）典型的评论类公文。时评、评论文等。</dd>
                            <dd>（3）评论类公文常规思路。</dd>
                            <dd>
                                <div class="border-radius">
                                    <p style="text-align: center;">标题</p>
                                    <p style="padding-left: 20px;">开头：介绍评论对象（含义、表现等）+表明观点</p>
                                    <p style="padding-left: 20px;">主体：评析论证（根据题目倾向确定内容，结合资料丰富完善）</p>
                                    <p style="padding-left: 20px;">结尾：对策、升华等</p>
                                    <p style="padding-left: 20px;">（备注：评论类公文的标题一般不按照“发文机关+‘关于’+事由+‘的’+文种”的方式来写，标题一般不重视文种的表达，更重 视观点的体现。例如：告别跟风 走向成熟）</p>
                                </div>
                            </dd>
                            <dd>（4）真题演练。</dd>
                        </dl>
                    </div>
                </div>
                <div class="border-radius">
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                </div>
            </div>
        </div>
        <div class="chapter-wrap">
            <h2 class="text-c chapter-t" @click="sectionOpenClose('s5')"><span>第五章 | 文章写作题</span></h2>
            <div class="section-wrap" v-show="sectionOpen.s5">
                <div class="modal-wrap">
                    <h4 class="modal-t">一、作文的评分规则</h4>
                    <div class="modal-c">
                        <div class="border-radius">
                            <p>【例1】2014年国考（副省级）大作文阅卷规则</p>
                            <p>“给定资料”结尾写道：“我们或许应该如作家米兰·昆德拉所言，要‘慢下来’，因为自在有为的生活是急不得的。”请结合你对这句话的思考，联系自己的感受和社会实际，自拟题目，写一篇文章。（40分）</p>
                            <p>要求：（1）自选角度，见解深刻；（2）参考“给定资料”，但不拘泥于“给定资料”；（3）思路清晰，语言流畅；（4）总字数1000～1200字。</p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p>评分标准：</p>
                            <p>A类文：33～40分，以36分为基准分，根据作文具体情况上下浮动。</p>
                            <p>（1）对“慢下来”的理解准确、深刻。</p>
                            <p>（2）从给定资料出发，写出自己的切身感受。</p>
                            <p>（3）具有社会实际的例证。</p>
                            <p>（4）思路清晰，语言流畅，文面整洁，字迹工整。</p>
                            <p>B类文：24～32分，以28分为基准分。</p>
                            <p>（1）对“慢下来”的理解基本正确。</p>
                            <p>（2）从给定资料出发，写出自己的一些感受。</p>
                            <p>（3）具有社会实际的例证。</p>
                            <p>（4）思路较为清晰，语言基本流畅，文面整洁</p>
                            <p>C类文：17～23分，以20分为基准分。</p>
                            <p>（1）对“慢下来”的理解不准确，有偏差</p>
                            <p>（2）能够从给定资料出发，但缺乏自己的感受</p>
                            <p>（3）没有社会实际的例证。</p>
                            <p>（4）思路基本清晰，语言基本流畅。</p>
                            <p>D类文：9～16分，以13分为基准分。</p>
                            <p>（1）对“慢下来”的理解偏离正确含义。</p>
                            <p>（2）能够从资料出发，但没有自己的感受。</p>
                            <p>（3）没有社会实际的例证。</p>
                            <p>（4）思路基本清晰，语言基本流畅。</p>
                            <p>E类文：8分以下，以5分为基准分。</p>
                            <p>（1）对“慢下来”的理解严重背离正确含义。</p>
                            <p>（2）内容空泛，缺乏自己的感受。</p>
                            <p>（3）没有社会实际的例证。</p>
                            <p>（4）大量抄袭给定资料。</p>
                            <p>（5）思路混乱，语言不通，文面不整洁。</p>
                        </div>
                    </div>
                </div>
                <div class="modal-wrap">
                    <h4 class="modal-t">二、作文的主题与观点</h4>
                    <div class="modal-c">
                        <div class="border-radius">
                            <p>1.主题与观点</p>
                            <p>文章的主题，即议论对象、写作对象；文章的观点，即在文章写作过程中，希望考生表达出来的、所有的重要信息。在实际考试中，找准主题后，可以从阐释含义，分析原因或意义、危害，提出对策等角度切入展开主题。然后围绕一个特定主题，从关系、问题、原因、意义、危害、对策等角度提出观点，并结合资料内容和社会实际例子展开论述。</p>
                            <p>2.如何确定作文的主题与观点</p>
                            <p>第一步：剖析题干，梳理写作方向。</p>
                            <p>第二步：梳理资料挖掘观点+丰富观点表达。</p>
                            <p>优先阅读：指定资料、小题未涉及资料、权威材料。</p>
                            <p>关照全篇：小题提示（题干、答案）、全部给定资料</p>
                            
                        </div>
                    </div>
                </div>
                <div class="modal-wrap">
                    <h4 class="modal-t">三、作文的结构</h4>
                    <div class="modal-c">
                        <div class="border-radius">
                            <p>何谓文章结构？文章结构是文章的谋篇布局。形式上，一般而言包括标题、开头、过渡、分析论证、结尾等基本构成部分。内容上，有以对策为主的文章结构，也有以分析内涵、原因、意义等为主的文章结构。文章没有固定套路模式，即文无定式，要根据具体文章确定。</p>
                            <p>1.如何写好标题</p>
                            <p>好的标题应该起到画龙点睛的作用。一般而言，标题应该包含文章的主题和观点。常见的取标题的形式有以下几种：</p>
                            <p>（1）常规型标题。</p>
                            <p>【例】</p>
                            <p>把简政放权做实做好（把××做实做好）</p>
                            <p>担起防治污染的主体责任（担起××的主体责任）</p>
                            <p>迈好“科技强国”的坚实一步（迈好××的坚实一步）</p>
                            <p>全民守法是建设法治国家的基础（××是××的基础）</p>
                            <p>（2）比喻式标题。</p>
                            <p>【例】</p>
                            <p>政务公开进入“快车道”</p>
                            <p>绘好科技创新的“工笔画”</p>
                            <p>家教是孩子最好的“营养剂</p>
                            <p>给小微企业戴上“法律护身符”</p>
                            <p>（3）警醒式标题。</p>
                            <p>【例】</p>
                            <p>莫让诗词“热”一时</p>
                            <p>莫让“丧文化”伤了孩子</p>
                            <p>新闻，不要以伤害为代价</p>
                            <p>文化艺术，勿以传统反现代</p>
                            <p>（4）对称式标题。</p>
                            <p>【例】</p>
                            <p>身在急时代 &nbsp;&nbsp; 心享慢生活</p>
                            <p>资源共享 &nbsp;&nbsp; 文明共担</p>
                            <p>弘扬优良家风 &nbsp;&nbsp; 助力中国腾飞</p>
                            <p>勇于自我革命 &nbsp;&nbsp; 战胜风险挑战</p>
                            <p>（5）主副式标题。</p>
                            <p>【例】</p>
                            <p>平衡</p>
                            <p style="padding-left: 40px;">——幸福生活需处理好“快”与“慢”的关系</p>
                            <p>破解“曲高和寡”的文艺困境</p>
                            <p style="padding-left: 40px;">——用新媒体让高雅艺术接地气</p>
                            <p>用好“能上能下”的指挥棒</p>
                            <p style="padding-left: 40px;">——完善干部管理制度 让机关不养闲人</p>
                            <p>不患寡而患不均</p>
                            <p style="padding-left: 40px;">——扶贫工作要注重公平</p>
                            <p></p>
                            <p>2.如何写好开头</p>
                            <p>文章开头的作用是突出主题观点，常见的有以下几种方法：</p>
                            <p>（1）阐释式。</p>
                            <p>（2）评论式。</p>
                            <p>（3）总结式。</p>
                            <p></p>
                            <p>3.论证的结构与方法</p>
                            <p>（1）论证结构。</p>
                            <p>&nbsp;&nbsp;- 论证=观点+阐释+举例+引言+总结回扣</p>
                            <p>（2）论证的方法。</p>
                            <p>&nbsp;&nbsp;- 论证是用论据证明观点的过程。</p>
                            <p>（3）论据的充实。</p>
                            <p>论据是证明观点合理性的证据。主要有：</p>
                            <p>事实论据：社会热点、经典故事、数据、调查报告、新闻报道。</p>
                            <p>理论论据：名人名言、俗语俚语、领导人讲话、理论政策、客观规律、科学原理、论著文章</p>
                            <p>【例】名人名言：</p>
                            <p>经济领域：</p>
                            <p>①治国常富而乱国常贫。是以善为国者，必先富民，然后治之。（《管子·治国》）</p>
                            <p>②中国这么大，必须始终高度重视发展壮大实体经济，不能走单一发展、脱实向虚的路子。（习近平）</p>
                            <p>政治领域：</p>
                            <p>①天下之事，不难于立法，而难于法之必行。（张居正）</p>
                            <p>②勇于自我革命，从严管党治党，是我们党最鲜明的品格。（习近平）</p>
                            <p>文化领域：</p>
                            <p>①人是文化的创造者，也是文化的宗旨。（高尔基）</p>
                            <p>②中华文化积淀着中华民族最深沉的精神追求，是中华民族生生不息、发展壮大的丰厚滋养。（习近平）</p>
                            <p>社会领域：</p>
                            <p>①苟日新，日日新，又日新。（《礼记》）</p>
                            <p>②国以民为本，社稷亦为民而立。（朱熹）</p>
                            <p>③德之不修，学之不讲，闻义不能徙，不善不能改，是吾忧也。（孔子）</p>
                            <p>生态领域：</p>
                            <p>①只有服从大自然,才能战胜大自然。（达尔文）</p>
                            <p>②保护生态环境就是保护生产力，改善生态环境就是发展生产力。（习近平）</p>
                            <p>塑料污染重点问题纳入中央生态环境保护督察，中央发布《关于进一步加强塑料污染治理的意见》，围绕建立形成治理塑料污染的长效机制，意见提出一系列政策措施。</p>
                            <p>甘肃祁连山国家级自然保护区管理局东大山自然保护站举办民俗文化活动助力森林防火宣传。通过此次活动，大力营造“森林防火，人人有责”的浓厚氛围，凝聚“绿水青山就是金山银山”共识，切实提高了周边牧民群众的防火意识和防火主动性，为保护区森林防灭火工作奠定了扎实的群众基础。</p>
                            <p></p>
                            <p>4.如何结尾</p>
                            <p>（1）总结式。</p>
                            <p>【例】“凡事预则立，不预则废。”只有按照习近平总书记提出的要求，将防范风险的先手与应对和化解风险挑战的高招结合起来，将打好防范和抵御风险的有准备之战与打好化险为夷、转危为机的战略主动战结合起来，我们才能不断提高化解风险能力，从容应对各种挑战，推动中国航船向着民族复兴的目标破浪前行。</p>
                            <p>（2）展望式。</p>
                            <p>【例】我们有理由相信，在党和国家的号召下，在广大人民群众的努力下，在良好社会环境的孕育下，众筹一定能筹出一个更加开放、平等、自由、公平、正义的新世界。</p>
                            <p>（3）呼吁号召式。</p>
                            <p>【例】中华文化是最文明、最平和、最具有包容性的文化之一，让我们一起学习中华文化，践行中华文化，传播中华文化。让我们自信大方、大声地告诉世界：我们来了！</p>
                        </div>
                    </div>
                </div>
                <div class="modal-wrap">
                    <h4 class="modal-t">四、作文真题示例</h4>
                    <div class="modal-c">
                        <div class="border-radius">
                            <p>aaaaaaaaaaaaaaaaaaaaa</p>
                            <p>aaaaaaaaaaaaaaaaaaaaa</p>
                            <p>aaaaaaaaaaaaaaaaaaaaa</p>
                            <p>aaaaaaaaaaaaaaaaaaaaa</p>
                            <p>aaaaaaaaaaaaaaaaaaaaa</p>
                            <p>aaaaaaaaaaaaaaaaaaaaa</p>
                            <p>aaaaaaaaaaaaaaaaaaaaa</p>
                        </div>
                    </div>
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
            
        },
        mounted(){
            let self = this;
            if(self.commonsVariable.isMathjaxConfig){//判断是否初始配置，若无则配置。
                self.commonsVariable.initMathjaxConfig();
            }
            self.commonsVariable.MathQueue('pdf04');
        },
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
            // 总结10内容(特殊增长率)
            getSummary10(){
                let self = this;
                let data = [{
                    label: '间隔增长率',
                    children: [
                        {label: '识别：中间隔一年求增长率'},
                        {label: '公式：`r_(间隔)=r_1+r_2+r_1×r_2`'},
                        {
                            label: '速算：',
                            children: [
                                {label: '（1）`r_1`、`r_2`绝对值均小于10%，结合选项`r_1×r_2`可忽略'},
                                {label: '（2）百分化'},
                            ]
                        },
                    ]
                },{
                    label: '年均增长率',
                    children: [
                        {label: '识别：年均增长最快、年均增速排序'},
                        {label: '公式：`(1+r)^n=现期量÷基期量`'},
                        {label: '比较方法：比较“现期量÷基期量”（n相同）'},
                    ]
                },{
                    label: '混合增长率',
                    children: [
                        {label: '识别：部分增速与总体增速之间的关系'},
                        {label: '口诀：居中但不中，偏向基期较大的'},
                    ]
                }];
                self.$set(self.summary, 'd10', data);
            },
            // 总结11内容(简单计算)
            getSummary11(){
                let self = this;
                let data = [{
                    label: '直接找数',
                    children: [
                        {label: '注意范围等表述陷阱'},
                    ]
                },{
                    label: '简单加减',
                    children: [
                        {label: '选项与材料精度相同：尾数法'},
                        {label: '选项与材料精度不同：估算'},
                    ]
                }, {
                    label: '排序题',
                    children: [
                        {label: '时间、单位、主体、顺序'},
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
            // 画图
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