// Traccia 08 · La password in 3 tentativi
// La consegna è nel README, alla voce "08 · La password in 3 tentativi".

/*
  STEPS
  1 -creo la variabile passwordCorretta 
  2 -creo la la variabile tentativi
  2 -creo un ciclo while che temina se la password è corretta o se i tentativi superano 3
  4 -se è corretta, aletr Benvenuto
  5 -se è sbagliata console log con password errara e numero di tentativi rimanenti
  6 se sbaglia + di tre volte allert BLOCCATO
*/

// # Fase di preparazione
const passwordCorretta = `segreta26`
let tentativi = 3
let password

// # Fase di raccolta dati

// # Fase di elaborazione
while (password != passwordCorretta && tentativi > 0) {
  password = prompt(`Inserire la Password`)
  tentativi--
  console.log(`Password errata. Tentativi rimasti: ${tentativi}`)
}

if (password === passwordCorretta) {
  alert(`Benvenuto`)
}
else {
  alert(`Bloccato`)
}

