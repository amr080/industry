import{k as f,s as a,o as s,c as r,A as l,B as n,C as d,D as m}from"./C3C76hVJ.js";const h=["viewBox"],u=l("mask",{id:"f7c322d8-56af-4b07-a988-a86c99255022"},[l("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})],-1),k={mask:"url(#f7c322d8-56af-4b07-a988-a86c99255022)"},p={key:0},v=l("path",{fill:"#eee",d:"M0 0h171l85 32 85-32h171v171l-32 85 32 85v171H341l-85-32-85 32H0V341l32-85-32-85Z"},null,-1),g=l("path",{fill:"#d80027",d:"M171 0h170v512H171z"},null,-1),z=l("path",{fill:"#0052b4",d:"M512 171v170H0V171z"},null,-1),w=l("path",{fill:"#eee",d:"m236 247 52-37h-64l52 37-20-61zm-45 79 52-37h-64l52 37-20-61zm90 0 52-37h-64l52 37-20-61zm74-47 52-37h-64l52 37-20-61zm-238 0 52-37h-64l52 37-20-61z"},null,-1),x={fill:"none"},y=["r"],C=f({__name:"an",props:{flagName:{},strokeColor:{default:"#000"},strokeWidth:{default:0}},setup(i){const e=i,t=a(()=>512+2*e.strokeWidth),o=a(()=>-e.strokeWidth),c=a(()=>256+e.strokeWidth/2);return(W,B)=>(s(),r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"svg-circle-flags",viewBox:`${o.value} ${o.value} ${t.value} ${t.value}`},[u,l("g",k,[e.flagName?(s(),r("title",p,n(e.flagName),1)):d("",!0),v,g,z,w]),l("g",x,[l("circle",{cx:"256",cy:"256",r:c.value,fill:"none",style:m({stroke:e.strokeColor,strokeWidth:e.strokeWidth})},null,12,y)])],8,h))}});export{C as default};