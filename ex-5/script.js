let xpAtual = 0;

const btnAdd = document.getElementById("plus-xp")
const btnRem = document.getElementById("nagative-xp")

function updateXP(quantidade){
    const xpDisplay = document.getElementById("xpDisplay")
    xpAtual += quantidade
    if (xpAtual < 0){
        xpAtual = 0
    }
    xpDisplay.textContent = `${xpAtual} XP`
}