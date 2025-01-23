function exibirOla(){
   console.log("Olá, mundo");
}

exibirOla();

function olaUsur(){
    let nome = prompt("Digite seu nome: ")
    console.log(`Olá, ${nome}!`);
};

olaUsur();

function dobroDoValorDigitado (){
    let valor = Number(prompt("Insira um valor:"))
    let dobro = valor * 2;
    alert(`O dobro de ${valor} é ${dobro}`)
};
dobroDoValorDigitado();

function calcularMedia() {
    let nota1 = Number(prompt("Insira a primeira nota: "));
    let nota2 = Number(prompt("Insira a segunda nota: "));
    let nota3 = Number(prompt("Insira a terceira nota:"));
    let media = (nota1 + nota2 + nota3) / 3;
    alert(`A Media de suas notas é ${media}`);
};
calcularMedia();

function numeroMaior(){
    let valor1 = Number(prompt("insira o primeiro valor: "));
    let valor2 = Number(prompt("insira o segundo valor: "));
    if(valor1 > valor2){
        alert(`O numero ${valor1} e maior que ${valor2}`)
    }else{
        alert(`O numero ${valor2} e maior que ${valor1}`)
    };
};
numeroMaior();

function multiplicador(){
    let numeroMultiplo = Number(prompt("digite um valor"));
    let resultadoDaMultiplicacao = numeroMultiplo * numeroMultiplo;
    alert(`O número ${numeroMultiplo} multiplicado por ele mesmo é ${resultadoDaMultiplicacao}`);
};
multiplicador();