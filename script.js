let peso = prompt ("digite o seu peso (kg): ")
let altura = prompt ("informe sua altura(m): ")
let imc = calcularIMC(peso, altura)
classificarIMC (imc)
    
    function calcularIMC(peso , altura){
        let imc = peso / (altura * altura)
            return imc 
    }

    function classificarIMC (imc){
        if (imc >= 40){
            alert ("obesidade grau 3")
        }
        else if (imc >= 35){
            alert ("obesidade grai 2")
        }
        else if (imc >= 30){
            alert ("obesidade grau 1")
        }
        else if (imc >= 25){
            alert ("acima do peso")
        }
        else if (imc >= 18,6 ){
            alert ("peso normal")
        }
        if (imc >= 18,5){
            alert ("peso baixo")
        }
        }
    
    function gerarRelatorio (peso, altura){
        let resultadoFinal = calcularIMC(peso, altura)
        alert ("seu IMC é:")
        classificarIMC(imc)
    }
