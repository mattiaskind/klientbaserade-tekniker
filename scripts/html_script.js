const button = document.querySelector('.btn-message');
const userMessage = document.querySelector('#message');
const formMsgContainer = document.querySelector('.form-msg-container');

// funktionen sanitizeString är hämtad från stackoverflow
// regex-funktionen tar bort otillåtna tecken.
const sanitizeString = function (str) {
  str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, '');
  return str.trim();
};

// Funktionen skickas vidare till event-hanteraren och körs när besökaren
// klickar på knappen i formuläret.
const displayMessage = function (e) {
  e.preventDefault();

  // Ta bort eventuellt tidigare meddelande
  formMsgContainer.innerHTML = '';

  // Visa rutan för meddelanden om den är gömd
  if (formMsgContainer.classList.contains('hidden'))
    formMsgContainer.classList.remove('hidden');

  // Kontrollera om input-fältet tomt eller enbart innehåller blanksteg
  if (!userMessage.value.trim()) {
    const html = `<p>Du måste ange ett meddelande.</p>`;
    formMsgContainer.insertAdjacentHTML('afterbegin', html);
    return;
  }

  // Ta bort eventuella förbjudna tecken
  const sanitizedMessage = sanitizeString(userMessage.value);
  // Skapa html
  const html = `
  <h5>Tack för ditt meddelande</h5>
  <p>Du skrev: ${sanitizedMessage}</p>
  `;
  // Visa html och meddelandet på sidan
  formMsgContainer.insertAdjacentHTML('afterbegin', html);
};

button.addEventListener('click', displayMessage);
