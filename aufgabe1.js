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

for (var i = 1; i <= 10; i++) {
    console.log(produkt(i));
}

