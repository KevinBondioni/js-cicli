// Traccia 03 · Il listino dei biglietti
// La consegna è nel README, alla voce "03 · Il listino dei biglietti".

/*
  STEPS
  1 -chiedo quanto costa un biglietto
  2 -accedo alla lista quantità e moltiplico il costo per ogni quantità
  3 -eseguo un loop tra le quantita 
  4 -e per ogni elemento moltiplico per il prezzo
  5 -stampo il risultato  
*/

// # Fase di preparazione
const quantità = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// # Fase di raccolta dati
costo = parseInt(prompt("Quanto costa un biglietto?"))

// # Fase di elaborazione
for (let i = 0; i < quantità.length; i++) {
  totale = quantità[i] * costo

  // # Fase di output 
  console.log(`Quantità ${i + 1}: ${totale}€`)
}

// senza array

// for (let i = 0; i < 10; i++) {
//   totale = quantità[i] * costo

//   // # Fase di output
//   console.log(`Quantità ${i + 1}: ${totale}€`)
// }
