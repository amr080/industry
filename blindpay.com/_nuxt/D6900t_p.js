import{k as i,s as l,o as s,c as r,A as a,B as n,C as f,D as m}from"./C3C76hVJ.js";const k=["viewBox"],u=a("mask",{id:"da8168a1-c817-49de-a301-bd1afa9c9986"},[a("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})],-1),p={mask:"url(#da8168a1-c817-49de-a301-bd1afa9c9986)"},v={key:0},g=a("path",{fill:"#eee",d:"m0 256 249.6-41.3L512 256v256H0z"},null,-1),h=a("path",{fill:"#a2001d",d:"M0 0h512v256H0z"},null,-1),w={fill:"none"},x=["r"],C=i({__name:"id",props:{flagName:{},strokeColor:{default:"#000"},strokeWidth:{default:0}},setup(c){const e=c,t=l(()=>512+2*e.strokeWidth),o=l(()=>-e.strokeWidth),d=l(()=>256+e.strokeWidth/2);return(y,B)=>(s(),r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"svg-circle-flags",viewBox:`${o.value} ${o.value} ${t.value} ${t.value}`},[u,a("g",p,[e.flagName?(s(),r("title",v,n(e.flagName),1)):f("",!0),g,h]),a("g",w,[a("circle",{cx:"256",cy:"256",r:d.value,fill:"none",style:m({stroke:e.strokeColor,strokeWidth:e.strokeWidth})},null,12,x)])],8,k))}});export{C as default};