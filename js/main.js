// Esercizio EMAIL

// Prima di tutto mi creo le variabili che mi occorrono
// Poi chiedo all'utente di inserire il suo indirizzo E-EMAIL
// Dopodichè con un ciclo faccio confrontare la suddetta con ogni elemento del mio ARRAY
// Se sussiste una corrispondenza visualizzerò un determinato messsaggio
// Altrimenti cambio messsaggio


// Creazione variabili
var databaseEmail = ["Mario", "Gianni", "Federico", "Filippo"];
// console.log(databaseEmail);

// Richiesta utente
var emailUtente = prompt("Inserisci la tua E-mail");
// console.log(emailUtente);

// Confronto dati
for (var i = 0; i < databaseEmail.length; i++) {
  if (databaseEmail[i] == emailUtente) {
    var corrispondenza = databaseEmail[i];
  }
}

// Messaggi in base alla situazione
if (corrispondenza != undefined) {
  console.log(corrispondenza + " sei stato invitato!!");
} else {
  console.log(emailUtente + " non sei stato inviato.. :(");
}
