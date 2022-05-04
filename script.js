const tela = document.getElementById("tela");

// Passando valores dos botões para o visor:
function conta(tecla) {
    tela.value = tela.value + tecla;
}

// Função da tecla CE:
function limpa (){
   tela.value = " ";
}

//  Função da tecla DEL:
function backS(){
    tela.value = tela.value.slice(0, -1);
}

// Função que resolve a operação da tela e que armazena e passa o historico:
function resultado (){
   const operacao = tela.value;
    const resultado= tela.value = eval(tela.value);
        
    const historico = operacao + " = " + resultado;
    alert(operacao + " = " + resultado);
    document.getElementById("historico").innerHTML += (historico + "<br>");

}

// Função da animação que gira a seta e que mostra o histórico:
function revelaHistorico(){
    var seta = document.getElementById("revelaHist");
    seta.classList.toggle('gira');

    var revela = document.getElementById("historico");
    revela.classList.toggle('mostra');

}

