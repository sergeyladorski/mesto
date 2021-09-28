//popup 'редактировать профиль'
const btnEditInfo = document.querySelector('.profile__edit-info');  // кнопка открытия попапа
const popupInfo = document.getElementById('edit-info');             // попап 'редактировать профиль'
const popupInfoClose = popupInfo.querySelector('.popup__close');    // кнопка закрытия попапа 
const popupInfoForm = popupInfo.querySelector('.popup__form');      // форма попапа
// 'имя' на странице и в input
const profileName = document.querySelector('.profile__name');
const popupName = document.getElementById('name');
// 'о себе' на странице и в input
const profileAbout = document.querySelector('.profile__about');
const popupAbout = document.getElementById('about');

//popup 'добавить фото'
const btnAddPhoto = document.querySelector('.profile__add-photo');  // кнопка открытия попапа
const popupPhoto = document.getElementById('add-photo');            // попап 'добавить фото'
const popupPhotoClose = popupPhoto.querySelector('.popup__close');  // кнопка закрытия попапа 
const popupPhotoForm = popupPhoto.querySelector('.popup__form');    // форма попапа
//popup 'просмотр фото'
const popupView = document.getElementById('view');                  //попап 'просмотр фото'
const popupViewClose = popupView.querySelector('.popup__close');    // кнопка закрытия попапа 

const cardsContainer = document.querySelector('.gallery__list');    //список карточек

//начальные карточки
const initialCards = [
    {
        name: 'Скалистый склон',
        link: './images/gallery/1.jpg'
    },
    {
        name: 'Прибрежная полоса',
        link: './images/gallery/2.jpg'
    },
    {
        name: 'Вид на залив',
        link: './images/gallery/3.jpg'
    },
    {
        name: 'Лесной пейзаж',
        link: './images/gallery/4.jpg'
    },
    {
        name: 'Хайкинг',
        link: './images/gallery/5.jpg'
    },
    {
        name: 'Камни',
        link: './images/gallery/6.jpg'
    }
];

//открыть попап
function openPopup(popup) {
    popup.classList.add('popup_opened');
}
//установить значения input из 'информация профиля'
function setInputsValue() {
    popupName.value = profileName.textContent;
    popupAbout.value = profileAbout.textContent;
}
//закрыть попап без сохранения изменений
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}
//установить значения 'информация профиля' из input
function saveInfoValue() {
    profileName.textContent = popupName.value;
    profileAbout.textContent = popupAbout.value;
}
//сохранить изменения профиля
function saveChangesInfo(evt) {
    evt.preventDefault();
    saveInfoValue();
    closePopup(popupInfo);
}

//создать карточку
function createCard(data) {
    const cardTemplate = document.getElementById('photo-template').content;         //шаблон карточки
    const newCard = cardTemplate.querySelector('.gallery__card').cloneNode(true);   //новая карточка
    setCardProperties(newCard, data);                                               //свойства новой карточки
    setEventListener(newCard);                                                      //EventListener новой карточки
    return newCard;
}

//присвоить карточке значения
function setCardProperties(item, data) {
    item.querySelector('.gallery__photo-title').textContent = data.name;
    item.querySelector('.gallery__photo').src = data.link;
    item.querySelector('.gallery__photo').alt = data.name;
}

//создать новую карточку
function createNewCard(evt) {
    evt.preventDefault();                                   //сохранить данные из input в объект
    const data = {
        name: document.getElementById('place').value,
        link: document.getElementById('source').value,
    }
    cardsContainer.prepend(createCard(data));
    evt.currentTarget.reset();
    closePopup(popupPhoto);
    console.log('создана новая карточка');
}

//начальные карточки
function createDefaultCards() {
    initialCards.forEach((item) => {
        cardsContainer.append(createCard(item));
    })
}

//eventListener для карточек
function setEventListener(item) {
    item.querySelector(".gallery__delete-photo").addEventListener("click", deleteCard);
    item.querySelector(".gallery__photo-like").addEventListener("click", likeCard);
    item.querySelector(".gallery__photo").addEventListener("click", openPopupView);
}
//удалить выбранную карточку
const deleteCard = (evt) => {
    evt.preventDefault();
    const target = evt.target;
    const currentCard = evt.currentTarget.closest('.gallery__card');
    if (target.classList.contains('gallery__delete-photo')) {
        currentCard.remove();
    }
}
//поставить лайк выбранной карточке
const likeCard = (evt) => {
    evt.preventDefault();
    const target = evt.target;
    if (target.classList.contains('gallery__photo-like')) {
        target.classList.toggle('gallery__photo-like_active');
    }
}
//открыть фото карточки
const openPopupView = (evt) => {
    evt.preventDefault();
    const target = evt.target;
    const currentCard = evt.currentTarget.closest('.gallery__card');

    const cardPhoto = currentCard.querySelector('.gallery__photo');
    const popupPhoto = popupView.querySelector('.popup__photo')

    const cardTitle = currentCard.querySelector('.gallery__photo-title');
    const popupTitle = popupView.querySelector('.popup__photo-title')

    if (target.classList.contains('gallery__photo')) {
        popupPhoto.src = cardPhoto.src;
        popupTitle.textContent = cardTitle.textContent;
        popupPhoto.alt = cardTitle.textContent;
    }
    openPopup(popupView);
}

//открыть попап 
btnEditInfo.addEventListener('click', () => { openPopup(popupInfo); setInputsValue(); });   //редактировать профиль
btnAddPhoto.addEventListener('click', () => openPopup(popupPhoto));                         //добавить фото
//закрыть попап 
popupInfoClose.addEventListener('click', () => closePopup(popupInfo));                      //редактировать профиль
popupPhotoClose.addEventListener('click', () => closePopup(popupPhoto));                    //добавить фото
popupViewClose.addEventListener('click', () => closePopup(popupView));                      //просмотр фото
//сохранить и закрыть попап 
popupInfoForm.addEventListener('submit', saveChangesInfo);                                  //информация профиля
popupPhotoForm.addEventListener('submit', createNewCard);                                   //новое фото с описанием

createDefaultCards();