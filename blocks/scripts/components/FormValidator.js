export default class FormValidator {
  constructor(validationPropertiesObject, formElement) {
    this._validationPropertiesObject = validationPropertiesObject;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validationPropertiesObject.inputSelector));
    this._buttonSubmitForm = this._formElement.querySelector(this._validationPropertiesObject.submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._validationPropertiesObject.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validationPropertiesObject.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._validationPropertiesObject.inputErrorClass);
    errorElement.classList.remove(this._validationPropertiesObject.errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _hasInvalidInput() {
  return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

  addButtonAttributeDisabled() {
    this._buttonSubmitForm.setAttribute('disabled', true);
}

  _toggleButtonState() {
  if (this._hasInvalidInput()) {
    this.addButtonAttributeDisabled();
  } else {
    this._buttonSubmitForm.removeAttribute('disabled');
  }
}

  resetValidation() {
  this._toggleButtonState();
  this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement);
  });
}

  enableValidation() {
    this._setEventListeners();
  }
}