function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function verificarSituacao(media) {
    if (media >= 6) {
        return 'Aprovado';
    } else {
        return 'Reprovado';
    }
}

let media = calcularMedia(9, 10);
let resultado = verificarSituacao(media);

console.log(media);
console.log(resultado);
