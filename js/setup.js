'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALLCOLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_NUMBERS = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var createWizardsArray = function (length) {
    for (var i = 0, array = []; i <= length; i++) {
      array.push({
        name: WIZARD_NAMES[Math.floor(WIZARD_NAMES.length * Math.random())],
        surname: WIZARD_SURNAMES[Math.floor(WIZARD_SURNAMES.length * Math.random())],
        coatColor: WIZARD_COATCOLORS[Math.floor(WIZARD_COATCOLORS.length * Math.random())],
        eyeColor: WIZARD_EYESCOLORS[Math.floor(WIZARD_COATCOLORS.length * Math.random())]
      });
    }
    return array;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  var wizards = createWizardsArray(WIZARD_NUMBERS - 1);
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  var bigWizard = document.querySelector('.setup-player');
  var wizardCoat = bigWizard.querySelector('.wizard-coat');
  var wizardEyes = bigWizard.querySelector('.wizard-eyes');
  var wizardInputCoat = bigWizard.querySelector('input[name="coat-color"]');
  var wizardInputEyes = bigWizard.querySelector('input[name="eyes-color"]');
  var wizardFireballWrap = document.querySelector('.setup-fireball-wrap');
  var wizardInputFireball = wizardFireballWrap.querySelector('input[name="fireball-color"]');

  window.colorize(wizardCoat, wizardInputCoat, WIZARD_COATCOLORS);
  window.colorize(wizardEyes, wizardInputEyes, WIZARD_EYESCOLORS);
  window.colorize(wizardFireballWrap, wizardInputFireball, WIZARD_FIREBALLCOLORS);
})();
