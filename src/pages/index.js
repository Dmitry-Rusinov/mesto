import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import {initialCards, popups, popupEditProfile, buttonOpenEditProfilePopup, 
  formEditProfile, inputNameField, inputJobField, validationPropertiesObject,
  userName, userJob, popupAddCardButtonOpen, cardsContainer, popupAddCard, addCardForm,
  inputCardDescription, inputPictureLink, modalImage, popupImage, popupTitle} from '../scripts/constants.js';
import './index.css';


//Открывает попап и добавляет слушатель кнопки Esc
const openPopup = (popupOpened) => {
  popupOpened.classList.add('popup_opened');
  document.addEventListener('keydown', handleCloseByEsc);
};

//Закрывает попап и удаляет слушатель кнопки Esc
const closePopup = (popupClosed) => {
  popupClosed.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleCloseByEsc);
};

//Слушатель на кнопке открытия попапа профиля
buttonOpenEditProfilePopup.addEventListener('click', () => {
  openPopup(popupEditProfile);
  inputNameField.value = userName.textContent;
  inputJobField.value = userJob.textContent;
  formEditProfileValidation.resetValidation();
});

//Функция редактирования полей формы попапа профиля
function submitEditProfileForm (evt) {
    evt.preventDefault(); 
    userName.textContent = inputNameField.value;
    userJob.textContent = inputJobField.value;
    closePopup(popupEditProfile);
}

//Слушатель сабмита на форме попапа профиля
formEditProfile.addEventListener('submit', submitEditProfileForm);

//Функция открывает попап увеличенного изображения
function handleCardClick(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupTitle.textContent = name;
  openPopup(modalImage);
}

//Функция наполнения карточки
function createCard(data) {
  const cardContent = new Card(data, '.card-template', handleCardClick);
  const cardElement = cardContent.generateCard();
  return cardElement;
}

//Функция добавления карточки на страницу
function renderCard(card) {
  cardsContainer.prepend(card);
}

//Функция добавления карточек из JS
function renderInitialCards() {
  initialCards.forEach((card) => {
    const cardContent = createCard(card);
    renderCard(cardContent);
  });
}

renderInitialCards();

//Слушатель на кнопку отрытия попапа добавления карточки
popupAddCardButtonOpen.addEventListener('click', () => {
  openPopup(popupAddCard);
  addCardFormValidation.resetValidation();
});

//Функция добавления карточки
function submitAddCard (evt) {
  evt.preventDefault();
  const objInputs = {
    name: inputCardDescription.value,
    link: inputPictureLink.value
  };
  const card = createCard(objInputs);
  renderCard(card);
  closePopup(popupAddCard);
  evt.target.reset();
}

//Слушатель сабмита на форме попапа добавления карточки 
addCardForm.addEventListener('submit', submitAddCard);

//Функция отслеживает закрытие модального окна по нажатию кнопку Esc
function handleCloseByEsc (evt) {
  if (evt.key === 'Escape') {
    const modal = document.querySelector('.popup_opened');
    closePopup(modal);
  }
}

//Закрываем попап по клику на крестик/оверлей
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__closed')) {
          closePopup(popup)
        }
    })
});

//Валидация формы редактирования профиля
const formEditProfileValidation = new FormValidator(validationPropertiesObject, formEditProfile);
formEditProfileValidation.enableValidation();

//Валидация формы добавления карточки
const addCardFormValidation = new FormValidator(validationPropertiesObject, addCardForm);
addCardFormValidation.enableValidation();