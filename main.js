
$(document).ready(function(){
  initialGrid ();
  randomColor ();
  resize ();
});

// allow user to reset grid
var reset = $('#reset').click(function(){
    $('.box').css('background-color', '#1f1f1f');
})

// grid on page load
function initialGrid() {
  for (var i = 0; i < 30; i++) {
    for (var j = 0; j < 30; j++) {
        $('.container-box').append('<div class="box"></div>');
      }
    }
  initialColor();
}

// hover color on page load
function initialColor () {
    $('.box').mouseover(function(){
    $(this).css('background-color', '#fff');
  })
}

// allow user to change color - randomize
function randomColor() {
  $('#colors').click(function(){
  reset;
  $('.box').mouseover(function(){
    $(this).css('background-color', '#' + Math.floor(Math.random()*16777215).toString(16));
  })
})
}

// allow user to resize the grid
function resize (){
  $('#resize').click(function(){
      $('.container-box').empty();
      response = prompt('Pick a number: 1-70', 50);
      // if user cancels the prompt, initial grid function will fire
      if (response) {
          var size = 600/response + 'px';
          for (var i = 0; i < response; i++) {
            for (var j = 0; j < response; j++) {
              $('.container-box').append('<div class="box" style="height:' + size + '; width:' + size + '"></div>');
            }
          }
          initialColor();
      } else {
        	initialGrid();
      }
  })
}
