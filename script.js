let a = prompt('digite o primero numero')

let sinalDaOperacao = prompt('digite o sinal da conta que deseja efetuar')

let b = prompt('digite o segundo numero')

if(sinalDaOperacao === '+'){
alert(`o resultado da sua conta é ${a+b}.`)
}

if(sinalDaOperacao === '-'){
    alert(`o resultado da sua conta é ${a-b}.`)
}

if(sinalDaOperacao === '*'){
    alert(`o resultado da sua conta é ${a*b}.`)
}

if(sinalDaOperacao == '/'){
    alert(`o resultado da sua conta é ${a/b}`)
}