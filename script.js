function opennav(){
    document.getElementById("navbar-mobile").style.width = "250px";
    document.getElementById("navbar-open").style.display = "none";
    document.getElementById("navbar-close").style.display = "block";
}

function closenav(){
    document.getElementById("navbar-mobile").style.width = "0px";
    document.getElementById("navbar-open").style.display = "block";
    document.getElementById("navbar-close").style.display = "none";
}

var page = $("html, body");
var animationDuration = 1000;
$(".navbar-btn").click(function() {
    page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, animationDuration);
    return false;
});

let description = undefined;

function opendescription(descriptionNum) {
  if (description != undefined) {
    document.getElementById(description).style.display = "none";
    document.getElementById(logos).style.filter = "grayscale(100%)"; 
  }
  description = `description${descriptionNum}`;
  logos = `img-logos${descriptionNum}`;
  document.getElementById(description).style.display = "flex";
  document.getElementById(logos).style.filter = "grayscale(0%)"; 
  document.getElementById("description-off").style.display = "none";
}