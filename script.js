window.onload = aoCarregarPagina;

function aoCarregarPagina() {
    let numeros = document.querySelectorAll('.btn-num');

    for (let i = 0; i < numeros.length; i++) {
        numeros[i].onclick = numClicado;
    };

    let operadores = document.querySelectorAll('.btn-op');

    for (let i = 0; i < operadores.length; i++) {
        operadores[i].onclick = opClicado;
    };

    document.querySelector('#btn-resultado').onclick = calcular;
    document.querySelector('#btn-porcentagem').onclick = calcularPorcentagem;
    document.querySelector('#limpa-tudo').onclick = limpar;
    document.querySelector('#exclui-digito').onclick = excluirDigito;
    document.querySelector('#inverte-sinal').onclick = inverterSinal;
    document.querySelector('#btn-ponto').onclick = adicionarPonto;
    document.querySelector('#visor').value = valores;
};

let valores = "0";
let calculoFeito = false;

function numClicado(evt) {
    if (document.querySelector('#visor').value == '0') {
        valores = "";
        document.querySelector('#visor').value = "";
        document.querySelector('#retorno-tela').innerHTML = valores;
    };

    if (calculoFeito == true) {
        document.querySelector('#visor').value = "";
        document.querySelector('#retorno-tela').innerHTML = "";
        valores = "";
        calculoFeito = false;
    };
    
    let valorElemento = evt.target.innerHTML;
    let valorRetornado = document.querySelector('#visor').value += valorElemento;
   
};

function opClicado(evt) {
    
    let numero = document.querySelector('#visor').value;
    
    if (numero == "") {
        valores = "";
        return;
    };

    if(numero == '0'){
        valores = "";
        numero = 0
    };
    
    let operador = evt.target.innerHTML;
    
    document.querySelector('#visor').value = "";
    valores = `${valores} ${numero} ${operador}`;
    document.querySelector('#retorno-tela').innerHTML = valores;
    
    calculoFeito = false;
};


function calcular(evt) {
    calculoFeito = true;
    let numero = document.querySelector('#visor').value;
    if(numero == '0'){
        valores = "";
        numero = 0;
    };

    if(numero == "") {
        valores = "";
        return;
    };


    let operador = evt.target.innerHTML;

    valores = `${valores} ${numero}`;
    document.querySelector('#retorno-tela').innerHTML = `${valores} ${operador}`;
    document.querySelector('#visor').value = eval(valores);
    valores = "";
};


function adicionarPonto() {
    let numero = document.querySelector('#visor').value;

    if(numero == '0') {
        valores = "";
        document.querySelector('#visor').value = `0.`;
    }else if(numero == ""){
        document.querySelector('#visor').value = `0.`;
    }
    else {
        document.querySelector('#visor').value = `${numero}.`;
        
    }

    calculoFeito = false;
    console.log(1, numero)
    console.log(2, valores)
};



function calcularPorcentagem() {
    let numero = document.querySelector('#visor').value;

    if (numero == '0') {
        document.querySelector('#retorno-tela').innerHTML = valores;
        valores = "";
        return;
    };

    valores = `${valores} (${numero} / 100)`;
    document.querySelector('#retorno-tela').innerHTML = valores;
    document.querySelector('#visor').value = eval(valores);
    valores = "";
};


function limpar() {
    document.querySelector('#visor').value = '0';
    document.querySelector('#retorno-tela').innerHTML = "";
    valores = '0';
};


function excluirDigito() {
    let numero = pegarValorDoVisor();
    numero = numero.slice(0, -1);
    document.querySelector('#visor').value = numero;
};


function inverterSinal() {
    let numero = pegarValorDoVisor();
    numero = numero * -1;
    escreverNoVisor(numero);
}

function pegarValorDoVisor() {
    return document.querySelector('#visor').value;
}

function escreverNoVisor(valor) {
    document.querySelector('#visor').value = valor;
}
