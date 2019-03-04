export default function initChatButton() {
    $("[data-chat-btn-anapro]").click(function() {
        if ($("#frm-chat")[0].checkValidity()) {
            try {
                const nome = encodeURI($("#frm-chat .name").val());
                const email = encodeURI($("#frm-chat .email").val());
        
                let telefone = $("#frm-chat .telefone").val().replace(/\D/g, '');
                const ddd = telefone.length > 9 ? telefone.substring(0, 2) : '';
        
                telefone = ddd.length > 0 ? telefone.substring(2, telefone.length) : telefone;
        
                const mensagem = encodeURI($("#frm-chat .mensagem").val());
        
                let chatURL = 'https://online.crm.anapro.com.br/WebCRMService/Pages/chat/cliente/v2/ChatClienteEntrada.aspx?conta=1EvTOyY1Dpc1';
                    chatURL +='&keyIntegradora=BF283EA3-8124-4527-88D4-D44CBEC4D267';
                    chatURL +='&keyAgencia=291f17b8-c9b0-41f4-9c01-4e6b9e78d818';
                    chatURL +='&strDir=gencons';
                    chatURL +='&campanha=PxjqjSe3luw1';
                    chatURL +='&canal=YN3-e_lcRmY1';
                    chatURL +='&produto=nAcSOGTta101';
                    chatURL +='&strmidia=Site+Monterrey';
                    chatURL +='&strpeca=';
                    chatURL +='&usuarioEmail=';
                    chatURL +='&strgrupopeca=';
                    chatURL +='&strcampanhapeca=';
                    chatURL +='&nome=' + nome + '&email=' + email + '&telefoneDDD=' + ddd + '&telefone=' + telefone + '&strTexto=' + mensagem + '&keyexterno=';
                    chatURL +='&urlep=';
                    chatURL +='&urlcp=';
                    chatURL +='&urlca=';
                    chatURL +='&urlat=';
                    chatURL +='&strMostrarTopo=true';
                    chatURL +='&strAutoSubmit=true';
                    chatURL +='&strUsarDadosAnteriores=true';
                    chatURL +='&emailobrigatorio=true';
                    chatURL +='&telefoneobrigatorio=false';
                    chatURL +='&texto=' + mensagem;
        
                window.open(chatURL, '_blank');
        
            } catch (ex) {
                alert("Erro: " + ex);
            }
        }
    });
}