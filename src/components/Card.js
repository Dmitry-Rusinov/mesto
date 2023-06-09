
export default class Card {
  constructor({data, templateSelector, handleCardClick, handleIconDeleteCard}) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._hadleIconDeleteCard = handleIconDeleteCard;
    this._element = this._getTemplate();
    this._buttonLike = this._element.querySelector('.elements__button-like');
    this._buttonDelete = this._element.querySelector('.elements__button-delete');
    this._image = this._element.querySelector('.elements__picture');
  }

  _getTemplate() {
    const templateCard = document
    .querySelector(this._templateSelector).content
    .querySelector('.elements__card-content').cloneNode(true);
    return templateCard;
  }

  generateCard() {
    this._setEventListeners();
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector('.elements__title').textContent = this._name;
    return this._element;
  }

  _setEventListeners() {
    this._buttonLike.addEventListener('click', 
    () => this._toggleLike());
    this._buttonDelete.addEventListener('click', 
    () => /*this._deleteCard());*/this._hadleIconDeleteCard());
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });

  }

  _toggleLike() {
    this._buttonLike.classList.toggle('elements__button-like_active');
  }

  deleteCard() {
    const item = this._element;
    item.remove();
  }
}
