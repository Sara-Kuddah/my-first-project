
let zones = document.querySelectorAll('.zone');



let randomZones = [1, 2, 3, 4].sort((a, b) => {

    return Math.random() - 0.5;

})



console.log(randomZones)



function clickEvent() {

    let count = 0

    if (this.id === `zone-${randomZones[0]}`) {

        console.log(this)

        this.classList += ' green';

        this.removeEventListener("mouseleave", leaveEvent)

        this.removeEventListener("mouseover", hoverEvent)

        randomZones.shift();

        console.log(randomZones)

    }

    

    for (let i = 0; i < zones.length; i++) {

        if (zones[i].classList.value.includes("green")) {

          count++;

        }

      }



    if (count === 4) {

        console.log("congrats")

    }

}



function hoverEvent() {

    if (this.id === `zone-${randomZones[0]}` || this.id === `zone-${randomZones[0]+1}` || this.id === `zone-${randomZones[0]-1}`) {

        this.classList += ' green';

    } else {

        this.classList += ' red';

    }

}



function leaveEvent() {

    this.classList = 'zone';

}





for (let i = 0; i < zones.length; i++) {

    zones[i].addEventListener("click", clickEvent);

    zones[i].addEventListener("mouseover", hoverEvent);

    zones[i].addEventListener("mouseleave", leaveEvent);

}
