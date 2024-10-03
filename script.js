function gerarTexto() {
    // Captura os valores dos campos no formulário HTML
    const razaoSocial = document.getElementById("razaoSocial").value;
    const cnpj = document.getElementById("cnpj").value.replace(/\D/g, ''); // Remove caracteres não numéricos do CNPJ
    const ie = document.getElementById("ie").value;
    const tipoContrato = document.getElementById("tipoContrato").value;
    let valorContrato = document.getElementById("valorContrato").value;
    const nomeContato = document.getElementById("nomeContato").value;
    const contatoCliente = document.getElementById("contatoCliente").value;
    const dataPrimeiraBoleta = document.getElementById("dataPrimeiraBoleta").value;
    const emailContabilidade = document.getElementById("emailContabilidade").value; // Novo campo de email
    const adesaoInicial = document.getElementById("adesaoInicial").value; // Campo de adesão inicial
    const tipoRegime = document.getElementById("tipoRegime").value; // Campo de tipo de regime

    // Verificação se todos os campos obrigatórios estão preenchidos
    if (!razaoSocial || !cnpj || !ie || !tipoContrato || !valorContrato || !nomeContato || !contatoCliente || !dataPrimeiraBoleta || !emailContabilidade || !adesaoInicial || !tipoRegime) {
        alert("Por favor, preencha todos os campos.");
        return; // Interrompe a execução da função caso algum campo esteja vazio
    }

    // Formatação do valor do contrato para garantir que seja numérico e com duas casas decimais
    valorContrato = parseFloat(valorContrato).toFixed(2);

    // Geração do número de contrato baseado no dia atual e nos três últimos dígitos do CNPJ
    const diaAtual = new Date().getDate(); // Pega o dia do mês atual
    const tresUltimosDigitosCnpj = cnpj.slice(-3); // Pega os três últimos dígitos do CNPJ
    const numeroContrato = `${diaAtual}${tresUltimosDigitosCnpj}`; // Concatena para formar o número do contrato

    // Geração da data atual no formato brasileiro (dd/mm/aaaa)
    const dataGeracao = new Date().toLocaleDateString('pt-BR');

    // Criação da mensagem que será enviada pelo WhatsApp
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
Email da Contabilidade: ${emailContabilidade} 
Adesão Inicial: ${adesaoInicial}
Tipo de Regime: ${tipoRegime}
Data da Geração: ${dataGeracao}
    `;

    // Codifica a mensagem para que possa ser passada pela URL do WhatsApp
    const encodedMensagem = encodeURIComponent(mensagem);

    // Primeiro número de WhatsApp
    const numeroWhatsApp1 = "553197090209"; 

    // Geração da URL para enviar a mensagem pelo WhatsApp (primeiro número)
    const url1 = `https://api.whatsapp.com/send/?phone=${numeroWhatsApp1}&text=${encodedMensagem}&type=phone_number&app_absent=0`;
    window.open(url1, '_blank', 'width=800,height=600,left=100,top=100,scrollbars=no');

    // Se necessário, adicione o segundo número de WhatsApp aqui no futuro, caso precise usar
    // const numeroWhatsApp2 = "553189076187";
    // const url2 = `https://api.whatsapp.com/send/?phone=${numeroWhatsApp2}&text=${encodedMensagem}&type=phone_number&app_absent=0`;
    // window.open(url2, '_blank', 'width=800,height=600,left=100,top=100,scrollbars=no');
}
