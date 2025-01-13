document.addEventListener('DOMContentLoaded', () => {
    const chatChamada = document.getElementById('chat-call'); // Chat de Chamada
    const profileContainer = document.querySelector('.profile-container'); // Avatar
    const chatBubble = document.querySelector('.chat-bubble'); // Bolha de mensagem
    const closeButton = document.querySelector('.close-btn'); // Botão de fechar

    // ID do Typebot
    const typebotID = "lead-magnet-3a9mx2z"; // Substitua pelo seu ID do Typebot

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
        console.log("Chat Call clicado! Inicializando Typebot...");
        if (window.Typebot) {
            Typebot.initBubble({
                typebot: typebotID,
                theme: {
                    button: {
                        backgroundColor: "#075E54",
                        size: "large"
                    }
                },
            });
            Typebot.open();
            document.body.classList.add('typebot-active'); // Adiciona classe para ocultar outros chats
        } else {
            console.error("Typebot não está disponível no momento.");
        }
    });

    // Evento de clique no botão de fechar para restaurar o estado inicial
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            console.log("Botão de fechar clicado!");
            document.body.classList.remove('typebot-active'); // Remove a classe para mostrar outros chats
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
            console.log("Exibindo o Typebot automaticamente após 20 segundos...");
            if (window.Typebot) {
                Typebot.initBubble({
                    typebot: typebotID,
                    theme: {
                        button: {
                            backgroundColor: "#075E54",
                            size: "large"
                        }
                    },
                });
                Typebot.open();
                document.body.classList.add('typebot-active'); // Adiciona classe para ocultar outros chats
            }
        }
    }, 20000); // 20 segundos
});
