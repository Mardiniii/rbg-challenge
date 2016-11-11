// Generar colores de forma aleatoria
$('.option').each(function() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);

  var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  $(this).css('background-color', color);
});
