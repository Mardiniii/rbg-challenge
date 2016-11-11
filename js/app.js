// Define correct option
var correct = Math.floor(Math.random() * 2);

// Generates Random Colors
$('.option').each(function(index) {
  var color = generateColor();
  $(this).css('background-color', color);

  // Change answer copy
  if ( index == correct ) {
    $('.question').text(color);
  }
});

// Returns a number between 0 and 255
function random() {
  return Math.floor(Math.random() * 255);
}

// Returns a random rgb color string
function generateColor() {
  return 'rgb(' + random() + ', ' + random() + ', ' + random() + ')';
}
