export default function initFormButton(){$("[data-form-btn-anapro]").click(function(e){const a=$(this);a.prop("disabled",!0);const t=document.getElementById("Key").value,n=document.getElementById("KeyIntegradora").value,o=document.getElementById("KeyAgencia").value,l=document.getElementById("CampanhaKey").value,s=document.getElementById("ProdutoKey").value,r=document.getElementById("CanalKey").value,d=(document.getElementById("CanalKeyChat").value,document.getElementById("Midia").value),c=document.getElementById("Peca").value,m=document.getElementById("obs").value,u=document.getElementById("emailUser").value,i=$("#nome").val();let y=$("#telefone").val().replace(/\D/g,"");const g=y.length>9?y.substring(0,2):"";y=g.length>0?y.substring(2,y.length):y;let p={Key:t,TagAtalho:"",CampanhaKey:l,ProdutoKey:s,CanalKey:r,Midia:d,Peca:c,GrupoPeca:"",CampanhaPeca:"",PessoaNome:i,PessoaSexo:"",PessoaEmail:$("#email").val(),PessoaTelefones:[{Tipo:"OUTR",DDD:g,Numero:y,Ramal:null}],Observacoes:m,UsuarioEmail:u,Status:"",KeyExterno:"",KeyIntegradora:n,KeyAgencia:o};!1===$("#frm-contato")[0].checkValidity()?a.prop("disabled",!1):$.ajax({url:"https://crm.anapro.com.br/webcrm/webapi/integracao/v2/CadastrarProspect",data:p,crossDomain:!0,cache:!1,type:"POST",dataType:"json",success:function(e){if(a.prop("disabled",!1),!e.Sucesso)return $("#alert-form").removeClass("alert-success").addClass("alert-danger").fadeIn("fast").children("p").html("Erro: "+e.Mensagem),!0;$("#alert-form").removeClass("alert-danger").addClass("alert-success").fadeIn("fast").children("p").html("Cadastro criado com sucesso. "+e.Mensagem)},error:function(e,t,n){alert("Erro: "+n+" -- "+e.status),a.prop("disabled",!1)}})})}