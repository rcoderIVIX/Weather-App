


async function getWeather(){



    let userCity = document.querySelector('#city')
    let userCountry = document.querySelector('#country')
    
    let userCityValue = userCity.value
    
    let userCountryValue = userCountry.value

let response = await fetch (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userCityValue}?unitGroup=metric&key=TBESL454L8UTL52Q4LGUYFX57&contentType=json`, {mode: 'cors'});

let weatherData = await response.json();

let precip = weatherData.currentConditions.precip;

let humidity = weatherData.currentConditions.humidity;

let wind = weatherData.currentConditions.windspeed;

let conditions = weatherData.currentConditions.conditions;

let temp = weatherData.currentConditions.temp

let desc = weatherData.description

let convertTemp = ((temp * 1.8) + 32)

let fButton = document.querySelector('#F')

let cButton = document.querySelector('#C')

let showTemp = document.querySelector('.temp')

let tempNumber = document.createElement('div')

tempNumber.textContent = `${temp}°C`

showTemp.appendChild(tempNumber)

fButton.addEventListener('click', ()=>{

tempNumber.textContent = `${Math.round(convertTemp * 100) / 100}°F`

})

if (fButton.checked){

    tempNumber.textContent = `${Math.round(convertTemp * 100) / 100}°F`
    
    }
else if (cButton.checked){

    tempNumber.textContent = `${temp}°C`
}

cButton.addEventListener('click', ()=>{

    tempNumber.textContent = `${temp}°C`
    
    })

let showCondition = document.querySelector('.condition')

let conditionIs = document.createElement('div')
conditionIs.textContent = `Weather Condition: ${conditions}`

showCondition.appendChild(conditionIs)

let showDesc = document.querySelector('.desc')

let descIs = document.createElement('div')
descIs.textContent = desc

showDesc.appendChild(descIs)

let showAdds = document.querySelector('.adds')

let precipIs = document.createElement('div')

let humidityIs = document.createElement('div')

let windspeedIs = document.createElement('div')

precipIs.textContent = `Precipitation: ${precip}%`

humidityIs.textContent = `Humidity: ${humidity}%`

windspeedIs.textContent = `Wind Speed: ${wind} KPH`

showAdds.appendChild(precipIs)
showAdds.appendChild(humidityIs)
showAdds.appendChild(windspeedIs)

let today = document.querySelector('.today')

today.textContent = `Today in: ${userCityValue}, ${userCountryValue}`




}


let btn = document.querySelector('.do')



btn.addEventListener('click', ()=>{


let todayNow = document.querySelector('.today')

let temp = document.querySelector('.temp')

let cond = document.querySelector('.condition')

let desc = document.querySelector('.desc')

let adds = document.querySelector('.adds')

todayNow.textContent = ''
temp.textContent = ''
cond.textContent = ''
desc.textContent = ''
adds.textContent = ''

getWeather();



})



