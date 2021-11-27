import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this.popup.querySelector('.form')
        this._inputsList = this._form.querySelectorAll('.form__input');
    }
    _getInputValues() {
        const inputValues = {};
        Array.from(this._inputsList).forEach((item) => {
            inputValues[item.id] = item.value;
        })
        console.log(inputValues)
        return inputValues;
    }
    close() {
        super.close();
        this._form.reset();
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues())
        });
    }
}
export default PopupWithForm;