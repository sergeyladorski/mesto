// Свяжите класс Card c попапом. 
// Сделайте так, чтобы Card принимал в конструктор функцию handleCardClick. 
// Эта функция должна открывать попап с картинкой при клике на карточку.

//isReady

class Card {
    constructor(data, template, user, handleCardClick, handleCardDelete, { setLike, deleteLike }) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;

        this.data = data
        this.user = user

        this.setLike = setLike
        this.deleteLike = deleteLike
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._template)
            .content
            .querySelector('.gallery__card')
            .cloneNode(true);

        this._deleteButton = cardElement.querySelector('.gallery__delete-photo')
        this._cardCaption = cardElement.querySelector('.gallery__photo-title')
        this._cardImage = cardElement.querySelector('.gallery__photo')
        this._likeButton = cardElement.querySelector('.gallery__photo-like')
        this._like = cardElement.querySelector('.gallery__like-counter')
        this._cardCaption.textContent = this._name
        this._cardImage.src = this._link
        this._cardImage.alt = this._name;

        return cardElement
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            // Если мы уже ставили лайк карточке, то можем его снять
            if (this.islikeActive()) {
                this._deleteLike(this.data._id)
                this._removeLike(this.data._id)
            } else {
                // Если мы еще не ставили лайк карточке, то можем его поставить
                this._setLike(this.data._id)
                this._setLikeActive(this.data._id)
            }

        });
        this._deleteButton.addEventListener('click', () => {
            this._deleteCardClick(this._id, this._element)
        });
        // Слушатель клика на картинку для открытия попапа
        this._element.querySelector('.gallery__photo').addEventListener('click', () => {
            this._handleCardClick(this._url, this._caption); // ведет к popupWithImage.open()
        })
    }

    setLikes(item) {
        this.data.likes = item.likes
        this._like.textContent = item.likes.length
    }

    _setLikeActive() {
        this._likeButton.classList.add('element__like-button_active')
    }

    _removeLike() {
        this._likeButton.classList.remove('element__like-button_active')
    }

    islikeActive() {
        // Если наших лайков нет
        let likeIsActive = false
        // Получаем все лайки на всех карточках страницы
        // Проверяем все лайки на странице на наличие в них нашего id
        // возвращаем тру, если нашли, если нет, то возвращаем ошибочку
        this.data.likes.forEach(everyLike => {
            if (everyLike._id.includes(this._user)) {
                likeIsActive = true
                // Поиск обнаружен наши лайки, может снимать лайк
            }
        })
        return likeIsActive
        // Наших лайков нет, снимать лайки нельзя
    }

    _handleOpenImageClick() {
        popUpPhotoSRC.src = this._url;
        popUpPhotoSRC.alt = this._name;
        popUpPhotoCaption.textContent = this._name
    }

    generateCard() {
        this._element = this._getTemplate();

        this._setEventListeners(); // навесим слушатели кликов лайка и удаления карточки

        // После обновления страницы, проверяем, может мы уже поставили лайк 
        if (this.islikeActive()) {
            this._likeButton.classList.add('element__like-button_active')
        }

        // Рисуем проставленные другими юзерами лайки, если таких нет, пишем 0
        if (this.data.likes.length > 0) {
            this._like.textContent = this.data.likes.length
        } else {
            this._like.textContent = '0';
        }

        //console.log(this.data.owner._id)
        // Сравнивам строки, если _id совпадают, то это я создал карточку и могу ее удалить
        if (this._user === this.data.owner._id) {
            this._deleteButton.classList.remove('element__delete-button_type_hidden')
        } else {
            // чужое удалить нельзя, скрываем иконку
            this._deleteButton.classList.add('element__delete-button_type_hidden')
        }

        return this._element
    }
}
export default Card;