import './index.css';
import {
    changesInProgress, validationConfig,
    userName, userDesc, userAvatar,
    nameInput, aboutInput,
    formInfo, formCard, formAvatar,
    btnAddCard, btnEditInfo, btnChangeAvatar,
    containerCard, templateCardSelector,
    popupCardSelector, popupConfirmSelector,
    popupInfoSelector, popupViewSelector, popupAvatarSelector
} from '../utils/constants.js';
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/Userinfo.js';
import Api from '../components/Api.js';

const api = new Api({
    source: 'https://mesto.nomoreparties.co/v1',
    cohort: 'cohort-30',
    token: '115fa395-010f-4ccc-93c6-6dc65854738f'
})

//waiting for both are done
Promise.all([api.getUserInfo(), api.getCards()])
    .then(resData => {
        const userData = resData[0];
        userInfo.setUserInfo({
            name: userData.name,
            about: userData.about,
            id: userData._id,
        })
        userInfo.setUserAvatar(userData.avatar);
        cardsList.renderItems(resData[1]);
    })
    .catch((err) => {
        console.log(err);
    })

//popup edit info
const userInfo = new UserInfo({ userName, userDesc, userAvatar });
const popupUserInfo = new PopupWithForm(
    popupInfoSelector,
    (data) => {
        changesInProgress(true, popupInfoSelector)
        api.patchUserInfo({
            name: data.name,
            about: data.about,
        })
            .then(() => {
                userInfo.setUserInfo(data);
                popupUserInfo.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                changesInProgress(false, popupInfoSelector);
            })
    })
popupUserInfo.setEventListeners()

//update user avatar
const popupAvatar = new PopupWithForm(
    popupAvatarSelector,
    (data) => {
        changesInProgress(true, popupAvatarSelector)
        api.patchUserAvatar(data.avatar)
            .then(() => {
                userInfo.setUserAvatar(data.avatar);
                popupAvatar.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                changesInProgress(false, popupAvatarSelector);
            })
    }
)
popupAvatar.setEventListeners()

//popupCard
const popupCard = new PopupWithForm(
    popupCardSelector,
    (data) => {
        changesInProgress(true, popupCardSelector)
        api.postCard({
            name: data.place,
            link: data.source,
        })
            .then((data) => {
                const card = createCard({
                    name: data.name,
                    link: data.link,
                    likes: data.likes,
                    _id: data._id,
                    owner: data.owner,
                })
                const newCard = card.generateCard();
                cardsList.addItem(newCard, true);
                popupCard.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                changesInProgress(false, popupCardSelector);
            })
    })
popupCard.setEventListeners()

//popup confirm delete card
const popupConfirmDelete = new PopupWithConfirm(
    popupConfirmSelector,
    (cardId, newCard) => {
        changesInProgress(true, popupConfirmSelector);
        api.deleteCard(cardId)
            .then(() => {
                newCard.remove();
                popupConfirmDelete.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                changesInProgress(false, popupConfirmSelector);
            })
    }
)
popupConfirmDelete.setEventListeners();

//popup view
const popupWithImage = new PopupWithImage(popupViewSelector);
popupWithImage.setEventListeners();

//creating a new card
const createCard = (data) => {
    const card = new Card(
        data,
        templateCardSelector,
        userInfo.getUserId(),
        (data) => {
            popupWithImage.open(data);
        },
        (cardId, newCard) => {
            popupConfirmDelete.open(cardId, newCard);
        },
        {
            setLike: (cardId) => {
                api.setLike(cardId)
                    .then((cardId) => {
                        card.getLikes(cardId);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            deleteLike: (cardId) => {
                api.deleteLike(cardId)
                    .then((cardId) => {
                        card.getLikes(cardId);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        })
    return card;
}

//load cards from the server
const cardsList = new Section({
    renderer: (data) => {
        const card = createCard(data);
        const newCard = card.generateCard();
        cardsList.addItem(newCard, false);
        card.getLikes(data);
    },
}, containerCard);

//button listeners
btnEditInfo.addEventListener(
    'click',
    () => {
        popupUserInfo.open();
        formValidatorUserInfo.resetValidation();
        const data = userInfo.getUserInfo();
        nameInput.value = data.name;
        aboutInput.value = data.about;
    }
)
btnChangeAvatar.addEventListener(
    'click',
    () => {
        popupAvatar.open();
        formValidatorAvatar.resetValidation();
    }
)
btnAddCard.addEventListener(
    'click',
    () => {
        popupCard.open();
        formValidatorCard.resetValidation();
    }
)

//enable validation
const formValidatorUserInfo = new FormValidator(validationConfig, formInfo);
formValidatorUserInfo.enableValidation();
const formValidatorCard = new FormValidator(validationConfig, formCard);
formValidatorCard.enableValidation();
const formValidatorAvatar = new FormValidator(validationConfig, formAvatar);
formValidatorAvatar.enableValidation();