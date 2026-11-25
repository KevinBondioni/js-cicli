// Traccia 07 · La cassa del supermercato
// La consegna è nel README, alla voce "07 · La cassa del supermercato".

/*
  STEPS
  
  1 -Creo il contatore pezzi
  2 -creo la variabile del totale con valore defoult 0 
  3 -creo la variabile prezzo
  4 -creo un ciclo while finché il cassiere non scrive 0
  5 -chiedo al cassiere il prezzo 
  6 -se viene inserito un valore negativo o che non sia un numero console.log Prezzo non valido
  7 -aumento di 1 il contatore pezzi
  8 -sommo il prezzo al totale 
  9 -quando viene inserito 0 alert con contatore pezzi ed il totale 
*/

// # Fase di preparazione
let contatorePezzi = 0
let totale = 0
let prezzo


while (prezzo !== 0) {
  // # Fase di raccolta dati
  prezzo = parseInt(prompt(`Quanto costa il prodotto?`))

  // # Fase di elaborazione
  if (isNaN(prezzo) || prezzo < 0) {
    console.log(`Prezzo non valido`)
  }
  else if (prezzo === 0) {
    alert(`Prodotti: ${contatorePezzi}. Totale: ${totale} €`)
  }
  else {
    contatorePezzi++
    totale += prezzo
  }
}
