function activateBankai(){
    const button = document.getElementById("bankai-button")
    button.addEventListener("click", function(){
        document.body.classList.toggle("dark-mode")
        if(document.body.classList.contains("dark-mode")){
            button.textContent = "Desativar BANKAI"
        }else{
            button.textContent = "Ativar BANKAI"
        }
    })
}