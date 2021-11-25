// Свяжите класс Card c попапом. 
// Сделайте так, чтобы Card принимал в конструктор функцию handleCardClick. 
// Эта функция должна открывать попап с картинкой при клике на карточку.

//isReady

class Card {
    constructor(data, template, user,
        handleCardClick, deleteCardClick,
        { setLike, deleteLike }) {
        this._title = data.name;
        this._link = data.link;
        this._id = data._id;
        this._data = data;
        this._user = user;
        this._template = template;
        this._handleCardClick = handleCardClick;
        this._deleteCardClick = deleteCardClick;
        this._setLike = setLike;
        this._deleteLike = deleteLike;
    }

    //getting template card
    _getTemplate() {
        const cardElement = document
            .querySelector(this._template)
            .content
            .querySelector('.gallery__card')
            .cloneNode(true);

        return cardElement;
    }
    //checking if there's my like on the card
    islikeActive() {
        let likeIsActive = false;
        this._data.likes.forEach(everyLike => {
            if (everyLike._id.includes(this._user)) {
                likeIsActive = true;
            }
        });
        return likeIsActive;
    }
    //checking whether the card is mine
    isDeleteBtnActive() {
        if (this._user === this._data.owner._id) {
            this._deleteButton.classList.add('gallery__delete-photo_active');
        } else {

            this._deleteButton.classList.remove('gallery__delete-photo_active');
        };
    }
    //manage like button state
    _setLikeStateActive() {
        this._likeButton.classList.add('gallery__photo-like_active');
    }
    _removeLikeStateActive() {
        this._likeButton.classList.remove('gallery__photo-like_active');
    }
    //get likes number
    getLikes(data) {
        this._data.likes = data.likes;
        this._like.textContent = data.likes.length;
        this._showLikesNumber();
        if (!this.islikeActive()) {
            this._removeLikeStateActive(this._data._id)
        } else {
            this._setLikeStateActive(this._data._id)
        }
    }
    //show likes number
    _showLikesNumber() {
        const likeCounter = this._element.querySelector('.gallery__like-counter');
        if (this._data.likes.length >= 1) {
            this._like.textContent = this._data.likes.length;
            likeCounter.classList.add('gallery__like-counter_active');
        } else if (this._data.likes.length === 0){
            this._like.textContent = '';
            likeCounter.classList.remove('gallery__like-counter_active');
        }
    }
    //setting cards event listeners
    _setEventListeners() {
        //like button behavior
        this._likeButton.addEventListener('click', () => {
            if (this.islikeActive()) {
                this._deleteLike(this._data._id)
                this._removeLikeStateActive(this._data._id)
            } else {
                this._setLike(this._data._id)
                this._setLikeStateActive(this._data._id)
            }
        });
        //delete button behavior
        this.isDeleteBtnActive();
        this._deleteButton.addEventListener('click', () => {
            this._deleteCardClick(this._id, this._element)
        });
        //open a 75% srceen size image
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick({
                link: this._link,
                name: this._title,
            })
        })
    }

    //generate card
    generateCard() {
        this._element = this._getTemplate();
        this._deleteButton = this._element.querySelector('.gallery__delete-photo');
        this._cardCaption = this._element.querySelector('.gallery__photo-title');
        this._cardImage = this._element.querySelector('.gallery__photo');
        this._likeButton = this._element.querySelector('.gallery__photo-like');
        this._like = this._element.querySelector('.gallery__like-counter');
        this._cardCaption.textContent = this._title;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._title;
        this._setEventListeners();
        this._showLikesNumber();

        return this._element
    }
}
export default Card;