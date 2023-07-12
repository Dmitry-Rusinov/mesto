import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({popupSelector}) {
    super(popupSelector);
    /*this._submitBtn = this._modal.querySelector('.elements__button-delete');*/
    this._form = this._modal.querySelector('.popup__form-confirm');
  }

  handleDeleteCard(itemRemove) {
    this._handleRemoving = itemRemove;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._handleRemoving()
    })
  }
}