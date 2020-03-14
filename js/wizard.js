'use strict';

(function () {
  var COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALLCOLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  var bigWizard = document.querySelector('.setup-player');

  var wizardCoat = bigWizard.querySelector('.wizard-coat');
  var wizardInputCoat = bigWizard.querySelector('input[name="coat-color"]');
  wizardCoat.addEventListener('click', function () {
    var newColor = getRandomElement(COATCOLORS);
    wizardCoat.style.fill = newColor;
    wizardInputCoat.value = newColor;
    wizard.onCoatChange(newColor);
  });

  var wizardEyes = bigWizard.querySelector('.wizard-eyes');
  var wizardInputEyes = bigWizard.querySelector('input[name="eyes-color"]');
  wizardEyes.addEventListener('click', function () {
    var newColor = getRandomElement(EYESCOLORS);
    wizardEyes.style.fill = newColor;
    wizardInputEyes.value = newColor;
    wizard.onEyesChange(newColor);
  });

  var wizardFireballWrap = document.querySelector('.setup-fireball-wrap');
  var wizardInputFireball = wizardFireballWrap.querySelector('input[name="fireball-color"]');
  window.colorize(wizardFireballWrap, wizardInputFireball, FIREBALLCOLORS);

  window.wizard = wizard;
})();
