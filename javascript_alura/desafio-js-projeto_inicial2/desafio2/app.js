
let FimDeSemana = prompt("Que dia é hoje?")

if (FimDeSemana == "sabado"){
    alert("Bom fim de semana")
} else if (FimDeSemana == "domingo"){
    alert("Bom fim de semana")
}
 else{
    alert("Tenha uma boa semana")
}

let chuteNumerico = prompt("Digite um numero?")
//erro no codigo
if (chuteNumerico < 0){
    alert("O número digitado é negativo")
} else{
    alert("O número digitado é positivo")
}

let pontuacao = prompt("digite sua pontuação")
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}

let saldoDaConta = 500;
alert(`Óla, Seu saldo é de R$${saldoDaConta}`)

let nomeDeUsuario = prompt("Digite seu nome: ")
alert(`Óla, ${nomeDeUsuario} bem-vindo(a)`)