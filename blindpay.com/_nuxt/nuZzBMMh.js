import{k as c,s as t,o as s,c as r,A as e,B as d,C as f,D as m}from"./C3C76hVJ.js";const u=["viewBox"],k=e("mask",{id:"574c6386-b95d-467a-8247-072a27871ed8"},[e("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})],-1),p={mask:"url(#574c6386-b95d-467a-8247-072a27871ed8)"},v={key:0},g=e("path",{fill:"#eee",d:"m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"},null,-1),h=e("path",{fill:"#a2001d",d:"M0 0h512v167H0z"},null,-1),w=e("path",{fill:"#0052b4",d:"M0 345h512v167H0z"},null,-1),x={fill:"none"},y=["r"],N=c({__name:"nl",props:{flagName:{},strokeColor:{default:"#000"},strokeWidth:{default:0}},setup(i){const l=i,a=t(()=>512+2*l.strokeWidth),o=t(()=>-l.strokeWidth),n=t(()=>256+l.strokeWidth/2);return(B,W)=>(s(),r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"svg-circle-flags",viewBox:`${o.value} ${o.value} ${a.value} ${a.value}`},[k,e("g",p,[l.flagName?(s(),r("title",v,d(l.flagName),1)):f("",!0),g,h,w]),e("g",x,[e("circle",{cx:"256",cy:"256",r:n.value,fill:"none",style:m({stroke:l.strokeColor,strokeWidth:l.strokeWidth})},null,12,y)])],8,u))}});export{N as default};