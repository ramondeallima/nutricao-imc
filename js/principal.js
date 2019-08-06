
var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll('.paciente')

for(var i = 0; i < pacientes.length; i++){

    paciente = pacientes[i]

    var tdPeso = paciente.querySelector('.info-peso')
    var peso = tdPeso.textContent
    
    var tdAltura = paciente.querySelector('.info-altura')
    var altura = tdAltura.textContent
    
    tdImc = paciente.querySelector('.info-imc')
    
    var pesoEhValido = true; 
    var alturaEhValida = true;
    
    
    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        tdImc.textContent = 'Peso inválido!'
        paciente.classList.add("paciente-invalido")
    }
    if (altura <= 0 || altura >= 3.00) {
        alturaEhValida = false
        tdImc.textContent = 'Altura inválida!'
        paciente.classList.add("paciente-invalido")

    }
    
    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura)
        tdImc.textContent = imc.toFixed(2)    
    }
} 

var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    
    var form = document.querySelector('#form-adiciona')

    var nome = form.nome.value
    var peso = form.peso.value
    var altura = form.altura.value
    var gordura = form.gordura.value

    var pacienteTR = document.createElement('tr')
    
    var nomeTD = document.createElement('td')
    var pesoTD = document.createElement('td')
    var alturaTD = document.createElement('td')
    var gorduraTD = document.createElement('td')

    pacienteTR.appendChild(nomeTD)
    pacienteTR.appendChild(pesoTD)
    pacienteTR.appendChild(alturaTD)
    pacienteTR.appendChild(gorduraTD)

    nomeTD.textContent = nome;
    pesoTD.textContent = peso;
    alturaTD.textContent = altura;
    gorduraTD.textContent = gordura;
    
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTR)
})