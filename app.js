// Arrays e variáveis globais
let friends = [];
let assignedPairs = {}; // Armazena os pares sorteados

// Adiciona um amigo à lista
function addFriend() {
    const firstNameInput = document.getElementById("firstNameInput");
    const lastNameInput = document.getElementById("lastNameInput");
    const emailInput = document.getElementById("emailInput");

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();

    // Condições para validação de nome e sobrenome.
    if (!firstName || !lastName || !isNaN(firstName) || !isNaN(lastName)) {
        alert("Por favor, insira um nome e sobrenome válidos.");
        return;
    }

    // Condições para validação de e-mail.
    if (!email || !email.includes("@") || !email.includes(".")) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    //const fullName = `${firstName} ${lastName} - ${email}`;

    //
    if (friends.some(f => f.email === email)) {
        alert("Este e-mail já está cadastrado!");
        return;
    }

    // Adiciona o amigo à lista
    friends.push({ name: `${firstName} ${lastName}`, email });

    // Atualiza a lista de amigos
    updateFriendList();

    // Limpa os campos de entrada
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";

    // Habilita o botão de concluir lista.
    document.getElementById("concludeListButton").disabled = friends.length < 3;

    // Exibe a lista de amigos
    const friendList = document.getElementById("friendList");
    const friendListTitle = document.getElementById("friendListTitle");

    if (friends.length === 1) {
        friendList.classList.add("show");
        friendListTitle.textContent = "Participante Cadastrado com Sucesso";
        friendListTitle.style.display = "block";
    } else {
        friendListTitle.textContent = "Participantes Cadastrados com Sucesso";
    }
}

// Atualiza a lista de amigos na tela
function updateFriendList() {
    const friendList = document.getElementById("friendList");
    const friendListTitle = document.getElementById("friendListTitle");

    friendList.innerHTML = ""; // Limpa a lista antes de atualizar

    if (friends.length === 0) {
        friendList.style.display = "none"; // 🔹 Esconde a lista se estiver vazia
        friendListTitle.style.display = "none"; // 🔹 Esconde o título também
        return;
    }

    friendList.style.display = "block"; // 🔹 Exibe a lista caso tenha elementos
    friendListTitle.style.display = "block"; // 🔹 Exibe o título

    // 🔹 Atualiza o título dinamicamente
    if (friends.length === 1) {
        friendListTitle.textContent = "Participante Cadastrado com Sucesso";
    } else {
        friendListTitle.textContent = "Participantes Cadastrados com Sucesso";
    }

    friends.forEach((friend, index) => {
        const listItem = document.createElement("li");

        // Criando um `span` para organizar o nome e e-mail
        const textSpan = document.createElement("span");
        textSpan.textContent = `${friend.name} - ${friend.email} `;

        // Criando o botão de exclusão
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌ Excluir";
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = function() {
            removeFriend(index); // Chama a função com o índice correto
        };

        // Adicionamos os elementos na lista
        listItem.appendChild(textSpan);
        listItem.appendChild(deleteButton);
        friendList.appendChild(listItem);
    });
}

// Função para remover um amigo da lista
function removeFriend(index) {
    console.log("Removendo índice:", index); // Debug no console

    // Remove o item pelo índice
    friends.splice(index, 1);

    // Atualiza a lista após a remoção
    updateFriendList();

    // Verifica se o botão "Concluir Lista" deve ser desativado novamente
    document.getElementById("concludeListButton").disabled = friends.length < 3;
}


// Função para concluir(finalizar) a lista de amigos.
function concludeList() {
    // Oculta a seção de entrada de participantes e exibe a lista final.
    document.getElementById("participant-entry").style.display = "none";
    document.getElementById("final-list").style.display = "block";
    document.getElementById("final-list").classList.add("show"); // Garante que a seção apareça

    // Atualiza a lista de amigos confirmados
    const confirmedFriendList = document.getElementById("confirmedFriendList");
    confirmedFriendList.innerHTML = "";

    // loop para adicionar cada amigo à lista.
    friends.forEach((friend) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${friend.name} - ${friend.email}`;
        confirmedFriendList.appendChild(listItem);
    });

    // Exibir a lista de participantes confirmados
    confirmedFriendList.style.display = "block"; // 🔹 Corrigido para garantir visibilidade
}

// Função de transiçãõ entre seções
function startDrawSession() {
    // Oculta a seção de lista final e exibe a seção de entrada de e-mails.
    document.getElementById("final-list").style.display = "none";
    document.getElementById("emailSendSection").style.display = "block";

    // Inicia a sessão de sorteio
    drawSecretSanta();
}

// Função para realizar o sorteio do Amigo Secreto
function drawSecretSanta() {
    // Cria uma cópia superficial do array friends e a armazena em availableReceivers
    let availableReceivers = [...friends]; 

    // Garante que a lista de participantes está vazia
    assignedPairs = {};

    //Loop usado para realizar o sorteio do Amigo Secreto, garantindo que ninguém tire a si mesmo:
    friends.forEach((participant) => {
        let possibleReceivers = availableReceivers.filter(p => p.name !== participant.name);
        if (possibleReceivers.length === 0) {
            console.warn("⚠️ Sorteio inválido, tentando novamente...");
            drawSecretSanta(); // 🔁 Refazer sorteio
            return;
        }

        //seleciona aleatoriamente um amigo secreto da lista de participantes disponíveis.
        let randomIndex = Math.floor(Math.random() * possibleReceivers.length);
        let assigned = possibleReceivers[randomIndex];

        // Garantindo que o objeto tenha a estrutura correta
        assignedPairs[participant.name] = { name: assigned.name };
        availableReceivers = availableReceivers.filter(p => p.name !== assigned.name);
    });

    // Armazena os pares sorteados no localStorage
    localStorage.setItem("assignedPairs", JSON.stringify(assignedPairs));
}

// Função para enviar e-mails
function sendEmailMessages() {
    // Verifica se há participantes cadastrados
    if (!friends || friends.length === 0) {
        alert("Nenhum participante cadastrado para enviar e-mails.");
        return;
    }

    // Cria uma variável para armazenar o número de e-mails enviados
    let emailsEnviados = 0;

    // Cria uma variável que armazena o número total de e-mails a serem enviados
    let totalEmails = friends.length;

    // Percorre a lista de participantes, buscando o amigo secreto sorteado
    // e verifica se o e-mail do amigo secreto foi cadastrado.
    friends.forEach(participant => {
        const assigned = assignedPairs[participant.name];

        if (assigned) {
            const foundFriend = friends.find(f => f.name === participant.name);
            if (!foundFriend || !foundFriend.email) {
                console.error(`❌ Erro: E-mail não encontrado para ${participant.name}`);
                return;
            }

            // Parâmetros do e-mail
            const emailParams = {
                to_email: foundFriend.email, // E-mail do participante
                to_name: participant.name, // Nome do participante
                assigned_name: assigned.name, // Nome do amigo secreto
                // Link personalizado com o resultado do sorteio.
                assigned_link: `https://paulomppatricio.github.io/amigo-secreto-pmpp/amigo-secreto.html?nome=${encodeURIComponent(participant.name)}&amigo=${encodeURIComponent(assigned.name)}` // Link personalizado com o resultado do sorteio.
            };

            console.log("📧 Preparando e-mail para:", participant.name);

            // Envia o e-mail usando o EmailJS
            emailjs.send("service_w8bye59", "template_1lzhr7c", emailParams)
                .then(response => {
                    console.log(`✅ E-mail enviado para ${participant.name} (${foundFriend.email})`);
                    alert(`E-mail enviado com sucesso para ${participant.name}!`);

                    // Incrementa o contador de e-mails enviados
                    emailsEnviados++;
                    // Verifica se todos os e-mails foram enviados
                    if (emailsEnviados === totalEmails) {
                        showFinalMessage();
                    }
                })

                //
                .catch(error => {
                    console.error(`❌ Erro ao enviar e-mail para ${foundFriend.email}:`, error);
                    alert(`Erro ao enviar e-mail para ${participant.name}. Verifique o console para mais detalhes.`);
                });
        } else {
            console.error(`❌ Erro: Amigo secreto não encontrado para ${participant.name}`);
        }
    });
}

// Função para exibir a mensagem final
function showFinalMessage() {
    document.getElementById("emailSendSection").style.display = "none";
    document.getElementById("finalMessageSection").style.display = "block";
}

// Função para reiniciar o app amigo secreto
function restartApp() {
    // Limpa os dados do sorteio
    localStorage.removeItem("assignedPairs");
    friends.length = 0; // Limpa o array de participantes

    // Recarrega a página para recomeçar
    location.reload();
}

// Função para menssagem dinâmica da seção 3 do index.html
function updateEmailMessage() {
    const emailMessage = document.getElementById("emailMessage");
    const sendEmailButton = document.getElementById("sendEmailMessages");
    const showLinksButton = document.getElementById("showResultLinks");

    if (sendEmailButton && !sendEmailButton.hasAttribute("hidden")) {
        emailMessage.textContent = "Os links, com o resultado dos sorteios, serão enviados para o e-mail dos participantes.";
    } else if (showLinksButton && !showLinksButton.hasAttribute("hidden")) {
        emailMessage.textContent = "Os links, com o resultado dos sorteios, podem ser copiados e enviados para o e-mail dos participantes. Não seja curioso, abra apenas o link referente ao seu nome e envie os dos demais participantes.";
    }
}

/*
/ Função extra, exibir os links de resultado do sorteio para cada 
/ participante cadastrado, caso você não queria se cadastrar no site
/ EmailJS. Assim você terá uma noção de como ficaria a exibição dos 
/ links de resultado do sorteio para cada participante.
/ Para utilizar esta função, basta retirar os comentários das linhas
/ 55 do arquivo index.html(para habilitar o botão que irar gerar o 
/ link) e das linhas 285 e 308 para habilitar está função.
*/

/*
function showResultLinks() {
    const resultSection = document.getElementById("emailSendSection");
    resultSection.innerHTML = "<h2 class='section-title'>Links do Resultado do Sorteio</h2>";

    friends.forEach(participant => {
        const assigned = assignedPairs[participant.name];

        if (assigned) {
            const resultLink = `https://paulomppatricio.github.io/amigo-secreto-pmpp/amigo-secreto.html?nome=${encodeURIComponent(participant.name)}&amigo=${encodeURIComponent(assigned.name)}`;
            const linkElement = document.createElement("p");
            linkElement.innerHTML = `<strong>${participant.name}:</strong> <a href="${resultLink}" target="_blank">Ver Amigo Secreto</a>`;
            resultSection.appendChild(linkElement);
        }
    });

    // Adiciona o botão "Reiniciar App"
    const restartButton = document.createElement("button");
    restartButton.textContent = "🔄 Reiniciar App";
    restartButton.classList.add("button-restart"); // Aplica o estilo padrão do app
    restartButton.onclick = restartApp; // Chama a função restartApp ao ser clicado
    resultSection.appendChild(restartButton);
}
*/

// Garante que, ao carregar a página, a mensagem dinâmica da seção 3 do index.html seja ajustada
document.addEventListener("DOMContentLoaded", updateEmailMessage);


