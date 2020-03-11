'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');

  var onDialogEcsPress = function (evt) {
    window.util.isEscEvent(evt, closeDialog);
  };

  var openDialog = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onDialogEcsPress);
  };

  var closeDialog = function () {
    userDialog.classList.add('hidden');
    userDialog.removeAttribute('style');
    document.removeEventListener('keydown', onDialogEcsPress);
  };

  userDialogOpen.addEventListener('click', function () {
    openDialog();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openDialog);
  });

  userDialogClose.addEventListener('click', function () {
    closeDialog();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closeDialog);
  });

  window.dialog = {
    userDialog: userDialog,
    closeDialog: closeDialog
  };

})();
