import{k as i,s as a,o as s,c as r,A as l,B as n,C as f,D as m}from"./C3C76hVJ.js";const k=["viewBox"],u=l("mask",{id:"15a0cc0f-440d-41ed-b6db-1a9cd4321907"},[l("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})],-1),p={mask:"url(#15a0cc0f-440d-41ed-b6db-1a9cd4321907)"},g={key:0},h=l("path",{fill:"#eee",d:"M0 0h182.5l88.1 268.5-88 243.5H0z"},null,-1),v=l("path",{fill:"#d80027",d:"m182.5 0-82.3 42.7 82.3 42.7-82.3 42.6 82.3 42.7-82.3 42.7 82.3 42.6-82.3 42.7 82.3 42.7-82.3 42.6 82.3 42.7-82.3 42.7 82.3 42.6H512V0H182.5z"},null,-1),w={fill:"none"},x=["r"],W=i({__name:"bh",props:{flagName:{},strokeColor:{default:"#000"},strokeWidth:{default:0}},setup(c){const e=c,t=a(()=>512+2*e.strokeWidth),o=a(()=>-e.strokeWidth),d=a(()=>256+e.strokeWidth/2);return(y,b)=>(s(),r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"svg-circle-flags",viewBox:`${o.value} ${o.value} ${t.value} ${t.value}`},[u,l("g",p,[e.flagName?(s(),r("title",g,n(e.flagName),1)):f("",!0),h,v]),l("g",w,[l("circle",{cx:"256",cy:"256",r:d.value,fill:"none",style:m({stroke:e.strokeColor,strokeWidth:e.strokeWidth})},null,12,x)])],8,k))}});export{W as default};