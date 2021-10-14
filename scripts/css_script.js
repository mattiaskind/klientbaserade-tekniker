const btn = document.querySelector('#btn');
const head = document.head;
let cssActive = true;

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (cssActive) {
    const styleLink = document.querySelector('link[href="style.css"]');
    styleLink.outerHTML = '';
    btn.innerText = 'Visa sidan med CSS igen';
    cssActive = false;
    return;
  }
  const style = document.createElement('link');
  style.setAttribute('rel', 'stylesheet');
  style.setAttribute('href', 'style.css');
  head.appendChild(style);
  btn.innerText = 'Utan CSS';
  cssActive = true;
});
