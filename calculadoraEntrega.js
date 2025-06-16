const fs = require("fs");
const promptSync = require('prompt-sync')();
const path = require('path');

nomes = []; //Nome do cliente.
enderecos = [];// Endereço do cliente.
distancias = []; // Distância da entrega (em quilômetros).
valoresKM = [];// Valor cobrado por quilômetro.
tipoEntregas = []; // Tipo de entrega (normal ou urgente).
nome = "";
endereco = '';
distancia = 0;
valorKM = 0;
tipoEntrega = '';