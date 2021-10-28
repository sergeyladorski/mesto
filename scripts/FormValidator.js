const validationConfig = {
    inputSelector: '.form__input',
    submitButtonSelector: '.form__save',
    inactiveButtonClass: 'form__save_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
}
class FormValidator {
    constructor(config, formElementSelector) {
        this._config = config;
        this._formElement = document.querySelector(formElementSelector);
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;

        this._inputsList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    }
    _showError = (errorElement, inputElement) => {
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);
        inputElement.classList.add(this._inputErrorClass);
    }
    _hideError = (errorElement, inputElement) => {
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass);
        inputElement.classList.remove(this._inputErrorClass);
    }
    _checkInputValidity = (inputElement) => {
        const isInputNotValid = !inputElement.validity.valid;
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        if (isInputNotValid) {
            this._showError(errorElement, inputElement);
        } else {
            this._hideError(errorElement, inputElement);
        }
    }
    _toggleButtonState = () => {
        const formIsValid =  this._inputsList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
        if (formIsValid) {
            this._submitButton.classList.add(this._inactiveButtonClass);
            this._submitButton.setAttribute('disabled', 'disabled');
        }
        else {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.removeAttribute('disabled');
        }
    }
    _setEventListers = () => {
        this._toggleButtonState();
        this._inputsList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            })
        })
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
    }
    enableValidation = () => {
        this._setEventListers();
    }
}
export {validationConfig, FormValidator}