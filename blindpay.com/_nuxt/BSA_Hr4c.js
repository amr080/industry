import{k as d,s as t,o as s,c as r,A as e,B as i,C as n,D as m}from"./C3C76hVJ.js";const u=["viewBox"],h=e("mask",{id:"3fb7f967-d0b4-4923-9d25-03e8fcd2c7ea"},[e("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})],-1),k={mask:"url(#3fb7f967-d0b4-4923-9d25-03e8fcd2c7ea)"},p={key:0},v=e("path",{fill:"#0052b4",d:"M0 0h512v342.3l-22 34.2 22 32.5v103H0V409l25.4-31L0 342.2z"},null,-1),g=e("path",{fill:"#eee",d:"m175.2 164.2 13.8 42.5h44.7L197.6 233l13.8 42.5-36.2-26.3-36.1 26.3 13.8-42.5-36.2-26.3h44.7zm-76.7-44.5 8.2 25.5h26.9L111.9 161l8.3 25.5-21.7-15.7-21.7 15.7L85 161l-21.7-15.7h26.9z"},null,-1),w=e("path",{fill:"#ffda44",d:"M0 342.3h512V409H0z"},null,-1),x={fill:"none"},y=["r"],W=d({__name:"cw",props:{flagName:{},strokeColor:{default:"#000"},strokeWidth:{default:0}},setup(f){const l=f,a=t(()=>512+2*l.strokeWidth),o=t(()=>-l.strokeWidth),c=t(()=>256+l.strokeWidth/2);return(b,z)=>(s(),r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"svg-circle-flags",viewBox:`${o.value} ${o.value} ${a.value} ${a.value}`},[h,e("g",k,[l.flagName?(s(),r("title",p,i(l.flagName),1)):n("",!0),v,g,w]),e("g",x,[e("circle",{cx:"256",cy:"256",r:c.value,fill:"none",style:m({stroke:l.strokeColor,strokeWidth:l.strokeWidth})},null,12,y)])],8,u))}});export{W as default};