function converter() {
    let qtd = document.querySelector('input.entradas')
    let selects = document.querySelectorAll('select.entradas')

    if (qtd.value.length === 0 || selects[0].value == selects[0][0].value || selects[1].value == selects[1][0].value) {
        alert('Algum valor de campo não foi determinado.')
    } else if (qtd.value <= 0) {
        alert('Digite uma quantidade maior que 0.')
    } else {
        // resultado
    }
}

// ||