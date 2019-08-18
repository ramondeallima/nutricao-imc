var botaoBuscar = document.querySelector('#buscar-pacientes')

botaoBuscar.addEventListener('click', function (event) {
    event.preventDefault()
    console.log('Buscando..')

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')
    
    xhr.addEventListener('load', function () {
        if (xhr.status == 200) {
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)
            
            pacientes.forEach(element => {
                adicionaPacienteNaTabela(element)
            });           
        }else{
            var erroAjax = document.querySelector('#erro-ajax')
            erroAjax.classList.remove('invisivel')
        }

    })
    
    xhr.send()

})