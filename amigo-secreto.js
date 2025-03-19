function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    console.log("Parâmetros da URL:", urlParams.toString()); // Verifique os parâmetros
    return urlParams.get(param);
}

const assignedPairs = JSON.parse(localStorage.getItem("assignedPairs")) || {};
console.log("Dados do localStorage:", assignedPairs);

const participantName = getQueryParam("nome");
console.log("Nome do participante:", participantName);

if (!Object.keys(assignedPairs).length) {
    document.getElementById("result-section").innerHTML = "<p>⚠️ O sorteio ainda não foi realizado. Tente novamente mais tarde.</p>";
} else if (participantName && assignedPairs[participantName]) {
    document.getElementById("participant-name").textContent = participantName;
    document.getElementById("secret-friend").textContent = assignedPairs[participantName].name;
} else {
    document.getElementById("result-section").innerHTML = "<p>❌ Erro: Participante não encontrado.</p>";
}