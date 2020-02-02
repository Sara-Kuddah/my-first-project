console.log("starter1.js linked");

let zones = document.querySelectorAll(".zone");



function clickEvent() {

  let count = 0;

  this.classList += " green";

  this.removeEventListener("mouseleave", leaveEvent);



  for (let i = 0; i < zones.length; i++) {

    if (zones[i].classList.value.includes("green")) {

      count++;

    }

  }

  if (count === 4) {

    console.log("congrats");

  }

}



function hoverEvent() {

  this.classList += " green";

}



function leaveEvent() {

  this.classList = "zone";

}



for (let i = 0; i < zones.length; i++) {

  zones[i].addEventListener("click", clickEvent);

  zones[i].addEventListener("mouseover", hoverEvent);

  zones[i].addEventListener("mouseleave", leaveEvent);

}