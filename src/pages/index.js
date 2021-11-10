import {
    initialCards, validationConfig,
    userName, userDesc,
    nameInput, infoInput,
    formInfo, formPhoto,
    btnAddPhoto, btnEditInfo,
    containerCardSelector, templatePhotoSelector,
    popupPhotoSelector, popupInfoSelector, popupViewSelector
} from '../utils/constants.js';
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/User.js';

//work with popupImage
const popupWithImage = new PopupWithImage(popupViewSelector);
popupWithImage.setEventListeners()

const cardList = new Section({
    items: initialCards,
    renderer: (data) => {
        const card = new Card(data,
            templatePhotoSelector, (data) => {
                popupWithImage.open(data);
            }
        );
        return card.generateCard();
    },
},
    containerCardSelector
);
cardList.renderItems();

//popup 'add a new card'
const popupPhoto = new PopupWithForm(
    popupPhotoSelector,
    (evt, data) => {
        evt.preventDefault();
        cardList.addItem({
            name: data['place'],
            link: data['source'],
        });
        popupPhoto.close();
    }
);
popupPhoto.setEventListeners();

//popup 'edit user info'
const userInfo = new UserInfo({
    userNameSelector: userName,
    userDescSelector: userDesc
});
const popupInfo = new PopupWithForm(
    popupInfoSelector,
    (evt, data) => {
        evt.preventDefault();
        const { name, info } = data;
        userInfo.setUserInfo({ name, info });
        popupInfo.close();
    })
popupInfo.setEventListeners();

//opening popups
btnEditInfo.addEventListener('click', () => {
    popupInfo.open();
    const data = userInfo.getUserInfo();
    nameInput.value = data.name;
    infoInput.value = data.info;
    formValidatorInfo.resetValidation();
});
btnAddPhoto.addEventListener('click', () => {
    popupPhoto.open();
    formValidatorPhoto.resetValidation();
});

//enable validation
const formValidatorInfo = new FormValidator(validationConfig, formInfo);
formValidatorInfo.enableValidation();
const formValidatorPhoto = new FormValidator(validationConfig, formPhoto);
formValidatorPhoto.enableValidation();