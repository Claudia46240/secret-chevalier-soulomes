
const QUEST="CHEVALIER";
function solvedSteps(){try{return JSON.parse(localStorage.getItem("soulomes_solved")||"[]")}catch(e){return[]}}
function saveSolved(step){const solved=solvedSteps();if(!solved.includes(step)){solved.push(step);solved.sort((a,b)=>a-b);localStorage.setItem("soulomes_solved",JSON.stringify(solved))}renderCommon()}
function renderCommon(){const top=document.querySelector("[data-topbar]");if(top){const solved=solvedSteps();const shields=Array.from({length:9},(_,i)=>`<span class="shield ${solved.includes(i+1)?'filled':''}">🛡️</span>`).join("");const word=QUEST.split("").map((l,i)=>solved.includes(i+1)?l:"_").join(" ");top.innerHTML=`<div class="progress">${shields}</div><div class="mystery">${word}</div>`}}
function reveal(id,step){const el=document.getElementById(id||"success");if(el)el.classList.add("show");if(step)saveSolved(step)}
function resetSoulomesProgress(){localStorage.removeItem("soulomes_solved");renderCommon();alert("Progression réinitialisée. Tu peux tester le jeu comme au premier lancement.");location.reload()}
function openMap(){const d=document.querySelector(".map-box");if(d){d.open=true;d.scrollIntoView({behavior:"smooth",block:"start"});}}
document.addEventListener("DOMContentLoaded",renderCommon);
