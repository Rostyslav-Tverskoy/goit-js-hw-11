import{a as f,S as m,i as n}from"./assets/vendor-DEZpR2tN.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",g="49673705-a6e36a8adce307eb03930fb9e";function y(o){const r={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(h,{params:r})}const c=document.querySelector(".gallery"),p=document.querySelector(".loader"),L=new m(".gallery a");function x(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:u,downloads:d})=>`<li class="gallery-item">
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
    <p class="plink">${u}</p>
    </li>
    <li class="litext">
    <p class="ptext">Downloads</p>
    <p class="plink">${d}</p>
    </ul>
    </li>`).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function b(){c.innerHTML=""}function S(){p.classList.remove("hidden")}function l(){p.classList.add("hidden")}const q=document.querySelector(".form");q.addEventListener("submit",$);function $(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();S(),b(),y(r).then(s=>{if(s.data.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l();return}x(s.data.hits),l()}).catch(s=>n.error({message:"Что то пошло не так",position:"topRight"}))}
//# sourceMappingURL=index.js.map
