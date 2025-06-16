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

do {
    endereco = (parseFloat(promptSync(`Digite o endereço de entrega do ${i + 1}º cliente: `))); 
    if (!isNaN(endereco) || endereco === '') { //Se o endereço é um número ou é vazio
        console.log("Você inseriu um valor inválido. Por favor, insira uma frase não vazia."); //Deu errado
    } else {
        enderecos[i] = endereco; //Armazenou o valor no vetor
    }
} while (!isNaN(endereco) || endereco === '')

do {
    distancia = (parseFloat(promptSync(`Digite a distância de entrega do vendedor até o endereço do ${i + 1}º cliente, em Km: `)));
    if (isNaN(distancia) || distancia == "" || distancia <= 0) {
        console.log("Você inseriu um valor inválido. Por favor, insira um número real positivo.");
    } else {
        distancias[i] = distancia; //Armazenou o valor no vetor
    }
} while (isNaN(distancia) || peso == "" || peso <= 0)

do {
    valorKM = (parseFloat(promptSync(`Digite o preço por quilômetro da ${i + 1}ª entrega: `)));
    if (isNaN(valorKM) || valorKM == "" || valorKM <= 0) {
        console.log("Você inseriu um valor inválido. Por favor, insira um número real positivo.");
    } else {
        valoresKM[i] = valorKM; //Armazenou o valor no vetor
    }
} while (isNaN(valorKM) || valorKM == "" || valorKM <= 0)

do {
    tipoEntrega = (parseFloat(promptSync(`Insira a urgencia da ${i + 1}ª entrega. Digite "R" para regular e "U" para urgente: `)));
    if (!isNaN(tipoEntrega) || tipoEntrega == "" || tipoEntrega != "R" || tipoEntrega != "r" || tipoEntrega != "U" || tipoEntrega != "u") {
        console.log(`Você inseriu um valor inválido. Por favor, insira "R" para regular e "U" para urgente.`);
    } else if (tipoEntrega == "u" || tipoEntrega == "U" || tipoEntrega == "R" || tipoEntrega == "r"){
        tipoEntregas[i] = tipoEntrega; //Armazenou o valor no vetor
    }
} while (!isNaN(tipoEntrega) || tipoEntrega == "" || tipoEntrega != "R" || tipoEntrega != "r" || tipoEntrega != "U" || tipoEntrega != "u")