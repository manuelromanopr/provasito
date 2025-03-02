<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Imposta l'indirizzo email destinatario
    $to = "tuamail@example.com"; // Sostituisci con il tuo indirizzo email

    // Oggetto dell'email
    $subject = "Nuovo messaggio dal sito";

    // Recupera e pulisci i dati inviati dal form
    $nome = htmlspecialchars($_POST["nome"]);
    $email = htmlspecialchars($_POST["email"]);
    $telefono = htmlspecialchars($_POST["telefono"]);
    $messaggio = htmlspecialchars($_POST["messaggio"]);

    // Selezione dei checkbox (array)
    $coaching = "";
    if (isset($_POST["coaching"]) && is_array($_POST["coaching"])) {
        $coaching = implode(", ", $_POST["coaching"]);
    } else {
        $coaching = "Nessuna opzione selezionata";
    }

    // Costruisci il corpo dell'email
    $body = "Nome: $nome\n";
    $body .= "Email: $email\n";
    $body .= "Telefono: $telefono\n";
    $body .= "Coaching: $coaching\n";
    $body .= "Messaggio: $messaggio\n";

    // Imposta le intestazioni
    $headers = "From: webmaster@example.com\r\n"; // Sostituisci con un'email dal tuo dominio

    // Invia l'email
    if (mail($to, $subject, $body, $headers)) {
        echo "Messaggio inviato correttamente!";
    } else {
        echo "Errore nell'invio del messaggio.";
    }
} else {
    echo "Richiesta non valida.";
}
?>