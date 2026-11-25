// Traccia 05 · La media dei voti
// La consegna è nel README, alla voce "05 · La media dei voti".

/*
  STEPS
  1 - chiedere quanti voti sono stati presi
  2 - creare un ciclo for che si ripete per il numero di volte indicate nel punto 1
  3 - ad ogni ciclo chiedere il voto indicando 1/5 2/5 3/5....
  4 - sommare i voti in una variabile
  5 - fare la media dei voti
  6 - mostrare la media con un alert
*/

// # Fase di preparazione
let totaleVoti = 0

// # Fase di raccolta dati
numeroVoti = parseInt(prompt("Quanti voti hai preso?"))

if (numeroVoti == 0 || isNaN(numeroVoti)) {
  alert(`Nessun voto da calcolare`)
}
else {
  // # Fase di elaborazione
  for (i = 0; i < numeroVoti; i++) {
    voto = parseInt(prompt(`Voto ${i + 1} di ${numeroVoti}`))
    totaleVoti += voto
  }
  console.log(totaleVoti)
  const media = totaleVoti / numeroVoti

  // # Fase di output
  alert(`Media: ${media.toFixed(1)}`)
}

