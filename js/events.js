RegistrationApp.events = {
    initEvents: function() {
        var dom = RegistrationApp.dom;
        var ui = RegistrationApp.ui;

        function addFieldListeners(field, ...additionalFields) {
            var fields = [field, ...additionalFields];
            fields.forEach(function(f) {
                f.addEventListener('blur', function() { ui.validateForm(); });
                f.addEventListener('input', function() { ui.validateForm(); });
            });
        }

        addFieldListeners(dom.firstName);
        addFieldListeners(dom.lastName);
        addFieldListeners(dom.email);
        addFieldListeners(dom.password, dom.passwordConfirm);
        addFieldListeners(dom.passwordConfirm, dom.password);
        addFieldListeners(dom.birthDay);

        dom.form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (!dom.submitBtn.disabled) {
                alert('Форма валидна! (отправка не реализована)');
            }
        });
    }
};