// Traccia 02 · L'ascensore
// La consegna è nel README, alla voce "02 · L'ascensore".

/*
  STEPS
  1 - chiedo all'utente il piano desiderato
  2 - controllo che il valore inserito sia valido altrimenti mostro un alert con Piano non valido
  3 - creo un ciclo che duri quanto indicato dall'utente
  4 - comunico all utente con un alert di essere arrivato al piano desiderato
*/

// # Fase di preparazione

// # Fase di raccolta dati
const destinazione = parseInt(prompt("A quale piano vuoi andare?"))

// # Fase di elaborazione e di Output

if (isNaN(destinazione) || destinazione < 0) {
  alert("Piano non valido")
}
else {
  for (let i = 0; i < destinazione + 1; i++) {
    console.log(`Piano ${i}`)
  }
  alert(`Sei arrivato al piano ${destinazione}`)
}
