let distPercorridaMetros = 500;
let tempoSegundos = 10;

const kmPorSegundo = distPercorridaMetros / tempoSegundos;

const kmporHora = kmPorSegundo * 3.6;

console.log(`Sua velocidade média é de ${kmporHora} km/h.`);