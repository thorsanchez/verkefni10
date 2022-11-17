import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

const button = document.querySelector("button");

button.addEventListener("click", ()=>{
    if(navigator.geolocation){
        button.innerText = "Allow to detect location";
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        button.innerText = "Your browser not support";
    }
});

function onSuccess(position){
    button.innerText = "Detecting your location...";
    let {latitude, longitude} = position.coords;
    let lastString = [5, "e", 7, "b", 2],
    reverseString = lastString.reverse().join(""),
    key = concatStrings + reverseString;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${key}`)
    .then(response => response.json()).then(response =>{
        let allDetails = response.results[0].components;
        console.table(allDetails);
        let {hamlet, road, county, city, country} = allDetails;
        if(road == undefined || road == "unnamed road"){
            road = hamlet;
        }
        if(city == undefined){
            city = county;
        }
        button.innerText = `${road}, ${city}, ${country}`;
        key = "";
    }).catch(()=>{
        button.innerText = "Something went wrong";
    });
}

function onError(error){
    if(error.code == 1){
        button.innerText = "You denied the request";
    }else if(error.code == 2){
        button.innerText = "Location is unavailable";
    }else{
        button.innerText = "Something went wrong";
    }
    button.setAttribute("disabled", "true");
}

let arr = ["8bb0d", "f341b6", "789774", "60a28", "846541e"],
joinArr = arr.join("").split("").reverse().join(""),
splitString = joinArr.split("76"),
concatStrings = splitString[0] + splitString[1];