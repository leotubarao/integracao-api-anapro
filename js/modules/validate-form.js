export default function initValidateForm() {
    $('[data-btn]').click(function () {
        const formId = 'frm-contato';
        const nodes = document.querySelectorAll(`#${formId} :invalid`);
        console.log(nodes);
        return true;
    });
}