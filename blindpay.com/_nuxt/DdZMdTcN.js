import{k as i,s as a,o as s,c as r,A as e,B as f,C as n,D as v}from"./C3C76hVJ.js";const m=["viewBox"],u=e("mask",{id:"5caef9a5-1edc-40be-bb8a-5de3efac6dd2"},[e("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})],-1),h={mask:"url(#5caef9a5-1edc-40be-bb8a-5de3efac6dd2)"},k={key:0},p=e("path",{fill:"#d80027",d:"m0 256 255.2-39.6L512 256v256H0z"},null,-1),g=e("path",{fill:"#0052b4",d:"M0 0h512v256H0z"},null,-1),b=e("path",{fill:"#ffda44",d:"M189.2 178a33.4 33.4 0 0 0-55.6-24.8v-19.6h11.1v-22.3h-11.1v-11.1h-22.3v11.1h-11.1v22.3h11.1v19.6A33.4 33.4 0 0 0 66.8 203v19.6H178V203c6.8-6.1 11.1-15 11.1-25z"},null,-1),w={fill:"none"},x=["r"],z=i({__name:"li",props:{flagName:{},strokeColor:{default:"#000"},strokeWidth:{default:0}},setup(c){const l=c,t=a(()=>512+2*l.strokeWidth),o=a(()=>-l.strokeWidth),d=a(()=>256+l.strokeWidth/2);return(y,B)=>(s(),r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"svg-circle-flags",viewBox:`${o.value} ${o.value} ${t.value} ${t.value}`},[u,e("g",h,[l.flagName?(s(),r("title",k,f(l.flagName),1)):n("",!0),p,g,b]),e("g",w,[e("circle",{cx:"256",cy:"256",r:d.value,fill:"none",style:v({stroke:l.strokeColor,strokeWidth:l.strokeWidth})},null,12,x)])],8,m))}});export{z as default};