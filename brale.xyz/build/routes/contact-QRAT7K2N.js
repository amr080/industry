import{a as B}from"/build/_shared/chunk-OVXR4XDO.js";import{c as h,m as v,n as F}from"/build/_shared/chunk-XLBZHPLY.js";import"/build/_shared/chunk-2IFUTIOV.js";import{g as j}from"/build/_shared/chunk-TXRGDYX3.js";import"/build/_shared/chunk-MIGTYQIZ.js";import{a as le,b as ie,c as f}from"/build/_shared/chunk-MFCNT7EO.js";import{d as s}from"/build/_shared/chunk-5XTMU6GV.js";var a=s(le()),H=s(ie()),E=function(e,t){return E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,n){o.__proto__=n}||function(o,n){for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(o[l]=n[l])},E(e,t)};function u(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");E(e,t);function o(){this.constructor=e}e.prototype=t===null?Object.create(t):(o.prototype=t.prototype,new o)}var p=function(){return p=Object.assign||function(t){for(var o,n=1,l=arguments.length;n<l;n++){o=arguments[n];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(t[d]=o[d])}return t},p.apply(this,arguments)};function re(e,t){t===void 0&&(t={});var o=t.insertAt;if(!(!e||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",o==="top"&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var ce=`/*
  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css
*/

.calendly-inline-widget,
.calendly-inline-widget *,
.calendly-badge-widget,
.calendly-badge-widget *,
.calendly-overlay,
.calendly-overlay * {
    font-size:16px;
    line-height:1.2em
}

.calendly-inline-widget iframe,
.calendly-badge-widget iframe,
.calendly-overlay iframe {
    display:inline;
    width:100%;
    height:100%
}

.calendly-popup-content {
    position:relative
}

.calendly-popup-content.calendly-mobile {
    -webkit-overflow-scrolling:touch;
    overflow-y:auto
}

.calendly-overlay {
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    overflow:hidden;
    z-index:9999;
    background-color:#a5a5a5;
    background-color:rgba(31,31,31,0.4)
}

.calendly-overlay .calendly-close-overlay {
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0
}

.calendly-overlay .calendly-popup {
    box-sizing:border-box;
    position:absolute;
    top:50%;
    left:50%;
    -webkit-transform:translateY(-50%) translateX(-50%);
    transform:translateY(-50%) translateX(-50%);
    width:80%;
    min-width:900px;
    max-width:1000px;
    height:90%;
    max-height:680px
}

@media (max-width: 975px) {
    .calendly-overlay .calendly-popup {
        position:fixed;
        top:50px;
        left:0;
        right:0;
        bottom:0;
        -webkit-transform:none;
        transform:none;
        width:100%;
        height:auto;
        min-width:0;
        max-height:none
    }
}

.calendly-overlay .calendly-popup .calendly-popup-content {
    height:100%;
}

.calendly-overlay .calendly-popup-close {
    position:absolute;
    top:25px;
    right:25px;
    color:#fff;
    width:19px;
    height:19px;
    cursor:pointer;
    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;
    background-size:contain
}

@media (max-width: 975px) {
    .calendly-overlay .calendly-popup-close {
        top:15px;
        right:15px
    }
}

.calendly-badge-widget {
    position:fixed;
    right:20px;
    bottom:15px;
    z-index:9998
}

.calendly-badge-widget .calendly-badge-content {
    display:table-cell;
    width:auto;
    height:45px;
    padding:0 30px;
    border-radius:25px;
    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;
    font-family:sans-serif;
    text-align:center;
    vertical-align:middle;
    font-weight:bold;
    font-size:14px;
    color:#fff;
    cursor:pointer
}

.calendly-badge-widget .calendly-badge-content.calendly-white {
    color:#666a73
}

.calendly-badge-widget .calendly-badge-content span {
    display:block;
    font-size:12px
}

.calendly-spinner {
    position:absolute;
    top:50%;
    left:0;
    right:0;
    -webkit-transform:translateY(-50%);
    transform:translateY(-50%);
    text-align:center;
    z-index:-1
}

.calendly-spinner>div {
    display:inline-block;
    width:18px;
    height:18px;
    background-color:#e1e1e1;
    border-radius:50%;
    vertical-align:middle;
    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;
    animation:calendly-bouncedelay 1.4s infinite ease-in-out;
    -webkit-animation-fill-mode:both;
    animation-fill-mode:both
}

.calendly-spinner .calendly-bounce1 {
    -webkit-animation-delay:-0.32s;
    animation-delay:-0.32s
}

.calendly-spinner .calendly-bounce2 {
    -webkit-animation-delay:-0.16s;
    animation-delay:-0.16s
}

@-webkit-keyframes calendly-bouncedelay {
    0%,80%,100% {
        -webkit-transform:scale(0);
        transform:scale(0)
    } 
    
    40%{
        -webkit-transform:scale(1);
        transform:scale(1)
    }
}

@keyframes calendly-bouncedelay{ 
    0%,80%,100% {
        -webkit-transform:scale(0);
        transform:scale(0)
    }
    
    40% {
        -webkit-transform:scale(1);
        transform:scale(1)
    }
}`;re(ce);function b(e){return e.charAt(0)==="#"?e.slice(1):e}function se(e){return e?.primaryColor&&(e.primaryColor=b(e.primaryColor)),e?.textColor&&(e.textColor=b(e.textColor)),e?.backgroundColor&&(e.backgroundColor=b(e.backgroundColor)),e}var G;(function(e){e.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",e.EVENT_TYPE_VIEWED="calendly.event_type_viewed",e.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",e.EVENT_SCHEDULED="calendly.event_scheduled",e.PAGE_HEIGHT="calendly.page_height"})(G||(G={}));var Y=function(e){var t=e.url,o=e.prefill,n=o===void 0?{}:o,l=e.pageSettings,d=l===void 0?{}:l,C=e.utm,r=C===void 0?{}:C,w=e.embedType,c=se(d),_=c.backgroundColor,K=c.hideEventTypeDetails,Z=c.hideLandingPageDetails,x=c.primaryColor,R=c.textColor,ee=c.hideGdprBanner,S=n.customAnswers,y=n.date,k=n.email,N=n.firstName,T=n.guests,L=n.lastName,P=n.location,I=n.smsReminderNumber,D=n.name,A=r.utmCampaign,O=r.utmContent,U=r.utmMedium,M=r.utmSource,z=r.utmTerm,V=r.salesforce_uuid,g=t.indexOf("?"),W=g>-1,ne=t.slice(g+1),te=W?t.slice(0,g):t,oe=[W?ne:null,_?"background_color=".concat(_):null,K?"hide_event_type_details=1":null,Z?"hide_landing_page_details=1":null,x?"primary_color=".concat(x):null,R?"text_color=".concat(R):null,ee?"hide_gdpr_banner=1":null,D?"name=".concat(encodeURIComponent(D)):null,I?"phone_number=".concat(encodeURIComponent(I)):null,P?"location=".concat(encodeURIComponent(P)):null,N?"first_name=".concat(encodeURIComponent(N)):null,L?"last_name=".concat(encodeURIComponent(L)):null,T?"guests=".concat(T.map(encodeURIComponent).join(",")):null,k?"email=".concat(encodeURIComponent(k)):null,y&&y instanceof Date?"date=".concat(de(y)):null,A?"utm_campaign=".concat(encodeURIComponent(A)):null,O?"utm_content=".concat(encodeURIComponent(O)):null,U?"utm_medium=".concat(encodeURIComponent(U)):null,M?"utm_source=".concat(encodeURIComponent(M)):null,z?"utm_term=".concat(encodeURIComponent(z)):null,V?"salesforce_uuid=".concat(encodeURIComponent(V)):null,w?"embed_type=".concat(w):null,"embed_domain=1"].concat(S?ue(S):[]).filter(function(ae){return ae!==null}).join("&");return"".concat(te,"?").concat(oe)},de=function(e){var t=e.getMonth()+1,o=e.getDate(),n=e.getFullYear();return[n,t<10?"0".concat(t):t,o<10?"0".concat(o):o].join("-")},pe=/^a\d{1,2}$/,ue=function(e){var t=Object.keys(e).filter(function(o){return o.match(pe)});return t.length?t.map(function(o){return"".concat(o,"=").concat(encodeURIComponent(e[o]))}):[]},X=function(e){u(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.render=function(){return a.createElement("div",{className:"calendly-spinner"},a.createElement("div",{className:"calendly-bounce1"}),a.createElement("div",{className:"calendly-bounce2"}),a.createElement("div",{className:"calendly-bounce3"}))},t}(a.Component),me={minWidth:"320px",height:"630px"},q=function(e){u(t,e);function t(o){var n=e.call(this,o)||this;return n.state={isLoading:!0},n.onLoad=n.onLoad.bind(n),n}return t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var o=Y({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),n=this.props.LoadingSpinner||X;return a.createElement("div",{className:"calendly-inline-widget",style:this.props.styles||me},this.state.isLoading&&a.createElement(n,null),a.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:o}))},t}(a.Component),fe=function(e){u(t,e);function t(o){var n=e.call(this,o)||this;return n.state={isLoading:!0},n.onLoad=n.onLoad.bind(n),n}return t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var o=Y({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),n=this.props.LoadingSpinner||X;return a.createElement(a.Fragment,null,this.state.isLoading&&a.createElement(n,null),a.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:o}))},t}(a.Component),$=function(e){if(!e.open)return null;if(!e.rootElement)throw new Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return H.createPortal(a.createElement("div",{className:"calendly-overlay"},a.createElement("div",{onClick:e.onModalClose,className:"calendly-close-overlay"}),a.createElement("div",{className:"calendly-popup"},a.createElement("div",{className:"calendly-popup-content"},a.createElement(fe,p({},e)))),a.createElement("button",{className:"calendly-popup-close",onClick:e.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),e.rootElement)},ve=function(e){u(t,e);function t(o){var n=e.call(this,o)||this;return n.state={isOpen:!1},n.onClick=n.onClick.bind(n),n.onClose=n.onClose.bind(n),n}return t.prototype.onClick=function(o){o.preventDefault(),this.setState({isOpen:!0})},t.prototype.onClose=function(o){o.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return a.createElement(a.Fragment,null,a.createElement("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),a.createElement($,p({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t}(a.Component),be=function(e){u(t,e);function t(o){var n=e.call(this,o)||this;return n.state={isOpen:!1},n.onClick=n.onClick.bind(n),n.onClose=n.onClose.bind(n),n}return t.prototype.onClick=function(){this.setState({isOpen:!0})},t.prototype.onClose=function(o){o.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return a.createElement("div",{className:"calendly-badge-widget",onClick:this.onClick},a.createElement("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&a.createElement("span",null,"powered by Calendly")),a.createElement($,p({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t}(a.Component);var m=s(f(),1);function J({url:e}){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(q,{url:e})})}var i=s(f(),1),{desc:ye,path:Ne,title:ge}=j.contact;var he=({data:e})=>e?B({desc:ye,title:ge,urls:e.urls}):[];function Q(){return(0,i.jsx)(F,{children:(0,i.jsx)("section",{className:"section-first",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"lg:grid lg:grid-cols-2 items-center gap-x-16",children:[(0,i.jsxs)(h.div,{variants:v,children:[(0,i.jsx)("h1",{className:"eyebrow",children:"Talk to sales"}),(0,i.jsx)("h2",{className:"mt-0 mb-6",children:"Create and grow your own stablecoin program"}),(0,i.jsxs)("p",{className:"subheading mt-2 mb-12",children:["Schedule a call with our team to learn how we can help, or reach out to us at"," ",(0,i.jsx)("a",{className:"link",href:"mailto:support@brale.xyz",children:"support@brale.xyz"}),"."]})]}),(0,i.jsx)(h.div,{variants:v,children:(0,i.jsx)(J,{url:"https://calendly.com/d/ck6b-wqj-bzf/meet-with-brale?hide_landing_page_details=1&hide_gdpr_banner=1"})})]})})})})}export{Q as default,he as meta};
//# sourceMappingURL=/build/routes/contact-QRAT7K2N.js.map
