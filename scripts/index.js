const buttonPopupOpen = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const buttonPopupClosed = document.querySelector('.popup__closed');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_user_name');
let jobInput = document.querySelector('.popup__input_user_job');
let newNameInput = document.querySelector('.profile__info-title');
let newJobInput = document.querySelector('.profile__subtitle');

const togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup_opened');

buttonPopupOpen.addEventListener('click', () => {
  togglePopupState(popup);
  nameInput.value = newNameInput.textContent;
  jobInput.value = newJobInput.textContent;
});
buttonPopupClosed.addEventListener('click', () => togglePopupState(popup));
/*popup.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    togglePopupState(popup)
  }
})*/

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    newNameInput.textContent = nameInput.value;
    newJobInput.textContent = jobInput.value;
    togglePopupState(popup);
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);