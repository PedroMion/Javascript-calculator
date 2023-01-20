const exp = document.querySelector("#exp");
var expressao;
var novaConta = false;

const botao1 = document.querySelector("#um");
const botao2 = document.querySelector("#dois");
const botao3 = document.querySelector("#tres");
const botao4 = document.querySelector("#quatro");
const botao5 = document.querySelector("#cinco");
const botao6 = document.querySelector("#seis");
const botao7 = document.querySelector("#sete");
const botao8 = document.querySelector("#oito");
const botao9 = document.querySelector("#nove");
const botao0 = document.querySelector("#zero");
const botaomais = document.querySelector('#mais');
const botaomenos = document.querySelector('#menos');
const botaovezes = document.querySelector('#multiplicacao');
const botaodivisao = document.querySelector('#divisao');
const botaolimpar = document.querySelector('#limpar');
const botaoigual = document.querySelector('#igual');

const atualizaExpOperando = (valor) => {
    if(novaConta == false) {
        exp.textContent += valor;
    } else {
        exp.textContent = valor;
        novaConta = false;
    }
}

const atualizaExpOperador = (valor) => {
    if(novaConta == false) {
        exp.textContent += ' ' + valor + ' ';
    } else {
        exp.textContent = ' ' + valor + ' ';
        novaConta = false;
    }
}

const limpaExp = () => {
    exp.textContent = '';
}

const resultado = () => {
    expressao = exp.textContent.split(' ');
    var tamanho = expressao.length;
    var operacao;
    for(let i = 0; i < tamanho; i++) {
        if(expressao[i] === 'x') {
            operacao = Number(expressao[i-1]) * Number(expressao[i+1]);
            expressao.splice(i-1, 2);
            expressao[i-1] = operacao;
        }
        if(expressao[i] === '/') {
            operacao = Number(expressao[i-1]) / Number(expressao[i+1]);
            expressao.splice(i-1, 2);
            expressao[i-1] = operacao;
        }
    }

    for(let i = 0; i < tamanho; i++) {
        if(expressao[i] === '+') {
            operacao = Number(expressao[i-1]) + Number(expressao[i+1]);
            expressao.splice(i-1, 2);
            expressao[i-1] = operacao;
        }
        if(expressao[i] === '-') {
            operacao = Number(expressao[i-1]) - Number(expressao[i+1]);
            expressao.splice(i-1, 2);
            expressao[i-1] = operacao;
        }
    }

    if(expressao.length == 1) {
        exp.textContent = expressao[0];
        novaConta = true;
    }
}

botao1.onclick = function(){atualizaExpOperando(1)};
botao2.onclick = function(){atualizaExpOperando(2)};
botao3.onclick = function(){atualizaExpOperando(3)};
botao4.onclick = function(){atualizaExpOperando(4)};
botao5.onclick = function(){atualizaExpOperando(5)};
botao6.onclick = function(){atualizaExpOperando(6)};
botao7.onclick = function(){atualizaExpOperando(7)};
botao8.onclick = function(){atualizaExpOperando(8)};
botao9.onclick = function(){atualizaExpOperando(9)};
botao0.onclick = function(){atualizaExpOperando(0)};
botaomais.onclick = function(){atualizaExpOperador('+')};
botaomenos.onclick = function(){atualizaExpOperador('-')};
botaovezes.onclick = function(){atualizaExpOperador('x')};
botaodivisao.onclick = function(){atualizaExpOperador('/')};
botaolimpar.onclick = function(){limpaExp()};
botaoigual.onclick = function(){resultado()};