import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyD6wjgDoIpFnsX50QK8MnD5hpK-_Gwm6Mc";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

const ligarChat = document.querySelector('.chat_img');
ligarChat.addEventListener('click', ativarChat);
const desativarChat = document.querySelector('.close_chat');
desativarChat.addEventListener('click', ativarChat);

const chatInput = document.getElementById('chatInput');
const enviarButton = document.getElementById('enviarButton');
enviarButton.addEventListener('click', gerarResposta);
chatInput.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        gerarResposta();
    }
});



function ativarChat() {
    const chatModal = document.getElementById('chatModal');
    chatModal.style.display = chatModal.style.display === 'flex' ? 'none' : 'flex';
}

async function gerarResposta() {
    const mensagens = document.querySelector('.mensagens');
    const loading = document.getElementById('loader');
    const prompt = chatInput.value;

    const consulta = [
        {text: "Você é um chat bot de uma empresa chamada SG2 Sistemas, seu trabalho é ajudar o usuário a entender tudo sobre os produtos da empresa sendo eles: Databook, Vistoria de pré-entrega, As Built, Manual de uso, operações e manutenção predial"},
        {text: "input: poderia me dizer o que é Databook?"},
        {text: "output: O Databook da SG2 é um livro composto por diversos documentos que mostram o histórico de execução de um serviço, de uma obra ou da fabricação de um produto. Esses documentos podem seguir diversas normas diferentes e devem ser gerados durante a execução do trabalho."},
        {text: "input: poderia me dizer o que é As Built?"},
        {text: "output: As Built da SG2 é um documento, ou conjunto de documentos, que registra as condições reais de uma obra após a sua conclusão. Ele reflete qualquer modificação ou alteração feita durante o processo de construção em relação ao projeto original. Pense nele como uma 'fotografia' final da obra, mostrando exatamente como ela foi construída. É essencial para futuras manutenções, reformas, ou até mesmo demolições."},
        {text: "input: Qual o contato de vocês, gostaria de realizar negócio"},
        {text: "output: Nosso e-mail para contato é: contato@sg2sistemas.com.br Você também pode localizar mais informações no rodapé do nosso site."},
        {text: `input: ${prompt}`},
        {text: "output: "},
      ];

    try {

        if (chatInput.value.trim() !== '') {
            loading.style.display = "block";
            chatInput.disabled = true;
            chatInput.style.cursor = "not-allowed";

            const mensagemUser = document.createElement('p');
            mensagemUser.classList.add('mensagem', 'user');
            mensagemUser.textContent = chatInput.value;
            mensagens.appendChild(mensagemUser);
            chatInput.value = '';

            const result = await model.generateContent(consulta);
            const response = await result.response;
            const text = response.text();
            console.log(text);
            
            const botMessage = document.createElement('p');
            botMessage.classList.add('mensagem', 'bot');
            botMessage.textContent = text;
            mensagens.appendChild(botMessage);
            loading.style.display = "none";
            chatInput.disabled = false;
            chatInput.style.cursor = "pointer";
            
            return text;
        }
        
    } catch (error) {
        console.error("Erro ao gerar resposta:", error);
        loading.style.display = "none";
        chatInput.disabled = false;
        chatInput.style.cursor = "pointer";
        return 0;
    }

}