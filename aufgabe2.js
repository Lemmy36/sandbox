/**
 * Lies den Inhalt des aktuellen Verzeichnis aus und gib die Namen 
 * der Dateien auf der Console aus. Und das inklusive aller Unterverzeichnisse
 */

// erstmal brauchen wir die Funktionen um auf das Dateisystem zuzugreifen...
// das geht mit require('fs');. Mit require werden quasi andere Module geladen
// die Du dann benutzen kannst. 
var fs = require('fs');

fs.readdir('.', function(err, items) {
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
});

// Jetzt kommt deine Aufgabe..
// Liste alle Dateien, auch in den Unterverzeichnissen auf der Console aus
// Tipp: Dafür brauchst Du Rekursion