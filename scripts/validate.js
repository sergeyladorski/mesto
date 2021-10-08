const showError = (errorElement, inputElement, config) => {
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(config.errorClass);
    inputElement.classList.add(config.inputErrorClass);
}

const hideError = (errorElement, inputElement, config) => {
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.remove(config.errorClass);
    inputElement.classList.remove(config.inputErrorClass);
}

const checkInputValidity = (formElement, inputElement, config) => {
    const isInputNotValid = !inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    if (isInputNotValid) {
        showError(errorElement, inputElement, config);
    } else {
        hideError(errorElement, inputElement, config);
    }
}

const toggleButtonState = (button, isValid, config) => {
    if (isValid) {
        button.classList.remove(config.inactiveButtonClass);
        button.removeAttribute('disabled');
    } else {
        button.classList.add(config.inactiveButtonClass);
        button.setAttribute('disabled', 'disabled');
    }
}

const setEventListers = (formElement, config) => {
    const inputsList = formElement.querySelectorAll(config.inputSelector);
    const submitButton = formElement.querySelector(config.submitButtonSelector);
    const isFormValid = formElement.checkValidity();
    toggleButtonState(submitButton, isFormValid, config);
    Array.from(inputsList).forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(submitButton, isFormValid, config);
        })
    })

    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    })
}

const enableValidation = (config) => {
    const forms = document.querySelectorAll(config.formSelector);
    Array.from(forms).forEach(formElement => {
        setEventListers(formElement, config);
    })
}

const validationConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__save',
    inactiveButtonClass: 'form__save_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
}

enableValidation(validationConfig);