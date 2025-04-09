import{a as d,S as f,i as n}from"./assets/vendor-DEZpR2tN.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",h="49673705-a6e36a8adce307eb03930fb9e";function y(o){const r={key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(m,{params:r})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new f(".gallery a");function L(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:p,downloads:u})=>`<li class="gallery-item">
    <a href="${a}">
    <img src="${s}"  width="360" height="200" alt="${e}" />
    </a>
    <ul class="info">
    <li class="litext">
    <p class="ptext">Likes</p>
    <p class="plink">${t}</p>
    </li>
    <li class="litext">
    <p class="ptext">Views</p>
    <p class="plink">${i}</p>
    </li>
    <li class="litext">
    <p class="ptext">Comments</p>
    <p class="plink">${p}</p>
    </li>
    <li class="litext">
    <p class="ptext">Downloads</p>
    <p class="plink">${u}</p>
    </ul>
    </li>`).join("");l.insertAdjacentHTML("beforeend",r),g.refresh()}function x(){l.innerHTML=""}function b(){c.classList.remove("hidden")}function S(){c.classList.add("hidden")}const q=document.querySelector(".form");q.addEventListener("submit",$);function $(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();b(),x(),y(r).then(s=>{if(s.data.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(s.data.hits)}).catch(s=>n.error({message:"Что то пошло не так",position:"topRight"})).finally(()=>S())}
//# sourceMappingURL=index.js.map
