let listaDosNumerosSorteados = [];

let numeroMaximo = 20;

let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;

function exibirNaTela(tag, texto) {

    let campo = document.querySelector(tag)

    campo.innerHTML = texto;

    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function exibirMensagemInicial() {

    exibirNaTela("h1", "Número Secreto");

    exibirNaTela("p",`Escolha um número entre 1 e ${numeroMaximo}:`);
}

exibirMensagemInicial();

function verificarChute() {

    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {


            exibirNaTela("h1", "Acertou!");

            let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";

            let mensagem = `Parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativas}.`;

            exibirNaTela("p", mensagem );

            document.getElementById("reiniciar").removeAttribute("disabled")

    } else {

        if (chute > numeroSecreto) {

                exibirNaTela("p", "O número secreto é menor.");

        } else {

                exibirNaTela("p", "O número secreto é maior.");
        }

        tentativas++;

        limparCampo();
    }
}


function gerarNumeroAleatorio() {

   let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);

   if (listaDosNumerosSorteados.length == numeroMaximo) {
     
        listaDosNumerosSorteados = [];
   }

    if (listaDosNumerosSorteados.includes(numeroEscolhido)) {

            return gerarNumeroAleatorio();

    } else {

        listaDosNumerosSorteados.push(numeroEscolhido);

        console.log(listaDosNumerosSorteados)

        return numeroEscolhido;

    }
    
}

function limparCampo() {

    let chute = document.querySelector("input");

    chute.value = "";
}

function reiniciarJogo() {

    numeroSecreto = gerarNumeroAleatorio();

    limparCampo();

    tentativas = 1;

    exibirMensagemInicial();

    document.getElementById("reiniciar").setAttribute("disabled", true);

}