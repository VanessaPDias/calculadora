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

function pegarValorDoVisor() {
    return document.querySelector('#visor').value;
}

function escreverNoVisor(valor) {
    document.querySelector('#visor').value = valor;
}

function escreverExpressao(valor) {
    document.querySelector('#retorno-tela').innerHTML = valor;
}

function numClicado(evt) {
    if (pegarValorDoVisor() == '0') {
        valores = "";
        escreverNoVisor('');
        escreverExpressao(valores);
    };

    if (calculoFeito == true) {
        escreverNoVisor('');
        escreverExpressao('');
        valores = "";
        calculoFeito = false;
    };
    
    let valorElemento = evt.target.innerHTML;
    escreverNoVisor(pegarValorDoVisor() + valorElemento) 
   
};

function opClicado(evt) {
    
    let numero = pegarValorDoVisor();
    
    if (numero == "") {
        valores = "";
        return;
    };

    if(numero == '0'){
        valores = "";
        numero = 0
    };
    
    let operador = evt.target.innerHTML;
    
    escreverNoVisor('');
    valores = `${valores} ${numero} ${operador}`;
    escreverExpressao(valores);
    
    calculoFeito = false;
};


function calcular(evt) {
    calculoFeito = true;
    let numero = pegarValorDoVisor();
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
    escreverExpressao(`${valores} ${operador}`);
    escreverNoVisor(eval(valores));
    valores = "";
};


function adicionarPonto() {
    let numero = pegarValorDoVisor();

    if(numero.indexOf('.') !== -1) {
        return;
    }else if(numero == '0') {
        valores = "";
        escreverNoVisor(`0.`) ;
    }else if(numero == ""){
        escreverNoVisor(`0.`);
    }else if(numero.endsWith('.')){
        return;
    }else {
        escreverNoVisor(`${numero}.`);
    }

    calculoFeito = false;
};


function calcularPorcentagem() {
    let numero = pegarValorDoVisor();

    if (numero == '0') {
        escreverExpressao(valores);
        valores = "";
        return;
    };

    valores = `${valores} (${numero} / 100)`;
    escreverExpressao(valores);
    escreverNoVisor(eval(valores));
    valores = "";
};


function limpar() {
    escreverNoVisor('0');
    escreverExpressao('');
    valores = '0';
};


function excluirDigito() {
    let numero = pegarValorDoVisor();
    numero = numero.slice(0, -1);
    escreverNoVisor(numero);
};


function inverterSinal() {
    let numero = pegarValorDoVisor();
    numero = numero * -1;
    escreverNoVisor(numero);
}

