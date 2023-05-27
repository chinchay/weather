import getInfo4App from "./weather.js"

async function display(){
    const city = document.querySelector("#idCity").value

    // location.reload()

    console.log(city)
    document.querySelector("#city").innerHTML = city
    
    const degSymbol = String.fromCharCode(176)

    const [currentTemp, nextHours, nextTemps, min, max, currentSymbol] = await getInfo4App(city)
    document.querySelector("#currentTemp").innerHTML = Math.ceil(currentTemp) + degSymbol
    document.querySelector("#min").innerHTML = "min: " + Math.ceil(min)
    document.querySelector("#max").innerHTML = "max: " + Math.ceil(max)
    document.querySelector("#currentSymbol").setAttribute("src", currentSymbol)
    // document.querySelector("#listHour").innerHTML = nextHours.join(" ")
    // document.querySelector("#listTemp").innerHTML = nextTemps.join(" ")

    const parent = document.querySelector("#outArray")
    parent.innerHTML = ""
    nextHours.forEach( (value, index) => {
        const html = `${value}<br/>${ Math.ceil(nextTemps[index]) + degSymbol }`
        const child = document.createElement("div")
        child.innerHTML = html
        parent.appendChild(child)

    });

}

const element = document.querySelector("#idSubmitCity")
element.addEventListener("click", () => display())


// display()
// document.querySelector("#city").innerHTML = "Lima"



