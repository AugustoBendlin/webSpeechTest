if ("webkitSpeechRecognition" in window) {
    var speechRecognition = new window.webkitSpeechRecognition();
    speechRecognition.continuous = true;
    speechRecognition.interimResults = false;
    speechRecognition.lang = "pt-BR";

    speechRecognition.onresult = (event) => {
        let gravacaoTextual = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                gravacaoTextual += event.results[i][0].transcript;
            }
        }

        let gravacaoTextualFinal = gravacaoTextual.toLowerCase().trim();
        console.log("log comado voz: " + gravacaoTextualFinal);

        if (gravacaoTextualFinal == "marca" || gravacaoTextualFinal == "campo marca") {
            campoMarcaVeiculo();
        } else if (gravacaoTextualFinal == "modelo" || gravacaoTextualFinal == "campo modelo") {
            campoMarcaVeiculo();
        } else if (gravacaoTextualFinal == "ano" || gravacaoTextualFinal == "campo ano") {
            campoAnoVeiculo();
        } else if (gravacaoTextualFinal == "câmbio" || gravacaoTextualFinal == "campo câmbio") {
            campoCambioVeiculo();
        } else if (gravacaoTextualFinal == "pausar gravação") {
            pausarGravacao();
        } else if (gravacaoTextualFinal == "sair") {
            sairDoCampo();
        } else if (document.getElementById("campoSelecionado").value != "") {
            preencherCampo();
        }
    };
} else {
    console.log("Speech Recognition Not Available")
}

function campoMarcaVeiculo() {
    document.getElementById("marcaVeiculo").focus();
    document.getElementById("campoSelecionado").value = 'marcaVeiculo';
}

function campoMarcaVeiculo() {
    document.getElementById("modeloVeiculo").focus();
    document.getElementById("campoSelecionado").value = 'modeloVeiculo';
}

function campoAnoVeiculo() {
    document.getElementById("anoVeiculo").focus();
    document.getElementById("campoSelecionado").value = 'anoVeiculo';
}

function campoCambioVeiculo() {
    document.getElementById("cambioVeiculo").focus();
    document.getElementById("campoSelecionado").value = 'cambioVeiculo';
}

function sairDoCampo() {
    for (let j = 0; j < document.getElementById("tabelaPrincipal").querySelectorAll("input").length; j++) {
        if (document.getElementById("tabelaPrincipal").querySelectorAll("input")[j] == document.activeElement) {
            document.getElementById("tabelaPrincipal").querySelectorAll("input")[j].blur();
        }
    }

    for (let j = 0; j < document.getElementById("tabelaPrincipal").querySelectorAll("select").length; j++) {
        if (document.getElementById("tabelaPrincipal").querySelectorAll("select")[j] == document.activeElement) {
            document.getElementById("tabelaPrincipal").querySelectorAll("select")[j].blur();
        }
    }
}

function preencherCampo() {
    let campoSelecionado = document.getElementById("campoSelecionado").value;
    if (campoSelecionado == "marcaVeiculo" || campoSelecionado == "modeloVeiculo") {
        document.getElementById(campoSelecionado).value = gravacaoTextual.trim();
    } else if (campoSelecionado == "anoVeiculo") {
        if (!isNaN(parseInt(gravacaoTextualFinal))) {
            document.getElementById(campoSelecionado).value = parseInt(gravacaoTextualFinal);
        } else {
            alert("O valor informado não é número");
        }
    } else if (campoSelecionado == "cambioVeiculo") {
        if (gravacaoTextualFinal == "manual") {
            document.getElementById(campoSelecionado).value = 1;
        } else if (gravacaoTextualFinal == "automático") {
            document.getElementById(campoSelecionado).value = 2;
        } else if (gravacaoTextualFinal == "automatizado") {
            document.getElementById(campoSelecionado).value = 3;
        } else {
            alert("Modelo de câmbio não existente");
        }
    }
}

function gravar() {
    document.getElementById("botaoGravar").disabled = true;
    document.getElementById("botaoGravar").setAttribute("class", "fa-fade");
    document.getElementById("botaoPausarGravacao").disabled = false;
    speechRecognition.start();
}

function pausarGravacao() {
    document.getElementById("botaoGravar").disabled = false;
    document.getElementById("botaoGravar").setAttribute("class", "fa-solid");
    document.getElementById("botaoPausarGravacao").disabled = true;
    speechRecognition.stop();
}

window.onload = () => {
    gravar();
}