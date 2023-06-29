export default class PopupWithForm extends Popup {
  constructor({popupSelector, submitForm}) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = document.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
      
    })
  }
}
