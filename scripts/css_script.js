'use strict';

const btn = document.querySelector('#btn');
const head = document.head;
let cssActive = true; // Som utgångspunkt finns det en länkad css-fil i head-taggen.

btn.addEventListener('click', (e) => {
  e.preventDefault();
  // Kontrollera om style-länken är aktiv
  if (cssActive) {
    // Ta bort länken från head-taggen
    const styleLink = document.querySelector('link[href="style.css"]');
    styleLink.outerHTML = '';
    // Ändra texten på knappen
    btn.innerText = 'Visa sidan med CSS igen';
    // Ändra status eftersom det inte längre finns någon länkad css-fil
    cssActive = false;
    return;
  }
  // När det inte finns någon länkad css-fil och användaren klickar på knappen
  // Skapa ett link-element
  const style = document.createElement('link');
  // Länka den externa css-filen
  style.setAttribute('rel', 'stylesheet');
  style.setAttribute('href', 'style.css');
  // Skapa link-elementet
  head.appendChild(style);
  // Ändra text på knappen
  btn.innerText = 'Utan CSS';
  // Ändra statusen eftersom det finns en länkad css-fil
  cssActive = true;
});
