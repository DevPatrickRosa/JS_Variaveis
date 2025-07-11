// 1 - Variaves

//VAriaveis do tipo let; Recebeum valorutavel, ou seja, pode ser mudado no código posteriormente.

let primeiroNome = "Gustavo"

//Ao invés de solicitar ao console desta forma: console.log("Gustavo")
// eu poso utilizara variavelcriada destaforma

console.log(primeiroNome);

//variaveis do tipo cosnt: recebe um valor que  não pode ser alterado posteriormenteno código

const idade = 42

console.log(idade);

//Exemplo de troca de valor de variaveis do tipo let:

primeiroNome = "Patrick"

console.log(primeiroNome);

// idade = 43 exemplo de erro ao tentar modificar umavariavel do tipo const.

console.log(typeof primeiroNome);

console.log(typeof idade);

// MUITO IMPORTANTE: Não é permitido iniciar o nome de umavariavel com números ou caracteres especiais.

// EXEMPLOS:
//let 2teste = "invalido"

//let @teste  = "invalido"

// Para nomear variaveis, é aconselhavel utilizar o modelo "Camel case" EX:

let nomeFulano = "Fulano"

const anoNascimento = 1993

const nomeCompleto = "Patrick Rosa"

console.log(nomeFulano, anoNascimento,nomeCompleto);

// exceção à regra: Os únicos caracteres especiais que podemos utilizar no iniciode nome de variaveis são:

let _teste = "valido"

let $teste = "valido"

console.log(_teste, $teste);

// DECLARAÇÕES de Variavéis com null e underfined

let variavelNull = null //atribuindo um valor para a variavel

let variavelQualquer

console.log(variavelNull); // null
console.log(variavelQualquer); // underfined

// EXEMPLOS DE USO DE VARIAVEIS

// 1 - Concatenação com strings

let nomezito = "Severino Aurélio"

let idadecita = 78

let gostaDeProgramacao = true

let filmeFavorito = "Emanuelle"

let gameFavorito = "Dominó com os parças"

console.log("O Sr.: " + nomezito + " com a idade de: " + idadecita + ", gosta de programação? " + gostaDeProgramacao + " , diz que seu filme favorito é: " + filmeFavorito + " e seu jogo favorito é: " + gameFavorito)

// 2 - OPERAÇÕES ARITMÉTICAS COM AS VARIAVEIS

let x = 20

let y = 30

let soma = x + y
console.log("O resultado da soma entre as variaveis x e y é: " + soma);

let subtracao = y - x

console.log(subtracao);

let multiplicacao = x * y

console.log(multiplicacao);

let divisao  = y / x

console.log(divisao);

// 3 - Comparando Variaveis

x = 5

y = 10

console.log(x<y); // true
console.log(x===y); // false
console.log(x!==y); // true

//=====================================================================

// Usando a Interpolação

// Exemplo 1 

let produto = "maçãs"
let quantidade = 10
let precoUnitario = 2.5
let total = quantidade * precoUnitario

// Ao inves de disso:

console.log("Você comprou: " + quantidade +" " + produto + "por" + total + " reais");

console.log(`Você comprou: ${quantidade} ${produto} por ${total} reais.`);

//exemplo 2

const animal1 = "gatos"

const animal2 = "cachorros"

let qtdGatos = 4

let qtdCachorros = 5

let totalAnimais = qtdGatos + qtdCachorros

let frase = `Minha vózinha caquetica prefere ${animal1}, do que ${animal2}, porém ela é uma acumuladora. Possui ${qtdGatos} gatos e ${qtdCachorros} cachorros. No total, são: ${totalAnimais} bichos.`

console.log(frase);

//exemplo 3

//let estudarJS = window.prompt(" E ai feio, como é estudar Java Script?")

//window.alert(`O resultado da sua resposta é: ${estudarJS}`)

// Convertendo valores deuma variável

// De String para números

// Usando o parseInt () Para números inteiros.
// (DICA) Quando aparece na cor azul é número, já a cor branca é strings. (no console)

let stringNumero = "42"
let numero = parseInt(stringNumero)
console.log(stringNumero);
console.log(numero);

//Usando o parseFlout (), para números flutuantes (números quebrados).

let stringNumeroQuebrado = "3.14"
let numeroQuebrado = parseFloat(stringNumeroQuebrado)
console.log(numeroQuebrado);

// Utilizando o number()*Mais indicado para o dia a dia.

let stringNumero22 = "22"
let numero22 =  Number(stringNumero22)
console.log(numero22);

//Usando Operador "+ antes do nomeda variavel"

let stringNumero1 = "1991"
let numeroConvertido1 = +stringNumero1

let stringNumero2 = "1992"
let numeroConvertido2 = +stringNumero2

console.log(numeroConvertido1, numeroConvertido2);





















