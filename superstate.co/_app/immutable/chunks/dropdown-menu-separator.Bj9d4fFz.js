import{s as C,q as h,i as I,f as g,A as d,k as S,x as _,B as w,J as z,e as B,c as J,b as M,z as y,D as O,r as k,n as V,u as F,o as G,p as H}from"./scheduler.DQu3tbww.js";import{S as j,i as q,g as K,b as m,e as L,t as p,c as Q,a as R,m as T,d as U}from"./index.DSqMFQ5_.js";import{g as A,a as W}from"./spread.BOtnHUHl.js";import"./create.Bit1cZk2.js";import{g as X}from"./index.B_Wh4ieE.js";import{c as v}from"./utils.BLFPrQJ5.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new s.Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="fe8968e3-fa4e-46ea-a19f-6e7483dcf1f6",s._sentryDebugIdIdentifier="sentry-dbid-fe8968e3-fa4e-46ea-a19f-6e7483dcf1f6")}catch{}})();const Y=s=>({builder:s&4}),D=s=>({builder:s[2]});function Z(s){let e,t,r,a=[s[3],s[5]],o={};for(let n=0;n<a.length;n+=1)o=_(o,a[n]);return{c(){e=B("div"),this.h()},l(n){e=J(n,"DIV",{}),M(e).forEach(g),this.h()},h(){y(e,o)},m(n,c){I(n,e,c),s[8](e),t||(r=O(s[3].action(e)),t=!0)},p(n,c){y(e,o=A(a,[c&8&&n[3],c&32&&n[5]]))},i:k,o:k,d(n){n&&g(e),s[8](null),t=!1,r()}}}function x(s){let e;const t=s[7].default,r=V(t,s,s[6],D);return{c(){r&&r.c()},l(a){r&&r.l(a)},m(a,o){r&&r.m(a,o),e=!0},p(a,o){r&&r.p&&(!e||o&68)&&F(r,t,a,a[6],e?H(t,a[6],o,Y):G(a[6]),D)},i(a){e||(p(r,a),e=!0)},o(a){m(r,a),e=!1},d(a){r&&r.d(a)}}}function $(s){let e,t,r,a;const o=[x,Z],n=[];function c(i,f){return i[1]?0:1}return e=c(s),t=n[e]=o[e](s),{c(){t.c(),r=h()},l(i){t.l(i),r=h()},m(i,f){n[e].m(i,f),I(i,r,f),a=!0},p(i,[f]){let u=e;e=c(i),e===u?n[e].p(i,f):(K(),m(n[u],1,1,()=>{n[u]=null}),L(),t=n[e],t?t.p(i,f):(t=n[e]=o[e](i),t.c()),p(t,1),t.m(r.parentNode,r))},i(i){a||(p(t),a=!0)},o(i){m(t),a=!1},d(i){i&&g(r),n[e].d(i)}}}function ee(s,e,t){let r;const a=["asChild","el"];let o=d(e,a),n,{$$slots:c={},$$scope:i}=e,{asChild:f=!1}=e,{el:u=void 0}=e;const{elements:{separator:b},getAttrs:E}=X();S(s,b,l=>t(3,n=l));const N=E("separator");function P(l){z[l?"unshift":"push"](()=>{u=l,t(0,u)})}return s.$$set=l=>{e=_(_({},e),w(l)),t(5,o=d(e,a)),"asChild"in l&&t(1,f=l.asChild),"el"in l&&t(0,u=l.el),"$$scope"in l&&t(6,i=l.$$scope)},s.$$.update=()=>{s.$$.dirty&8&&t(2,r=n),s.$$.dirty&4&&Object.assign(r,N)},[u,f,r,n,b,o,i,c,P]}class te extends j{constructor(e){super(),q(this,e,ee,$,C,{asChild:1,el:0})}}function se(s){let e,t;const r=[{class:v("-mx-1 my-1 h-px bg-muted",s[0])},s[1]];let a={};for(let o=0;o<r.length;o+=1)a=_(a,r[o]);return e=new te({props:a}),{c(){Q(e.$$.fragment)},l(o){R(e.$$.fragment,o)},m(o,n){T(e,o,n),t=!0},p(o,[n]){const c=n&3?A(r,[n&1&&{class:v("-mx-1 my-1 h-px bg-muted",o[0])},n&2&&W(o[1])]):{};e.$set(c)},i(o){t||(p(e.$$.fragment,o),t=!0)},o(o){m(e.$$.fragment,o),t=!1},d(o){U(e,o)}}}function oe(s,e,t){const r=["class"];let a=d(e,r),{class:o=void 0}=e;return s.$$set=n=>{e=_(_({},e),w(n)),t(1,a=d(e,r)),"class"in n&&t(0,o=n.class)},[o,a]}class fe extends j{constructor(e){super(),q(this,e,oe,se,C,{class:0})}}export{fe as D};
//# sourceMappingURL=dropdown-menu-separator.Bj9d4fFz.js.map