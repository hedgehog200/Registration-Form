RegistrationApp.ui = {
    updateField: function(field, errorElement, validationResult) {
        if (validationResult.valid) {
            field.classList.remove('invalid');
            field.classList.add('valid');
        } else {
            field.classList.remove('valid');
            field.classList.add('invalid');
        }
        errorElement.textContent = validationResult.message;
        return validationResult.valid;
    },

    validateForm: function() {
        var dom = RegistrationApp.dom;
        var validators = RegistrationApp.validators;
        var ui = this;

        var firstNameValid = ui.updateField(dom.firstName, dom.firstNameError, validators.name(dom.firstName.value));
        var lastNameValid = ui.updateField(dom.lastName, dom.lastNameError, validators.name(dom.lastName.value));
        var emailValid = ui.updateField(dom.email, dom.emailError, validators.email(dom.email.value));
        var passwordValid = ui.updateField(dom.password, dom.passwordError, validators.password(dom.password.value));
        var passwordConfirmValid = ui.updateField(dom.passwordConfirm, dom.passwordConfirmError, 
            validators.passwordConfirm(dom.passwordConfirm.value, dom.password.value));
        var birthDayValid = ui.updateField(dom.birthDay, dom.birthDayError, validators.birthDate(dom.birthDay.value));

        var formValid = firstNameValid && lastNameValid && emailValid && passwordValid && passwordConfirmValid && birthDayValid;
        
        dom.submitBtn.disabled = !formValid;
        
        if (formValid) {
            dom.form.classList.remove('invalid');
            dom.form.classList.add('valid');
        } else {
            dom.form.classList.remove('valid');
            dom.form.classList.add('invalid');
        }
    },

    initDom: function() {
        var dom = RegistrationApp.dom;
        dom.form = document.getElementById('registration-form');
        dom.firstName = document.getElementById('first-name');
        dom.lastName = document.getElementById('last-name');
        dom.email = document.getElementById('email');
        dom.password = document.getElementById('password');
        dom.passwordConfirm = document.getElementById('password-confirm');
        dom.birthDay = document.getElementById('birth-day');
        dom.submitBtn = document.getElementById('form-button');
        dom.firstNameError = document.getElementById('first-name-error');
        dom.lastNameError = document.getElementById('last-name-error');
        dom.emailError = document.getElementById('email-error');
        dom.passwordError = document.getElementById('password-error');
        dom.passwordConfirmError = document.getElementById('password-confirm-error');
        dom.birthDayError = document.getElementById('birth-day-error');
    }
};