import{_ as a,r as l,i as n,a as p}from"./chunks/framework.8a6edf47.js";const d=JSON.parse('{"title":"单文件组件 CSS 功能","description":"","frontmatter":{},"headers":[{"level":2,"title":"组件作用域 CSS","slug":"scoped-css","link":"#scoped-css","children":[{"level":3,"title":"子组件的根元素","slug":"child-component-root-elements","link":"#child-component-root-elements","children":[]},{"level":3,"title":"深度选择器","slug":"deep-selectors","link":"#deep-selectors","children":[]},{"level":3,"title":"插槽选择器","slug":"slotted-selectors","link":"#slotted-selectors","children":[]},{"level":3,"title":"全局选择器","slug":"global-selectors","link":"#global-selectors","children":[]},{"level":3,"title":"混合使用局部与全局样式","slug":"mixing-local-and-global-styles","link":"#mixing-local-and-global-styles","children":[]},{"level":3,"title":"作用域样式须知","slug":"scoped-style-tips","link":"#scoped-style-tips","children":[]}]},{"level":2,"title":"CSS Modules","slug":"css-modules","link":"#css-modules","children":[{"level":3,"title":"自定义注入名称","slug":"custom-inject-name","link":"#custom-inject-name","children":[]},{"level":3,"title":"与组合式 API 一同使用","slug":"usage-with-composition-api","link":"#usage-with-composition-api","children":[]}]},{"level":2,"title":"CSS 中的 v-bind()","slug":"v-bind-in-css","link":"#v-bind-in-css","children":[]}],"relativePath":"api/sfc-css-features.md","filePath":"api/sfc-css-features.md"}'),o={name:"api/sfc-css-features.md"};function e(t,s,c,E,r,y){return l(),n("div",null,s[0]||(s[0]=[p(`<h1 id="sfc-css-features" tabindex="-1">单文件组件 CSS 功能 <a class="header-anchor" href="#sfc-css-features" aria-label="Permalink to &quot;单文件组件 CSS 功能 {#sfc-css-features}&quot;">​</a></h1><h2 id="scoped-css" tabindex="-1">组件作用域 CSS <a class="header-anchor" href="#scoped-css" aria-label="Permalink to &quot;组件作用域 CSS {#scoped-css}&quot;">​</a></h2><p>当 <code>&lt;style&gt;</code> 标签带有 <code>scoped</code> attribute 的时候，它的 CSS 只会影响当前组件的元素，和 Shadow DOM 中的样式封装类似。使用时有一些注意事项，不过好处是不需要任何的 polyfill。它的实现方式是通过 PostCSS 将以下内容：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.example</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">red</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;example&quot;</span><span style="color:#E1E4E8;">&gt;hi&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>转换为：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.example</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">data-v-f3f3eg9</span><span style="color:#E1E4E8;">] {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">red</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;example&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data-v-f3f3eg9</span><span style="color:#E1E4E8;">&gt;hi&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="child-component-root-elements" tabindex="-1">子组件的根元素 <a class="header-anchor" href="#child-component-root-elements" aria-label="Permalink to &quot;子组件的根元素 {#child-component-root-elements}&quot;">​</a></h3><p>使用 <code>scoped</code> 后，父组件的样式将不会渗透到子组件中。不过，子组件的根节点会同时被父组件的作用域样式和子组件的作用域样式影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。</p><h3 id="deep-selectors" tabindex="-1">深度选择器 <a class="header-anchor" href="#deep-selectors" aria-label="Permalink to &quot;深度选择器 {#deep-selectors}&quot;">​</a></h3><p>处于 <code>scoped</code> 样式中的选择器如果想要做更“深度”的选择，也即：影响到子组件，可以使用 <code>:deep()</code> 这个伪类：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.a</span><span style="color:#E1E4E8;"> :deep(</span><span style="color:#B392F0;">.b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>上面的代码会被编译成：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">.a</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">data-v-f3f3eg9</span><span style="color:#E1E4E8;">] </span><span style="color:#B392F0;">.b</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>通过 <code>v-html</code> 创建的 DOM 内容不会被作用域样式影响，但你仍然可以使用深度选择器来设置其样式。</p></div><h3 id="slotted-selectors" tabindex="-1">插槽选择器 <a class="header-anchor" href="#slotted-selectors" aria-label="Permalink to &quot;插槽选择器 {#slotted-selectors}&quot;">​</a></h3><p>默认情况下，作用域样式不会影响到 <code>&lt;slot/&gt;</code> 渲染出来的内容，因为它们被认为是父组件所持有并传递进来的。使用 <code>:slotted</code> 伪类以明确地将插槽内容作为选择器的目标：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">:slotted(</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">red</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="global-selectors" tabindex="-1">全局选择器 <a class="header-anchor" href="#global-selectors" aria-label="Permalink to &quot;全局选择器 {#global-selectors}&quot;">​</a></h3><p>如果想让其中一个样式规则应用到全局，比起另外创建一个 <code>&lt;style&gt;</code>，可以使用 <code>:global</code> 伪类来实现 (看下面的代码)：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">:global(</span><span style="color:#B392F0;">.red</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">red</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="mixing-local-and-global-styles" tabindex="-1">混合使用局部与全局样式 <a class="header-anchor" href="#mixing-local-and-global-styles" aria-label="Permalink to &quot;混合使用局部与全局样式 {#mixing-local-and-global-styles}&quot;">​</a></h3><p>你也可以在同一个组件中同时包含作用域样式和非作用域样式：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">/* 全局样式 */</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">/* 局部样式 */</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="scoped-style-tips" tabindex="-1">作用域样式须知 <a class="header-anchor" href="#scoped-style-tips" aria-label="Permalink to &quot;作用域样式须知 {#scoped-style-tips}&quot;">​</a></h3><ul><li><p><strong>作用域样式并没有消除对 class 的需求</strong>。由于浏览器渲染各种各样 CSS 选择器的方式，<code>p { color: red }</code> 结合作用域样式使用时 (即当与 attribute 选择器组合的时候) 会慢很多倍。如果你使用 class 或者 id 来替代，例如 <code>.example { color: red }</code>，那你几乎就可以避免性能的损失。</p></li><li><p><strong>小心递归组件中的后代选择器</strong>！对于一个使用了 <code>.a .b</code> 选择器的样式规则来说，如果匹配到 <code>.a</code> 的元素包含了一个递归的子组件，那么所有的在那个子组件中的 <code>.b</code> 都会匹配到这条样式规则。</p></li></ul><h2 id="css-modules" tabindex="-1">CSS Modules <a class="header-anchor" href="#css-modules" aria-label="Permalink to &quot;CSS Modules {#css-modules}&quot;">​</a></h2><p>一个 <code>&lt;style module&gt;</code> 标签会被编译为 <a href="https://github.com/css-modules/css-modules" target="_blank" rel="noreferrer">CSS Modules</a> 并且将生成的 CSS class 作为 <code>$style</code> 对象暴露给组件：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$style.red&quot;</span><span style="color:#E1E4E8;">&gt;This should be red&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">module</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.red</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">red</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>得出的 class 将被哈希化以避免冲突，实现了同样的将 CSS 仅作用于当前组件的效果。</p><p>参考 <a href="https://github.com/css-modules/css-modules" target="_blank" rel="noreferrer">CSS Modules spec</a> 以查看更多详情，例如 <a href="https://github.com/css-modules/css-modules/blob/master/docs/composition.md#exceptions" target="_blank" rel="noreferrer">global exceptions</a> 和 <a href="https://github.com/css-modules/css-modules/blob/master/docs/composition.md#composition" target="_blank" rel="noreferrer">composition</a>。</p><h3 id="custom-inject-name" tabindex="-1">自定义注入名称 <a class="header-anchor" href="#custom-inject-name" aria-label="Permalink to &quot;自定义注入名称 {#custom-inject-name}&quot;">​</a></h3><p>你可以通过给 <code>module</code> attribute 一个值来自定义注入 class 对象的属性名：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;classes.red&quot;</span><span style="color:#E1E4E8;">&gt;red&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">module</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;classes&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.red</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">red</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="usage-with-composition-api" tabindex="-1">与组合式 API 一同使用 <a class="header-anchor" href="#usage-with-composition-api" aria-label="Permalink to &quot;与组合式 API 一同使用 {#usage-with-composition-api}&quot;">​</a></h3><p>可以通过 <code>useCssModule</code> API 在 <code>setup()</code> 和 <code>&lt;script setup&gt;</code> 中访问注入的 class。对于使用了自定义注入名称的 <code>&lt;style module&gt;</code> 块，<code>useCssModule</code> 接收一个匹配的 <code>module</code> attribute 值作为第一个参数：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useCssModule } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在 setup() 作用域中...</span></span>
<span class="line"><span style="color:#6A737D;">// 默认情况下，返回 &lt;style module&gt; 的 class</span></span>
<span class="line"><span style="color:#B392F0;">useCssModule</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 具名情况下，返回 &lt;style module=&quot;classes&quot;&gt; 的 class</span></span>
<span class="line"><span style="color:#B392F0;">useCssModule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;classes&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre></div><ul><li><strong>示例</strong></li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useCssModule } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">classes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useCssModule</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;classes.red&quot;</span><span style="color:#E1E4E8;">&gt;red&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">module</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.red</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">red</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="v-bind-in-css" tabindex="-1">CSS 中的 <code>v-bind()</code> <a class="header-anchor" href="#v-bind-in-css" aria-label="Permalink to &quot;CSS 中的 \`v-bind()\` {#v-bind-in-css}&quot;">​</a></h2><p>单文件组件的 <code>&lt;style&gt;</code> 标签支持使用 <code>v-bind</code> CSS 函数将 CSS 的值链接到动态的组件状态：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;">&gt;hello&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      color: </span><span style="color:#9ECBFF;">&#39;red&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.text</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: v-bind(</span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>这个语法同样也适用于 <a href="./sfc-script-setup.html"><code>&lt;script setup&gt;</code></a>，且支持 JavaScript 表达式 (需要用引号包裹起来)：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">theme</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    color: </span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;hello&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: v-bind(</span><span style="color:#9ECBFF;">&#39;theme.color&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>实际的值会被编译成哈希化的 CSS 自定义属性，因此 CSS 本身仍然是静态的。自定义属性会通过内联样式的方式应用到组件的根元素上，并且在源值变更的时候响应式地更新。</p>`,44)]))}const u=a(o,[["render",e]]);export{d as __pageData,u as default};