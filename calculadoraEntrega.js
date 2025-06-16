const fs = require("fs");
const promptSync = require('prompt-sync')();
const path = require('path');

let nomes = []; //Nome do cliente.
let enderecos = [];// Endereço do cliente.
let distancias = []; // Distância da entrega (em quilômetros).
let valoresKM = [];// Valor cobrado por quilômetro.
let tipoEntregas = []; // Tipo de entrega (normal ou urgente).
let nome = "";
let endereco = '';
let distancia = 0;
let valorKM = 0;
let tipoEntrega = '';
let multiplicador = 1.0;
let custoEntrega = 0;
let custoEntregas = [];
let conteudo = "";
let finalizacao = "N";
let i = 0;

//inputs 
console.log("Seja bem vindo à nossa Calculadora de Entrega! Quando quiser parar a aplicação, insira um @ no valor de nome.");

do {
    do {
        nome = promptSync(`Insira o nome do ${i + 1}º cliente: `);
        
        if (nome === "@") {
            finalizacao = promptSync("Você optou por parar a aplicação. Tem certeza?\nY/N: "); //Verifica se o usuário quer realmente parar a aplicação.

            if (finalizacao === "Y" || finalizacao === "y") {
                break; //Sai do loop
            } else {
                nome = ""; //Força a repetição do Loop
            }
        } else if (nome == "" || !isNaN(nome)) { //Verifica se o valor não é aplicável
            console.log("Você inseriu um valor inválido, por favor, insira uma palavra sem números e não vazia.");
        } else { //Depois de todos os filtros, salva o input no vetor nomes.
            nomes[i] = nome;
        }
    } while (nome == "" || !isNaN(nome))

    if (finalizacao === "Y" || finalizacao === "y") { //Se o usuário optou por finalizar a aplicação, termina o loop
        break;
    }
    
    do {
        endereco = ((promptSync(`Digite o endereço de entrega do ${i + 1}º cliente: `)));
        if (!isNaN(endereco) || endereco === '') { //Se o endereço é um número ou é vazio
            console.log("Você inseriu um valor inválido. Por favor, insira uma frase não vazia."); //Deu errado
        } else {
            enderecos[i] = endereco; //Armazenou o valor no vetor
        }
    } while (!isNaN(endereco) || endereco === '')

    do {
        distancia = (parseFloat(promptSync(`Digite a distância de entrega do vendedor até o endereço do ${i + 1}º cliente, em Km: `)));
        if (isNaN(distancia) || distancia === "" || distancia <= 0) {
            console.log("Você inseriu um valor inválido. Por favor, insira um número real positivo.");
        } else {
            distancias[i] = distancia; //Armazenou o valor no vetor
        }
    } while (isNaN(distancia) || distancia == "" || distancia <= 0)

    do {
        valorKM = (parseFloat(promptSync(`Digite o preço por quilômetro da ${i + 1}ª entrega: `)));
        if (isNaN(valorKM) || valorKM == "" || valorKM <= 0) {
            console.log("Você inseriu um valor inválido. Por favor, insira um número real positivo.");
        } else {
            valoresKM[i] = valorKM; //Armazenou o valor no vetor
        }
    } while (isNaN(valorKM) || valorKM == "" || valorKM <= 0)

    do {
        tipoEntrega = ((promptSync(`Insira a urgencia da ${i + 1}ª entrega. Digite "R" para regular e "U" para urgente: `)));
        if (!isNaN(tipoEntrega) || tipoEntrega == "" ) { //Inserir depois || tipoEntrega != "R" || tipoEntrega != "r" || tipoEntrega != "U" || tipoEntrega != "u"
            console.log(`Você inseriu um valor inválido. Por favor, insira "R" para regular e "U" para urgente.`);
        } else if (tipoEntrega == "u" || tipoEntrega == "U" || tipoEntrega == "R" || tipoEntrega == "r") {
            tipoEntregas[i] = tipoEntrega; //Armazenou o valor no vetor
        }
    } while (!isNaN(tipoEntrega) || tipoEntrega === "" ) //Inserir depois || tipoEntrega != "R" || tipoEntrega != "r" || tipoEntrega != "U" || tipoEntrega != "u"
        i++;
} while (finalizacao === "N" || finalizacao === "n")


for (let j = 0; j < i; j++) {
    if (tipoEntregas[j] === "U" || tipoEntregas[j] === "U") {
        multiplicador = 1.2;
    }
    custoEntrega = valoresKM[j] * distancias[i] * multiplicador;
    custoEntregas[j] = custoEntrega;
}

if (!fs.existsSync("./Banco_de_Entregas.txt")) {
    fs.writeFileSync("./Banco_de_Entregas.txt", "", 'utf-8');
}

for (let h = 0; h < i; h++) {
    conteudo = `Entrega ${h + 1}\nNome do cliente: ${nomes[h]}.\nEndereço do Cliente: ${enderecos[h]}.\nDistância da Entrega: ${distancias[h]}Km.\nValor Cobrado por Km: ${valoresKM[h]}.\nTipo de Entrega: ${tipoEntregas[h]}.\nCUSTO FINAL DA ENTREGA: R$ ${custoEntregas[h]}.\n`;
    console.log(conteudo);
    fs.appendFileSync("./Banco_de_Entregas.txt", `${conteudo} \n`);
}
