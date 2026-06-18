
const QUEST="CHEVALIER";
function stepNumber(){const m=location.pathname.match(/etape(\d+)/);return m?parseInt(m[1],10):0}
function renderCommon(){
 const top=document.querySelector("[data-topbar]");
 if(top){const n=Math.max(0,Math.min(9,stepNumber()));const shields=Array.from({length:9},(_,i)=>`<span class="shield ${i<n?'filled':''}">🛡️</span>`).join("");const word=QUEST.split("").map((l,i)=>i<n?l:"_").join(" ");top.innerHTML=`<div class="progress">${shields}</div><div class="mystery">${word}</div>`}
 const audio=document.getElementById("medievalAudio");const btn=document.querySelector("[data-audio-toggle]");
 if(btn&&audio){btn.addEventListener("click",async()=>{try{audio.volume=.22;audio.loop=true;if(audio.paused){await audio.play();btn.textContent="🔇 Couper l'ambiance médiévale"}else{audio.pause();btn.textContent="🔊 Activer l'ambiance médiévale"}}catch(e){alert("Le navigateur bloque la lecture. Réessaie après avoir touché l'écran.")}})}
}
function reveal(id){document.getElementById(id||"success")?.classList.add("show")}
document.addEventListener("DOMContentLoaded",renderCommon);
