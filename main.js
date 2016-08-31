
$(window).keypress(function (e) {
  if (e.keyCode === 39) {
    $( "#cNote" ).click();
  }
  else if (e.keyCode === 49) {
    $( "#csNote" ).click();
  }
  else if (e.keyCode === 50) {
    $( "#dNote" ).click();
  }
  else if (e.keyCode === 51) {
    $( "#dsNote" ).click();
  }
  else if (e.keyCode === 52) {
    $( "#eNote" ).click();
  }
  else if (e.keyCode === 53) {
    $( "#fNote" ).click();
  }
  else if (e.keyCode === 54) {
    $( "#fsNote" ).click();
  }
  else if (e.keyCode === 55) {
    $( "#gNote" ).click();
  }
  else if (e.keyCode === 56) {
    $( "#gsNote" ).click();
  }
  else if (e.keyCode === 57) {
    $( "#aNote" ).click();
  }
  else if (e.keyCode === 48) {
    $( "#asNote" ).click();
  }
  else if (e.keyCode === 45) {
    $( "#bNote" ).click();
  }
  else if (e.keyCode === 61) {
    $( "#c2Note" ).click();
  }
  else if (e.keyCode === 113) {
    $( "#stop" ).click();
  }
});
var baseAudio = new AudioContext();
var osc = baseAudio.createOscillator();
var gainNode = baseAudio.createGain();
osc.connect(baseAudio.destination)
gainNode.connect(baseAudio.destination);
osc.connect(gainNode)
gainNode.gain.value = 0.2;
osc.frequency.value = 0;

osc.start(0);
$('.note_box__btn').click(function() {
  if (document.getElementsByClassName('pressed')) {
    $(document.getElementsByClassName('pressed')).removeClass('pressed');
  }
  osc.frequency.value = $(this).attr('value');
  $(this).addClass('pressed');
});
