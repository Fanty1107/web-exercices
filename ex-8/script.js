// Dados dos personagens com o caminho das imagens
const characters = [
    {
        id: 1,
        name: "Sora",
        weapon: "Kingdom Key",
        origin: "Destiny Islands",
        description: "Um jovem corajoso e otimista que luta ao lado de seus amigos. Ele usa o poder de sua Keyblade para restaurar a paz e proteger o Reino dos Corações.",
        image: "sora.jpg"
    },
    {
        id: 2,
        name: "Roxas",
        weapon: "Oathkeeper & Oblivion",
        origin: "Twilight Town",
        description: "O Nobody de Sora. Roxas busca descobrir sua própria identidade e propósito, possuindo um forte laço de amizade com Axel e Xion.",
        image: "roxas.jpg" 
    },
    {
        id: 3,
        name: "Riku",
        weapon: "Way to the Dawn",
        origin: "Destiny Islands",
        description: "O melhor amigo e rival de Sora. Riku trilhou um caminho sombrio, mas superou as trevas para se tornar um Mestre da Keyblade focado em proteger quem ama.",
        image: "riku.jpg" 
    }
];

const galleryContainer = document.getElementById('gallery-container');
const modal = document.getElementById('character-modal');
const closeBtn = document.querySelector('.close-button');

function renderGallery() {
    characters.forEach(char => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <div class="image-container">
                <img src="${char.image}" alt="${char.name}" class="character-img">
            </div>
            <h3>${char.name}</h3>
            <button class="btn-details" onclick="openModal(${char.id})">Ver Detalhes</button>
        `;
        
        galleryContainer.appendChild(card);
    });
}

window.openModal = function(id) {
    const char = characters.find(c => c.id === id);
    
    if (char) {
        document.getElementById('modal-name').textContent = char.name;
        document.getElementById('modal-weapon').textContent = char.weapon;
        document.getElementById('modal-origin').textContent = char.origin;
        document.getElementById('modal-desc').textContent = char.description;
        
        modal.classList.remove('hidden');
    }
}

function closeModal() {
    modal.classList.add('hidden');
}

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

renderGallery();