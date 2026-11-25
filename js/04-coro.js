// Traccia 04 · Il coro dello stadio
// La consegna è nel README, alla voce "04 · Il coro dello stadio".

/*
  STEPS
  1 - chiedo all'utente la parola
  2 - chiedo all utente quante volte ripeterla
  3 - creo un ciclo che si ripete per le volte indicate dall'utente
  4 - ad ogni ciclo stampo N.rep e parola
  6 - stampo parola * N.rep  
*/

// # Fase di preparazione
coro = ""

// # Fase di raccolta dati
const parola = prompt("Indica la parola che vuoi ripetere")
const ripetizione = parseInt(prompt("quante volte vuoi ripeterla?"))

// # Fase di elaborazione

for (let i = 0; i < ripetizione; i++) {
  console.log(`${i + 1}. ${parola}`)
  coro += parola + ' '
}

// # Fase di output
console.log(`${coro}`)

