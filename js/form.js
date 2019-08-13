var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    
    var form = document.querySelector('#form-adiciona')

    var paciente = ObterPacienteDoFormulario(form)
    
    var pacienteTR = MontarTr(paciente)

    var erros = validaPaciente(paciente)

    if (erros.length > 0) {
        exibeMensagensDeErro(erros)

        return
    }

    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTR)
    
    form.reset()
    var mensagensErro = document.querySelector('#mensagens-erro')
    mensagensErro.innerHTML = ''
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

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector('#mensagens-erro')
    
    ul.innerHTML = ""
    
    erros.forEach(element => {
        var li = document.createElement('li')
        li.textContent = element
        ul.appendChild(li)
    });
}

function validaPaciente(paciente) {
    
    var erros = []
    if (paciente.nome.length == 0) {
        erros.push('O nome não pode ser em branco!')
    }

    if(!validaPeso(paciente.peso))
        erros.push('Peso é inválido!')

    if (!validaAltura(paciente.altura)) 
        erros.push('Altura é inválida!')     
        
    if (paciente.gordura.length == 0)
        erros.push('A gordura não pode ficar em branco!')

    if(paciente.peso.length == 0)
        erros.push('O peso não pode ficar em branco!')

    if(paciente.altura.length == 0)
        erros.push('A altura não pode ficar em branco!')

    return erros
}