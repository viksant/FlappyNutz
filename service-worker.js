if(!self.define){let e,f={};const c=(c,b)=>(c=new URL(c+".js",b).href,f[c]||new Promise((f=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=f,document.head.appendChild(e)}else e=c,importScripts(c),f()})).then((()=>{let e=f[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(b,d)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(f[i])return;let r={};const n=e=>c(e,i),a={module:{uri:i},exports:r,require:n};f[i]=Promise.all(b.map((e=>a[e]||n(e)))).then((e=>(d(...e),r)))}}define(["./workbox-1f84e78b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"06f58df2486e5ade890cf491a58b4e35.ogg",revision:"e34cb4c6c2967438f5c0dc8b11de0663"},{url:"09f7e99dce7a2d12b43909f45bcff6f2.ogg",revision:"2573310c3ac9b0ddea6ab6e07a0adfe5"},{url:"0e92b61396f20a47df12584ce54deedd.png",revision:"b83fafeb4c89c3377a9d069cbbf1cb67"},{url:"1f82ae5350be3039bfb3fe84ce4c4f89.png",revision:"24e7141a90cb3e7e99b0e2b87a2f1008"},{url:"25b7658563967e60ca23fb51af9c084f.ogg",revision:"b881ed43f34017dfedd456cb5e3da40c"},{url:"496.bf42f1044483e1e9924d.js",revision:null},{url:"53be63225a77062f0e0567615aaef471.ogg",revision:"9bbbbbf81967c88509bd9ed0bc15edfc"},{url:"716a0b1804ebffe7525dbce83e89b9b9.png",revision:"0d0d4fe741d03363ff914fbddd2ad6b2"},{url:"c175a4007b0311e6a62caa57d109613a.png",revision:"d2440137b9ce166777f4274244833b03"},{url:"dc45aa33193e9bb8f9e760279a26459b.png",revision:"f75b111b32df67bcb175d0560924ea78"},{url:"favicon.ico",revision:"ef871f19ecaf187af56ef82bebb359b5"},{url:"fb85655698a54f8cde03153d61436a8e.ogg",revision:"176090bc0ec6ccc238c065d898c653cb"},{url:"index.html",revision:"f9a599a22fc8f08f00515bbfa35e6b74"},{url:"main.7fa5dac8d0ad9ccb9593.js",revision:null},{url:"main.ac64de651ce055b7ad0e.css",revision:null}],{})}));
