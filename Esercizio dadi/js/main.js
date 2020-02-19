// Assegno ai due giocatori due variabili distinte
// Al login (o magari con un bottone) faccio generare due numeri casuali compresi tra  i quali saranno memorizzati rispettivamente nelle suddette variabili
// A seconda di chi ha il numero più grande vince e viene visualizzato a schermo

// Assegnazione delle variabili
var numeroUtente = 0;
var numeroAvversario = 0;

// Generazione dei due numeri
numeroUtente = Math.round(Math.random() * 100);
console.log("Il tuo punteggio: " + numeroUtente);
numeroAvversario = Math.round(Math.random() * 100);
console.log("Punteggio del tuo avversario: " + numeroAvversario);
