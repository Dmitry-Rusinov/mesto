export default class Popup {
  constructor(popupSelector) {
    this._modal = document.querySelector(popupSelector);
  }

  open() {
    this._modal.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }

  close() {
    this._modal.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._modal.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          this.close()
      }
      if (evt.target.classList.contains('popup__closed')) {
        this.close()
      }
  });

  }
}