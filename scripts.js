import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3/dist/web.js';

const closeBtn = document.getElementById('close-btn');
const chatContainer = document.getElementById('chat-container');
const reducedAvatar = document.getElementById('reduced-avatar');

// Inicializar o Typebot apenas quando o chat for aberto
let typebotInitialized = false;

function openChat() {
    chatContainer.style.display = 'block'; // Exibe o chat
    reducedAvatar.style.display = 'none'; // Oculta o avatar reduzido
    document.body.style.overflow = 'hidden'; // Impede o scroll quando o chat está aberto
    if (!typebotInitialized) {
        Typebot.initStandard({
            typebot: "my-typebot-2usgp7j", // Substitua pelo seu ID do Typebot
            container: document.getElementById('typebot-instance'),
        });
        typebotInitialized = true;
    }
}

// Garantir que o avatar reduzido esteja oculto ao carregar a página
reducedAvatar.style.display = 'none';

// Abrir o chat automaticamente ao carregar a página
openChat();

function closeChat() {
    chatContainer.style.display = 'none'; // Oculta o chat
    reducedAvatar.style.display = 'block'; // Exibe o avatar reduzido
    document.body.style.overflow = 'auto'; // Permite o scroll
}

// Evento para abrir o chat ao clicar no avatar reduzido
reducedAvatar.addEventListener('click', openChat);

// Evento para fechar o chat ao clicar no botão de fechar
closeBtn.addEventListener('click', closeChat);
