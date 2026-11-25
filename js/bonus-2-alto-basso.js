// Bonus 2 · Troppo alto, troppo basso
// La consegna è nel README, alla voce "Bonus 2 · Troppo alto, troppo basso".

/*
  STEPS
  1 - genero un numero random da 1 a 100 
  2 - creo un contatore di tentativi
  3 - chiedo all utente un numero
  4 - se il numero inserito non e valido o preme annulla alert Scrivi un numero da 1 a 100 tentativo +1
  5 - se il numero e piu alto in console "Troppo alto"
  6 - se il numero e piu basso in colsole "Troppo basso"
  4 - se e corretto esci dal cliclo e alert Indovinato in N tentativi 
*/

// # Fase di preparazione
const numeroRandom = Math.floor(Math.random() * 100) + 1

let tentativi = 0
let numero

// # Fase di raccolta dati di elaborazione e di output

while (numero != numeroRandom) {

  numero = (parseInt(prompt("Scrivi un numero da 1 a 100")))

  if (isNaN(numero)) {
    console.log("Scrivi un numero da 1 a 100! Questo vale come tentativo")
    tentativi++
  }
  else if (numero < numeroRandom) {
    console.log("Troppo basso")
    tentativi++
  }
  else if (numero > numeroRandom) {
    console.log("Troppo alto")
    tentativi++
  }
  else {
    tentativi++
  }
}

alert(`Indovinato in ${tentativi} tentativi!`)


