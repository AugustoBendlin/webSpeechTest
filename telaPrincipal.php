<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilo.css">
    <link rel="stylesheet" type="text/css" href="fontawesome/css/all.min.css">
    <title>Ultra Comando de Voz</title>
</head>
<body>
    <h1 style="text-align: center;">Ultra Comando de Voz</h1>
    <table id="tabelaPrincipal" class="tabelaPadrao">
        <tr>
            <td class="nomeCampo">Marca:</td>
            <td class="valorCampo"><input type="text" name="marcaVeiculo" id="marcaVeiculo"></td>
        </tr>
        <tr>
            <td class="nomeCampo">Modelo:</td>
            <td class="valorCampo"><input type="text" name="modeloVeiculo" id="modeloVeiculo"></td>
        </tr>
        <tr>
            <td class="nomeCampo">Ano:</td>
            <td class="valorCampo"><input type="number" name="anoVeiculo" id="anoVeiculo"></td>
        </tr>
        <tr>
            <td class="nomeCampo">Câmbio:</td>
            <td class="valorCampo">
                <select name="cambioVeiculo" id="cambioVeiculo" onfocus="this.size=this.options.length" onblur="this.size=1"><!-- style="position:absolute" para fixar o select -->
                    <option value="1">Manual</option>
                    <option value="2">Automático</option>
                    <option value="3">Automatizado</option>
                </select>
            </td>
        </tr>
    </table>
    <div class="botaoCentralizado">
        <button name="botaoGravar" id="botaoGravar" onclick="gravar();"><i class="fa-solid fa-microphone" style="color: #000000;"></i></button>
        <button name="botaoPausarGravacao" id="botaoPausarGravacao" onclick="pausarGravacao();" disabled><i class="fa-solid fa-microphone-slash" style="color: #000000;"></i></button>
    </div>
    <input type="hidden" name="campoSelecionado" id="campoSelecionado" value="">
</body>
<script src="telaPrincipal.js"></script>
</html>