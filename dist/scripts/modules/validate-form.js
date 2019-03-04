export default function initValidateForm() {
    $('[data-btn]').click(function () {
        if($("#frm-contato")[0].checkValidity()) { // IF TRUE
            alert("form submitting");
        }
    });
}