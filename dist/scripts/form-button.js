{
    $('[data-form-btn-anapro]').click(function (e) {

        const btnCurrent = $(this);
        btnCurrent.prop('disabled', true);

        const nome = $("[data-form-anapro] .nome").val();
        const email = $("[data-form-anapro] .email").val();

        let telefone = $("[data-form-anapro] .telefone").val().replace(/\D/g, '');
        const ddd = telefone.length > 9 ? telefone.substring(0, 2) : '';

        telefone = ddd.length > 0 ? telefone.substring(2, telefone.length) : telefone;

        const mensagem = $("[data-form-anapro] .mensagem").val();

        let dados = {
            'Key': '1EvTOyY1Dpc1',
            'CampanhaKey': 'PxjqjSe3luw1',
            'ProdutoKey': 'nAcSOGTta101',
            'CanalKey': 'nDj2YhJeLm41',
            'Midia': 'Site+Monterrey',
            'PessoaNome': nome,
            'PessoaEmail': email,
            'PessoaTelefones': [{
                'Tipo': 'OUTR',
                'DDD': ddd,
                'Numero': telefone,
                'Ramal': null
            }],
            'Observacoes': mensagem,
            'KeyIntegradora': 'BF283EA3-8124-4527-88D4-D44CBEC4D267',
            'KeyAgencia': '291f17b8-c9b0-41f4-9c01-4e6b9e78d818'
        };

        if ($("[data-form-anapro]")[0].checkValidity() === false) {
            btnCurrent.prop('disabled', false);
        } else {
            $.ajax({
                url: 'https://crm.anapro.com.br/webcrm/webapi/integracao/v2/CadastrarProspect',
                data: dados,
                crossDomain: true,
                cache: false,
                type: 'POST',
                dataType: 'json',
                success: function (response) {
                    btnCurrent.prop('disabled', false);
                    if (!response.Sucesso) {
                        $('#alert-form').removeClass('alert-success').addClass('alert-danger').fadeIn('fast').children('p').html('Erro: ' + response.Mensagem);
                        return true
                    }
                    $('#alert-form').removeClass('alert-danger').addClass('alert-success').fadeIn('fast').children('p').html("Cadastro criado com sucesso. " + response.Mensagem);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert("Erro: " + thrownError + " -- " + xhr.status);
                    btnCurrent.prop('disabled', false);
                }
            });
        }
    });
}