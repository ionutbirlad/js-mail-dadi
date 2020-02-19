// Esercizio EMAIL

// Prima di tutto mi creo le variabili che mi occorrono
// Poi chiedo all'utente di inserire il suo indirizzo E-EMAIL
// Dopodichè con un ciclo faccio confrontare la suddetta con ogni elemento del mio ARRAY
// Se sussiste una corrispondenza visualizzerò un determinato messsaggio, altrimenti cambio messaggio


// Creazione variabili
var databaseEmail = ["mario@gmail.com", "gianni@yahoo.it", "federico@libero.mail", "filippo@gmail.it"];
// console.log(databaseEmail);

// Richiesta utente
var emailUtente = prompt("Inserisci la tua E-mail");
// console.log(emailUtente);

// Verifica della correttezza di quello che l'utente ha inserito
if (isNaN(emailUtente)) {
  // Confronto dati
  for (var i = 0; i < databaseEmail.length; i++) {
    if (databaseEmail[i] == emailUtente) {
      var corrispondenza = databaseEmail[i];
    }
  }

  // Messaggi in base alla situazione
  if (corrispondenza != undefined) {
    console.log("Bentornato!!");
  } else {
    console.log("Non ti sei ancora registrato. Devi avere un account per usufruire del nostro servizio");
  }
  
} else {
  console.log("Inserire un' E-mail valida");
}
