function showResult(){
   var resp1 = document.querySelector('input[name="q1"]:checked');
   var resp2 = document.querySelector('input[name="q2"]:checked');
   var resp3 = document.querySelector('input[name="q3"]:checked');

   var divErro = document.getElementById("error");
   var divResultado = document.getElementById("resultado");

   // Validação simples para ver se o usuário respondeu tudo
   if (!resp1 || !resp2 || !resp3) {
       divErro.innerHTML = "Por favor, responda todas as 3 perguntas antes de verificar o resultado!";
       divResultado.style.display = "none";
       return; // Para a execução da função aqui
   }

   divErro.innerHTML = "";
   
   var pontuacao = 0;
   var feedback = "<h3>Seu Resultado Final:</h3><ul>";

   // Verificando Pergunta 1 (Correta: b = 42)
   if (resp1.value === "a") {
       pontuacao++;
       feedback += "<li>Pergunta 1: <strong style='color:green;'>Acertou!</strong> </li>";
   } else {
       feedback += "<li>Pergunta 1: <strong style='color:red;'>Errou!</strong> A correta era Java.</li>";
   }

   if (resp2.value === "a") {
       pontuacao++;
       feedback += "<li>Pergunta 2: <strong style='color:green;'>Acertou!</strong> </li>";
   } else {
       feedback += "<li>Pergunta 2: <strong style='color:red;'>Errou!</strong> A correta era Anakin Skywalker.</li>";
   }

   if (resp3.value === "c") {
       pontuacao++;
       feedback += "<li>Pergunta 3: <strong style='color:green;'>Acertou!</strong></li>";
   } else {
       feedback += "<li>Pergunta 3: <strong style='color:red;'>Errou!</strong> A correta era Yoko Taro.</li>";
   }

   feedback += "</ul>";
   feedback += "<h4>Sua pontuação: " + pontuacao + " de 3.</h4>";
   divResultado.innerHTML = feedback;
   divResultado.style.display = "block";

}