'use strict';

(function () {
  var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALLCOLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_NUMBERS = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

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

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARD_NUMBERS; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    window.dialog.userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var form = window.dialog.userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      window.dialog.closeDialog();
    });

    evt.preventDefault();
  });

  window.backend.load(successHandler, errorHandler);
})();
