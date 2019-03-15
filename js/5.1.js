// Exercise 5.1
const readlineSync = require('readline-sync');

function askTvSerie(){
    let TvSerie = {
    "Name": readlineSync.question('Name your TV serie: '),
    "Productionyear": readlineSync.question('Enter the production year: '),
    "Cast": readlineSync.question('Name some castmembers: ')   
    }
    return TvSerie
}

console.log(askTvSerie());