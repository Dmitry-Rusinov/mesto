//Попап оредактирования профиля
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('#editProfile');
const buttonCloseEditProfilePopup = document.querySelector('.popup__closed');
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const inputNameField = document.querySelector('.popup__input_user_name');
const inputJobField = document.querySelector('.popup__input_user_job');
const userName = document.querySelector('.profile__info-title');
const userJob = document.querySelector('.profile__subtitle');
const elementsCard = document.querySelector('.elements__card');
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

//Реализация формы редактирования профиля

const openPopup = (popupOpened) => popupOpened.classList.add('popup_opened');

const closePopup = (popupClosed) => popupClosed.classList.remove('popup_opened');

buttonOpenEditProfilePopup.addEventListener('click', () => {
  //togglePopupState(popupEditProfile);
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

// Реализация загрузки карточек из JS
const elementsInfo = initialCards.map((item) => {
  return {
    name: item.name,
    link: item.link
  };
});
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
function createCard(title, link, description) { 
  const listElements  = templateCard.querySelector('.elements__card-content').cloneNode(true);
  const elementsPicture = listElements.querySelector('.elements__picture');
  const elementsTitle = listElements.querySelector('.elements__title');
  elementsTitle.textContent = title;
  elementsPicture.src = link;
  elementsPicture.alt = description;
  listElements.querySelector('.elements__button-delete').addEventListener('click', deleteCard );
  listElements.querySelector('.elements__button-like').addEventListener('click', toggleLike);
  elementsPicture.addEventListener('click', () => {
    openPopup(modalImage);
    image.src = elementsPicture.src;
    image.alt = elementsPicture.alt;
    imageTitle.textContent = elementsTitle.textContent;
  });
  return listElements;
}

//Функция добавления карточек из JS
function renderInitialCards() {
  elementsInfo.forEach((card) => {
    const cardContent = createCard(card.name, card.link, card.name);
    elementsCard.prepend(cardContent);
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
  const cardContentAdd = createCard(inputCardDescription.value, inputPictureLink.value, inputCardDescription.value);
  elementsCard.prepend(cardContentAdd);
  closePopup(popupAddCard);
  evt.target.reset();
}

addCardForm.addEventListener('submit', submitAddCard);

//Кнопка закрытия модального окна изображения
modalImageButtonClosed.addEventListener('click', () => closePopup(modalImage));