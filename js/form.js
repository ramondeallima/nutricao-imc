var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    
    var form = document.querySelector('#form-adiciona')

    var paciente = ObterPacienteDoFormulario(form)
    
    var pacienteTR = MontarTr(paciente)

    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTR)
    
    form.reset()
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

function MontarTr(paciente){
    var pacienteTR = document.createElement('tr')
    pacienteTR.classList.add('paciente')

    var nomeTD = MontarTD(paciente.nome, 'info-nome')
    var pesoTD = MontarTD(paciente.peso, 'info-peso')
    var alturaTD = MontarTD(paciente.altura, 'info-altura')
    var gorduraTD = MontarTD(paciente.gordura, 'info-gordura')
    var imcTD = MontarTD(paciente.imc, 'info-imc')

    pacienteTR.appendChild(nomeTD)
    pacienteTR.appendChild(pesoTD)
    pacienteTR.appendChild(alturaTD)
    pacienteTR.appendChild(gorduraTD)
    pacienteTR.appendChild(imcTD)

    return pacienteTR
}

function MontarTD(dado, classe) {
    var td = document.createElement('td')
    td.textContent = dado;
    td.classList.add(classe)

    return td
}