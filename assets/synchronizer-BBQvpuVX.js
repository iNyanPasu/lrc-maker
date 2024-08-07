import{R as n,A as p,s as G,j as r,d as V,D as H,e as I,f as d,g as J,h as E,i as K,k as P,a as M,S as R,l as W,m as $}from"./index-CbKDfWwc.js";import{l as q}from"./lrc-file-name-BlWFRsDa.js";const L=n.memo(({syncMode:s,setSyncMode:t,lrcDispatch:b,prefState:o})=>{const[i,g]=n.useState(),[f,x]=n.useState(),u=n.useCallback(()=>{t(k=>k===D.select?D.highlight:D.select)},[t]),j=n.useCallback(()=>{b({type:p.getState,payload:k=>{const S=G(k,o);g(w=>(w&&URL.revokeObjectURL(w),URL.createObjectURL(new Blob([S],{type:"text/plain;charset=UTF-8"})))),x(q(k.info))}})},[b,o]),C=s===D.select?"select":"highlight",T=["aside-button","syncmode-button","ripple","glow ",C].join(I.space);return r.jsxs("aside",{className:"aside-panel",children:[r.jsx("button",{className:T,onClick:u,"aria-label":`${C} mode`,children:r.jsx(V,{})}),r.jsx("a",{href:i,download:f,className:"aside-button ripple glow",onClick:j,children:r.jsx(H,{})})]})});L.displayName=L.name;const U=({fixed:s})=>{const t=n.useRef(Symbol(U.name)),[b,o]=n.useState(d.currentTime),[i,g]=n.useState(d.paused),[f,x]=n.useState(d.playbackRate);return n.useEffect(()=>J.sub(t.current,u=>{switch(u.type){case E.pause:{g(u.payload);break}case E.rateChange:{x(u.payload);break}}}),[]),n.useEffect(()=>{const u=[1,10,100,1e3][s]*f;if(i||2*u>60)return K.sub(t.current,j=>{o(j)});{const j=setInterval(()=>{o(d.currentTime)},1e3/(2*u));return()=>{clearInterval(j)}}},[s,i,f]),r.jsx("time",{className:"curser",children:P(b,s)})},z=({sync:s})=>r.jsx("button",{className:"space-button",onClick:s,children:"space"});var D=(s=>(s[s.select=0]="select",s[s.highlight=1]="highlight",s))(D||{});const _=({state:s,dispatch:t})=>{const b=n.useRef(Symbol(_.name)),{selectIndex:o,currentIndex:i,lyric:g}=s,{prefState:f,lang:x}=n.useContext(M);n.useEffect(()=>{t({type:p.info,payload:{name:"tool",value:`${x.app.name} https://lrc-maker.github.io`}})},[t,x]);const[u,j]=n.useState(()=>sessionStorage.getItem(R.syncMode)==="1"?1:0);n.useEffect(()=>{sessionStorage.setItem(R.syncMode,u.toString())},[u]);const C=n.useRef(null),T={0:o,1:i}[u];n.useEffect(()=>{var e;const a=(e=C.current)==null?void 0:e.children[T];a!==void 0&&a.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},[T]),n.useEffect(()=>K.sub(b.current,a=>{t({type:p.refresh,payload:a})}),[t]);const k=n.useCallback(()=>{d.duration&&t({type:p.next,payload:d.currentTime})},[t]),S=n.useCallback((a,e,l)=>{var h;if(!d.duration)return;const c=(h=g[l])==null?void 0:h.time;c!==void 0&&t({type:p.time,payload:d.step(a,e,c)})},[t,g]);n.useEffect(()=>{function a(e){const{code:l,key:c,target:h}=e,m=l||c;if(!$(h)){if(m==="Backspace"||m==="Delete"||m==="Del"){e.preventDefault(),t({type:p.deleteTime,payload:void 0});return}if(l==="Digit0"||c==="0"){e.preventDefault(),S(e,0,o);return}if(l==="Minus"||c==="-"||c==="_"){e.preventDefault(),S(e,-.5,o);return}if(l==="Equal"||c==="+"||c==="="){e.preventDefault(),S(e,.5,o);return}e.metaKey||e.ctrlKey||(l==="Space"||c===" "||c==="Spacebar"?(e.preventDefault(),k()):["ArrowUp","KeyW","KeyJ","Up","W","w","J","j"].includes(m)?(e.preventDefault(),t({type:p.select,payload:y=>y-1})):["ArrowDown","KeyS","KeyK","Down","S","s","K","k"].includes(m)?(e.preventDefault(),t({type:p.select,payload:y=>y+1})):m==="Home"?(e.preventDefault(),t({type:p.select,payload:()=>0})):m==="End"?(e.preventDefault(),t({type:p.select,payload:()=>1/0})):m==="PageUp"?(e.preventDefault(),t({type:p.select,payload:y=>y-10})):m==="PageDown"&&(e.preventDefault(),t({type:p.select,payload:y=>y+10})))}}return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[S,t,o,k]);const w=n.useCallback(a=>{a.stopPropagation();const e=a.target;if(e.classList.contains("line")){const l=Number.parseInt(e.dataset.key,10)||0;t({type:p.select,payload:()=>l})}},[t]),A=n.useCallback(a=>{if(a.stopPropagation(),!d.duration)return;const e=a.target;if(e.classList.contains("line")){const l=Number.parseInt(e.dataset.key,10);S(a,0,l)}},[S]),B=n.useCallback((a,e,l)=>{const c=e===o,h=e===i,m=e>0&&l[e].time<=l[e-1].time,y=Object.entries({line:!0,select:c,highlight:h,error:m}).reduce((N,[O,F])=>(F&&N.push(O),N),[]).join(I.space);return r.jsx(Q,{index:e,className:y,line:a,select:c,prefState:f},e)},[o,i,f]),v=f.screenButton?"lyric-list on-screen-button":"lyric-list";return r.jsxs(r.Fragment,{children:[r.jsx("ul",{ref:C,className:v,onClickCapture:w,onDoubleClickCapture:A,children:s.lyric.map(B)}),r.jsx(L,{syncMode:u,setSyncMode:j,lrcDispatch:t,prefState:f}),f.screenButton&&r.jsx(z,{sync:k})]})},Q=({line:s,index:t,select:b,className:o,prefState:i})=>{const g=P(s.time,i.fixed),f=W(s.text,i.spaceStart,i.spaceEnd);return r.jsxs("li",{"data-key":t,className:o,children:[b&&r.jsx(U,{fixed:i.fixed}),r.jsx("time",{className:"line-time",children:g}),r.jsx("span",{className:"line-text",children:f})]},t)};export{D as SyncMode,_ as Synchronizer};
