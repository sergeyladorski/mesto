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

const toggleButtonState = (button, formInputs, config) => {
    const formIsValid = Array.from(formInputs).some((inputElement) => {
        return !inputElement.validity.valid;
    })
    if (formIsValid) {
        button.classList.add(config.inactiveButtonClass);
        button.setAttribute('disabled', 'disabled');
    }
    else {
        button.classList.remove(config.inactiveButtonClass);
        button.removeAttribute('disabled');
    }
}

const setEventListers = (formElement, config) => {
    const inputsList = formElement.querySelectorAll(config.inputSelector);
    const submitButton = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(submitButton, inputsList, config);
    Array.from(inputsList).forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(submitButton, inputsList, config);
        })
    })

    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    })
}

const enableValidation = (config) => {
    const formList = document.querySelectorAll(config.formSelector);
    Array.from(formList).forEach(formElement => {
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