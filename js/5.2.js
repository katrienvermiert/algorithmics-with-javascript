// Exercise 5.2
const readlineSync = require('readline-sync');
let TvSerie = {
    "Name": "",
    "Productionyear": "", 
    "Cast": []  
    } 

let answer = true;

function askTvSerie(){
    TvSerie.Name = readlineSync.question("What is your favorite Tv serie?: "),
    TvSerie.Productionyear = readlineSync.question("Which year was it produced?: ")
   
    let i = 0;

    while ((answer === true)){
        TvSerie.Cast.push(readlineSync.question("Who plays in this Tv serie?: "));

        console.log(TvSerie.Cast[i]);
        if (TvSerie.Cast[i] !== ""){
            i++;
            answer = true;
        } else {
            TvSerie.Cast.splice(i,1);
            answer = false;
        }
    }
    
    return TvSerie
}

function randomizeCast(array){
    let currentIndex = array.length, temporaryValue, randomIndex;

    while(0 !== currentIndex) {
        randomIndex = (Math.floor(Math.random() * currentIndex));
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array
}



function call(){
    console.log(askTvSerie(TvSerie));
    randomizeCast(TvSerie.Cast);
    console.log(askTvSerie(TvSerie))
}

call();
