export default class Api {
  constructor ({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, { 
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  
  updateAvatar() {

  }

  sendUserInfo(data) {
    fetch(`${this._baseUrl}/users/me`, {
  method: 'PATCH',
  headers: this._headers,
  body: JSON.stringify({
    name: data.name,
    about: data.about
  })
});
  }
}