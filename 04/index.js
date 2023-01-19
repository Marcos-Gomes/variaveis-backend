let capital = 1000;
let taxaFixa = 0.125;
let periodoTempo = 5;

const montante = (capital * ((1 + taxaFixa) ** periodoTempo)).toFixed(0);

console.log(`O capital de R$ ${capital}, investido a ${taxaFixa * 100}% ao mês terá o montante de R$ ${montante}`);