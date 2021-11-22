import './index.css';
import {
    initialCards, validationConfig,
    userName, userDesc, userAvatar,
    nameInput, infoInput, avatarInput,
    placeInput, sourceInput,
    formInfo, formPhoto, formAvatar,
    btnAddPhoto, btnEditInfo, btnChangeAvatar,
    containerCard, templatePhotoSelector,
    popupPhotoSelector, popupConfirmSelector,
    popupInfoSelector, popupViewSelector, popupAvaterSelector
} from '../utils/constants.js';
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/Userinfo.js';
import API from '../components/API.js';

const api = new API({
    source: 'https://mesto.nomoreparties.co/v1',
    cohort: 'cohort-30',
    token: '115fa395-010f-4ccc-93c6-6dc65854738f'
})

// Должны быть успешно получены два!
Promise.all([api.getUserInfo(), api.getCards()])
    .then(apiData => {
        //console.log(apiData)
        const apiUserData = apiData[0] // Инфо по пользователю
        // Загрузка имени и деятельности с сервера
        userInfo.setUserInfo({
            name: apiUserData.name,
            about: apiUserData.about,
            id: apiUserData._id
        })
        // Загрузка Аватарки с сервера
        userInfo.setUserAvatar(apiUserData.avatar)
        cardsList.renderItems(apiData[1]) // Инфа по карточкам
    })
    // Если сервер не ответил, выводим ошибку в консоль
    .catch((err) => {
        console.log(err)
    })

// Попап для редактирования имени и деятельности
const userInfo = new UserInfo({ userName, userDesc, userAvatar })
const popupEditProfile = new PopupWithForm(popupInfoSelector, editFormSubmitHandler)
popupEditProfile.setEventListeners()
btnEditInfo.addEventListener(
    'click',
    () => {
        popupEditProfile.open()
        editFormValidator.resetValidation()
        const newUserInfo = userInfo.getUserInfo()
        nameInput.value = newUserInfo.name
        infoInput.value = newUserInfo.about
    }
)
// Сабмит для попапа редактирования имени и деятельности
function editFormSubmitHandler() {
    // renderLoading(true, popUpEdit)
    const userInfoArray = {
        name: nameInput.value,
        about: infoInput.value
    }
    api.patchUserInfo(userInfoArray)
        .then(() => {
            userInfo.setUserInfo(userInfoArray)
            popupEditProfile.close()
        })
        // Если сервер не ответил, выводим ошибку в консоль
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            //   renderLoading(false, popUpEdit)
        })
}

const popupAvatarForm = new PopupWithForm(popupAvaterSelector, uploadAvatarHandler)
popupAvatarForm.setEventListeners()
btnChangeAvatar.addEventListener(
    'click',
    () => {
        popupAvatarForm.open()
        avatarFormValidator.resetValidation()
    }
)

function uploadAvatarHandler() {
    // renderLoading(true, popUpAvatar)
    const avatarSRC = avatarInput.value
    api.patchUserAvatar(avatarSRC)
        .then(() => {
            userInfo.setUserAvatar(avatarSRC)
            // Можно добавить проверку на введенные данные для Аватара, 
            // если ответ некорретный, то можно создать новый попап с 
            // указанной ошибкой и предложить пользователю ввести данные
            // еще раз
            popupAvatarForm.close()
        })
        // Если сервер не ответил, выводим ошибку в консоль
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            //   renderLoading(false, popUpAvatar)
        })
}

// Попап для добавления карточек
const popupAdd = new PopupWithForm(popupPhotoSelector, addCardSubmitHandler)
popupAdd.setEventListeners()
btnAddPhoto.addEventListener(
    'click',
    () => {
        popupAdd.open()
        cardFormValidator.resetValidation();
    }
)

// Сабмит для попапа для добавления карточек
function addCardSubmitHandler() {
    // renderLoading(true, popUpAdd)
    const cardInfoArray = {
        name: placeInput.value,
        link: sourceInput.value
    }
    api.postCard(cardInfoArray)
        .then((data) => {
            const card = createCard({
                name: data.name,
                link: data.link,
                likes: data.likes,
                _id: data._id,
                owner: data.owner
            })
            const newCard = card.generateCard();
            cardsList.addItem(newCard, true);
            popupAdd.close();
        })
        // Если сервер не ответил, выводим ошибку в консоль
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            //   renderLoading(false, popUpAdd)
        })
}

// Попап для удаления карточек
const popupConfirmDelete = new PopupWithConfirm(popupConfirmSelector, deleteCardHandler)
popupConfirmDelete.setEventListeners()


function deleteCardClickHandler(cardId, newCard) {
    popupConfirmDelete.open(cardId, newCard)
}


function deleteCardHandler(cardId, newCard) {
    // renderLoading(true, popUpDeleteCard)
    api.deleteCard(cardId)
        .then(() => {
            newCard.remove()
            popupConfirmDelete.close()
        })
        // Если сервер не ответил, выводим ошибку в консоль
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            //   renderLoading(false, popUpDeleteCard)
        })
}


// Создание и рендер для карточек "по умолчанию"
const cardsList = new Section({
    renderer: (data) => {
        const card = new Card(
            data, templatePhotoSelector,
            userInfo.getUserId(),
            cardImageClickHandler,
            deleteCardClickHandler,
            {
                setLike: (cardId) => {
                    api.setLike(cardId)
                        .then((cardId) => {
                            card.setLikes(cardId);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                },
                deleteLike: (cardId) => {
                    api.deleteLike(cardId)
                        .then((cardId) => {
                            card.setLikes(cardId);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                },
            })
        const newCard = card.generateCard();
        cardsList.addItem(newCard, false);
    },
}, containerCard);

// Попап с полноразмерным фото
const popupWithImage = new PopupWithImage(popupViewSelector)
popupWithImage.setEventListeners()
function cardImageClickHandler(url, text) {
    popupWithImage.open(url, text)
}

// Валидация
const editFormValidator = new FormValidator(validationConfig, formInfo);
const cardFormValidator = new FormValidator(validationConfig, formPhoto);
const avatarFormValidator = new FormValidator(validationConfig, formAvatar);
editFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();