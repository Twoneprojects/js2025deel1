// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
const activiteiten =[];

function maakLijst(items){
    return items.map(item => `<li class="list-group-item">${item}</li>`).join("");
}
function addEx(e) {
    e.preventDefault();
    const activiteit = document.getElementById("ex1_ex").value.trim();
    const duur = Number(document.getElementById("ex1_min").value);
    const lijst = document.getElementById("ex1_list");
    const out = document.getElementById("ex1_feedback");

    if (!activiteit || !duur) {
        out.className = "alert alert-warning mb-0";
        out.textContent = `⚠️ Vul activiteit en duurtijd in`;
        return;
    }
    if (duur < 0){
        out.className = "alert alert-warning mb-0";
        out.textContent = `⚠️ Vul een correcte duurtijd in`;
        return;
    }
    activiteiten.push(activiteit,duur);
    lijst.innerHTML = maakLijst(activiteiten);
    out.textContent = `Goed bezig! Je hebt nu ${activiteiten.length} oefeningen ingevoerd.`




}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ex1_btn")?.addEventListener("click", addEx);
});