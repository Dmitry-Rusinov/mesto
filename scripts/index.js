//Попап оредактирования профиля
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('#editProfile');
const buttonCloseEditProfilePopup = document.querySelector('.popup__closed');
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const inputNameField = document.querySelector('.popup__input_user_name');
const inputJobField = document.querySelector('.popup__input_user_job');
const userName = document.querySelector('.profile__info-title');
const userJob = document.querySelector('.profile__subtitle');
const cardsContainer = document.querySelector('.elements__card');
const templateCard = document.querySelector('#template-card').content;
const popupAddCardButtonOpen = document.querySelector('.profile__add-button');
const inputCardDescription = document.querySelector('#card-description');
const inputPictureLink = document.querySelector('#picture-link');
const popupAddCard = document.querySelector('#popupAddCard');
const popupAddCardButtonClosed = popupAddCard.querySelector('.popup__closed');
const addCardForm = popupAddCard.querySelector('.popup__form');
const modalImage = document.querySelector('#popupImage');
const modalImageButtonClosed = modalImage.querySelector('.popup__closed');
const image = modalImage.querySelector('.popup__picture');
const imageTitle = modalImage.querySelector('.popup__image-title');
const popupInput = formEditProfile.querySelector('.popup__input');
const buttonSubmitForm = popupAddCard.querySelector('.popup__submit');

//Реализация формы редактирования профиля
const openPopup = (popupOpened) => {
  popupOpened.classList.add('popup_opened');
  document.addEventListener('keydown', escButtonPopupClose);
};

const closePopup = (popupClosed) => {
  popupClosed.classList.remove('popup_opened');
  document.removeEventListener('keydown', escButtonPopupClose);
};

buttonOpenEditProfilePopup.addEventListener('click', () => {
  openPopup(popupEditProfile);
  inputNameField.value = userName.textContent;
  inputJobField.value = userJob.textContent;
});

buttonCloseEditProfilePopup.addEventListener('click', () => closePopup(popupEditProfile));

function submitEditProfileForm (evt) {
    evt.preventDefault(); 
    userName.textContent = inputNameField.value;
    userJob.textContent = inputJobField.value;
    closePopup(popupEditProfile);
}

formEditProfile.addEventListener('submit', submitEditProfileForm);

//Кнопка удаления карточки
const deleteCard = (evt) => {
  const item = evt.target.closest('.elements__card-content');
  item.remove();
}
//Кнопка лайка карточки
const toggleLike = (evt) => {
  const item = evt.target.closest('.elements__button-like');
  item.classList.toggle('elements__button-like_active');
}
//Функция наполнения карточки
function createCard(name, link) { 
  const elementCard  = templateCard.querySelector('.elements__card-content').cloneNode(true);
  const pictureCard = elementCard.querySelector('.elements__picture');
  const titleCard = elementCard.querySelector('.elements__title');
  titleCard.textContent = name; 
  pictureCard.src = link; 
  pictureCard.alt = name;
  elementCard.querySelector('.elements__button-delete').addEventListener('click', deleteCard );
  elementCard.querySelector('.elements__button-like').addEventListener('click', toggleLike);
  pictureCard.addEventListener('click', () => {
    openPopup(modalImage);
    image.src = pictureCard.src;
    image.alt = pictureCard.alt;
    imageTitle.textContent = titleCard.textContent;
  });
  return elementCard;
}

function renderCard(card) {
  cardsContainer.prepend(card);
}

//Функция добавления карточек из JS
function renderInitialCards() {
  initialCards.forEach((card) => {
    const cardContent = createCard(card.name, card.link, card.name);
    renderCard(cardContent);
  });
}

renderInitialCards();

popupAddCardButtonOpen.addEventListener('click', () => {
  openPopup(popupAddCard);
});

popupAddCardButtonClosed.addEventListener('click', () => closePopup(popupAddCard));

//Функция добавления карточки
function submitAddCard (evt) {
  evt.preventDefault();
  const card = createCard(inputCardDescription.value, inputPictureLink.value, inputCardDescription.value);
  addButtonAttributeDisabled(buttonSubmitForm);
  renderCard(card);
  closePopup(popupAddCard);
  evt.target.reset();
}

addCardForm.addEventListener('submit', submitAddCard);

//Кнопка закрытия модального окна изображения
modalImageButtonClosed.addEventListener('click', () => closePopup(modalImage));

// Отслеживает закрытие модального окна по нажатию кнопки Esc
function escButtonPopupClose (evt) {
  if (evt.key === 'Escape') {
    const modal = document.querySelector('.popup_opened');
    closePopup(modal);
  }
}

//Отслеживание закрытия модального окна по клику на оверлей
const handleClickByOverlay = (evt) => {
  if (evt.currentTarget === evt.target) { 
    closePopup(evt.currentTarget);
  }
}

const popupList = Array.from(document.querySelectorAll('.popup'));

popupList.forEach((popup) => {
  popup.addEventListener('click', handleClickByOverlay)
});