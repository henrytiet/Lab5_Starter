// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const imageElement = document.querySelector('section#expose img');
  const soundElement = document.querySelector('audio');
  const volumeSlider = document.querySelector('#volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audioButton = document.querySelector('section#expose button');
  const hornSelect = document.querySelector('#horn-select');

  setupChooseHorn(hornSelect, imageElement, soundElement);
  setupVolume(volumeSlider, volumeIcon, soundElement);
  setupPlaySound(audioButton, soundElement, hornSelect);

  
}

function setupChooseHorn(hornSelect, imageElement, soundElement) {
  hornSelect.addEventListener('change', () => {
    switch(hornSelect.value) {
      case 'air-horn':
        imageElement.src = "assets/images/air-horn.svg"
        soundElement.src = "assets/audio/air-horn.mp3"
        break;
      case 'car-horn':
        imageElement.src = "assets/images/car-horn.svg"
        soundElement.src = "assets/audio/car-horn.mp3"
        break;
      case 'party-horn' :
        imageElement.src = "assets/images/party-horn.svg"
        soundElement.src = "assets/audio/party-horn.mp3"
        break;
    }
  });
}

function setupVolume(volumeSlider, volumeIcon, soundElement) {
  volumeSlider.addEventListener('change', () => {
    soundElement.volume=volumeSlider.value / 100;
    if(volumeSlider.value == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    }
    if(volumeSlider.value >= 1 && volumeSlider.value < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    }
    if(volumeSlider.value >= 33 && volumeSlider.value < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    }
    if(volumeSlider.value >= 67) {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });
}

function setupPlaySound(audioButton, soundElement, hornSelect) {
  audioButton.addEventListener('click', () => {
    if(hornSelect.value === "party-horn") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
    soundElement.play();
  });
}