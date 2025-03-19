// Função para obter parâmetros da URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Obtém os valores da URL
const participantName = getQueryParam("nome");
const secretFriend = getQueryParam("amigo");

// Seleciona a seção onde o resultado será exibido
const resultSection = document.getElementById("result-section");

// Verifica se os parâmetros estão presentes
if (participantName && secretFriend) {
    // Atualiza a página com os nomes corretos
    document.getElementById("participant-name").textContent = participantName;
    document.getElementById("secret-friend").textContent = secretFriend;
} else {
    // Se os parâmetros não estiverem na URL, exibe uma mensagem de erro
    resultSection.innerHTML = "<p>⚠️ O sorteio ainda não foi realizado ou os dados estão incorretos. Tente novamente mais tarde.</p>";
}
