function copiar() {
    const texto = document.getElementById('endereco')
    const pop = document.getElementById('popup')

    navigator.clipboard.writeText(texto.innerText).then(() => {
        pop.classList.add('mostrar');

        setTimeout(() => {
            pop.classList.remove('mostrar');
        }, 500);
    })

}


