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

// convertendo de números para string

// Usando o toString()

let numero666 = 666
let stringNumero666 = numero666.toString()
console.log(stringNumero666);


//USANDO O String()

let numero33 = 33
let stringNumero33 = String(numero33)
console.log(stringNumero33);

/* Conhecendo Estruturas Condicionais 
 - Os programas são executados de cima para baixo;
 - Com estas estruturas podemos alterar o fluxode execução;
 - O Caminho dependerá das condições e comparações;*/

 //USANDO If

 // if: Executarum bloco de código, se uam condição for verdadeira.

 // SINTAXE: if (condição){}

 // Exemplo 01

 let idadeMaria = 71

 let idadeJoao = 63

 if (idadeMaria  > idadeJoao){
    console.log("exemplo 01 de if: Ih rapaz, a Maria é mais velha que o João");    
 }

 // Exemplo 02

 let usuario = "Gustavo"

 if (usuario === "Gustavo"){
    console.log(`Fala meu camarada ${usuario}, seu casca de bala!`);
    
 }

 // Usando o else if

 // else if: Adiciona uam nova condição, se a condição anterior for falsa.

 /* Sintaxe:
 
 if (condição){
}
 else if (outraCondicao){
}*/

// EXEMPLO 01

let logadoTikTok = false

if (logadoTikTok === true){
    console.log("Bem-vindo meu caro desocupado!");    
}

else if(logadoTikTok===false){
    console.log("Até que enfim,foi lavar a louça!");    
}

// Exemplo 02

let nomeUsuaria = "Vanessa"

if (nomeUsuaria==="Rebeca"){
    console.log("Seja bem-vinda Rebeca. Vamos estudar?");    
}

else if (nomeUsuaria==="Leticia"){
    console.log("Seja bem-vinda Leticia. Vamos Estudar?");    
}

else if (nomeUsuaria==="Vanessa"){
    console.log("Seja bem-vinda Vanessa. Vamos Estudar?");    
}

// USANDO o else

    /*else: Executa um bloco de códigos se todas as condições anteriores forem falsas.
    
    Sintaxe:
    
    if (condição){}

    else if (outra condição){}

    else {} */

    // if e o else, só temos 1, no ínicio e outro no final.
    // else if, eu posso ter vários ao longo da comparação;

    // EXEMPLO 01

    let corEscolhida = "Preta"

    if (corEscolhida=== "Branca"){
        console.log("Ótima escolha! Seu possante será branco!");
        }

    else if (corEscolhida=== "Vermelha"){
        console.log("Caraca feio,teu carro vai ser vermelho.");
    }

    else {
        console.log("Poxa, só temos duas cores disponiveis no momento. Escolha Branco ou Vermelho.");
    }

    // EXEMPLO 02

    let idadeUsuario = 37

    if (idadeUsuario <=17){
        console.log("Este site não é permitido o acesso por menores de idade.");        
    }

    else if (idadeUsuario ===18){
        console.log("Juizo ai meu nobre!");        
    }

    else if (idadeUsuario >= 90){
        console.log("Eita nois,então tá... Olha o coração!");        
    }

    else {
        console.log("Boa Diversão.");
    }

    // OPERADORES LÓGICOS

 // EXEMPLO 01 - && "ANO"

 let nomeUsuario01 = "Marcos"
 let senhaUsuario = 1234

 if (nomeUsuario01==="marcos" && senhaUsuario===2432) {
    console.log("Login realizado com sucesso.");    
 }

 else{
    console.log("Insira os dados corretamente.");    
 }

 // EXEMPLO 02

 let temDinheiro = true
 let  temCartao = false

 if (temDinheiro === true || temCartao=== true){
    console.log("Pode efetuar a compra.");    
 }

 else {
    console.log( "Tá liso feio");    
 }

 // EXEMPLO 03 ! "NOT"

 let estaChovendo = true
 
 if(!estaChovendo){
    console.log("Parece que não está chovendo, que tal uma voltinha de bike?");    
 }

 else{
    console.log("Ih, tá chovendo! Melhor deixar para depois...");    
 }

 // EXEMPLO PRÁTICO COM && E OR

 let idadeParticipante  = 20
 let temDocumento = true

 if(idadeParticipante <= 17 && temDocumento){
    console.log("Menor, mas pode paricipar do evento.");    
 }

 else if (idadeParticipante <= 17 || !temDocumento){
    console.log("Não pode participar.");    
 }

 else{
    console.log("Pode participar.");    
 }






















