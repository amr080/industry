import{a as V,_ as G}from"./CQ5_tvT9.js";import{x as D,Y as U,X as W,C as q,g as J,j as Q,_ as Z}from"./D02v2VPF.js";import{k as x,o as n,z as f,y as s,r as m,a8 as F,a9 as O,x as a,s as B,a as t,Y as tt,c as b,C as $,A as i,B as et,v as j,b as w,V as at,H as st,aF as ot,a1 as nt,W as k,X as R}from"./C3C76hVJ.js";import{a as I}from"./BjDhwOK6.js";import{c as L}from"./BXIPyeGF.js";import{_ as rt}from"./C3nxyfJt.js";import{_ as it}from"./DblH3CV2.js";import{_ as lt,a as ct}from"./_T7s-f0A.js";import{_ as T}from"./tOgJjPYK.js";import{u as dt}from"./_0ueZvyy.js";import{u as pt}from"./CGAFcYbx.js";import{a as ut}from"./DXiQoDKW.js";import{u as mt}from"./CCCbrl6Z.js";import{f as ft}from"./CqHl2m9R.js";import"./Cvcz391L.js";const _t=x({__name:"Sheet",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(l,{emit:o}){const c=D(l,o);return(p,u)=>(n(),f(a(U),F(O(a(c))),{default:s(()=>[m(p.$slots,"default")]),_:3},16))}}),gt=x({__name:"SheetTrigger",props:{asChild:{type:Boolean},as:{}},setup(l){const o=l;return(e,d)=>(n(),f(a(W),F(O(o)),{default:s(()=>[m(e.$slots,"default")]),_:3},16))}}),bt=x({inheritAttrs:!1,__name:"SheetContent",props:{class:{},side:{},forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(l,{emit:o}){const e=l,d=o,c=B(()=>{const{class:u,side:h,...v}=e;return v}),p=D(c,d);return(u,h)=>(n(),f(a(Z),null,{default:s(()=>[t(a(q),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),t(a(J),tt({class:a(I)(a(xt)({side:u.side}),e.class)},{...a(p),...u.$attrs}),{default:s(()=>[m(u.$slots,"default"),t(a(Q),{class:"absolute right-4 top-4"},{default:s(()=>[t(V,{icon:"times"})]),_:1})]),_:3},16,["class"])]),_:3}))}}),xt=L("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),ht=x({__name:"Badge",props:{variant:{},class:{},size:{},text:{},iconLeft:{},iconRight:{}},setup(l){const o=l;return(e,d)=>{const c=T;return n(),b("div",{class:j(a(I)(a(vt)({variant:e.variant,size:e.size}),o.class))},[m(e.$slots,"left",{},()=>[e.iconLeft?(n(),f(c,{key:0,icon:e.iconLeft,class:"-mb-[1px]"},null,8,["icon"])):$("",!0)]),m(e.$slots,"default",{},()=>[i("span",null,et(e.text),1)]),m(e.$slots,"right",{},()=>[e.iconRight?(n(),f(c,{key:0,icon:e.iconRight,class:"-mb-[1px]"},null,8,["icon"])):$("",!0)])],2)}}}),vt=L("inline-flex items-center rounded-full border font-normal transition-colors focus:outline-none",{variants:{variant:{warning:"bg-yellow-50 border-yellow-600/60 text-yellow-800",error:"bg-red-50 border-red-600/60 text-red-800",blue:"bg-blue-50 border-blue-600/60 text-blue-800",success:"bg-green-50 border-green-600/60 text-green-800",dotted:"bg-inherit border-zinc-300 text-zinc-500 border-dashed",disabled:"bg-zinc-50 border-zinc-200 text-zinc-500",black:"bg-zinc-950 border-zinc-950 text-white",default:"bg-white border-zinc-200 text-zinc-950",glass:"bg-zinc-100/80 text-zinc-700 hover:bg-zinc-200/80 hover:text-zinc-800 cursor-pointer",link:"bg-white border-zinc-200 text-zinc-950 hover:bg-zinc-100/80 cursor-pointer"},size:{default:"px-2 py-[2px] text-xs font-normal [&>svg]:text-[10px] gap-[6px]",sm:"px-2 py-[2px] text-[11px] leading-[12px] font-normal [&>svg]:text-[10px] gap-[4px]"}},defaultVariants:{variant:"default",size:"default"}}),yt={class:"mx-auto flex max-w-[1304px] px-4 items-center border-l border-r border-transparent group-[.is-active]:border-zinc-900/5 py-3 gap-2 md:gap-0"},zt={class:"max-w-[286px] flex-initial lg:flex-1"},wt={class:"space-y-2 mb-6"},kt={key:0},Bt={class:"flex-1 items-center justify-center gap-1 flex"},$t={class:"flex justify-end sm:max-w-[286px] flex-initial lg:flex-1 gap-2"},Yt=x({__name:"docs",async setup(l){let o,e;const d=w({top:!0}),c=dt(),p=at();pt({titleTemplate:()=>p.meta.title?`BlindPay | ${p.meta.title}`:"BlindPay",htmlAttrs:{lang:"us"},meta:[{name:"keywords",content:"stablecoins, usdc, usdt, api, cross-border, remittances, payroll, neobanks, local payments"}]});const u=w({title:"API Reference",icon:"terminal",_path:"https://api.blindpay.com/reference"});st(()=>{const g=ut(document);d.value=g.arrivedState});const{data:h}=([o,e]=ot(()=>mt("navigation",()=>ft())),o=await o,e(),o),v=B(()=>h.value?h.value:[]),S=B(()=>v.value.find(g=>p.fullPath.includes(g._path))),z=w(!1);return(g,_)=>{const X=V,Y=gt,C=rt,y=it,P=lt,E=ct,H=bt,K=_t,A=T,M=ht,N=G;return n(),b(k,null,[i("header",{class:j(["fixed top-0 z-10 w-full border-b border-transparent group",{"bg-white/20 backdrop-blur is-active border-zinc-950/10":!a(d).top}])},[i("div",yt,[i("div",zt,[t(K,{open:a(z),"onUpdate:open":_[0]||(_[0]=r=>nt(z)?z.value=r:null)},{default:s(()=>[t(Y,{"as-child":""},{default:s(()=>[t(X,{icon:"bars",class:"flex md:hidden"})]),_:1}),t(H,{side:"left",class:"pr-0 pl-2"},{default:s(()=>[t(y,{to:"/"},{default:s(()=>[t(C,{class:"h-6 w-auto mb-4 !text-zinc-950 px-4"})]),_:1}),i("div",wt,[(n(!0),b(k,null,R(a(v).filter(r=>r._path.includes("/docs")||r._path.includes("/knowledge-base")),r=>(n(),f(P,{key:r.title,nav:r},null,8,["nav"]))),128)),t(P,{nav:a(u),target:"_blank"},null,8,["nav"])]),a(S)?(n(),b("div",kt,[(n(!0),b(k,null,R(a(S).children,r=>(n(),f(E,{key:r.title,class:"mb-6",nav:r},null,8,["nav"]))),128))])):$("",!0)]),_:1})]),_:1},8,["open"]),t(y,{class:"hidden md:block",to:"/"},{default:s(()=>[t(C,{class:"h-6 w-auto relative -bottom-[2px] !text-zinc-950"})]),_:1})]),i("div",Bt,[i("button",{class:"w-full max-w-[430px] h-[32px] md:h-[38px] border border-zinc-200 rounded-lg px-2 py-1 text-sm text-zinc-500 transition-all hover:bg-zinc-100 hover:text-zinc-700 flex items-center gap-2",onClick:_[1]||(_[1]=r=>a(c).docsSearch=!0)},[t(A,{icon:"magnifying-glass",class:"text-sm mx-1"}),_[2]||(_[2]=i("div",{class:"flex-1 text-sm text-left"}," Search... ",-1)),t(M,{size:"sm",text:"⌘ K",variant:"disabled",class:"hidden md:block"})])]),i("div",$t,[t(y,{to:"https://app.blindpay.com/sign-in",external:"",target:"_blank"},{default:s(()=>[t(N,{text:"Sign in",variant:"ghost",class:"rounded-full",size:"xs"})]),_:1}),t(y,{to:"https://app.blindpay.com/sign-up",external:"",target:"_blank"},{default:s(()=>[t(N,{text:"Get Started",variant:"outline",class:"rounded-full",size:"xs"},{right:s(()=>[t(A,{icon:"chevron-right",class:"text-[9px] text-zinc-950"})]),_:1})]),_:1})])])],2),m(g.$slots,"default")],64)}}});export{Yt as default};