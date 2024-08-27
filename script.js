function gerarTexto() {
    const razaoSocial = document.getElementById("razaoSocial").value;
    const cnpj = document.getElementById("cnpj").value.replace(/\D/g,''); // Remove caracteres não numéricos
    const ie = document.getElementById("ie").value;
    const tipoContrato = document.getElementById("tipoContrato").value;
    const valorContrato = document.getElementById("valorContrato").value;
    const nomeContato = document.getElementById("nomeContato").value;
    const contatoCliente = document.getElementById("contatoCliente").value;
    const dataPrimeiraBoleta = document.getElementById("dataPrimeiraBoleta").value;

    // Verificação se todos os campos estão preenchidos
    if (!razaoSocial || !cnpj || !ie || !tipoContrato || !valorContrato || !nomeContato || !contatoCliente || !dataPrimeiraBoleta) {
        alert("Por favor, preencha todos os campos.");
        return; // Interrompe a execução se algum campo estiver vazio
    }

    const diaAtual = new Date().getDate();
    const tresUltimosDigitosCnpj = cnpj.slice(-3);
    const numeroContrato = `${diaAtual}${tresUltimosDigitosCnpj}`;

    const dataGeracao = new Date().toLocaleDateString('pt-BR');

    const mensagem = `
Número de Contrato: ${numeroContrato}
Razão Social: ${razaoSocial}
CNPJ: ${cnpj}
IE: ${ie}
Tipo de Contrato: ${tipoContrato}
Valor da Mensalidade ou Anuidade: R$ ${valorContrato}
Nome do Contato: ${nomeContato}
Contato do Cliente: ${contatoCliente}
Data da Primeira Boleta: ${dataPrimeiraBoleta}
Data da Geração: ${dataGeracao}
    `;

    const encodedMensagem = encodeURIComponent(mensagem);
    const numeroWhatsApp1 = "553189076187"; // Primeiro número de WhatsApp
    //const numeroWhatsApp2 = "553197090209"; // Segundo número de WhatsApp

    // Abre uma janela para o primeiro número
    const url1 = `https://api.whatsapp.com/send/?phone=${numeroWhatsApp1}&text=${encodedMensagem}&type=phone_number&app_absent=0`;
    window.open(url1, '_blank', 'width=800,height=600,left=100,top=100,scrollbars=no');
    
    // Abre uma janela para o segundo número
    const url2 = `https://api.whatsapp.com/send/?phone=${numeroWhatsApp2}&text=${encodedMensagem}&type=phone_number&app_absent=0`;
    window.open(url2, '_blank', 'width=800,height=600,left=100,top=100,scrollbars=no');
}
