var pacientes = document.querySelectorAll('.paciente')

var tabela = document.querySelector('tbody')

tabela.addEventListener('dblclick', function(event) {
    event.target.parentNode.remove()
})