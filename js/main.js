RegistrationApp.init = function() {
    RegistrationApp.ui.initDom();
    RegistrationApp.ui.validateForm();
    RegistrationApp.events.initEvents();
};

document.addEventListener('DOMContentLoaded', function() {
    RegistrationApp.init();
});