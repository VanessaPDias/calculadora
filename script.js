let valores = "0";
window.onload = aoCarregarPagina;

function aoCarregarPagina () {
    let numeros = document.querySelectorAll('.btn-num');

    for (let i = 0; i < numeros.length; i++) {
        numeros[i].onclick = numClicado;
    };

    let operadores = document.querySelectorAll('.btn-op');

    for (let i = 0; i < operadores.length; i++) {
        operadores[i].onclick = opClicado;
    };

    document.querySelector('.btn-resultado').onclick = calcular;
    document.querySelector('.btn-porcentagem').onclick = calcularPorcentagem;
    document.querySelector('#limpa-tudo').onclick = limpar;
    document.querySelector('#exclui-digito').onclick = excluirDigito;
    document.querySelector('#inverte-sinal').onclick = inverterSinal;
    document.querySelector('#visor').value = valores;
};

function numClicado(evt) {
    if(document.querySelector('#visor').value == '0' || document.querySelector('#visor').value != ''){
        valores = "";
        document.querySelector('#visor').value = "";
        document.querySelector('#retorno-tela').innerHTML = valores;
    };

    let valorElemento = evt.target.innerHTML;
    let valorRetornado = document.querySelector('#visor').value += valorElemento;
    

};

function opClicado(evt) {
    let numero = document.querySelector('#visor').value;
    let operador = evt.target.innerHTML;
    
    if(numero == "") {
        valores = "";
        return;
    };



    document.querySelector('#visor').value = "";

    valores = `${valores} ${numero} ${operador}`;
    document.querySelector('#retorno-tela').innerHTML = valores;
   
};


function calcular(evt) {
    let numero = document.querySelector('#visor').value;
    let operador = evt.target.innerHTML;
    
    valores = `${valores} ${numero}`;

    document.querySelector('#retorno-tela').innerHTML = `${valores} ${operador}`;
    
    document.querySelector('#visor').value = eval(valores);
    
    valores = "";
   
};

function calcularPorcentagem() {
    let numero = document.querySelector('#visor').value;

    if(numero == '0') {
        valores = "";
        return;
    };
    
    valores = `${valores} (${numero} / 100)`;

    document.querySelector('#retorno-tela').innerHTML = valores;
    document.querySelector('#visor').value = eval(valores);
    valores = "";
}; 

function limpar(){
    document.querySelector('#visor').value = '0';
    document.querySelector('#retorno-tela').innerHTML = "";
    valores = "";
};

function excluirDigito() {
    let numero = document.querySelector('#visor').value;
    numero = numero.slice(0, -1);
    document.querySelector('#visor').value = numero;
};

function inverterSinal() {
    let numero = document.querySelector('#visor').value;
    numero = numero * -1;
    document.querySelector('#visor').value = numero;
};

