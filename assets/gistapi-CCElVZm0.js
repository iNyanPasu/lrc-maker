import{L as o,S as c}from"./index-CbKDfWwc.js";const a={description:"https://lrc-maker.github.io",fileName:".lrc-maker",fileContent:"This file is used to be tracked and identified by https://lrc-maker.github.io"},n="https://api.github.com/gists",g=async()=>{const s=localStorage.getItem(o.token),t=await fetch(n,{method:"GET",headers:{Authorization:`token ${s}`},mode:"cors"});if(!t.ok)throw new Error(t.statusText);return t.json()},m=async()=>{const s=localStorage.getItem(o.token),t=await fetch(n,{method:"POST",headers:{Authorization:`token ${s}`},body:JSON.stringify({description:a.description,public:!0,files:{[a.fileName]:{content:a.fileContent}}})});if(!t.ok)throw new Error(t.statusText);return t.json()},h=async()=>{const s=localStorage.getItem(o.token),t=localStorage.getItem(o.gistId),i=await fetch(`${n}/${t}`,{method:"PATCH",headers:{Authorization:`token ${s}`},body:JSON.stringify({description:a.description,files:{[a.fileName]:{content:a.fileContent}}})});if(!i.ok)throw new Error(i.statusText);return i.json()},d=async()=>{const s=localStorage.getItem(o.token),t=localStorage.getItem(o.gistId),i=localStorage.getItem(o.gistEtag),e=await fetch(`${n}/${t}`,{headers:{Authorization:`token ${s}`,"If-None-Match":i}});if(!e.ok&&e.status>=400)throw await e.json();localStorage.setItem(o.gistEtag,e.headers.get("etag"));const r={"x-ratelimit-limit":e.headers.get("x-ratelimit-limit"),"x-ratelimit-remaining":e.headers.get("x-ratelimit-remaining"),"x-ratelimit-reset":e.headers.get("x-ratelimit-reset")};return sessionStorage.setItem(c.ratelimit,JSON.stringify(r)),e.status===200?e.json():null},f=async(s,t)=>{const i=localStorage.getItem(o.token),e=localStorage.getItem(o.gistId),r=await fetch(`${n}/${e}`,{method:"PATCH",headers:{Authorization:`token ${i}`},body:JSON.stringify({files:{[s]:{content:t}}})});if(!r.ok)throw new Error(r.statusText);return r.json()};export{a as G,m as a,h as b,f as c,d,g};
