// Procurar o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)
// Quando clicar no botao


// Executar uma acao
function cloneField() {
    // Duplicar os campos (que campos?)
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    // Antes de colocar na pagina, pegar os campos (que campos?)
    const fields = newFieldContainer.querySelectorAll('input')

    // Limpar
    fields.forEach(function(fields) {
        field.value = ""
    })

    // Colocar na pagina (onde?)
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}