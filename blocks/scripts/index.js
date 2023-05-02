const buttonPopupOpen = document.querySelector('.profile__popup-opened');
const popup = document.querySelector('.popup');
const buttonPopupClosed = document.querySelector('.popup__closed');
const poopupButtonSave = document.querySelector('.popup__submit');

const togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup__opened')

buttonPopupOpen.addEventListener('click', () => togglePopupState(popup));
buttonPopupClosed.addEventListener('click', () => togglePopupState(popup));
poopupButtonSave.addEventListener('click', () => togglePopupState(popup));
/*popup.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    togglePopupState(popup)
  }
})*/

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_name');// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input_job');// Воспользуйтесь инструментом .querySelector()
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameInput = document.querySelector('.popup__input_name').value;
    let jobInput = document.querySelector('.popup__input_job').value;
    // Выберите элементы, куда должны быть вставлены значения полей
    document.querySelector('.profile__info-title').innerHTML = nameInput;
    document.querySelector('.profile__subtitle').innerHTML = jobInput;
    // Вставьте новые значения с помощью textContent
    nameInput = newNameInput.textContent;
    jobInput = newjobInput.textContent;
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 