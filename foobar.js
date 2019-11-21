console.log("Hallo Dani");
console.log("==========");

var x = 5;
var y = 10;


// Schleife von 1 - 20
// Gib in jeder  Zeile 'flo' aus, außer in jeder 3ten Zeile
// Gib 'bar' aus in jeder 5 Zeile

for (var i = 1; i <= 20; i++) {
    var text = `Zeile ${i}: `;
    
    if (i % 3 != 0) {
        text = text + 'flo';
    } else {
        text = text + 'dani';
    }

    if (i % 5 == 0) {
        text = text + 'bar';
    } else {
        text = text + '*';
    }

    console.log(text);
}

