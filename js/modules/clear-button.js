export default function initClearButton() {
    $('[data-form-btn-clear]').click(function (e) {
        $('#alert-form').removeClass('alert-success alert-danger').hide().children('p').html('');
    });
}