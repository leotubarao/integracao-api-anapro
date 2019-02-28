export default function initFormButton() {
    $('[data-form-btn-anapro]').click(function (e) {
        e.preventDefault();

        const btnCurrent = $(this);
        btnCurrent.prop('disabled', true);

        /* Link Form Fale conosco */ {
            let formURL = 'https://online.crm.anapro.com.br/WebCRMService/Pages/chat/cliente/v2/ChatClienteFaleConosco.aspx?conta=1EvTOyY1Dpc1';
            formURL += '&keyIntegradora=BF283EA3-8124-4527-88D4-D44CBEC4D267';
            formURL += '&keyAgencia=291f17b8-c9b0-41f4-9c01-4e6b9e78d818';
            formURL += '&strDir=gencons';
            formURL += '&campanha=PxjqjSe3luw1';
            formURL += '&canal=nDj2YhJeLm41';
            formURL += '&produto=nAcSOGTta101';
            formURL += '&strmidia=Site+Monterrey';
            formURL += '&strpeca=';
            formURL += '&usuarioEmail=';
            formURL += '&strgrupopeca=';
            formURL += '&strcampanhapeca=';
            formURL += '&nome=';
            formURL += '&email=';
            formURL += '&telefoneDDD=';
            formURL += '&telefone=';
            formURL += '&strTexto=';
            formURL += '&keyexterno=';
            formURL += '&urlep=';
            formURL += '&urlcp=';
            formURL += '&urlca=';
            formURL += '&urlat=';
            formURL += '&strMostrarTopo=true';
            formURL += '&strAutoSubmit=true';
            formURL += '&strUsarDadosAnteriores=true';
            formURL += '&emailobrigatorio=true';
            formURL += '&telefoneobrigatorio=false';
            formURL += '&texto=';
        }

        const Key = document.getElementById('Key').value;
        const KeyIntegradora = document.getElementById('KeyIntegradora').value;
        const KeyAgencia = document.getElementById('KeyAgencia').value;
        const CampanhaKey = document.getElementById('CampanhaKey').value;
        const ProdutoKey = document.getElementById('ProdutoKey').value;
        const CanalKey = document.getElementById('CanalKey').value;
        const CanalKeyChat = document.getElementById('CanalKeyChat').value;
        const Midia = document.getElementById('Midia').value;
        const Peca = document.getElementById('Peca').value;
        const Obs = document.getElementById('obs').value;
        const UsuarioEmail = document.getElementById('emailUser').value;

        const nome = $("#nome").val();

        let telefone = $("#telefone").val().replace(/\D/g, '');
        const ddd = telefone.length > 9 ? telefone.substring(0, 2) : '';

        telefone = ddd.length > 0 ? telefone.substring(2, telefone.length) : telefone;

        const email = $("#email").val();

        let dados = {
            "Key": Key,
            "TagAtalho": "",
            "CampanhaKey": CampanhaKey,
            "ProdutoKey": ProdutoKey,
            "CanalKey": CanalKey,
            "Midia": Midia,
            "Peca": Peca,
            "GrupoPeca": "",
            "CampanhaPeca": "",
            "PessoaNome": nome,
            "PessoaSexo": "",
            "PessoaEmail": email,
            "PessoaTelefones": [{
                "Tipo": "OUTR",
                "DDD": ddd,
                "Numero": telefone,
                "Ramal": null
            }],
            "Observacoes": Obs,
            "UsuarioEmail": UsuarioEmail,
            "Status": "",
            "KeyExterno": "",
            "KeyIntegradora": KeyIntegradora,
            "KeyAgencia": KeyAgencia
        };

        console.log('Objeto enviado', dados);

        $.ajax({
            url: 'https://crm.anapro.com.br/webcrm/webapi/integracao/v2/CadastrarProspect',
            data: dados,
            crossDomain: true,
            cache: false,
            type: 'POST',
            dataType: 'json',
            beforeSend: function () {
                btnCurrent.prop('disabled', true);

                if (nome.length < 1 || email.length < 1) {
                    $('#alert-form').removeClass('alert-success').addClass('alert-danger').fadeIn('fast').children('p').html('Obrigatório preencher Nome e E-mail.');
                    btnCurrent.prop('disabled', false);
                    return false;
                }
            },
            success: function (response) {
                console.log('Response', response);
                
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
    });
}