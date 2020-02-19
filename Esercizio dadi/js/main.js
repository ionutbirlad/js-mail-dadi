// Assegno ai due giocatori due variabili distinte
// Al login (o magari con un bottone) faccio generare due numeri casuali compresi tra  i quali saranno memorizzati rispettivamente nelle suddette variabili
// A seconda di chi ha il numero più grande vince e viene visualizzato a schermo

// Assegnazione delle variabili
var numeroUtente = 0;
var numeroAvversario = 0;

function doFunction() {
  // Generazione dei due numeri
  numeroUtente = Math.round(Math.random() * 100);
  // console.log("Il tuo punteggio: " + numeroUtente);
  document.getElementById('your-score').innerHTML = " " + numeroUtente;
  numeroAvversario = Math.round(Math.random() * 100);
  // console.log("Punteggio del tuo avversario: " + numeroAvversario);
  document.getElementById('opp-score').innerHTML = " " + numeroAvversario;

  // Confronto dei punteggi e comunicazione a schermo
  if (numeroUtente > numeroAvversario) {
    console.log("Congratulazioni hai vinto!!");
  } else if (numeroUtente < numeroAvversario) {
    console.log("Purtroppo hai perso..");
  } else {
    console.log("Avete totalizzato lo stesso punteggio");
  }
}
