var sound = new Audio("audio/found_it.mp3");

var playSound = function() {
  sound.play();
};



onload = function() {


    var textInput = document.getElementById('ScannerInput');
    textInput.focus();
    textInput.select();
    // Init a timeout variable to be used below
    var timefired = null;

    // Listen for keystroke events
    // Init a timeout variable to be used below
    var timefired = null;// Listen for keystroke events
    textInput.onkeyup = function (event) {
    clearTimeout(timefired);
    timefired = setTimeout(function () {
        //textdata.innerHTML = 'Input Value:'+ textInput.value;
        if (textInput.value) {
            playSound(false);
            window.open(textInput.value, '_blank', 'toolbar=0,location=0,menubar=0');
        }
        textInput.value = "";
        textInput.focus();
        textInput.select();
      }, 600);
    };

}
