document.addEventListener('DOMContentLoaded', () => {
    const chatChamada = document.getElementById('chat-call'); // Chat de Chamada
    const profileContainer = document.querySelector('.profile-container'); // Avatar
    const chatBubble = document.querySelector('.chat-bubble'); // Bolha de mensagem
    const closeButton = document.querySelector('.close-btn'); // Botão de fechar

    // URL do Typebot hospedado no GitHub Pages
    const typebotID = "lead-magnet-3a9mx2z"; // Substitua pelo seu ID do Typebot
    const githubURL = `https://chatzapatendimento.github.io/minichatneurologic/?typebot=${typebotID}`;

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

    // Evento de clique no Chat Call para abrir o Typebot
    chatChamada.addEventListener('click', () => {
        console.log("Chat Call clicado! Abrindo Typebot...");
        window.location.href = githubURL; // Redireciona para o Typebot
    });

    // Evento de clique no botão de fechar para restaurar o estado inicial
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            console.log("Botão de fechar clicado!");
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
            console.log("Exibindo apenas o Typebot automaticamente após 20 segundos...");
            window.location.href = githubURL; // Redireciona para o Typebot
        }
    }, 30000); // 30 segundos
});
