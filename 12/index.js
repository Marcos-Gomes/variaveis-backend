let montante = 90000;
let capitalInicial = 60000;
let numeroMeses = 24;

const taxaJuros = (((montante / capitalInicial) ** (1 / numeroMeses) - 1) * 100).toFixed(4);

console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaJuros}%, pois após ${numeroMeses} meses você teve que pagar ${montante} reais.`);