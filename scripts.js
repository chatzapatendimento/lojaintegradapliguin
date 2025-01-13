document.addEventListener('DOMContentLoaded', () => {
    const chatChamada = document.getElementById('chat-call'); // Chat de Chamada
    const profileContainer = document.querySelector('.profile-container'); // Avatar
    const chatBubble = document.querySelector('.chat-bubble'); // Bolha de mensagem
    
    // Criar um contêiner para o modal parcial
    const modalContainer = document.createElement('div');
    modalContainer.id = 'modal-container';
    modalContainer.style.position = 'fixed';
    modalContainer.style.bottom = '20px';
    modalContainer.style.right = '20px';
    modalContainer.style.minWidth = '300px';
    modalContainer.style.maxWidth = '600px';
    modalContainer.style.width = '400px';
    modalContainer.style.height = '60%';
    modalContainer.style.backgroundColor = '#fff';
    modalContainer.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';
    modalContainer.style.borderRadius = '8px';
    modalContainer.style.display = 'none'; // Inicialmente oculto
    modalContainer.style.zIndex = '1000';

    // Criar iframe para carregar o Typebot dentro do modal
    const typebotIframe = document.createElement('iframe');
    typebotIframe.id = 'typebot-frame';
    typebotIframe.style.width = '100%';
    typebotIframe.style.height = '100%';
    typebotIframe.style.border = 'none';
    modalContainer.appendChild(typebotIframe); // Adiciona o iframe ao modal

        // Criar botão de fechar dentro do modal
    const closeModalBtn = document.createElement('button');
    closeModalBtn.innerHTML = '&times;'; // Botão de fechar do modal parcial
    closeModalBtn.style.position = 'absolute';
    closeModalBtn.style.top = '10px';
    closeModalBtn.style.right = '10px';
    closeModalBtn.style.backgroundColor = '#ff4d4d';
    closeModalBtn.style.color = '#fff';
    closeModalBtn.style.border = 'none';
    closeModalBtn.style.borderRadius = '50%';
    closeModalBtn.style.width = '30px';
    closeModalBtn.style.height = '30px';
    closeModalBtn.style.fontSize = '18px';
    closeModalBtn.style.cursor = 'pointer';
    modalContainer.appendChild(closeModalBtn); // Adiciona o botão de fechar ao modal

    document.body.appendChild(modalContainer); // Adiciona o modal ao final do body

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

    // Evento de clique no Chat Call para abrir o modal com o iframe
    chatChamada.addEventListener('click', () => {
        console.log("Chat Call clicado! Abrindo Typebot no iframe...");
        chatChamada.style.display = 'none'; // Oculta o Chat Call
        modalContainer.style.display = 'block'; // Exibe o modal
        typebotIframe.src = githubURL; // Carrega o Typebot no iframe
    });

    // Evento de clique no botão de fechar para restaurar o estado inicial
    closeModalBtn.addEventListener('click', () => {
        console.log("Botão de fechar clicado!");
        modalContainer.style.display = 'none'; // Oculta o modal
        typebotIframe.src = ''; // Limpa o src do iframe
        chatChamada.style.display = 'flex'; // Mostra novamente o Chat Call
    });

    // Controle de interação do usuário (para exibir o chat automaticamente após 20 segundos se não houver interação)
    let userInteracted = false;

    document.addEventListener('click', () => {
        userInteracted = true;
    });

    setTimeout(() => {
        if (!userInteracted) {
            console.log("Exibindo o modal automaticamente após 20 segundos...");
            chatChamada.style.display = 'none'; // Oculta o Chat Call
            modalContainer.style.display = 'block'; // Exibe o modal
            typebotIframe.src = githubURL; // Carrega o Typebot no iframe
        }
    }, 30000); // 20 segundos
});
