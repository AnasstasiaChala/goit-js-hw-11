import{i as c,S as p}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",f="43833375-8d3f0c892462ae71a1cd36e3a",u=i=>{const s=new URLSearchParams({q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:18});return fetch(`${d}?key=${f}&${s}`).then(r=>r.json()).then(r=>(r.hits.length===0&&c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),r.hits))},h=i=>i.map(({webformatURL:s,largeImageURL:r,tags:a,likes:e,views:t,comments:o,downloads:m})=>`<div class="gallery-item">
    <div class="gallery-item-image">
      <a href="${r}">
        <img src="${s}" alt="${a}" />
      </a>
    </div>
    <div class="gallery-item-info">
      <ul class="gallery-item-info-items">
        <li class="gallery-item-info-item">
          <p class="title"><b>Likes</b></p>
          <p class="data">${e}</p>
        </li>
        <li class="gallery-item-info-item">
          <p class="title"><b>Views</b></p>
          <p class="data">${t}</p>
        </li>
        <li class="gallery-item-info-item">
          <p class="title"><b>Comments</b></p>
          <p class="data">${o}</p>
        </li>
        <li class="gallery-item-info-item">
          <p class="title"><b>Downloads</b></p>
          <p class="data">${m}</p>
        </li>
      </ul>
    </div>
    </div>`).join("");document.head.insertAdjacentHTML("beforeend",'<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>');const g=document.querySelector("#searchform"),l=document.querySelector(".gallery"),n=document.querySelector(".loader");function y(i){i.preventDefault();const s=i.target.elements.searchinput.value.trim();if(l.innerHTML="",n.classList.remove("is-hidden"),s===""){l.innerHTML="",i.target.reset(),c.error({title:"Error",message:"Sorry, input field can't be empty",position:"topRight"}),n.classList.add("is-hidden");return}u(s).then(r=>{l.innerHTML=h(r)}).catch(r=>{console.error("Error fetching data:",r),c.error({title:"Error",message:"Failed to fetch data. Please try again later.",position:"topRight"})}).finally(()=>{i.target.reset(),n.classList.add("is-hidden"),new p(".gallery-item-image a")})}g.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
