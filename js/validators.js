RegistrationApp.validators = {
    name: function(value) {
        if (value.trim() === '') return { valid: false, message: 'Поле обязательно для заполнения' };
        var regex = /^[a-zA-Zа-яА-ЯёЁ\-]{2,30}$/;
        if (!regex.test(value)) {
            return { valid: false, message: 'Только буквы и дефис, длина 2-30 символов' };
        }
        return { valid: true, message: '' };
    },

    email: function(value) {
        if (value.trim() === '') return { valid: false, message: 'Email обязателен' };
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(value)) {
            return { valid: false, message: 'Введите корректный email (пример: name@domain.com)' };
        }
        return { valid: true, message: '' };
    },

    password: function(value) {
        if (value === '') return { valid: false, message: 'Пароль обязателен' };
        if (value.length < 8) return { valid: false, message: 'Минимум 8 символов' };
        var hasDigit = /[0-9]/.test(value);
        var hasUpper = /[A-Z]/.test(value);
        var hasLower = /[a-z]/.test(value);
        var hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
        
        if (!hasDigit) return { valid: false, message: 'Должна быть хотя бы одна цифра' };
        if (!hasUpper) return { valid: false, message: 'Должна быть хотя бы одна заглавная буква' };
        if (!hasLower) return { valid: false, message: 'Должна быть хотя бы одна строчная буква' };
        if (!hasSpecial) return { valid: false, message: 'Должен быть хотя бы один специальный символ (!@#$%^&* и т.п.)' };
        
        return { valid: true, message: '' };
    },

    passwordConfirm: function(confirmValue, passwordValue) {
        if (confirmValue === '') return { valid: false, message: 'Подтвердите пароль' };
        if (confirmValue !== passwordValue) return { valid: false, message: 'Пароли не совпадают' };
        return { valid: true, message: '' };
    },

    birthDate: function(value) {
        if (value === '') return { valid: false, message: 'Укажите дату рождения' };
        
        var birthDate = new Date(value);
        var today = new Date();
        
        if (isNaN(birthDate.getTime())) return { valid: false, message: 'Некорректная дата' };
        if (birthDate > today) return { valid: false, message: 'Дата рождения не может быть в будущем' };
        
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        if (age < 18) return { valid: false, message: 'Вам должно быть не менее 18 лет' };
        
        return { valid: true, message: '' };
    }
};