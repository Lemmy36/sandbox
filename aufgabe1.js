/*
 * Aufgabe 1 - Funktionen
 *
 * Lege eine Funktion an, die das Produkt aus einer  Zahl berechnet (x * x) und das
 * Ergebnis zurück gibt. Schreibe dann eine Schleife von 1 bis 10 und gib jeweils
 * das Ergebnis auf der Console aus.
 */


// schleife hier

function produkt(zahl) {
    return zahl * zahl;
}

var z = 2;
for (var i = 0; i <= 10; i++) {
    z = produkt(z);
    console.log(z);
}
