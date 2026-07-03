function escolha(opcao) {
    const textoHTML = document.getElementById("texto-historia");
    const botoesContainer = document.querySelector(".botoes-container");

    if (opcao === 'atravessar') {
        textoHTML.innerText = "Sucesso! A nave atravessou em segurança e encontrou uma nova civilização avançada que acolheu a humanidade. Você se tornou um herói intergaláctico!";
        // Remove os botões antigos já que a história acabou
        botoesContainer.innerHTML = '<button class="btn" onclick="reiniciar()">Jogar Novamente</button>';
    } else if (opcao === 'voltar') {
        textoHTML.innerText = "Você decidiu jogar pelo seguro. A viagem de volta foi longa e os recursos acabaram quase chegando à Terra. A tripulação sobreviveu, mas a chance de descobrir um novo mundo foi perdida.";
        botoesContainer.innerHTML = '<button class="btn" onclick="reiniciar()">Jogar Novamente</button>';
    }
}

function reiniciar() {
    // Recarrega a página para resetar o jogo
    location.reload();
}