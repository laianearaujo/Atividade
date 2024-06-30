1.
let A = parseFloat(prompt("Digite o valor de A:"))
let B = parseFloat(prompt("Digite o valor de B:"))
let C = parseFloat(prompt("Digite o valor de C:"))

if (A + B < C) {
   alert("A soma é menor que C.")
} else {
   alert("A soma não é menor que C.")
}

2.
let nome = prompt("Digite o nome da pessoa:")
let sexo = prompt("Digite o sexo da pessoa (M ou F):").toUpperCase()
let estadoCivil = prompt("Digite o estado civil da pessoa:")
if (sexo === 'F' && estadoCivil.toUpperCase() === 'CASADA') {
    let tempoCasada = prompt("Digite o tempo de casamento (anos):")
    alert(`Nome: ${nome}\nSexo: ${sexo}\nEstado Civil: ${estadoCivil}\nTempo de Casamento: ${tempoCasada} anos`)
} else {
    alert(`Nome: ${nome}\nSexo: ${sexo}\nEstado Civil: ${estadoCivil}`)
}

3.
let numero = parseInt(prompt("Digite um número:"))
if (numero % 2 === 0) {
    alert(`${numero} é um número par.`)
} else {
    alert(`${numero} é um número ímpar.`)
}

4.
let A = parseInt(prompt("Digite o valor de A:"))
let B = parseInt(prompt("Digite o valor de B:"))
let C
if (A === B) {
    C = A + B
} else {
    C = A * B
}

alert(`O valor de C é: ${C}`)
5.
let numero = parseFloat(prompt("Digite um número:"))
let resultado
if (numero > 0) {
    resultado = numero * 2
} else {
    resultado = numero * 3
}
alert(`O resultado é: ${resultado}`)
6.
let valor1 = prompt("Digite o primeiro valor booleano (true ou false):")
let valor2 = prompt("Digite o segundo valor booleano (true ou false):")

let booleano1 = (valor1 === 'true') 
let booleano2 = (valor2 === 'true') 

if (booleano1 && booleano2) {
    alert("Ambos os valores são VERDADEIROS.")
} else if (!booleano1 && !booleano2) {
    alert("Ambos os valores são FALSOS.")
} else {
    alert("Os valores não são iguais.")
}

7.
let numero = parseInt(prompt("Digite um número:"))
let resultado

if (numero % 2 === 0) {
    resultado = numero + 5
} else {
    resultado = numero + 8
}
alert(`O resultado é: ${resultado}`)

8.
let valor1 = parseInt(prompt("Digite um valor:"))
let valor2 = parseInt(prompt("Digite outro valor diferente do primeiro:"))
let valor3 = parseInt(prompt("Digite outro valor diferente dos anteriores:"))

let maior, meio, menor

if (valor1 > valor2 && valor1 > valor3) {
    maior = valor1
    if (valor2 > valor3) {
        meio = valor2
        menor = valor3
    } else {
        meio = valor3
        menor = valor2
    }
} else if (valor2 > valor1 && valor2 > valor3) {
    maior = valor2
    if (valor1 > valor3) {
        meio = valor1
        menor = valor3
    } else {
        meio = valor3
        menor = valor1
    }
} else {
    maior = valor3
    if (valor1 > valor2) {
        meio = valor1
        menor = valor2
    } else {
        meio = valor2
        menor = valor1
    }
}
alert(`Os valores em ordem decrescente são: ${maior}, ${meio}, ${menor}`)

9.
let altura = parseFloat(prompt("Digite altura em metros"))
let sexo = prompt("Digite sexo M ou F").toUpperCase()

let pesoIdeal
if (sexo === 'M') {
    pesoIdeal = (72.7 * altura) - 58
    alert(`O peso ideal para um homem com ${altura} metros de altura é: ${pesoIdeal.toFixed(2)} kg`)
} else if (sexo === 'F') {
    pesoIdeal = (62.1 * altura) - 44.7
    alert(`O peso ideal para uma mulher com ${altura} metros de altura é: ${pesoIdeal.toFixed(2)} kg`)
} else {
    alert("Sexo não reconhecido. Por favor, digite M para masculino ou F para feminino.")
}

10.
let peso = parseFloat(prompt("Digite o peso em kg"))
let altura = parseFloat(prompt("Digite a altura em metros"))

let imc = peso / (altura * altura)
let condicao
if (imc < 18.5) {
    condicao = "Abaixo do peso"
} else if (imc >= 18.5 && imc < 25) {
    condicao = "Peso normal"
} else if (imc >= 25 && imc < 30) {
    condicao = "Acima do peso"
} else {
    condicao = "Obeso"
}
alert(`O IMC calculado é: ${imc.toFixed(2)}\nCondição: ${condicao}`)

11.
let precoEtiqueta = parseFloat(prompt("Digite o preço do produto:"))
let codigoPagamento = parseInt(prompt(`Digite o código da condição de pagamento:
1 - À vista em dinheiro ou cheque (recebe 10% de desconto)
2 - À vista no cartão de crédito (recebe 15% de desconto)
3 - Em duas vezes sem juros
4 - Em duas vezes com juros de 10%`))

let valorPago
switch (codigoPagamento) {
    case 1:
        valorPago = precoEtiqueta * 0.9
        break
    case 2:
        valorPago = precoEtiqueta * 0.85
        break
    case 3:
        valorPago = precoEtiqueta
        break
    case 4:
        valorPago = precoEtiqueta * 1.1
        break
    default:
        alert("Código de pagamento inválido.")
        break
}
if (codigoPagamento >= 1 && codigoPagamento <= 4) {
    alert(`Valor a ser pago: R$ ${valorPago.toFixed(2)}`)
}

12.
let numeroAluno = parseInt(prompt("Digite o número de identificação do aluno:"))
let nota1 = parseFloat(prompt("Digite a nota da primeira verificação:"))
let nota2 = parseFloat(prompt("Digite a nota da segunda verificação:"))
let nota3 = parseFloat(prompt("Digite a nota da terceira verificação:"))
let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"))

let mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7

let conceito
if (mediaAproveitamento >= 90) {
    conceito = "A"
} else if (mediaAproveitamento >= 75 && mediaAproveitamento < 90) {
    conceito = "B"
} else if (mediaAproveitamento >= 60 && mediaAproveitamento < 75) {
    conceito = "C"
} else if (mediaAproveitamento >= 40 && mediaAproveitamento < 60) {
    conceito = "D"
} else {
    conceito = "E"
}

let mensagem
if (conceito === "A" || conceito === "B" || conceito === "C") {
    mensagem = "Aprovado"
} else {
    mensagem = "Reprovado"
}
alert(`Número do aluno: ${numeroAluno}
Notas: ${nota1}, ${nota2}, ${nota3}
Média dos exercícios: ${mediaExercicios}
Média de aproveitamento: ${mediaAproveitamento.toFixed(2)}
Conceito: ${conceito}
Resultado: ${mensagem}`)

