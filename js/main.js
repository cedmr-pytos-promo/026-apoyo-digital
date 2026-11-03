const nav=document.querySelector("#nav"), mobile=document.querySelector("#mobile");
const pages=[...document.querySelectorAll(".page")];
function go(id,anchor){const page=document.getElementById(id);if(!page||!page.classList.contains("page"))return;
pages.forEach(p=>p.classList.toggle("active",p===page));
document.querySelectorAll(".nav[data-go]").forEach(b=>b.classList.toggle("active",b.dataset.go===id));
document.querySelectorAll(".drop").forEach(d=>d.classList.remove("open"));
nav.classList.remove("open");mobile.setAttribute("aria-expanded","false");window.scrollTo({top:0,behavior:"smooth"});
if(anchor){const el=page.querySelector("#"+CSS.escape(anchor));if(el)setTimeout(()=>el.scrollIntoView({behavior:"smooth",block:"start"}),100)}}
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",e=>{if(b.hasAttribute("data-placeholder")){e.preventDefault();alert("Enlace de ejemplo: reemplazá href en index.html por el destino real.");return}go(b.dataset.go,b.dataset.anchor)}));
document.querySelectorAll(".drop>.nav").forEach(b=>b.addEventListener("click",()=>{const d=b.parentElement;const open=!d.classList.contains("open");document.querySelectorAll(".drop").forEach(x=>x.classList.remove("open"));d.classList.toggle("open",open)}));
document.querySelectorAll(".tabs button").forEach(b=>b.addEventListener("click",()=>{const p=b.closest(".page");p.querySelectorAll(".tabs button").forEach(x=>x.classList.toggle("selected",x===b));const a=p.querySelector("#"+CSS.escape(b.dataset.anchor));if(a)a.scrollIntoView({behavior:"smooth",block:"start"})}));
mobile.addEventListener("click",()=>{const open=nav.classList.toggle("open");mobile.setAttribute("aria-expanded",String(open))});
document.addEventListener("click",e=>{if(!e.target.closest(".drop"))document.querySelectorAll(".drop").forEach(d=>d.classList.remove("open"))});
document.querySelector("#top").addEventListener("click",()=>go("inicio"));document.querySelector("#year").textContent=new Date().getFullYear();
document.querySelectorAll("[data-placeholder]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();alert("Enlace de ejemplo: reemplazá href en index.html por el destino real.")}));
