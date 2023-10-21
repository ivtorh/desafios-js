// peça 3 notas para o usuário inserir P1, P2 e P3 (no meu caso vou usar um valor pré definido)
// some essas notas e imprima a média da pessoa (a média é a soma das 3 notas, dividido por 3)

// minha solução
const nota1 = 9.5;
const nota2 = 7.5;
const nota3 = 5.0;

const somaDasNotas = nota1 + nota2 + nota3;
const media = somaDasNotas / 3;

// Arredonda para o valor mais próximo terminado em 0.5
const mediaArredondada = Math.round(media * 2) / 2;

console.log(mediaArredondada.toFixed(1));
