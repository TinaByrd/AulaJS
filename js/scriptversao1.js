let paciente = document.querySelector('#primeiro-paciente') //# porque é id
let tdPeso = paciente.querySelector(".info-peso") //. porque é classe
let tdAltura = paciente.querySelector(".info-altura")
let tdImc = paciente.querySelector(".info-imc")

/*
document.write(tdPeso.textContent)
document.write(tdAltura.textContent)
document.write(tdImc.textContent)
*/

let peso = Number(tdPeso.textContent) //fazer as conversões
let altura = Number(tdAltura.textContent)
let imc = peso / (altura * altura)

tdImc.textContent = imc //como já peguei a coluna de um paciente em específico, o documento já abe onde colocar o 25 (imc)

// aqui teria que colar cada um se continusase nesse método. Olhar docuemento script.js

