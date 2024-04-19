
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

const copyGetStarted = document.getElementById('copy-get-started-text');

copyGetStarted.addEventListener('click', () => {
  "use strict";
  const originalLogoSrc = installIcon.querySelector('img').src;
  const tickIcon = installIcon.getAttribute('data-image-url');

  copyGetStarted.querySelector('img').src = tickIcon;
  navigator.clipboard.writeText('gw start').then(() => {
    console.log('Text copied to clipboard');
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
  setTimeout(() => {
    copyGetStarted.querySelector('img').src = originalLogoSrc;
  }, 3000);
});


// setup for tracking downloads across different platforms
function trackDownload(eventCategory, eventLabel) {
  gtag('event', 'Downloads', {
    'event_category': eventCategory,
    'event_label': eventLabel
  });
}
