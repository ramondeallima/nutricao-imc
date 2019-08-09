var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    
    var form = document.querySelector('#form-adiciona')

    var paciente = ObterPacienteDoFormulario(form)

    var pacienteTR = document.createElement('tr')
    
    var nomeTD = document.createElement('td')
    var pesoTD = document.createElement('td')
    var alturaTD = document.createElement('td')
    var gorduraTD = document.createElement('td')
    var imcTd = document.createElement('td')

    nomeTD.textContent = nome;
    pesoTD.textContent = peso;
    alturaTD.textContent = altura;
    gorduraTD.textContent = gordura;
    imcTd.textContent = calculaImc(peso, altura)

    pacienteTR.appendChild(nomeTD)
    pacienteTR.appendChild(pesoTD)
    pacienteTR.appendChild(alturaTD)
    pacienteTR.appendChild(gorduraTD)
    pacienteTR.appendChild(imcTd)

    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTR)
})

function ObterPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}