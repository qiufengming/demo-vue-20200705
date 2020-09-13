<template>
    <div class="interview_js_wrap">
        js的面试题
        <el-row>
            <el-col :span="24" class="question"><i class="el-icon-question"></i>1、前端性能优化方案</el-col>
            <el-col :span="24" class="answer">沙发沙发上</el-col>
        </el-row>
        <el-collapse v-model="activeNames" @change="handleChange" class="question_answer">
            <el-collapse-item title="1、前端性能优化方案" name="1">
                <div>（1）减少 HTTP请求数</div>
                <p>1）从设计实现层面简化页面</p>
                <p>2）合理设置 HTTP缓存</p>
                <p>3）资源合并与压缩</p>
                <p>4）CSS Sprites</p>
                <p>5）Inline Images</p>
                <p>6）Lazy Load Images</p>
                <div>（2）将外部脚本置底（将脚本内容在页面信息内容加载后再加载）</div>
                <div>（3） 异步执行 inline脚本(其实原理和上面是一样，保证脚本在页面内容后面加载。)</div>
                <div>（4） Lazy Load Javascript（只有在需要加载的时候加载，在一般情况下并不加载信息内容。）</div>
                <div>（5） 将 CSS放在 HEAD中</div>
                <div>（6） 异步请求 Callback（就是将一些行为样式提取出来，慢慢的加载信息的内容）</div>
                <div>（7） 减少不必要的 HTTP跳转</div>
                <div>（8） 避免重复的资源请求</div>
                <div>（9） 减少浏览器的repaint和reflow</div>
                <div>（10） 慎用 with</div>
                <div>（11） 避免使用 eval和 Function</div>
                <div>（12） 减少作用域链查找，要减少作用域链查找还应该减少闭包的使用。</div>
                <div>（13） Javascript中的数据访问包括直接量 (字符串、正则表达式 )、变量、对象属性以及数组，其中对直接量和局部变量的访问是最快的，对对象属性以及数组的访问需要更大的开销</div>
                <div>（14） 在 Javascript中使用"+" 号来拼接字符串效率是比较低的，因为每次运行都会开辟新的内存并生成新的字符串变量，然后将拼接结果赋值给新变量。与之相比更为高效的做法是使用数组的 join方法，即将需要拼接的字符串放在数组中最后调用其 join方法得到结果。不过由于使用数组也有一定的开销，因此当需要拼接的字符串较多的时候可以考虑用此方法。</div>
                <div>（15） 对 HTML本身的优化</div>
                <div>（16） Image压缩</div>
            </el-collapse-item>
            <el-collapse-item title="2、跨域解决方案" name="2">
                <dl>
                    <dt>（1）通过jsonp跨域</dt>
                    <dd>
                        <p>1）原生实现：</p>
                        <pre class="xml hljs">
                            <code class="html"> 
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span>
<span class="javascript">
    <span class="hljs-keyword">var</span> script = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">'script'</span>);
    script.type = <span class="hljs-string">'text/javascript'</span>;
                        
    <span class="hljs-comment">// 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数</span>
    script.src = <span class="hljs-string">'http://www.domain2.com:8080/login?user=admin&amp;callback=handleCallback'</span>;
    <span class="hljs-built_in">document</span>.head.appendChild(script);
                        
    <span class="hljs-comment">// 回调执行函数</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">handleCallback</span>(<span class="hljs-params">res</span>) </span>{
        alert(<span class="hljs-built_in">JSON</span>.stringify(res));
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                            </code>
                        </pre>
                        <p>服务端返回如下（返回时即执行全局函数）：</p>
                        <pre class="javascript hljs"><code class="js" style="word-break: break-word; white-space: initial;">handleCallback({<span class="hljs-string">"status"</span>: <span class="hljs-literal">true</span>, <span class="hljs-string">"user"</span>: <span class="hljs-string">"admin"</span>})</code></pre>
                    </dd>
                    <dd>
                        <p>2）jquery ajax：</p>
                        <pre class="javascript hljs"><code class="js">$.ajax({
                            <span class="hljs-attr">url</span>: <span class="hljs-string">'http://www.domain2.com:8080/login'</span>,
                            <span class="hljs-attr">type</span>: <span class="hljs-string">'get'</span>,
                            <span class="hljs-attr">dataType</span>: <span class="hljs-string">'jsonp'</span>,  <span class="hljs-comment">// 请求方式为jsonp</span>
                            <span class="hljs-attr">jsonpCallback</span>: <span class="hljs-string">"handleCallback"</span>,    <span class="hljs-comment">// 自定义回调函数名</span>
                            <span class="hljs-attr">data</span>: {}
                        });</code></pre>
                    </dd>
                    <dd>
                        <p>3.）vue.js：</p>
                        <pre class="javascript hljs"><code class="js"><span class="hljs-keyword">this</span>.$http.jsonp(<span class="hljs-string">'http://www.domain2.com:8080/login'</span>, {
                            <span class="hljs-attr">params</span>: {},
                            <span class="hljs-attr">jsonp</span>: <span class="hljs-string">'handleCallback'</span>
                        }).then(<span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
                            <span class="hljs-built_in">console</span>.log(res); 
                        })</code></pre>
                        <p>后端node.js代码示例：</p>
                        <pre class="javascript hljs"><code class="js"><span class="hljs-keyword">var</span> querystring = <span class="hljs-built_in">require</span>(<span class="hljs-string">'querystring'</span>);
                            <span class="hljs-keyword">var</span> http = <span class="hljs-built_in">require</span>(<span class="hljs-string">'http'</span>);
                            <span class="hljs-keyword">var</span> server = http.createServer();
                            
                            server.on(<span class="hljs-string">'request'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">req, res</span>) </span>{
                                <span class="hljs-keyword">var</span> params = qs.parse(req.url.split(<span class="hljs-string">'?'</span>)[<span class="hljs-number">1</span>]);
                                <span class="hljs-keyword">var</span> fn = params.callback;
                            
                                <span class="hljs-comment">// jsonp返回设置</span>
                                res.writeHead(<span class="hljs-number">200</span>, { <span class="hljs-string">'Content-Type'</span>: <span class="hljs-string">'text/javascript'</span> });
                                res.write(fn + <span class="hljs-string">'('</span> + <span class="hljs-built_in">JSON</span>.stringify(params) + <span class="hljs-string">')'</span>);
                            
                                res.end();
                            });
                            
                            server.listen(<span class="hljs-string">'8080'</span>);
                            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Server is running at port 8080...'</span>);</code></pre>
                    </dd>
                    <dd>
                        <p>jsonp缺点：只能实现get一种请求。</p>
                    </dd>
                    <dt>（2）document.domain + iframe跨域</dt>
                    <dd></dd>
                    <dt>（3）location.hash + iframe</dt>
                    <dt>（4）window.name + iframe跨域</dt>
                    <dt>（5）postMessage跨域</dt>
                    <dt>（6）跨域资源共享（CORS）</dt>
                    <dt>（7）nginx代理跨域</dt>
                    <dt>（8）nodejs中间件代理跨域</dt>
                    <dt>（9）WebSocket协议跨域</dt>
                </dl>
            </el-collapse-item>
            <el-collapse-item title="3、浏览器存储" name="3"></el-collapse-item>
            <el-collapse-item title="4、js原型链" name="4"></el-collapse-item>
            <el-collapse-item title="5、js数据类型" name="5"></el-collapse-item>
            <el-collapse-item title="6、浏览器渲染过程" name="6"></el-collapse-item>
            <el-collapse-item title="7、浏览器从输入 URL 到页面渲染的过程" name="7"></el-collapse-item>
            <el-collapse-item title="8、多维数组" name="8"></el-collapse-item>
            <el-collapse-item title="9、继承" name="9"></el-collapse-item>
          </el-collapse>
    </div>
</template>

<script>
    export default {
        components: {  },
        data(){
            return {
                activeNames: ['2'],
                isShowList: true,
                active: '',
            };
        },
        created(){
        },
        mounted(){},
        methods: {
            handleChange(val) {
                console.log(val);
            },
        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.interview_js_wrap{
    .question_answer{ 
        p{ margin: 5px 0; }
    }
    /deep/ .el-collapse-item__header{ font-size: 18px; font-weight: bold; }
    .code{
        padding: 1rem; max-height: 35rem; line-height: 1.5; background-color: #e9ecef; overflow: auto; margin-bottom: 1.25rem;
        font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace; margin-top: 0;
    }
    .hljs{ display: block; overflow-x: auto; padding: .5em; color: #333; background: #f8f8f8; }


    .question{
        font-size: 18px; font-weight: bold; padding: 15px 0 10px;
        .el-icon-question{ color: #E6A23C; margin-right: 15px;}
    }
    .answer{}
}
</style>
