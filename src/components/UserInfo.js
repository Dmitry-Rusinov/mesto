export default class UserInfo {
  constructor ({userName, userJob, userAvatar}) {
    this._userName = document.querySelector(userName);
    this._userJob = document.querySelector(userJob);
    this._userAvatar = document.querySelector(userAvatar)
  }
 
  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent
    }
  }

  setUserInfo(obj) {
    this._userName.textContent = obj.name;
    this._userJob.textContent = obj.about;
  }

  setAvatar(obj) {
    this._userAvatar.src = obj.avatar;
  }
}