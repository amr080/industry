import{k as d,s as a,o as s,c as r,A as e,B as i,C as n,D as m}from"./C3C76hVJ.js";const u=["viewBox"],k=e("mask",{id:"f6c8a9cb-297d-4ec0-a73d-9cff46997a69"},[e("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})],-1),p={mask:"url(#f6c8a9cb-297d-4ec0-a73d-9cff46997a69)"},v={key:0},g=e("path",{fill:"#ffda44",d:"m0 345 256.7-25.5L512 345v167H0z"},null,-1),h=e("path",{fill:"#d80027",d:"m0 167 255-23 257 23v178H0z"},null,-1),w=e("path",{fill:"#333",d:"M0 0h512v167H0z"},null,-1),x={fill:"none"},y=["r"],N=d({__name:"de",props:{flagName:{},strokeColor:{default:"#000"},strokeWidth:{default:0}},setup(c){const l=c,t=a(()=>512+2*l.strokeWidth),o=a(()=>-l.strokeWidth),f=a(()=>256+l.strokeWidth/2);return(B,W)=>(s(),r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"svg-circle-flags",viewBox:`${o.value} ${o.value} ${t.value} ${t.value}`},[k,e("g",p,[l.flagName?(s(),r("title",v,i(l.flagName),1)):n("",!0),g,h,w]),e("g",x,[e("circle",{cx:"256",cy:"256",r:f.value,fill:"none",style:m({stroke:l.strokeColor,strokeWidth:l.strokeWidth})},null,12,y)])],8,u))}});export{N as default};