(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[237],{6315:function(e,t,s){"use strict";var l=s(2784),n=s(13980),a=s.n(n);const r=e=>{const{color:t,size:s,...n}=e;return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:t,...n},l.createElement("path",{d:"M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"}))};r.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},r.defaultProps={color:"currentColor",size:"24"},t.Z=r},54610:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/blog/[slug]",function(){return s(79075)}])},79075:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return le},default:function(){return ne}});var l=s(52322),n=s(97729),a=s.n(n),r=s(5622),o=s(27926),i=s(97961),c=s(10797);const d=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"grid h-[800px] grid-cols-[auto_minmax(0,_86rem)_auto]",children:[(0,l.jsx)("div",{className:"pt-[84px]"}),(0,l.jsx)("div",{className:"dotted-v flex flex-col items-center justify-center gap-14 px-6 pb-9 pt-[84px] lg:mx-12 lg:border-x lg:px-16",children:(0,l.jsx)("h2",{className:"text-frecBlack bg-frecNeon font-regular px-4 text-center text-[32px] md:text-[64px]",children:"Not found"})}),(0,l.jsx)("div",{className:"pt-[84px]"})]})});var x=s(24710),m=s(96577),u=s.n(m),p=s(52499),g=s(69865),h=s(3333);const v=e=>{let{post:{footnotes:t},className:s}=e;return t.length>0?(0,l.jsx)("footer",{className:(0,h.A)("border-frecBlack/20 border-t md:px-6",s),children:(0,l.jsx)("ol",{className:"ml-6 mt-6 list-decimal md:ml-0",children:t.map(((e,t)=>(0,l.jsx)("li",{id:e.id,className:"text-frecBlack/75 py-2 text-xs md:text-sm",dangerouslySetInnerHTML:{__html:e.content}},t)))})}):null};var f=s(29786),j=s(2784),N=s(13980),w=s.n(N);const y=e=>{const{color:t,size:s,...l}=e;return j.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:t,...l},j.createElement("path",{d:"M10,17.55,8.23,19.27a2.47,2.47,0,0,1-3.5-3.5l4.54-4.55a2.46,2.46,0,0,1,3.39-.09l.12.1a1,1,0,0,0,1.4-1.43A2.75,2.75,0,0,0,14,9.59a4.46,4.46,0,0,0-6.09.22L3.31,14.36a4.48,4.48,0,0,0,6.33,6.33L11.37,19A1,1,0,0,0,10,17.55ZM20.69,3.31a4.49,4.49,0,0,0-6.33,0L12.63,5A1,1,0,0,0,14,6.45l1.73-1.72a2.47,2.47,0,0,1,3.5,3.5l-4.54,4.55a2.46,2.46,0,0,1-3.39.09l-.12-.1a1,1,0,0,0-1.4,1.43,2.75,2.75,0,0,0,.23.21,4.47,4.47,0,0,0,6.09-.22l4.55-4.55A4.49,4.49,0,0,0,20.69,3.31Z"}))};y.propTypes={color:w().string,size:w().oneOfType([w().string,w().number])},y.defaultProps={color:"currentColor",size:"24"};var b=y,_=s(6315);function k({timeout:e=2e3}={}){const[t,s]=(0,j.useState)(null),[l,n]=(0,j.useState)(!1),[a,r]=(0,j.useState)(null);return{copy:t=>{"clipboard"in navigator?navigator.clipboard.writeText(t).then((()=>{return t=!0,window.clearTimeout(a),r(window.setTimeout((()=>n(!1)),e)),void n(t);var t})).catch((e=>s(e))):s(new Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{n(!1),s(null),window.clearTimeout(a)},error:t,copied:l}}var z=s(90987);const C={timeout:1e3};function S(e){const{children:t,timeout:s,value:n,...a}=(0,z.w)("CopyButton",C,e),r=k({timeout:s});return(0,l.jsx)(l.Fragment,{children:t({copy:()=>r.copy(n),copied:r.copied,...a})})}S.displayName="@mantine/core/CopyButton";var E=s(86351);const T=e=>{let{post:t}=e;const[s,n]=(0,j.useState)(!1);var a;const r=null!==(a=null===E.z||void 0===E.z?void 0:E.z.location.href)&&void 0!==a?a:"",o=(0,j.useCallback)((async()=>{try{await navigator.share({title:t.title,text:t.title,url:r})}catch(e){}}),[t.title,r]);return(0,j.useEffect)((()=>{navigator.share&&n(!0)}),[]),s?(0,l.jsxs)("button",{onClick:o,className:"flex items-center gap-2",children:[(0,l.jsx)(b,{className:"h-5 w-5"}),"Share"]}):(0,l.jsx)(S,{value:r,children:e=>{let{copied:t,copy:s}=e;return(0,l.jsx)("div",{className:"flex cursor-pointer items-center gap-2 hover:underline",onClick:s,children:t?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(_.Z,{className:"h-5 w-5","aria-label":"Copied"}),"Link copied"]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b,{className:"h-5 w-5","aria-label":"Copy link"}),"Share"]})})}})};var A=s(39097),B=s.n(A),L=s(35500),U=s(12018);const M=e=>{let{relatedPosts:t,className:s}=e;return t.length>0?(0,l.jsxs)("div",{className:(0,h.A)("flex max-w-3xl flex-col gap-1 px-6",s),children:[(0,l.jsx)("h2",{className:"text-[24px]",children:"More resources"}),(0,l.jsx)("div",{className:"flex flex-col",children:t.map((e=>(0,l.jsx)(I,{post:e},e.slug)))})]}):null},I=e=>{let{post:t,className:s}=e;const n=(0,L.d)();return(0,l.jsxs)(B(),{href:"".concat(U.Y.blog,"/").concat(t.slug),className:(0,h.A)("hover:bg-frecDarkBeige/50 -mx-6 flex gap-4 p-6 lg:gap-6",s),children:[(0,l.jsx)("div",{className:"shrink-0",children:t.featured_image?(0,l.jsx)(u(),{src:t.featured_image,width:n?75:150,height:n?75:100,className:"h-[75px] w-[75px] object-cover lg:h-[100px] lg:w-[150px]",alt:""}):null}),(0,l.jsxs)("div",{className:"flex min-w-0 flex-col justify-center gap-2",children:[(0,l.jsx)("div",{className:"text-[16px] lg:text-[20px]",children:t.title}),(0,l.jsxs)("div",{className:"flex flex-wrap items-center gap-4",children:["publish"!==t.status&&(0,l.jsx)(x.C,{color:"red",children:t.status}),(0,l.jsx)(f.U,{className:"text-frecXDarkGray text-xs md:text-sm",post:t})]})]})]})};var P=s(56710),F=s(69429),H=s(13637),Z=s(2979),D=s(85565),O=s(46976),R=s(93445),X=s(43362),G={root:"m_b6d8b162"};function K(e){return"start"===e?"start":"end"===e||e?"end":void 0}const Y={inherit:!1},q=(0,H.Z)(((e,{variant:t,lineClamp:s,gradient:l,size:n,color:a})=>({root:{"--text-fz":(0,F.yv)(n),"--text-lh":(0,F.Dp)(n),"--text-gradient":"gradient"===t?(0,D.u)(l,e):void 0,"--text-line-clamp":"number"===typeof s?s.toString():void 0,"--text-color":a?(0,Z.p)(a,e):void 0}}))),V=(0,X.b)(((e,t)=>{const s=(0,z.w)("Text",Y,e),{lineClamp:n,truncate:a,inline:r,inherit:o,gradient:i,span:c,__staticSelector:d,vars:x,className:m,style:u,classNames:p,styles:g,unstyled:h,variant:v,mod:f,size:j,...N}=s,w=(0,O.y)({name:["Text",d],props:s,classes:G,className:m,style:u,classNames:p,styles:g,unstyled:h,vars:x,varsResolver:q});return(0,l.jsx)(R.x,{...w("root",{focusable:!0}),ref:t,component:c?"span":"p",variant:v,mod:[{"data-truncate":K(a),"data-line-clamp":"number"===typeof n,"data-inline":r,"data-inherit":o},f],size:j,...N})}));V.classes=G,V.displayName="@mantine/core/Text";var $=s(96721),J=s(88565);function Q(e){const t=document.getElementsByClassName("wordpress")[0];return t?function(e,t){const s=[];for(let l=0;l<e.length;l+=1){const n=e[l];n.setAttribute("id","heading".concat(l.toString()));const a=parseInt(n.tagName[1],10);a>t||s.push({id:n.id,content:n.innerHTML||"",getNode:()=>document.getElementById(n.id),depth:a})}return s}(Array.from(t.querySelectorAll(".wp-block-heading")),e):[]}function W(e){const t=-1*(P.zU?P.zU.innerHeight/2:0);if(0===e.length)return-1;return e.reduce(((e,s,l)=>Math.abs(e.position+t)<Math.abs(s.y+t)?e:{index:l,position:s.y}),{index:0,position:e[0].y}).index}const ee=e=>{let{className:t}=e;const[s,n]=(0,j.useState)(0),[a,r]=(0,j.useState)([]),o=(0,j.useRef)([]),i=()=>{n(W(o.current.map((e=>e.getNode().getBoundingClientRect()))))};if((0,j.useEffect)((()=>{const e=Q(2);return e.unshift({id:"blog-title",content:"Start",getNode:()=>document.getElementById("blog-title"),depth:1}),o.current=e,r(e),n(W(e.map((e=>e.getNode().getBoundingClientRect())))),null===P.zU||void 0===P.zU||P.zU.addEventListener("scroll",i),()=>null===P.zU||void 0===P.zU?void 0:P.zU.removeEventListener("scroll",i)}),[]),0===a.length)return null;const c=a.map(((e,t)=>(0,l.jsx)(V,{component:"a",fz:"sm",className:(0,h.A)("border-l-4 px-4 py-2",s===t?"!border-frecBlack":"!border-frecBlack/10"),mod:{active:s===t},href:"#".concat(e.id),onClick:t=>{t.preventDefault();const s=document.getElementById(e.id);s&&s.scrollIntoView({block:"center",behavior:"smooth"})},dangerouslySetInnerHTML:{__html:e.content}},e.id)));return(0,l.jsx)(R.x,{component:"nav",className:(0,h.A)("",t),children:(0,l.jsx)($.x.Autosize,{mah:"calc(100vh - ".concat((0,J.h)(140),")"),type:"never",offsetScrollbars:!0,children:(0,l.jsx)("div",{className:"flex flex-col",children:c})})})};var te=s(79419);const se=e=>{let{post:t,relatedPosts:s}=e;const n=(0,L.d)();return(0,l.jsxs)("section",{className:"grid grid-cols-[auto_minmax(0,_86rem)_auto] lg:grid-rows-[76px_auto_1px]",children:[(0,l.jsx)("div",{className:""}),(0,l.jsx)("div",{className:"dotted-v lg:mx-12 lg:border-x"}),(0,l.jsx)("div",{className:""}),(0,l.jsx)("div",{className:""}),(0,l.jsxs)("div",{className:"dotted-v flex py-24 lg:mx-12 lg:border-x lg:pt-16",children:[(0,l.jsx)("div",{className:"hidden flex-1 lg:block",children:n?null:(0,l.jsx)(ee,{className:"sticky top-24 px-6"})}),(0,l.jsxs)("div",{className:"flex w-full grow flex-col lg:max-w-2xl",children:[(0,l.jsxs)("article",{className:"flex flex-col gap-4 px-6 md:gap-8",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)(p.A,{className:"text-sm font-medium uppercase",post:t}),(0,l.jsx)("h1",{id:"blog-title",className:"text-[32px] font-medium tracking-tight md:text-[40px]",dangerouslySetInnerHTML:{__html:t.title}}),(0,l.jsxs)("div",{className:"text-frecXDarkGray flex flex-wrap gap-3 text-sm md:items-center md:gap-4",children:["publish"!==t.status&&(0,l.jsx)(x.C,{color:"red",children:t.status}),(0,l.jsx)(g.B,{post:t}),(0,l.jsx)(f.U,{post:t}),(0,l.jsx)(T,{post:t})]})]}),t.featured_image?(0,l.jsx)(u(),{src:t.featured_image,width:700,height:350,className:(0,h.A)("h-[100%] w-[100%] lg:w-[700px]",t.categories.includes(te.i)?"object-contain":"object-cover lg:h-[350px]"),alt:""}):null,(0,l.jsx)("div",{className:"wordpress",dangerouslySetInnerHTML:{__html:t.content}}),(0,l.jsx)(v,{post:t})]}),(0,l.jsx)(M,{className:"mt-12",relatedPosts:s})]}),(0,l.jsx)("div",{className:"hidden flex-1 lg:block"})]}),(0,l.jsx)("div",{className:""}),(0,l.jsx)("div",{className:"dotted-h col-span-3 lg:border-b"})]})};var le=!0,ne=e=>{let{post:t,relatedPosts:s,isKnownUser:n}=e;var x,m,u;const p="Frec | ".concat(null!==(u=null===t||void 0===t?void 0:t.title)&&void 0!==u?u:"Coming soon"),g=null===(x=null===t||void 0===t?void 0:t.metadata.find((e=>"jetpack_seo_html_title"===e.key)))||void 0===x?void 0:x.value,h=null===(m=null===t||void 0===t?void 0:t.metadata.find((e=>"advanced_seo_description"===e.key)))||void 0===m?void 0:m.value;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a(),{children:[(0,l.jsx)("title",{children:p}),h?(0,l.jsx)("meta",{name:"description",content:h}):null,t&&(0,l.jsx)("link",{rel:"canonical",href:"https://frec.com/resources/blog/".concat(t.slug)}),(0,l.jsx)("meta",{property:"og:type",content:"article"}),(0,l.jsx)("meta",{property:"og:title",content:null!==g&&void 0!==g?g:p}),(0,l.jsx)("meta",{property:"og:image",content:null===t||void 0===t?void 0:t.featured_image},"og:image"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h,{isKnownUser:n}),(0,l.jsx)("main",{children:t?(0,l.jsx)(se,{post:t,relatedPosts:s},t.date):(0,l.jsx)(d,{})}),(0,l.jsx)(c.Y,{}),(0,l.jsx)(o.$,{}),(0,l.jsx)(r.I,{})]})]})}}},function(e){e.O(0,[267,951,703,549,721,522,961,84,774,888,179],(function(){return t=54610,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=[slug]-7ef9e4beef37b128.js.map