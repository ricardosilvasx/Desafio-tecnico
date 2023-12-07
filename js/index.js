function calcularNumero() {
    const valor = parseInt(document.getElementById('numero').value);

    if (valor < 0) {
        alert("O número não pode ser negativo");
    } else {
        let soma = 0;

        for (let index = 0; index < valor; index++) {
            if (index % 3 === 0 || index % 5 === 0) {
                soma += index;
            }
        }

        document.getElementById('resultado').innerText = `O somatório é: ${soma}`;
    }
}
