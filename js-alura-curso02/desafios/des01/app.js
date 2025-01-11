let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarClick(){
    console.log("o botão foi clicado");
};

function euamojs(){
    alert("Eu amo JS")
}

function perguntaCidade(){
    let cidade = prompt("Digite o nome de uma cidade");
    alert(`Estive em ${cidade} e lembrei de você`)
}

function soma(){
let primeiroNumero = parseInt(prompt('Digite um número para a soma: '));
let segundoNumero = parseInt(prompt ('Digite um segundo número para a soma: '));
let resultadoDaSoma = primeiroNumero + segundoNumero;

alert(`o resultado da soma dos número ${primeiroNumero} e ${segundoNumero} é de ${resultadoDaSoma}`) 
}