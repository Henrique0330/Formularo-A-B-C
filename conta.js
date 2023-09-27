
function click_calcular() {
    const a = parseFloat(document.getElementById("txtValor A").value);
    const b = parseFloat(document.getElementById("txtValor B").value);
    const c = parseFloat(document.getElementById("txtValor C").value);

    const bhaskara = b * b - 4 * a * c;
    let X1, X2;

    if (bhaskara > 0) {
        X1 = (-b + Math.sqrt(bhaskara)) / (2 * a)
        X2 = (-b - Math.sqrt(bhaskara)) / (2 * a)
    }
    else if (bhaskara == 0) {
        X1 = (-b / (2 * a))
    }
    else {
        const calculo = -b / (2 * a)
        const Pcalculo = Math.sqrt(-bhaskara) / (2 * a)
        X1 = `${calculo} + ${Pcalculo}i`;
    }

    const Resultado = document.getElementById("resultado");
    Resultado.innerHTML = `X1: ${X1}
    X2: ${X2}`
}
