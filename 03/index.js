const valorTenis = 129.99;
const dinheiroCompra = 80.00;

const desconto = (dinheiroCompra * 100 / valorTenis).toFixed(0);

console.log(`O valor do desconto é de ${desconto}%.`);