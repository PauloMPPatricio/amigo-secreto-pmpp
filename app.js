//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

/* 
 * Este projeto implementa um sistema de amigo secreto, onde é possível adicionar amigos,
 * exibir a lista e sortear um nome aleatório. 
 */

// Array para armazenar os amigos.
const friends = [];

// Captura o nome inserido pelo usuário, valida e adiciona à lista de amigos.
function addFriend() {
  // Captura o valor do campo de entrada.
  const friendInput = document.getElementById("friendInput");

  // Remove espaços extras.
  const friendName = friendInput.value.trim(); 

  // Valida se o campo não está vazio e não é numérico.
  if (!friendName || !isNaN(friendName)) {
    alert("Por favor, insira um nome válido.");
    return;
  }

  // Adiciona o nome ao array de amigos.
  friends.push(friendName);

  // Atualiza a lista na interface.
  updateFriendList();

  // Limpa o campo de entrada.
  friendInput.value = "";
}

// Função para atualizar a lista na interface.
function updateFriendList() {
    const friendList = document.getElementById("friendList");

    // Limpa a lista antes de recriá-la.
    friendList.innerHTML = ""; 

    // Adiciona o título "LISTA DOS NOMES PARA O SORTEIO" se for o primeiro nome.
    if (friends.length === 1) {
        const title = document.createElement("h2");
        title.textContent = "Listagem para o sorteio";
        title.classList.add("section-title"); // Aplica a classe CSS.
        title.id = "listTitle"; // Adiciona um ID ao título.
        friendList.before(title); // Adiciona o título antes da lista.
    }
  
    // Itera pelo array de amigos e cria os itens da lista.
    friends.forEach((friend) => {
      const listItem = document.createElement("li");
      listItem.textContent = friend;
      friendList.appendChild(listItem);
    });
  }

// Realiza o sorteio de um amigo secreto, exibe o nome sorteado e limpa a lista e o título após o sorteio.
function drawFriend() {
    // Valida se há amigos no array.
    if (friends.length === 0) {
        alert("A lista de amigos está vazia. Por favor, adicione amigos antes de realizar o sorteio.");
        return;
    }

    // Gera um índice aleatório.
    const randomIndex = Math.floor(Math.random() * friends.length);
    console.log(randomIndex);

    // Obtém o nome do amigo sorteado.
    const drawnFriend = friends[randomIndex];
  
    // Exibe o nome do amigo sorteado no elemento com ID "drawResult".
    const drawResult = document.getElementById("drawResult");
    drawResult.innerHTML = `O seu amigo secreto é: <strong>${drawnFriend}</strong>`;

    // Remove o título e a lista gerada na tela.
    const friendList = document.getElementById("friendList");
    const title = document.getElementById("listTitle");
    title.innerHTML = "" // Limpa o título se existir.
    friendList.innerHTML = ""; // Limpa os itens da lista.
}
  