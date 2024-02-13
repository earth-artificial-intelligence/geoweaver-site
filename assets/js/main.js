
const installIcon = document.getElementById('copy-install-text');

installIcon.addEventListener('click', () => {
  "use strict";
  const originalLogoSrc = installIcon.querySelector('img').src;
  const tickIcon = installIcon.getAttribute('data-image-url');

  installIcon.querySelector('img').src = tickIcon;
  navigator.clipboard.writeText('pip install pygeoweaver').then(() => {
    console.log('Text copied to clipboard');
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
  setTimeout(() => {
    installIcon.querySelector('img').src = originalLogoSrc;
  }, 3000);
});
