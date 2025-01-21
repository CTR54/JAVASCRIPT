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
    let nota1 = Number(prompt("Insira a primeira nota: "))
    let nota2 = Number(prompt("Insira a segunda nota: "))
    let nota3 = Number(prompt("Insira a terceira nota:"))
    let media = (nota1 + nota2 + nota3) / 3;
    alert(`A Media de suas notas é ${media}`);
};
calcularMedia()