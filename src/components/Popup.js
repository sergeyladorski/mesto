// Создайте класс Popup, который отвечает за открытие и закрытие попапа.Этот класс:
// Принимает в конструктор единственный параметр — селектор попапа.
// Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
// Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
// Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
// Модальное окно также закрывается при клике на затемнённую область вокруг формы.

//isReady

class Popup {
    constructor(popupSelector) {
        this.popup = document.querySelector(popupSelector);
        this._closeByEsc = this._closeByEsc.bind(this);
    }
    open() {
        this.popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closeByEsc);
    }
    close() {
        this.popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closeByEsc);
    }
    _closeByEsc(evt) {
        if (evt.key === 'Escape') {
          this.close();
        }
      }
    setEventListeners() {
        this.popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup')
                || evt.target.classList.contains('popup__close')) {
                this.close();
            }
        });
    }
}
export default Popup;