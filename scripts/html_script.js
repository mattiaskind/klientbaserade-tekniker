'use strict';

const button = document.querySelector('.btn-message');
const userMessage = document.querySelector('#message');
const formMsgContainer = document.querySelector('.form-msg-container');

// Funktionen nedan skickas vidare till event-hanteraren och körs när besökaren klickar på knappen i formuläret.
const displayMessage = function (e) {
  e.preventDefault();

  // Ta bort eventuellt tidigare meddelande
  formMsgContainer.innerText = '';

  // Visa rutan för meddelanden om den är gömd
  if (formMsgContainer.classList.contains('hidden'))
    formMsgContainer.classList.remove('hidden');

  // Kontrollera om input-fältet tomt eller enbart innehåller blanksteg
  if (!userMessage.value.trim()) {
    formMsgContainer.innerText = 'Du måste ange ett meddelande';
    return;
  }
  formMsgContainer.innerText = userMessage.value;
};

// Lägger till event-listener på formulär-knappen
button.addEventListener('click', displayMessage);
