"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[523],{6523:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var i=n(5893);n(5659);var o=n(2666),a=n(7747),r=n(2757),s=n(9078);n(2567);var l=n(7294);let u=[{list:["Access deep, liquid markets for tokenized RWAs.","Automated Market Making (AMM) ","Mitigate volatility through optimized market dept","Secure the best pricing for your assets.","Trade securely without intermediaries."],title:"Maximize Liquidity",subtitle:"Cross-Chain Liquidity Aggregation",description:"GSX’s Interchain Liquidity Pools (ILPs) combine liquidity aggregation and market-making algorithms to revolutionize tokenized Real-World Asset (RWA) trading."},{list:["Comprehensive KYC Protocols.","Prevent illicit activities with advanced anti-money laundering protocols.","Proof-of-Authority (PoA) Consensus","Adhere to local and international regulations seamlessly.","Asset Security."],title:"Regulatory Compliance",subtitle:"Cross-Chain Liquidity Aggregation",description:"GSX’s Security Framework combines stringent KYC and AML protocols with a PoA consensus mechanism to ensure secure, compliant, and trustworthy transactions for all stakeholders."},{list:["Tokenized RWA Lending","Maximize returns through yield farming and staking rewards.","Ensure secure and efficient lending with automated processes.","Enhanced Asset Utilization"],title:"Advanced Financial Solutions",subtitle:"Cross-Chain Liquidity Aggregation",description:"GSX’s Smart Contract Lending Pools enable income generation and yield optimization through advanced yield farming and staking mechanisms, transforming tokenized RWAs into productive financial assets."},{list:["Simplify integration for both technical and non-technical users.","Robust API Infrastructure","Efficient Asset Management","Streamlined Liquidity Provision"],title:"Seamless Integration",subtitle:"Cross-Chain Liquidity Aggregation",description:"GSX’s Platform combines an intuitive design with a powerful API infrastructure to simplify integration, enabling efficient management and liquidity provision for tokenized assets."}];var c=n(2729),d=n(4960),f=n(1672),m=n(3487),p=n(6876),h=n(3910),g=n(463),x=n(4250);let v=e=>{let{animationSpeed:t=.4,opacities:n=[.3,.3,.3,.5,.5,.5,.8,.8,.8,1],colors:o=[[0,255,255]],containerClassName:a,dotSize:r,showGradient:s=!0}=e;return(0,i.jsxs)("div",{className:(0,p.cn)("h-full relative bg-white w-full",a),children:[(0,i.jsx)("div",{className:"h-full w-full",children:(0,i.jsx)(y,{colors:null!=o?o:[[0,255,255]],dotSize:null!=r?r:3,opacities:null!=n?n:[.3,.3,.3,.5,.5,.5,.8,.8,.8,1],shader:"\n              float animation_speed_factor = ".concat(t.toFixed(1),";\n              float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);\n              opacity *= step(intro_offset, u_time * animation_speed_factor);\n              opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);\n            "),center:["x","y"]})}),s&&(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]"})]})},y=e=>{let{colors:t=[[0,0,0]],opacities:n=[.04,.04,.04,.04,.04,.08,.08,.08,.08,.14],totalSize:o=4,dotSize:a=2,shader:r="",center:s=["x","y"]}=e,u=l.useMemo(()=>{let e=[t[0],t[0],t[0],t[0],t[0],t[0]];return 2===t.length?e=[t[0],t[0],t[0],t[1],t[1],t[1]]:3===t.length&&(e=[t[0],t[0],t[1],t[1],t[2],t[2]]),{u_colors:{value:e.map(e=>[e[0]/255,e[1]/255,e[2]/255]),type:"uniform3fv"},u_opacities:{value:n,type:"uniform1fv"},u_total_size:{value:o,type:"uniform1f"},u_dot_size:{value:a,type:"uniform1f"}}},[t,n,o,a]);return(0,i.jsx)(b,{source:"\n        precision mediump float;\n        in vec2 fragCoord;\n\n        uniform float u_time;\n        uniform float u_opacities[10];\n        uniform vec3 u_colors[6];\n        uniform float u_total_size;\n        uniform float u_dot_size;\n        uniform vec2 u_resolution;\n        out vec4 fragColor;\n        float PHI = 1.61803398874989484820459;\n        float random(vec2 xy) {\n            return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);\n        }\n        float map(float value, float min1, float max1, float min2, float max2) {\n            return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\n        }\n        void main() {\n            vec2 st = fragCoord.xy;\n            ".concat(s.includes("x")?"st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));":"","\n            ").concat(s.includes("y")?"st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));":"","\n      float opacity = step(0.0, st.x);\n      opacity *= step(0.0, st.y);\n\n      vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));\n\n      float frequency = 5.0;\n      float show_offset = random(st2);\n      float rand = random(st2 * floor((u_time / frequency) + show_offset + frequency) + 1.0);\n      opacity *= u_opacities[int(rand * 10.0)];\n      opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));\n      opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));\n\n      vec3 color = u_colors[int(show_offset * 6.0)];\n\n      ").concat(r,"\n\n      fragColor = vec4(color, opacity);\n      fragColor.rgb *= fragColor.a;\n        }"),uniforms:u,maxFps:60})},_=e=>{let{source:t,uniforms:n,maxFps:o=60}=e,{size:a}=(0,h.D)(),r=(0,l.useRef)(),s=0;(0,h.F)(e=>{let{clock:t}=e;if(!r.current)return;let n=t.getElapsedTime();n-s<1/o||(s=n,r.current.material.uniforms.u_time.value=n)});let u=()=>{let e={};for(let t in n){let i=n[t];switch(i.type){case"uniform1f":e[t]={value:i.value,type:"1f"};break;case"uniform3f":e[t]={value:new x.Pa4().fromArray(i.value),type:"3f"};break;case"uniform1fv":e[t]={value:i.value,type:"1fv"};break;case"uniform3fv":e[t]={value:i.value.map(e=>new x.Pa4().fromArray(e)),type:"3fv"};break;case"uniform2f":e[t]={value:new x.FM8().fromArray(i.value),type:"2f"};break;default:console.error("Invalid uniform type for '".concat(t,"'."))}}return e.u_time={value:0,type:"1f"},e.u_resolution={value:new x.FM8(2*a.width,2*a.height)},e},c=(0,l.useMemo)(()=>new x.jyz({vertexShader:"\n      precision mediump float;\n      in vec2 coordinates;\n      uniform vec2 u_resolution;\n      out vec2 fragCoord;\n      void main(){\n        float x = position.x;\n        float y = position.y;\n        gl_Position = vec4(x, y, 0.0, 1.0);\n        fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;\n        fragCoord.y = u_resolution.y - fragCoord.y;\n      }\n      ",fragmentShader:t,uniforms:u(),glslVersion:x.LSk,blending:x.Xaj,blendSrc:x.k74,blendDst:x.ghN}),[a.width,a.height,t]);return(0,i.jsxs)("mesh",{ref:r,children:[(0,i.jsx)("planeGeometry",{args:[2,2]}),(0,i.jsx)("primitive",{object:c,attach:"material"})]})},b=e=>{let{source:t,uniforms:n,maxFps:o=60}=e;return(0,i.jsx)(g.Xz,{className:"absolute inset-0  h-full w-full",children:(0,i.jsx)(_,{source:t,uniforms:n,maxFps:o})})};function w(){let e=(0,c._)(["\n            radial-gradient(\n              ","px circle at ","px ","px,\n              white,\n              transparent 80%\n            )\n          "]);return w=function(){return e},e}let z=e=>{let{children:t,radius:n=350,color:o="#262626",className:a,...r}=e,s=(0,d.c)(0),u=(0,d.c)(0),[c,h]=(0,l.useState)(!1);return(0,i.jsxs)("div",{className:(0,p.cn)("group/spotlight p-10 rounded-md relative border border-neutral-800 bg-black dark:border-neutral-800",a),onMouseMove:function(e){let{currentTarget:t,clientX:n,clientY:i}=e,{left:o,top:a}=t.getBoundingClientRect();s.set(n-o),u.set(i-a)},onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),...r,children:[(0,i.jsx)(f.E.div,{className:"pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100",style:{backgroundColor:o,maskImage:(0,m.Y)(w(),n,s,u)},children:c&&(0,i.jsx)(v,{animationSpeed:5,containerClassName:"bg-transparent absolute inset-0 pointer-events-none",colors:[[59,130,246],[139,92,246]],dotSize:3})}),t]})},j=e=>{let{title:t}=e;return(0,i.jsxs)("li",{className:"flex gap-2 items-start",children:[(0,i.jsx)(k,{}),(0,i.jsx)("p",{className:"text-white text-left",children:t})]})},k=()=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",className:"h-4 w-4 text-blue-500 mt-1 flex-shrink-0",children:[(0,i.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,i.jsx)("path",{d:"M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z",fill:"currentColor",strokeWidth:"0"})]});var C=e=>{let{isSectionOneVisible:t,sectionOneRef:n}=e;return(0,i.jsxs)(a.xu,{width:"100%",maxW:"1200px",pt:{base:10,md:20},my:10,align:"center",id:"rwa",children:[(0,i.jsx)(r.X,{mb:{md:20},as:"h3",size:"2xl",textAlign:"center",children:"Your Partner in Real World Asset Liquidity"}),(0,i.jsx)(a.xu,{ref:n,opacity:0,visibility:t?"visible":"hidden",animation:t?"".concat(o.ER," 1s ease-out forwards"):"none",transition:"opacity 1s, transform 1s",children:(0,i.jsx)(s.r,{w:["90%","100%"],mt:6,mx:"auto",gap:"24px",templateColumns:["repeat(1,1fr)","repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(3,1fr)"],children:u.map(e=>(0,i.jsx)(a.xu,{w:{base:"100%",md:"100%"},children:(0,i.jsxs)(z,{className:"w-full",children:[(0,i.jsx)("p",{className:"text-xl font-bold relative z-20 mt-2 text-white",children:e.title}),(0,i.jsx)("div",{className:"text-neutral-200 mt-4 relative z-20",children:(0,i.jsx)("ul",{className:"list-none  mt-2",children:e.list.map(e=>(0,i.jsx)(j,{title:e},e))})}),(0,i.jsx)("p",{className:"text-neutral-300 text-left mt-4 relative z-20 text-sm",children:e.description})]})},e))})})]})}}}]);