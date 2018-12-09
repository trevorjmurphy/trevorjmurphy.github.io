$(document).ready(runStart);

function runStart() {
  $("#inputArea").hide();


  var loading = setInterval(loadingAnimation, 300);
  let index = 0;
  function loadingAnimation() { // Goes for 3900 Miliseconds
    let loadStrings = ['trevorjmurphy.github.io loading.',
                    'trevorjmurphy.github.io loading..',
                    'trevorjmurphy.github.io loading...'];
    loadTextForTime(loadStrings[index % 3], 300, "orange");
    index++;
    if ( index == 12 ) {
      clearInterval(loading);
    }
  }

  setTimeout(function() { // Goes for 1000 ms
    loadTextForTime("trevorjmurphy.github.io loaded!", 1000, "lime");
  }, 3900);

  setTimeout(function() {
    loadTextForTime("<mark>ERROR!</mark", 500, "black");
  }, 4900);

  setTimeout(function() {
    loadTextForTime("<mark>ERROR!</mark", 500, "black");
  }, 5900);

  setTimeout(function() {
    loadTextForTime("<mark>trevorjmurphy.github.io GUI unable to load. Launching command line interface...</mark>", 2500, "white");
  }, 6900);

  setTimeout(function() {
    IOPrint("trevorOS v0.1", "orange");
    IOPrint("Type HELP for commands", "orange");
    IOReady();
  }, 9400);

}

function loadTextForTime(text, time, color) {
  let textObject = $("<p style='color: " + color + "'>" + text + "</p>");
  $('#console').append(textObject);
  setTimeout(function() {
    textObject.remove();
  }, time);
}

function IOReady() {
  $('#inputArea').show();
  $('#userInput').focus();
  $('#userInput').on('blur',function () {
    var userInput = $(this);
    setTimeout(function() {
        userInput.focus()
    }, 10);
  });
  $('#userInput').keypress(function(event){
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){
        IOPrint("> <em>" + $(this).val() + "</em>", "lime");
        $(this).val("");
      }
  });
}


function IOPrint(text) {
  $('#console').append('<p>' + text + '</p>');
  $('#console').scrollTop($('#console')[0].scrollHeight);
}

function IOPrint(text, color) {
  $("#console").append('<p style="color: ' + color + '">' + text + '</p>');
  $('#console').scrollTop($('#console')[0].scrollHeight);
}
