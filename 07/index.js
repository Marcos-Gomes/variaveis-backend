let pessoasInfectadasInicio = 1000;
let possiblidadeInfeccao = 4;
let tempoContabilizado = 7;

const pessoasInfectadas = pessoasInfectadasInicio * possiblidadeInfeccao ** (tempoContabilizado / tempoContabilizado);

console.log(`Após ${tempoContabilizado} dias o número de pessoas infectadas sera de ${pessoasInfectadas}.`);