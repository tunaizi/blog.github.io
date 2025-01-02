import{_ as l,r as a,i as e,a as t}from"./chunks/framework.8a6edf47.js";const u=JSON.parse('{"title":"单文件组件语法定义","description":"","frontmatter":{},"headers":[{"level":2,"title":"总览","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"相应语言块","slug":"language-blocks","link":"#language-blocks","children":[{"level":3,"title":"<template>","slug":"template","link":"#template","children":[]},{"level":3,"title":"<script>","slug":"script","link":"#script","children":[]},{"level":3,"title":"<script setup>","slug":"script-setup","link":"#script-setup","children":[]},{"level":3,"title":"<style>","slug":"style","link":"#style","children":[]},{"level":3,"title":"自定义块","slug":"custom-blocks","link":"#custom-blocks","children":[]}]},{"level":2,"title":"自动名称推导","slug":"automatic-name-inference","link":"#automatic-name-inference","children":[]},{"level":2,"title":"预处理器","slug":"pre-processors","link":"#pre-processors","children":[]},{"level":2,"title":"src 导入","slug":"src-imports","link":"#src-imports","children":[]},{"level":2,"title":"注释","slug":"comments","link":"#comments","children":[]}],"relativePath":"api/sfc-spec.md","filePath":"api/sfc-spec.md"}'),n={name:"api/sfc-spec.md"};function o(p,s,c,r,i,E){return a(),e("div",null,s[0]||(s[0]=[t(`<h1 id="sfc-syntax-specification" tabindex="-1">单文件组件语法定义 <a class="header-anchor" href="#sfc-syntax-specification" aria-label="Permalink to &quot;单文件组件语法定义 {#sfc-syntax-specification}&quot;">​</a></h1><h2 id="overview" tabindex="-1">总览 <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;总览 {#overview}&quot;">​</a></h2><p>一个 Vue 单文件组件 (SFC)，通常使用 <code>*.vue</code> 作为文件扩展名，它是一种使用了类似 HTML 语法的自定义文件格式，用于定义 Vue 组件。一个 Vue 单文件组件在语法上是兼容 HTML 的。</p><p>每一个 <code>*.vue</code> 文件都由三种顶层语言块构成：<code>&lt;template&gt;</code>、<code>&lt;script&gt;</code> 和 <code>&lt;style&gt;</code>，以及一些其他的自定义块：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;example&quot;</span><span style="color:#E1E4E8;">&gt;{{ msg }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">&#39;Hello world!&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.example</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">red</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">custom1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  This could be e.g. documentation for the component.</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">custom1</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="language-blocks" tabindex="-1">相应语言块 <a class="header-anchor" href="#language-blocks" aria-label="Permalink to &quot;相应语言块 {#language-blocks}&quot;">​</a></h2><h3 id="template" tabindex="-1"><code>&lt;template&gt;</code> <a class="header-anchor" href="#template" aria-label="Permalink to &quot;\`&lt;template&gt;\` {#template}&quot;">​</a></h3><ul><li><p>每个 <code>*.vue</code> 文件最多可以包含一个顶层 <code>&lt;template&gt;</code> 块。</p></li><li><p>语块包裹的内容将会被提取、传递给 <code>@vue/compiler-dom</code>，预编译为 JavaScript 渲染函数，并附在导出的组件上作为其 <code>render</code> 选项。</p></li></ul><h3 id="script" tabindex="-1"><code>&lt;script&gt;</code> <a class="header-anchor" href="#script" aria-label="Permalink to &quot;\`&lt;script&gt;\` {#script}&quot;">​</a></h3><ul><li><p>每个 <code>*.vue</code> 文件最多可以包含一个 <code>&lt;script&gt;</code> 块。(使用 <a href="/blog/api/sfc-script-setup.html"><code>&lt;script setup&gt;</code></a> 的情况除外)</p></li><li><p>这个脚本代码块将作为 ES 模块执行。</p></li><li><p><strong>默认导出</strong>应该是 Vue 的组件选项对象，可以是一个对象字面量或是 <a href="/blog/api/general.html#definecomponent">defineComponent</a> 函数的返回值。</p></li></ul><h3 id="script-setup" tabindex="-1"><code>&lt;script setup&gt;</code> <a class="header-anchor" href="#script-setup" aria-label="Permalink to &quot;\`&lt;script setup&gt;\` {#script-setup}&quot;">​</a></h3><ul><li><p>每个 <code>*.vue</code> 文件最多可以包含一个 <code>&lt;script setup&gt;</code>。(不包括一般的 <code>&lt;script&gt;</code>)</p></li><li><p>这个脚本块将被预处理为组件的 <code>setup()</code> 函数，这意味着它将<strong>为每一个组件实例</strong>都执行。<code>&lt;script setup&gt;</code> 中的顶层绑定都将自动暴露给模板。要了解更多细节，请看 <a href="/blog/api/sfc-script-setup.html"><code>&lt;script setup&gt;</code> 的专门文档</a>。</p></li></ul><h3 id="style" tabindex="-1"><code>&lt;style&gt;</code> <a class="header-anchor" href="#style" aria-label="Permalink to &quot;\`&lt;style&gt;\` {#style}&quot;">​</a></h3><ul><li><p>每个 <code>*.vue</code> 文件可以包含多个 <code>&lt;style&gt;</code> 标签。</p></li><li><p>一个 <code>&lt;style&gt;</code> 标签可以使用 <code>scoped</code> 或 <code>module</code> attribute (查看<a href="/blog/api/sfc-css-features.html">单文件组件样式功能</a>了解更多细节) 来帮助封装当前组件的样式。使用了不同封装模式的多个 <code>&lt;style&gt;</code> 标签可以被混合入同一个组件。</p></li></ul><h3 id="custom-blocks" tabindex="-1">自定义块 <a class="header-anchor" href="#custom-blocks" aria-label="Permalink to &quot;自定义块 {#custom-blocks}&quot;">​</a></h3><p>在一个 <code>*.vue</code> 文件中可以为任何项目特定需求使用额外的自定义块。举例来说，一个用作写文档的 <code>&lt;docs&gt;</code> 块。这里是一些自定义块的真实用例：</p><ul><li><a href="https://gridsome.org/docs/querying-data/" target="_blank" rel="noreferrer">Gridsome：<code>&lt;page-query&gt;</code></a></li><li><a href="https://github.com/wheatjs/vite-plugin-vue-gql" target="_blank" rel="noreferrer">vite-plugin-vue-gql：<code>&lt;gql&gt;</code></a></li><li><a href="https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n#i18n-custom-block" target="_blank" rel="noreferrer">vue-i18n：<code>&lt;i18n&gt;</code></a></li></ul><p>自定义块的处理需要依赖工具链。如果你想要在构建中集成你的自定义语块，请参见<a href="/blog/guide/scaling-up/tooling.html#sfc-custom-block-integrations">单文件组件自定义块集成工具链指南</a>获取更多细节。</p><h2 id="automatic-name-inference" tabindex="-1">自动名称推导 <a class="header-anchor" href="#automatic-name-inference" aria-label="Permalink to &quot;自动名称推导 {#automatic-name-inference}&quot;">​</a></h2><p>单文件组件在以下场景中会根据<strong>文件名</strong>自动推导其组件名：</p><ul><li>开发警告信息中需要格式化组件名时；</li><li>DevTools 中观察组件时；</li><li>递归组件自引用时。例如一个名为 <code>FooBar.vue</code> 的组件可以在模板中通过 <code>&lt;FooBar/&gt;</code> 引用自己。(同名情况下) 这比明确注册/导入的组件优先级低。</li></ul><h2 id="pre-processors" tabindex="-1">预处理器 <a class="header-anchor" href="#pre-processors" aria-label="Permalink to &quot;预处理器 {#pre-processors}&quot;">​</a></h2><p>代码块可以使用 <code>lang</code> 这个 attribute 来声明预处理器语言，最常见的用例就是在 <code>&lt;script&gt;</code> 中使用 TypeScript：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  // use TypeScript</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p><code>lang</code> 在任意块上都能使用，比如我们可以在 <code>&lt;style&gt;</code> 标签中使用 <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">Sass</a> 或是 <code>&lt;template&gt;</code> 中使用 <a href="https://pugjs.org/api/getting-started.html" target="_blank" rel="noreferrer">Pug</a>：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pug&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">p {{ msg }}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  $primary-color: #333;</span></span>
<span class="line"><span style="color:#E1E4E8;">  body {</span></span>
<span class="line"><span style="color:#E1E4E8;">    color: $primary-color;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>注意对不同预处理器的集成会根据你所使用的工具链而有所不同，具体细节请查看相应的工具链文档来确认：</p><ul><li><a href="https://cn.vitejs.dev/guide/features.html#css-pre-processors" target="_blank" rel="noreferrer">Vite</a></li><li><a href="https://cli.vuejs.org/zh/guide/css.html#%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8" target="_blank" rel="noreferrer">Vue CLI</a></li><li><a href="https://vue-loader.vuejs.org/zh/guide/pre-processors.html#%E4%BD%BF%E7%94%A8%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8" target="_blank" rel="noreferrer">webpack + vue-loader</a></li></ul><h2 id="src-imports" tabindex="-1"><code>src</code> 导入 <a class="header-anchor" href="#src-imports" aria-label="Permalink to &quot;\`src\` 导入 {#src-imports}&quot;">​</a></h2><p>如果你更喜欢将 <code>*.vue</code> 组件分散到多个文件中，可以为一个语块使用 <code>src</code> 这个 attribute 来导入一个外部文件：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;./template.html&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;./style.css&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;./script.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>请注意 <code>src</code> 导入和 JS 模块导入遵循相同的路径解析规则，这意味着：</p><ul><li>相对路径需要以 <code>./</code> 开头</li><li>你也可以从 npm 依赖中导入资源</li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 从所安装的 &quot;todomvc-app-css&quot; npm 包中导入一个文件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todomvc-app-css/index.css&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre></div><p><code>src</code> 导入对自定义语块也同样适用：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">unit-test</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;./unit-test.js&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">unit-test</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>在 <code>src</code> 中使用别名时，不要以 <code>~</code> 开头，后面的任何内容都会被解释为模块请求。这意味着你可以引用 node 模块中的资源：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;~some-npm-package/foo.png&quot;</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div></div><h2 id="comments" tabindex="-1">注释 <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;注释 {#comments}&quot;">​</a></h2><p>在每一个语块中你都可以按照相应语言 (HTML、CSS、JavaScript 和 Pug 等等) 的语法书写注释。对于顶层注释，请使用 HTML 的注释语法 <code>&lt;!-- comment contents here --&gt;</code></p>`,39)]))}const y=l(n,[["render",o]]);export{u as __pageData,y as default};