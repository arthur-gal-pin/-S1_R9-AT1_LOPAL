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

