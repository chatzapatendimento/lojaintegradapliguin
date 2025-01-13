document.addEventListener('DOMContentLoaded', () => {
    const chatChamada = document.getElementById('chat-call'); // Chat de Chamada
    const profileContainer = document.querySelector('.profile-container'); // Avatar
    const chatBubble = document.querySelector('.chat-bubble'); // Bolha de mensagem
    const closeButton = document.querySelector('.close-btn'); // Botão de fechar

    // Criar iframe para carregar o Typebot
    const typebotIframe = document.createElement('iframe');
    typebotIframe.id = 'typebot-frame';
    typebotIframe.style.width = '100%';
    typebotIframe.style.height = 'calc(100vh - 50px)';
    typebotIframe.style.border = 'none';
    typebotIframe.style.display = 'none'; // Inicialmente oculto
    document.body.appendChild(typebotIframe); // Adiciona o iframe ao final do body

    // URL do Typebot hospedado no GitHub Pages
    const githubURL = 'https://chatzapatendimento.github.io/minichatneurologic/';

    // Inicia a sequência do Chat Call (efeito de digitação e mensagem)
    const startChatCallSequence = () => {
        if (chatBubble) {
            chatBubble.innerHTML = `
                <div class="typing-dots">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            `;
            chatBubble.style.display = 'flex'; // Garante que a bolha esteja visível

            setTimeout(() => {
                chatBubble.innerHTML = `
                    <p>
                        Quer <strong>Começar</strong> seu <strong>Teste Grátis</strong> da Plataforma? 
                        <span class="emoji">😄</span>
                    </p>
                `;
            }, 3000); // Troca após 3 segundos
        }
    };

    // Exibir o Chat Call inicialmente
    startChatCallSequence();

    // Evento de clique no Chat Call para abrir o iframe com o Typebot
    chatChamada.addEventListener('click', () => {
        console.log("Chat Call clicado! Abrindo Typebot no iframe...");
        chatChamada.style.display = 'none'; // Oculta o Chat Call
        typebotIframe.src = githubURL; // Carrega o Typebot no iframe
        typebotIframe.style.display = 'block'; // Exibe o iframe
    });

    // Evento de clique no botão de fechar para restaurar o estado inicial
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            console.log("Botão de fechar clicado!");
            typebotIframe.style.display = 'none'; // Oculta o iframe
            typebotIframe.src = ''; // Limpa o src do iframe
            chatChamada.style.display = 'flex'; // Mostra novamente o Chat Call
        });
    }

    // Controle de interação do usuário (para exibir o chat automaticamente após 20 segundos se não houver interação)
    let userInteracted = false;

    document.addEventListener('click', () => {
        userInteracted = true;
    });

    setTimeout(() => {
        if (!userInteracted) {
            console.log("Exibindo apenas o iframe automaticamente após 20 segundos...");
            chatChamada.style.display = 'none'; // Oculta o Chat Call
            typebotIframe.src = githubURL;
            typebotIframe.style.display = 'block';
        }
    }, 30000); // 20 segundos
});
