console.log("Bem-vindo");
let nome = "Erik";

console.log(`Olá,${nome} `);
alert(`Olá ${nome}`)

let linguagemDePrederida = prompt("Qual sua linguagem de programação que você mais gosta? ")
console.log(linguagemDePrederida);

let valor1 = 4;
let valor2 = 6;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

let valor3 = 5;
let valor4 = 3;
let resultado2 = valor3 - valor4;
console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado2}`);

let idadeDeUsuario = prompt("qual sua idade? ");
if(idadeDeUsuario >= 18){
    console.log("Parabéns você é maior de idade");
} else{
    console.log("Infelizmente você ainda não alcançou a maioridade");
};

let numero = prompt("Digite um número");
if(numero < 0){
    console.log("O número digitado é negativo");
} else{
    console.log("O número digitado é positivo");
};

let contador = 1;
while(contador <=10){
console.log(contador);
contador++
};

let nota = 5;
if(nota >= 7){
    console.log("Aprovado")
} else{
    console.log("Reprovado")
};

let numeroAleatorio = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorio)