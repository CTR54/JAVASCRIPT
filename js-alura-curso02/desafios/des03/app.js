let altura = Number(prompt('digite sua altura: '))
let peso = Number(prompt('digite seu peso: '))
let resultadoImc = peso / (altura * altura);
alert (`o seu índice de massa corporal (IMC) é de ${resultadoImc}`);

let numeroFatorial = Number(prompt('digite um número: '));

function resultadoFatorial(){
    return numeroFatorial < 2 ? 1 : numeroFatorial * resultadoFatorial(numeroFatorial - 1)
}

//let  = numeroFatorial * numeroFatorial;
alert(`${resultadoFatorial}`);