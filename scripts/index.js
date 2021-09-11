let edit = document.querySelector('.profile__edit-info');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let popupSave = document.querySelector('.popup__save');



function popupOpen () {
    let profileName = document.querySelector('.profile__name').innerHTML;
    let profileAbout = document.querySelector('.profile__about').innerHTML;
    let popupName = document.querySelector('.popup__item_el_name');
    let popupAbout = document.querySelector('.popup__item_el_about');
    popupName.value = profileName;
    popupAbout.value = profileAbout;
    popup.classList.add('popup_opened');
}

function close () {
    popup.classList.remove('popup_opened');
}

function saveChanges (evt) {
    evt.preventDefault();
    let profileName = document.querySelector('.profile__name');
    let profileAbout = document.querySelector('.profile__about');
    let popupName = document.querySelector('.popup__item_el_name');
    let popupAbout = document.querySelector('.popup__item_el_about');
  
    profileName.innerHTML = popupName.value;
    profileAbout.innerHTML = popupAbout.value;
    popup.classList.remove('popup_opened');

}


edit.addEventListener('click', popupOpen);
popupClose.addEventListener('click', close);
popupSave.addEventListener('click', saveChanges);