var correct;
var score = 0;

// Initialize first game
game();

// Binding a click color to guess function
$('.option').on('click', guess);

function game() {
  // Define correct option
  correct = Math.floor(Math.random() * 2);

  // Generates Random Colors
  $('.option').each(function(index) {
    var color = generateColor();
    $(this).css('background-color', color);

    // Change answer copy
    if ( index == correct ) {
      $('.question').text(color);
    }
  });
}

function guess() {
  $(this).addClass('scale');
  var index = $('.option').index(this);

  // Verifies answer
  if ( index == correct ) {
    $('.result.won').show();
    score++;
  } else {
    $('.result.lost').show();
    score = 0;
  }
  $('.score span').text(score);

  game();
}

// Returns a number between 0 and 255
function random() {
  return Math.floor(Math.random() * 255);
}

// Returns a random rgb color string
function generateColor() {
  return 'rgb(' + random() + ', ' + random() + ', ' + random() + ')';
}
