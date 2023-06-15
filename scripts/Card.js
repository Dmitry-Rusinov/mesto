
export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const templateCard = document
    .querySelector(this._templateSelector).content
    .querySelector('.elements__card-content').cloneNode(true);
    return templateCard;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._image = this._element.querySelector('.elements__picture');
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector('.elements__title').textContent = this._name;
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.elements__button-like').addEventListener('click', 
    () => this._toggleLike());
    this._element.querySelector('.elements__button-delete').addEventListener('click', 
    () => this._deleteCard());
    this._element.querySelector('.elements__picture').addEventListener('click', 
    () => this._handleOpenPopup());
  }

  _toggleLike() {
    this._element.querySelector('.elements__button-like').classList.toggle('elements__button-like_active');
  }

  _deleteCard() {
    const item = this._element;
    item.remove();
  }

  _handleOpenPopup() {
    document.querySelector('.popup__picture').src = this._link;
    document.querySelector('.popup__picture').alt = this._name;
    document.querySelector('.popup__image-title').textContent = this._name;
    document.querySelector('#popupImage').classList.add('popup_opened');
  }

}
