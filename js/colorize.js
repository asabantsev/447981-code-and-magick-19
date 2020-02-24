'use strict';

(function () {
  window.colorize = function (element, input, colors) {
    element.addEventListener('click', function () {
      var color = colors[Math.floor(colors.length * Math.random())];
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
        input.value = color;
      } else {
        element.style.fill = color;
        input.value = color;
      }
    });
  };
})();
