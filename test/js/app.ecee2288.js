(function(){"use strict";var e={6570:function(e,t,n){var o=n(144),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("HelloWorld",{staticStyle:{display:"none"},attrs:{msg:"Welcome to Your Vue.js App"}}),t("DragModal",{staticStyle:{display:"none"}}),t("div",{staticClass:"promotion"},[e._v(" 안녕하세용 ")])],1)},r=[],s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrap"},[t("div",{staticStyle:{position:"fixed",right:"0",top:"50%","z-index":"100"}},[e._v(e._s(e.current))]),t("swiper",{ref:"mySwiper",staticClass:"snbSwiper",attrs:{slidesPerView:"auto",preventClicks:!0,freeMode:!0},on:{slideChange:e.onChange}},e._l(e.array,(function(n){return t("swiper-slide",{key:n.id,class:{on:n.id===e.current}},[t("a",{attrs:{href:`#${n.id}`},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.clickSlide(t)}}},[e._v(e._s(n.txt))])])})),1),e._l(e.items,(function(n){return t("div",{key:n.id,ref:n.id,refInFor:!0,staticClass:"section"},[e._v(e._s(n.txt))])})),e._m(0)],2)},l=[function(){var e=this,t=e._self._c;return t("div",{staticStyle:{position:"fixed",bottom:"0",left:"0",background:"skyblue",width:"100%",height:"50vh","z-index":"100"}},[t("div",{attrs:{id:"mydivheader"}},[e._v("Click here to move")])])}],d=(n(7658),n(2258)),a=(n(2633),{name:"HelloWorld",props:{msg:String},components:{Swiper:d.Swiper,SwiperSlide:d.SwiperSlide},data(){return{current:"strawberry",array:[{id:"grape",txt:"포도"},{id:"blueberry",txt:"블루베리"},{id:"strawberry",txt:"딸기"},{id:"plum",txt:"자두"},{id:"watermelone",txt:"수박"},{id:"pear",txt:"배"},{id:"orange",txt:"오렌지"},{id:"shinemusket",txt:"샤인머스켓"}],items:[],swiper:null,slides:null,timer:null}},created(){for(const e of this.array)this.items.push({id:e.id,txt:e.txt})},watch:{current(e){this.moveSlides(e)}},mounted(){this.swiper=this.$refs.mySwiper.$swiper,this.onChange(this.current),window.addEventListener("scroll",this.onScroll),this.dragElement(document.getElementById("mydiv"))},methods:{clickSlide(e){this.onChange(e.currentTarget.hash.split("#")[1])},onChange(e){this.current=e,this.scrollY()},onScroll(){const e=window.scrollY+window.innerHeight/2;Object.keys(this.$refs).forEach((t=>{e>=this.$refs[t][0]?.offsetTop&&(this.current=t)}))},scrollY(){window.removeEventListener("scroll",this.onScroll);const e=this.$refs[this.current][0]?.offsetTop-48;window.scroll({top:e,left:0,behavior:"smooth"}),window.addEventListener("scroll",this.addEventScroll())},addEventScroll(){this.timer&&clearTimeout(this.timer),this.timer=setTimeout((()=>{window.addEventListener("scroll",this.onScroll)}),1e3)},moveSlides(e){const t=document.querySelectorAll(".snbSwiper .swiper-slide");let n;Object.keys(this.$refs).forEach(((o,i)=>{o===e&&(n=t[i-1])}));let o=0;t.forEach((e=>o+=Number(e.offsetWidth)));const i=n.parentNode.offsetWidth,r=n.offsetLeft+n.offsetWidth/2,s=i/2;let l=0;l=o<i||r<=s?0:o-r<=s?o-i:r-s,n.parentNode.parentNode.scroll({top:0,left:l,behavior:"smooth"})},dragElement(e){var t=0,n=0,o=0,i=0;function r(e){e=e||window.event,e.preventDefault(),o=e.clientX,i=e.clientY,document.onmouseup=l,document.onmousemove=s}function s(r){r=r||window.event,r.preventDefault(),t=o-r.clientX,n=i-r.clientY,o=r.clientX,i=r.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function l(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=r:e.onmousedown=r}}}),u=a,c=n(1001),f=(0,c.Z)(u,s,l,!1,null,null,null),p=f.exports,m=function(){var e=this;e._self._c;return e._m(0)},h=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrap"},[t("div",{attrs:{id:"mydiv"}},[t("div",{attrs:{id:"mydivheader"}},[e._v("Click here to move")]),e._v(" 진짜 짜증나 ")])])}],v={name:"DragModal",data(){return{pos2:0,pos4:0,elmnt:null}},mounted(){this.elmnt=document.getElementById("mydiv"),this.elmnt.addEventListener("mousedown",(e=>"mydivheader"===e.target.id&&this.dragMouseDown(e)))},methods:{dragMouseDown(e){e=e||window.event,e.stopPropagation(),this.pos4=e.clientY,window.addEventListener("mouseup",this.closeDragElement),window.addEventListener("mousemove",this.elementDrag)},elementDrag(e){e=e||window.event,e.stopPropagation(),this.pos2=this.pos4-e.clientY,this.pos4=e.clientY,this.pos2<0&&(this.elmnt.style.top=this.elmnt.offsetTop-this.pos2+"px")},closeDragElement(){window.removeEventListener("mouseup",this.closeDragElement),window.removeEventListener("mousemove",this.elementDrag)}}},w=v,g=(0,c.Z)(w,m,h,!1,null,null,null),y=g.exports,b={name:"App",components:{HelloWorld:p,DragModal:y},mounted(){},methods:{}},S=b,_=(0,c.Z)(S,i,r,!1,null,null,null),x=_.exports;o["default"].config.productionTip=!1,new o["default"]({render:e=>e(x)}).$mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],r=e[u][2];for(var l=!0,d=0;d<o.length;d++)(!1&r||s>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[d])}))?o.splice(d--,1):(l=!1,r<s&&(s=r));if(l){e.splice(u--,1);var a=i();void 0!==a&&(t=a)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,s=o[0],l=o[1],d=o[2],a=0;if(s.some((function(t){return 0!==e[t]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(d)var u=d(n)}for(t&&t(o);a<s.length;a++)r=s[a],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunkswiper_test"]=self["webpackChunkswiper_test"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6570)}));o=n.O(o)})();
//# sourceMappingURL=app.ecee2288.js.map