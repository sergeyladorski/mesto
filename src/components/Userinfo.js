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
        if(avatar) {
            this.userAvatar.src = avatar;
        } else {
            console.log('Не удалось загрузить аватар');
        }
        
    }
    setUserInfo({ name, about, id }) {
        if({name, about, id}) {
            this.userName.textContent = name;
            this.userInfo.textContent = about;
            this._id = id;
        } else {
            console.log('Не удалось загрузить данные пользователя');
        }
        
    }
    getUserId() {
        return this._id;
    }
}

export default UserInfo;