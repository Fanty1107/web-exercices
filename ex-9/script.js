const storyData = {
    start: {
        text: "Você caminha pelas ruínas da cidade. O som do vento ecoa nos prédios vazios. De repente, uma pequena forma de vida mecânica enferrujada se aproxima. Ela estende os braços curtos, oferecendo a você uma flor lunar intacta.",
        choices: [
            { text: "Atacar a máquina", next: "atacar" },
            { text: "Aceitar a flor", next: "aceitar" },
            { text: "Ignorar e fugir", next: "fugir" }
        ]
    },
    
    atacar: {
        text: "Sua lâmina corta o ar e a máquina é destruída em um instante. No entanto, do monte de sucata, um sinal de rádio começa a apitar freneticamente.",
        choices: [
            { text: "Vasculhar a sucata", next: "atacar_vasculhar" },
            { text: "Recuar para as sombras", next: "atacar_recuar" }
        ]
    },
    atacar_vasculhar: {
        text: "Final [A]: Agressão Imprudente. Você encontra um núcleo de memória, mas antes que possa extraí-lo, um robô Golias surge dos escombros para vingar seu companheiro.",
        choices: [] 
    },
    atacar_recuar: {
        text: "Final [B]: Sobrevivência Fria. Você se esconde e observa outras máquinas recolherem os restos do companheiro caído. A guerra eterna continua.",
        choices: []
    },

    aceitar: {
        text: "Você guarda sua arma e pega a flor. Os olhos da máquina piscam em verde e ela começa a andar mancando, gesticulando para que você a siga até uma fábrica.",
        choices: [
            { text: "Seguir a máquina", next: "aceitar_seguir" },
            { text: "Agradecer e ir por outro caminho", next: "aceitar_sozinho" }
        ]
    },
    aceitar_seguir: {
        text: "Final [C]: Laços Sintéticos. A máquina o guia até um refúgio pacífico de robôs renegados. Você descobre que algumas coisas não precisam ser cortadas por espadas.",
        choices: []
    },
    aceitar_sozinho: {
        text: "Final [D]: O Peso do Dever. Você prende a flor em sua armadura e retoma a missão. A flor murcha em poucos dias, mas a lembrança do encontro permanece intacta.",
        choices: []
    },

    fugir: {
        text: "Você vira as costas e acelera o passo. Horas depois, em uma área isolada, você encontra um terminal YoRHa emitindo um sinal de acesso não autorizado.",
        choices: [
            { text: "Tentar hackear o terminal", next: "fugir_hackear" },
            { text: "Montar acampamento e descansar", next: "fugir_acampamento" }
        ]
    },
    fugir_hackear: {
        text: "Final [E]: Dados Corrompidos. Um vírus lógico defensivo invade seus circuitos durante a invasão. Sua visão escurece enquanto o controle de seu corpo é perdido.",
        choices: []
    },
    fugir_acampamento: {
        text: "Final [F]: Solidão Perpétua. Você senta perto de um fogo improvisado. O silêncio do mundo morto é ensurdecedor, e a lembrança da pequena máquina o assombra.",
        choices: []
    }
};

const storyTextElement = document.getElementById('story-text');
const choicesContainer = document.getElementById('choices-container');

let typeWriterTimeout;

function startGame() {
    showNode('start');
}

function showNode(nodeKey) {
    const node = storyData[nodeKey];
    storyTextElement.innerHTML = '';
    choicesContainer.innerHTML = '';
    
    clearTimeout(typeWriterTimeout);

    typeWriter(node.text, 0, () => {
        if (node.choices.length > 0) {
            node.choices.forEach(choice => {
                const button = document.createElement('button');
                button.innerText = choice.text;
                button.addEventListener('click', () => showNode(choice.next));
                choicesContainer.appendChild(button);
            });
        } else {
            const restartButton = document.createElement('button');
            restartButton.innerText = "Reiniciar Sistema [Restart]";
            restartButton.className = "restart-btn"; 
            restartButton.addEventListener('click', startGame);
            choicesContainer.appendChild(restartButton);
        }
    });
}

function typeWriter(text, index, callback) {
    if (index < text.length) {
        storyTextElement.innerHTML += text.charAt(index);
        typeWriterTimeout = setTimeout(() => typeWriter(text, index + 1, callback), 15); 
    } else {
        callback();
    }
}

startGame();