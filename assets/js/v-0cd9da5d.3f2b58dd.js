"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[910],{1:(s,n,e)=>{e.r(n),e.d(n,{data:()=>a});const a={key:"v-0cd9da5d",path:"/intro/getting-started.html",title:"Quickstart",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"intro/getting-started.md",git:{contributors:[{name:"Daniel Farina",email:"contact@nevulas.com",commits:1}]}}},8252:(s,n,e)=>{e.r(n),e.d(n,{default:()=>o});const a=(0,e(6252).uE)('<h1 id="quickstart" tabindex="-1"><a class="header-anchor" href="#quickstart" aria-hidden="true">#</a> Quickstart</h1><p><em>(Note: This repository is under active development. Architecture and implementation may change without documentation)</em></p><p>This is what you&#39;d use to get a node up and running, fast. It assumes that it is starting on a blank ubuntu machine. It eschews a systemd unit, allowing automation to be up to the user. It assumes that installing Go is in-scope since Ubuntu&#39;s repositories aren&#39;t up to date and you&#39;ll be needing go to use osmosis. It handles the Go environment variables because those are a common pain point.</p><p><strong>Install go</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> -q -O - https://git.io/vQhTU <span class="token operator">|</span> <span class="token function">bash</span> -s -- --version <span class="token number">1.17</span>.2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Then exit and re-enter your shell.</p><p><strong>Install Osmosis and check that it is on $PATH</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/osmosis-labs/osmosis\n<span class="token builtin class-name">cd</span> osmosis\n<span class="token function">git</span> checkout v3.1.0\n<span class="token function">make</span> <span class="token function">install</span>\n<span class="token function">which</span> osmosisd\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>Launch Osmosis</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>osmosisd init yourmonikerhere\n<span class="token function">wget</span> -O ~/.osmosisd/config/genesis.json https://github.com/osmosis-labs/networks/raw/main/osmosis-1/genesis.json\nosmosisd start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>More Nodes ==&gt; More Network</p><p>More Network ==&gt; Faster Sync</p><p>Faster Sync ==&gt; Less Developer Friction</p><p>Less Developer Friction ==&gt; More Osmosis</p><p>Thank you for supporting a healthy blockchain network and community by running an Osmosis node!</p>',15),t={},o=(0,e(3744).Z)(t,[["render",function(s,n){return a}]])},3744:(s,n)=>{n.Z=(s,n)=>{const e=s.__vccOpts||s;for(const[s,a]of n)e[s]=a;return e}}}]);