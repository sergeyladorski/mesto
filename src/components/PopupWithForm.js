// Создайте класс PopupWithForm, который наследует от Popup. Этот класс:
// Кроме селектора попапа принимает в конструктор колбэк сабмита формы. +
// Содержит приватный метод _getInputValues, который собирает данные всех полей формы. +
// Перезаписывает родительский метод setEventListeners. 
// Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, 
// но и добавлять обработчик сабмита формы. +
// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться. +
// Для каждого попапа создавайте свой экземпляр класса PopupWithForm. +

//isReady

import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this.popup.querySelector('.form')
        this._inputsList = this._form.querySelectorAll('.form__input');
    }
    _getInputValues() {
        const inputValues = [];
        Array.from(this._inputsList).forEach((item) => {
            inputValues[item.id] = item.value;
        })
        return inputValues;
    }
    close() {
        super.close();
        this._form.reset();
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            this._handleSubmitForm(evt, this._getInputValues())
        });
    }
}
export default PopupWithForm;