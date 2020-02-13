'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_NUMBERS = 4;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var randomInteger = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

var createWizardsArray = function (length) {
  for (var i = 0, array = []; i <= length; i++) {
    array.push({
      name: WIZARD_NAMES[randomInteger(0, WIZARD_NAMES.length)],
      surname: WIZARD_SURNAMES[randomInteger(0, WIZARD_SURNAMES.length)],
      coatColor: WIZARD_COATCOLORS[randomInteger(0, WIZARD_COATCOLORS.length)],
      eyeColor: WIZARD_EYESCOLORS[randomInteger(0, WIZARD_COATCOLORS.length)]
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


// Открытие/закрытие окна настройки персонажа
var userDialog = document.querySelector('.setup');
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');

var onDialogEcsPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closeDialog();
  }
};

var openDialog = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onDialogEcsPress);
};

var closeDialog = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onDialogEcsPress);
};

userDialogOpen.addEventListener('click', function () {
  openDialog();
});

userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openDialog();
  }
});

userDialogClose.addEventListener('click', function () {
  closeDialog();
});

userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closeDialog();
  }
});

// Изменение цвета мантии, глаз и фаерболов персонажа по нажатию
var bigWizard = document.querySelector('.setup-wizard');
var wizardCoat = bigWizard.querySelector('.wizard-coat');
var wizardEyes = bigWizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball');
var wizardAppearance = document.querySelector('.setup-wizard-appearance');

wizardCoat.addEventListener('click', function () {
  bigWizard.querySelector('.wizard-coat').style.fill = WIZARD_COATCOLORS[randomInteger(0, WIZARD_COATCOLORS.length)];
  wizardAppearance.querySelector('input[name="coat-color"]').value = WIZARD_COATCOLORS[randomInteger(0, WIZARD_COATCOLORS.length)];
});

wizardEyes.addEventListener('click', function () {
  bigWizard.querySelector('.wizard-eyes').style.fill = WIZARD_EYESCOLORS[randomInteger(0, WIZARD_EYESCOLORS.length)];
  wizardAppearance.querySelector('input[name="eyes-color"]').value = WIZARD_EYESCOLORS[randomInteger(0, WIZARD_EYESCOLORS.length)];
});

wizardFireball.addEventListener('click', function () {
  document.querySelector('.setup-fireball-wrap').style.background = WIZARD_FIREBALL_COLORS[randomInteger(0, WIZARD_FIREBALL_COLORS.length)];
  document.querySelector('input[name="fireball-color"]').value = WIZARD_FIREBALL_COLORS[randomInteger(0, WIZARD_FIREBALL_COLORS.length)];
});
