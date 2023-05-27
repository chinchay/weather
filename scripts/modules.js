import getInfo4App from "./weather.js"

async function display(){
    const city = document.querySelector("#idCity").value
    console.log(city)
    document.querySelector("#city").innerHTML = city
    
    const [currentTemp, nextHours, nextTemps, min, max, currentSymbol] = await getInfo4App()
    document.querySelector("#currentTemp").innerHTML = currentTemp
    document.querySelector("#min").innerHTML = min
    document.querySelector("#max").innerHTML = max
    document.querySelector("#currentSymbol").setAttribute("src", currentSymbol)
    document.querySelector("#listHour").innerHTML = nextHours
    document.querySelector("#listTemp").innerHTML = nextTemps

}

const element = document.querySelector("#idSubmitCity")
element.addEventListener("click", () => display())



