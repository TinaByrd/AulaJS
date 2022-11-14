let pacientes = document.querySelectorAll('.paciente') //all pra poder pegar todos os pacientes. Será usado array

//metodo bem melhor que o primeiro, mais simples. Vai percorrer o Array

//Cálculo do imc
for(let pos = 0; pos < pacientes.length; pos++) {
    let paciente = pacientes[pos]

    let tdPeso = paciente.querySelector(".info-peso")
    let tdAltura = paciente.querySelector(".info-altura")
    let tdImc = paciente.querySelector(".info-imc")

    let peso = Number(tdPeso.textContent) //fazer as conversões
    let altura = Number(tdAltura.textContent)
    let imc = calcularImc(peso, altura)

    tdImc.textContent = imc.toFixed(2) //decimal
}

function calcularImc (p, a) {
    let imc = p / (a * a)
    return imc 
}

//Inserção de elementos na tabela

let botaoInserir = document.querySelector(".botao")
botaoInserir.addEventListener("click", function() { // o listener fica aguardando click

    let formulario = document.querySelector("#form-adiciona") //pega a tag form que é o formulário inteiro

    let nome = formulario.nome.value //pega o valor dentro desse elemento
    let peso = formulario.peso.value
    let altura = formulario.altura.value
    let gordura = formulario.gordura.value

    let pacienteTr = document.createElement("tr") // cria linha nova na minha tabela

    let nomeTd = document.createElement("td")
    let pesoTd = document.createElement("td")
    let alturaTd = document.createElement("td")
    let gorduraTd = document.createElement("td")
    let imcTd = document.createElement("td")

    nomeTd.textContent = nome // muda o conteúdo da célula
    pesoTd.textContent = peso 
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura
    imcTd.textContent = calcularImc(peso, altura).toFixed(2) //uso método pronto de calcular imc para novo dado inserido

    pacienteTr.appendChild(nomeTd) //acrescentar os td que são filhos
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    let tabela = document.querySelector("#tabela") // criar var para tabela
    tabela.appendChild(pacienteTr) //ligar o paciente à tabela
}) //função anônima (bem comum em js quando é muito específico)

