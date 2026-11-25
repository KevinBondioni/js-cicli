// Traccia 06 · Il lucchetto
// La consegna è nel README, alla voce "06 · Il lucchetto".

/*
  STEPS
  1 -creo una costante con la combinazione corretta
  2 -creo un ciclo do-while che si chiude sono quando la combinazione è corretta 
  3 -chiedo all'utente la combinazione 
  4 -se e corretta alert lucchetto aperto 
  5- se è sbagliata console log combinazione sbagliata 
*/

// # Fase di preparazione
const combinazioneCorretta = 482

// # Fase di raccolta dati e di elaborazione
do {
  combinazione = parseInt(prompt("Inserire la combinazione"))
  if (combinazione == combinazioneCorretta) {
    alert(`Lucchetto aperto `)
  }
  else {
    console.log(`Combinazione sbagliata, riprova.`)
  }
}
while (combinazione != combinazioneCorretta)


