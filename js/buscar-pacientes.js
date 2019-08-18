var botaoBuscar = document.querySelector('#buscar-pacientes')

botaoBuscar.addEventListener('click', function (event) {
    event.preventDefault()
    console.log('Buscando..')

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')
    
    xhr.addEventListener('load', function () {
        var resposta = xhr.responseText
        var pacientes = JSON.parse(resposta)

        pacientes.forEach(element => {
            adicionaPacienteNaTabela(element)
        });
    })
    
    xhr.send()

})