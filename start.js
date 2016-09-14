$(window).load(function() {
  $("body").removeClass("preload");
});
//COUNTRIES
function verifyCountries(element, index, array) {
  debugger;
  if (document.getElementById('country_input').value == element.name) {
    document.getElementById('flag').style.backgroundImage = "url("+element.flag+")";
    document.getElementById('flag').style.opacity = "1";
  }
  else {
    document.getElementById('flag').style.opacity = "0";
  }
}
$(document).keyup(function (e) {
  if ($("#country_input:focus")) {
    countries.forEach(verifyCountries)
  }
 });
