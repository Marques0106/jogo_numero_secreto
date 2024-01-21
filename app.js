
 let listaNumerosSorteados = [];

 function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
 }

 function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1? 'tentativas': 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1', 'Parabéns! Você acertou o número secreto');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute < numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é maior do que o chute');
        } else{
            exibirTextoNaTela('p', 'O número secreto é menor do que o chute');
        }   
        tentativas++;
        limparCampo();
    }
 }

 function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random()* 10 + 1);
    let quantidadeDeElementosLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosLista == 10 ){
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    } else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados)
        return numeroEscolhido;
    }
 }

 function limparCampo() {
    chute = document.querySelector('input');
    chute.value='';
 }

function reiniciarJogo(){
    exibirMensagemInicial();
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

 let numeroSecreto = gerarNumero();
 let tentativas = 1;

exibirMensagemInicial();