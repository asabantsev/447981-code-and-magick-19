'use strict';

(function () {
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_HEIGHT = 270;
  var CLOUD_WEIGHT = 420;
  var CLOUD_GAP = 10;
  var COLUMN_HEIGHT = 150;
  var COLUMN_WEIGHT = 40;
  var COLUMN_GAP = 50;
  var COLUMN_PADDING_X = 140;
  var COLUMN_PADDING_Y = 90;
  var TEXT_GAP = 10;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WEIGHT, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var randomInteger = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  };

  var getColor = function (name) {
    return name === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(2, 14, 134, 0.' + randomInteger(1, 10) + ')';
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.fillText('Ура вы победили!', CLOUD_X + (CLOUD_GAP * 2), CLOUD_Y + (CLOUD_GAP * 3));
    ctx.fillText('Список результатов: ', CLOUD_X + (CLOUD_GAP * 2), CLOUD_Y + (CLOUD_GAP * 5));

    for (var i = 0; i < names.length; i++) {
      var maxTime = getMaxElement(times);
      var barHeight = (times[i] * COLUMN_HEIGHT) / maxTime;
      var barX = COLUMN_PADDING_X + (COLUMN_GAP + COLUMN_WEIGHT) * i;
      var barY = COLUMN_PADDING_Y + COLUMN_HEIGHT;

      ctx.fillStyle = '#000';
      ctx.fillText(Math.round(times[i]), barX, barY - TEXT_GAP - barHeight);
      ctx.fillText(names[i], barX, barY + (TEXT_GAP * 2));
      ctx.fillStyle = getColor(names[i]);
      ctx.fillRect(barX, barY - barHeight, COLUMN_WEIGHT, barHeight);
    }
  };
})();
