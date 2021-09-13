const edit = document.querySelector('.profile__edit-info');     // кнопка 'редактировать профиль'
const popup = document.querySelector('.popup');                 // попап 'редактировать профиль'
const popupClose = document.querySelector('.popup__close');     // кнопка закрытия попапа
const popupForm = document.querySelector('.popup__form');     // форма редактирования 'инфо'


let profileName = document.querySelector('.profile__name');     // 'имя' на странице профиля и в поле ввода
let popupName = document.getElementById('name');

let profileAbout = document.querySelector('.profile__about');   // 'о себе' на странице профиля и в поле ввода
let popupAbout = document.getElementById('about');


//открыть попап 'редактировать профиль'
function OpenPopupInfo() {
    popupName.value = profileName.textContent;
    popupAbout.value = profileAbout.textContent;
    popup.classList.add('popup_opened');
}

//закрыть попап 'редактировать профиль'
function closePopupInfo() {
    popup.classList.remove('popup_opened');
}

//сохранить в информацию профиля
function saveChangesInfo(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileAbout.textContent = popupAbout.value;
    closePopupInfo();
}


edit.addEventListener('click', OpenPopupInfo);          //открыть попап 'редактировать профиль'
popupClose.addEventListener('click', closePopupInfo);        //закрыть попап 'редактировать профиль'
popupForm.addEventListener('submit', saveChangesInfo);      //сохранить в информацию профиля