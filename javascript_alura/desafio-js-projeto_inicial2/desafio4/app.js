alert("Boas vindas ao jogo do número secreto");
let numeromaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeromaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeromaximo}`);
        // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
    break;    
    } else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }
        else(chute < numeroSecreto);{
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)

  