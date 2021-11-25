class FormValidator {
    constructor(config, formElementSelector) {
        this._config = config;
        this._formElement = formElementSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;

        this._inputsList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    }
    _showError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);
        inputElement.classList.add(this._inputErrorClass);
    }
    _hideError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass);
        inputElement.classList.remove(this._inputErrorClass);
    }
    _checkInputValidity(inputElement) {
        const isInputNotValid = !inputElement.validity.valid;
        if (isInputNotValid) {
            this._showError(inputElement);
        } else {
            this._hideError(inputElement);
        }
    }
    _toggleButtonState() {
        const formIsValid = this._inputsList.some((inputElement) => {
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
    resetValidation() {
        this._toggleButtonState();
        this._inputsList.forEach((inputElement) => {
            this._hideError(inputElement);
        });
    }
    _setEventListers() {
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
    enableValidation() {
        this._setEventListers();
    }
}
export default FormValidator;