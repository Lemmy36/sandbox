const readln = require('readline');

var cl = readln.createInterface( process.stdin, process.stdout );

function question(q) {
    return new Promise( (res, rej) => {
        cl.question( q, answer => {
            res(answer);
        })
    });
};

(async function main() {

    console.log("Das Fragespiel!");
    console.log("===============");
    console.log("");
    console.log("Denk Dir eine Zahl aus, zwischen 1 und 100. Ich versuche die Zahl zu erraten. ");
    console.log("Gib ein 'g' ein wenn deine Zahl größer ist, ein 'k' wenn sie kleiner ist und ein 'j' wenn ich sie erraten habe.");

    var answer;
    var lower = 1;
    var upper = 100;
    var zahl = 50;
    var versuche = 1;

    while ( answer != '' ) {
        console.log(`Ist deine Zahl vielleicht ${zahl}`);
        answer = await question('(g, k oder j)? >');

        if (answer == 'j') {
            console.log(`Cool, also war die Zahl ${zahl}. Ich hab es in nur ${versuche} erraten.`);
            break;
        } else if (answer == 'g') {
            lower = zahl + 1;
            zahl = Math.round((upper - lower) / 2) + lower;
        } else if (answer == 'k') {
            upper = zahl - 1;
            zahl = Math.round((upper - lower) / 2) + lower;
        }

        versuche++;
    }
    console.log( 'Und ende');
    cl.close();
})();