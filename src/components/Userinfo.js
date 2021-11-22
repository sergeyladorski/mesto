// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. 
// Этот класс:
// Принимает в конструктор объект с селекторами двух элементов: 
// элемента имени пользователя и элемента информации о себе.
// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. 
// Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.


//isReady

class UserInfo {
    constructor({ userName, userDesc, userAvatar, }) {
        this.userName = userName;
        this.userInfo = userDesc;
        this.userAvatar = userAvatar;
    }
    getUserInfo() {
        return {
            name: this.userName.textContent,
            about: this.userInfo.textContent,
            avatar: this.userAvatar.src,
        }
    }
    setUserAvatar(avatar) {
        this.userAvatar.src = avatar;
    }
    setUserInfo({ name, about, id }) {
        this.userName.textContent = name;
        this.userInfo.textContent = about;
        this._id = id;
    }
    getUserId() {
        return this._id;
    }
}

export default UserInfo;