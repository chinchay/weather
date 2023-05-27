async function getJSON(){
    const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
    // const response = await fetch(url)
    // const jsonData = await response.json()
    // console.log(jsonData)
    
    
    const stringJson= '{"latitude":52.52,"longitude":13.419998,"generationtime_ms":0.2180337905883789,"utc_offset_seconds":0,"timezone":"GMT","timezone_abbreviation":"GMT","elevation":38.0,"current_weather":{"temperature":20.6,"windspeed":7.9,"winddirection":74.0,"weathercode":0,"is_day":1,"time":"2023-05-27T15:00"},"hourly_units":{"time":"iso8601","temperature_2m":"°C","relativehumidity_2m":"%","windspeed_10m":"km/h"},"hourly":{"time":["2023-05-27T00:00","2023-05-27T01:00","2023-05-27T02:00","2023-05-27T03:00","2023-05-27T04:00","2023-05-27T05:00","2023-05-27T06:00","2023-05-27T07:00","2023-05-27T08:00","2023-05-27T09:00","2023-05-27T10:00","2023-05-27T11:00","2023-05-27T12:00","2023-05-27T13:00","2023-05-27T14:00","2023-05-27T15:00","2023-05-27T16:00","2023-05-27T17:00","2023-05-27T18:00","2023-05-27T19:00","2023-05-27T20:00","2023-05-27T21:00","2023-05-27T22:00","2023-05-27T23:00","2023-05-28T00:00","2023-05-28T01:00","2023-05-28T02:00","2023-05-28T03:00","2023-05-28T04:00","2023-05-28T05:00","2023-05-28T06:00","2023-05-28T07:00","2023-05-28T08:00","2023-05-28T09:00","2023-05-28T10:00","2023-05-28T11:00","2023-05-28T12:00","2023-05-28T13:00","2023-05-28T14:00","2023-05-28T15:00","2023-05-28T16:00","2023-05-28T17:00","2023-05-28T18:00","2023-05-28T19:00","2023-05-28T20:00","2023-05-28T21:00","2023-05-28T22:00","2023-05-28T23:00","2023-05-29T00:00","2023-05-29T01:00","2023-05-29T02:00","2023-05-29T03:00","2023-05-29T04:00","2023-05-29T05:00","2023-05-29T06:00","2023-05-29T07:00","2023-05-29T08:00","2023-05-29T09:00","2023-05-29T10:00","2023-05-29T11:00","2023-05-29T12:00","2023-05-29T13:00","2023-05-29T14:00","2023-05-29T15:00","2023-05-29T16:00","2023-05-29T17:00","2023-05-29T18:00","2023-05-29T19:00","2023-05-29T20:00","2023-05-29T21:00","2023-05-29T22:00","2023-05-29T23:00","2023-05-30T00:00","2023-05-30T01:00","2023-05-30T02:00","2023-05-30T03:00","2023-05-30T04:00","2023-05-30T05:00","2023-05-30T06:00","2023-05-30T07:00","2023-05-30T08:00","2023-05-30T09:00","2023-05-30T10:00","2023-05-30T11:00","2023-05-30T12:00","2023-05-30T13:00","2023-05-30T14:00","2023-05-30T15:00","2023-05-30T16:00","2023-05-30T17:00","2023-05-30T18:00","2023-05-30T19:00","2023-05-30T20:00","2023-05-30T21:00","2023-05-30T22:00","2023-05-30T23:00","2023-05-31T00:00","2023-05-31T01:00","2023-05-31T02:00","2023-05-31T03:00","2023-05-31T04:00","2023-05-31T05:00","2023-05-31T06:00","2023-05-31T07:00","2023-05-31T08:00","2023-05-31T09:00","2023-05-31T10:00","2023-05-31T11:00","2023-05-31T12:00","2023-05-31T13:00","2023-05-31T14:00","2023-05-31T15:00","2023-05-31T16:00","2023-05-31T17:00","2023-05-31T18:00","2023-05-31T19:00","2023-05-31T20:00","2023-05-31T21:00","2023-05-31T22:00","2023-05-31T23:00","2023-06-01T00:00","2023-06-01T01:00","2023-06-01T02:00","2023-06-01T03:00","2023-06-01T04:00","2023-06-01T05:00","2023-06-01T06:00","2023-06-01T07:00","2023-06-01T08:00","2023-06-01T09:00","2023-06-01T10:00","2023-06-01T11:00","2023-06-01T12:00","2023-06-01T13:00","2023-06-01T14:00","2023-06-01T15:00","2023-06-01T16:00","2023-06-01T17:00","2023-06-01T18:00","2023-06-01T19:00","2023-06-01T20:00","2023-06-01T21:00","2023-06-01T22:00","2023-06-01T23:00","2023-06-02T00:00","2023-06-02T01:00","2023-06-02T02:00","2023-06-02T03:00","2023-06-02T04:00","2023-06-02T05:00","2023-06-02T06:00","2023-06-02T07:00","2023-06-02T08:00","2023-06-02T09:00","2023-06-02T10:00","2023-06-02T11:00","2023-06-02T12:00","2023-06-02T13:00","2023-06-02T14:00","2023-06-02T15:00","2023-06-02T16:00","2023-06-02T17:00","2023-06-02T18:00","2023-06-02T19:00","2023-06-02T20:00","2023-06-02T21:00","2023-06-02T22:00","2023-06-02T23:00"],"temperature_2m":[9.4,8.8,8.1,7.1,7.0,8.2,10.9,13.3,15.1,17.1,18.3,19.3,20.2,20.4,20.7,20.6,20.4,20.0,19.3,17.6,15.9,14.6,13.6,12.6,11.9,11.3,10.9,10.4,10.2,11.5,13.8,16.3,18.5,19.9,21.0,21.9,22.6,22.8,23.2,23.3,23.3,22.5,21.7,20.0,16.8,15.2,13.8,12.8,12.1,11.5,11.4,11.3,11.3,12.2,13.6,15.3,17.1,18.2,19.3,20.2,20.4,20.0,20.1,20.1,19.7,19.1,18.4,17.2,15.4,13.5,12.4,11.6,11.0,10.2,9.5,9.0,9.0,10.3,12.3,14.4,16.3,17.9,19.2,20.2,21.0,21.5,21.8,21.9,21.7,21.3,20.4,18.9,16.9,15.3,14.2,13.4,12.7,12.0,11.4,11.3,11.9,13.0,14.4,16.3,18.5,20.3,21.6,22.6,23.3,23.8,24.1,24.1,23.7,23.0,22.0,20.4,18.5,16.9,16.0,15.3,14.8,14.0,13.4,13.2,14.0,15.3,16.3,19.0,21.4,23.5,24.9,26.0,26.8,27.4,27.7,27.8,27.6,27.0,26.0,24.2,22.0,20.0,18.5,17.4,16.3,15.1,14.1,13.5,13.3,13.6,14.3,15.8,17.7,19.5,20.9,22.2,23.2,23.8,24.1,24.2,24.1,23.8,23.0,21.4,19.2,17.3,15.8,14.5],"relativehumidity_2m":[78,80,81,85,85,78,72,59,48,32,30,31,29,26,29,27,27,32,35,40,49,53,56,61,64,66,67,67,66,62,52,45,37,32,31,30,31,29,28,32,31,32,33,41,55,59,60,63,66,69,70,72,72,69,67,61,53,48,41,38,36,37,36,34,37,37,39,43,52,51,53,56,56,60,64,67,68,64,59,53,47,43,37,33,30,29,29,29,29,30,32,37,42,48,53,57,60,63,64,65,64,62,58,52,46,40,37,35,33,28,23,20,21,24,28,35,43,49,52,52,53,54,56,56,54,51,49,45,39,33,30,27,26,25,25,26,27,29,32,37,43,48,51,54,57,62,68,72,75,77,76,71,62,54,46,39,34,33,34,36,37,38,42,50,60,68,73,77],"windspeed_10m":[5.1,4.7,4.7,4.3,4.0,3.6,4.4,3.9,4.1,4.5,6.6,5.6,8.1,8.4,8.6,7.9,5.2,9.8,7.2,5.5,4.7,5.4,5.4,5.6,5.4,4.3,3.4,3.6,3.6,2.9,3.7,3.5,2.3,3.3,4.6,6.3,4.7,9.7,6.2,4.2,9.4,5.1,8.9,5.0,14.5,13.2,11.0,9.4,7.8,7.3,5.9,5.7,7.6,7.4,8.6,7.8,8.6,8.7,10.4,8.6,10.0,9.2,9.1,9.1,9.7,9.0,9.0,7.7,7.6,8.2,6.1,5.1,3.7,4.0,4.0,4.0,4.0,4.3,5.4,6.8,7.6,8.8,9.4,9.8,10.2,10.7,11.3,11.4,10.8,10.2,9.6,9.3,9.4,9.7,8.9,7.6,6.9,6.5,6.3,6.1,6.2,6.4,6.6,7.3,8.0,8.8,9.4,10.0,10.5,10.8,10.6,10.5,9.8,9.0,8.1,6.6,5.0,3.9,3.2,2.9,2.9,2.5,2.4,2.3,1.5,0.5,0.4,2.1,3.0,4.0,4.7,5.4,6.2,7.0,8.0,8.6,8.5,8.0,7.4,6.5,5.7,5.4,4.7,3.4,3.3,3.6,4.5,5.2,6.0,7.2,8.0,8.9,9.6,10.3,10.6,10.9,11.1,10.9,10.5,9.8,9.4,9.1,9.0,9.0,9.8,9.6,8.6,6.8]}}'
    const dic = JSON.parse(stringJson)
    // console.log(dic)

    return dic
}

function getCurrentTemperature(dic){
    return dic["current_weather"]["temperature"]
}

function getCurrentCode(dic){
    return dic["current_weather"]["weathercode"]
}

function getListHour(dic){
    return dic["hourly"]["time"]
}

function getListTemp(dic){
    return dic["hourly"]["temperature_2m"]
}

function getSum(arr){
    let sum = 0
    arr.forEach(element => {
        sum += element
    })
    return sum
}

function getAvg(arr){
    const sum = getSum(arr)
    const n = arr.lenght
    return sum / n
}

function getMin(arr){
    var min = arr[0]
    arr.forEach(element => {
        if (element < min){
            min = element
        }
    });
    return min
}

function getMax(arr){
    var max = arr[0]
    arr.forEach(element => {
        if (max < element){
            max = element
        }
    });
    return max
}

function getWeatherCodeDic(){
    const sun = "/images/sun.svg"
    const sunCloud = "/images/sun_cloud.svg"
    const rain = "/images/rain.svg"
    const snow = "/images/snow.svg"
    const thunderstorm = "/images/thunderstorm.svg"
    const snow_rain = "/images/snow_rain.svg"
    const fog = "/images/fog.svg"

    var weatherCodeDic = {}
    
    // https://www.jodc.go.jp/data_format/weather-code.html
    weatherCodeDic["0"] = sun      // Clear(No cloud at any level)
    weatherCodeDic["1"] = sunCloud // Partly cloudy(Scattered or broken)
    weatherCodeDic["2"] = sunCloud // Continuous layer(s) of blowing snow
    weatherCodeDic["3"] = thunderstorm // Sandstorm, duststorm, or blowing snow
    weatherCodeDic["4"] = fog // Fog, thick dust or haze
    weatherCodeDic["5"] = rain // Drizzle
    weatherCodeDic["6"] = rain // Rain
    weatherCodeDic["7"] = snow_rain // Snow, or rain and snow mixed
    weatherCodeDic["8"] = rain // Shower(s)
    weatherCodeDic["9"] = thunderstorm // Thunderstorm(s)

    return weatherCodeDic
}

function getCurrentHour(){
    const date = new Date()
    const hour = date.getHours()
    return hour
}

function getNextHoursTemps(listHour, listTemp){
    const currentDate = new Date()

    const nextHours = []
    const nextTemps = []

    const maxNumberHours = 6
    let count = 0
    listHour.forEach((element, index) => {
        const date = new Date(element)
        
        if (date > currentDate){
            if (count < maxNumberHours){
                const localHour = date.toLocaleTimeString( [], { hour: 'numeric', hour12: false} )
                var nextH = parseInt(localHour)
                nextHours.push(nextH)
                nextTemps.push(listTemp[index])
            }
            count +=  1
            // console.log(count)
        }
    }); 

    return [nextHours, nextTemps]
}

async function getInfo4App(){
    const dic = await getJSON()
    const currentTemp = getCurrentTemperature(dic)
    const currentCode  = getCurrentCode(dic)
    const listHour = getListHour(dic)
    const listTemp = getListTemp(dic)
    const [nextHours, nextTemps]  = getNextHoursTemps(listHour, listTemp)
    const min = getMin(listTemp)
    const max = getMax(listTemp)
    const codeDic = getWeatherCodeDic()
    const currentSymbol = codeDic[currentCode]

    return [currentTemp, nextHours, nextTemps, min, max, currentSymbol]
}

// const [currentTemp, listHour, listTemp, min, max, currentSymbol] = getInfo4App()

export default getInfo4App


