// Свяжите класс Card c попапом. 
// Сделайте так, чтобы Card принимал в конструктор функцию handleCardClick. 
// Эта функция должна открывать попап с картинкой при клике на карточку.

//isReady

class Card {
    constructor(data, template, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
        this._handleCardClick = handleCardClick;
    }
    //получить шаблон карточки
    _getTemplate() {
        const cardElement = document
            .querySelector(this._template)
            .content
            .querySelector('.gallery__card')
            .cloneNode(true);
        this.likeButton = cardElement.querySelector('.gallery__photo-like')

        return cardElement;
    }
    //установить свойства карточки
    _setCardProps() {
        this._element.querySelector('.gallery__photo').src = this._link;
        this._element.querySelector('.gallery__photo-title').textContent = this._name;
        this._element.querySelector('.gallery__photo').alt = this._name;
    }
    //установить обработчики событий
    _setEventListener() {
        this._element.querySelector('.gallery__delete-photo').addEventListener('click', this._deleteCard);
        this.likeButton.addEventListener('click', this._likeCard);
        this._element.querySelector('.gallery__photo').addEventListener('click', this._openView);
    }
    //удалить
    _deleteCard = () => {
        this._element.remove();
    }
    //поставить лайк
    _likeCard = () => {
        this.likeButton.classList.toggle('gallery__photo-like_active');
    }
    //просмотр
    _openView = () => {
        this._handleCardClick({
            link: this._link,
            name: this._name,
        })
    }
    //создать карточку
    generateCard() {
        this._element = this._getTemplate();
        this._setCardProps();
        this._setEventListener();
        return this._element;
    }
}
export default Card;