//Функция отвечает за показ ошибки
const showInputError = (formElement, inputElement, errorMessage, property) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(property.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(property.errorClass);
}
//Функция скрывает ошибку
const hideInputError = (formElement, inputElement, property) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(property.inputErrorClass);
  errorElement.classList.remove(property.errorClass);
  errorElement.textContent = '';
};

//Функция проверяет валидацию полей в форме 
//и вызывает или скрывает сообщение об ошибке
const checkInputValidity = (formElement, inputElement, property) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, property);
  } else {
    hideInputError(formElement, inputElement, property);
  }
};

const setEventListeners = (formElement, property) => {
  const inputList = Array.from(formElement.querySelectorAll(property.inputSelector));
  const buttonSubmitForm = formElement.querySelector(property.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, property);
      toggleButtonState(inputList, buttonSubmitForm);
    });
  });
}

//Функция обходит массив полей и проверяет их на валидацию
function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function enableValidation (property) {
  const formList = Array.from(document.querySelectorAll(property.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, property);
  });
}

enableValidation(validationPropertiesObject);