const minMax = require('./challenge');

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Input 5 number (separate by space): ", (arrayNumber) => {
    
    result = minMax(processInput(arrayNumber));
    console.log(`${result.sumMin} ${result.sumMax}`);

    readline.close();
});

function processInput(streamInput) {
    return streamInput.replace(/\s+$/g, "").split(" ").map((arrTemp) => parseInt(arrTemp, 10));
}
