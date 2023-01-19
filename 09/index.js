let ladosPolig = 6;
let grausAngIntPolig = 180;

const somaAngIntPolig = grausAngIntPolig * (ladosPolig - 2);

const valorGrauPolig = somaAngIntPolig / ladosPolig;

console.log(`A soma dos ângulos internos do polígono é: ${somaAngIntPolig}.`);
console.log(`O valor de cada ângulo em graus do polígono é: ${valorGrauPolig}.`)