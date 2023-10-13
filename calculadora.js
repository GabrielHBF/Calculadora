
function calcular (tipo , valor){

    if ( tipo === 'acao'){

        if (valor === "c"){
            document.getElementById('resutado').value = "";
        }

        if (valor === '+' || valor === '-' || valor === '/' || valor ==='*'){
            document.getElementById('resutado').value += valor;
        }

        if (valor === "="){
        var conta = eval(document.getElementById("resutado").value)
        document.getElementById('resutado').value = conta;
        }

    }
    else if (tipo === 'valor'){
        document.getElementById('resutado').value += valor
    }

}