//PIANO
$(function() {
  octaves.forEach(callNotes);
});
function callNotes(octave, index, array) {
  if (octave.active) {
    octave.notes.forEach(printKeys);
  }
};
function printKeys(note, index, array) {
  var isSharp = ((note.sharp) ? " sharp" : "");
  document.getElementById('board').innerHTML += "<li onClick='keyClick(this)' class='note_box__btn basic"+ isSharp+
                                                "' value='"+note.frequency+
                                                "' id='"+note.key+
                                                "'><span class='note_box__btn__text'>"+note.label+"<br>("+note.key+
                                                ")</span></li>";
};
$(window).keypress(function (e) {
  function simulateClick(element, index, array) {
    if (String.fromCharCode(e.keyCode) === element.getAttribute('id')) {
      $(element).click();
    }
  };
  btnCollection = document.getElementsByClassName('note_box__btn');
  var btns = Array.from(btnCollection);
  btns.forEach(simulateClick);
});
var baseAudio = new AudioContext();
var osc = baseAudio.createOscillator();
var osc2 = baseAudio.createOscillator();
var gainNode = baseAudio.createGain();
osc.connect(baseAudio.destination)
osc2.connect(baseAudio.destination)
gainNode.connect(baseAudio.destination);
osc.connect(gainNode);
gainNode.gain.value = 0.2;
osc.frequency.value = 0;
osc.start(0);


function keyClick(element) {
  //press animation
  if (document.getElementsByClassName('pressed')) {
    $(document.getElementsByClassName('pressed')).removeClass('pressed');
  }
  $(element).addClass('pressed');

  //set frequency
  if ($('#select option:selected').attr('value') == "jump") {
    gainNode.gain.value = -1;
    setTimeout(function(){
      osc.frequency.value = parseInt(element.getAttribute('value'));
      gainNode.gain.value = 0.2;
    }, 30);
  }
  else {
    debugger;
    osc.frequency.value = parseInt(element.getAttribute('value'));
  }
};
