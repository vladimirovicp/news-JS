(()=>{"use strict";var e={880:(e,t,r)=>{r.r(t)},908:(e,t,r)=>{r.r(t)},384:(e,t,r)=>{r.r(t)},444:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(r(132)),n=r(180);t.default=class{constructor(){this.controller=new s.default,this.view=new n.AppView}start(){const e=document.querySelector(".sources");null!==e&&e.addEventListener("click",(e=>this.controller.getNews(e,(e=>this.view.drawNews(e))))),this.controller.getSources((e=>this.view.drawSources(e)))}}},508:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(r(716));class n extends s.default{constructor(){super("https://rss-news-api.onrender.com/",{apiKey:"e6bad98049e1455ab97282c282a98f9a"})}}t.default=n},132:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(r(508)),n=r(292);class u extends s.default{getSources(e){super.getResp({endpoint:n.Endpoint.Sources},e)}getNews(e,t){let r=e.target;const o=e.currentTarget;for(;r!==o;){if(r.classList.contains("source__item")){const e=r.getAttribute("data-source-id");return void(o.getAttribute("data-source")!==e&&null!==e&&(o.setAttribute("data-source",e),super.getResp({endpoint:n.Endpoint.Everything,options:{sources:e}},t)))}r=r.parentNode}}}t.default=u},716:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.GET="GET"}(r||(r={})),t.default=class{constructor(e,t){this.baseLink=e,this.options=t}getResp({endpoint:e,options:t={}},o=(()=>{console.error("No callback for GET response")})){this.load(r.GET,e,o,t)}errorHandler(e){if(!e.ok)throw 401!==e.status&&404!==e.status||console.log(`Sorry, but there is ${e.status} error: ${e.statusText}`),Error(e.statusText);return e}makeUrl(e,t){const r=Object.assign(Object.assign({},this.options),e);let o=`${this.baseLink}${t}?`;return Object.keys(r).forEach((e=>{o+=`${e}=${r[e]}&`})),o.slice(0,-1)}load(e,t,r,o={}){fetch(this.makeUrl(o,t),{method:e}).then(this.errorHandler).then((e=>e.json())).then((e=>r(e))).catch((e=>console.error(e)))}}},292:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.Endpoint=void 0,function(e){e.Everything="everything",e.Sources="sources"}(r||(t.Endpoint=r={}))},180:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AppView=void 0;const s=o(r(984)),n=o(r(392));class u{constructor(){this.news=new s.default,this.sources=new n.default}drawNews(e){const t=(null==e?void 0:e.articles)?null==e?void 0:e.articles:[];this.news.draw(t)}drawSources(e){const t=(null==e?void 0:e.sources)?null==e?void 0:e.sources:[];this.sources.draw(t)}}t.AppView=u,t.default=u},984:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),r(880),t.default=class{draw(e){const t=e.length>=10?e.filter(((e,t)=>t<10)):e,r=document.createDocumentFragment(),o=document.querySelector("#newsItemTemp");o&&(t.forEach(((e,t)=>{const s=o.content.cloneNode(!0);if(s){const e=s.querySelector(".news__item");t%2?(e.classList.add("alt"),e.classList.add("even")):e.classList.add("odd")}const n=s.querySelector(".news__meta-photo");n&&(n.style.backgroundImage=`url(${e.urlToImage||"img/news_placeholder.jpg"})`),s.querySelector(".news__meta-author").textContent=e.author||e.source.name,s.querySelector(".news__meta-date").textContent=e.publishedAt.slice(0,10).split("-").reverse().join("-"),s.querySelector(".news__description-title").textContent=e.title,s.querySelector(".news__description-source").textContent=e.source.name,s.querySelector(".news__description-content").textContent=e.description,s.querySelector(".news__read-more a").setAttribute("href",e.url),r.append(s)})),document.querySelector(".news").innerHTML="",document.querySelector(".news").appendChild(r))}}},392:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),r(908),t.default=class{draw(e){const t=document.createDocumentFragment(),r=document.querySelector("#sourceItemTemp");e.forEach((e=>{if(null!==r){const o=r.content.cloneNode(!0),s=o.querySelector(".source__item-name");s&&(s.textContent=e.name);const n=o.querySelector(".source__item");n&&n.setAttribute("data-source-id",e.id),t.append(o)}})),document.querySelector(".sources").append(t)}}},740:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(r(444));r(384),(new s.default).start()}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(740)})();