function verificarNumero(numero) {
     if (numero > 0) {
        return "Positivo";
     } else if (numero < 0) {

        return "negativo";
} else {
    return "Zero"
    }
}

let resultado = verificarNumero(0)
console.log(resultado);

