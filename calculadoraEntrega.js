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



for (let j = 0; j < i; j++) {
    if (tipoEntregas[j] === "U" || tipoEntregas[j] === "U") {
        multiplicador = 1.2;
    }
    custoEntrega = valoresKM[j]*distancias[i]*multiplicador;
    custoEntregas[j] = custoEntrega;
}

if (!fs.existsSync("./Banco de Entregas")){
    fs.writeFileSync("./Banco de Entregas", "", 'utf-8');
}

for (let h = 0; h < i; h++) {
    conteudo = `Entrega ${h+1}\nNome do cliente: ${nomes[h]}.\nEndereço do Cliente: ${enderecos[h]}.\nDistância da Entrega: ${distancias[h]}Km.\nValor Cobrado por Km: ${valoresKM[h]}.\nTipo de Entrega: ${tipoEntregas[h]}.\nCUSTO FINAL DA ENTREGA: R$ ${custoEntregas[h]}.\n`;
    console.log(conteudo);
    fs.appendFileSync("./Banco_de_dados.txt", `${conteudo} \n`);
}

