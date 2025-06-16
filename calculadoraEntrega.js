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
        } else if (nome = "" || !isNaN(nome)) { //Verifica se o valor não é aplicável
            console.log("Você inseriu um valor inválido, por favor, insira uma palavra sem números e não vazia.");
        } else { //Depois de todos os filtros, salva o input no vetor nomes.
            nomes[i] = nome;
        }
    } while (nome = '' || !isNaN(nome))

    if (finalizacao === "Y" || finalizacao === "y") { //Se o usuário optou por finalizar a aplicação, termina o loop
        break;
    }
} while (finalizacao === "N" || finalizacao === "n")
