const canvas = document.querySelector(".mycan");
const ctx = canvas.getContext("2d");


// Creates a randomized noice looking map
function noicemap() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let y = 0; y < 100; y++) {
        for (let x = 0; x < 100; x++) {
            ctx.fillStyle = rndgs();
            ctx.fillRect(x * 10, y * 10, 100, 100);
        }
    }
}

// Creates a randomized noice looking map in color
function noicemapcolor() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let y = 0; y < 100; y++) {
        for (let x = 0; x < 100; x++) {
            ctx.fillStyle = rndrgb();
            ctx.fillRect(x * 10, y * 10, 100, 100);
        }
    }
}

// This will make the computer combust, it generates 1k x 1k pixels or 1M pixels
// function noicemapcolor() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     for (let y = 0; y < 1000; y++) {
//         for (let x = 0; x < 1000; x++) {
//             ctx.fillStyle = rndrgb();
//             ctx.fillRect(x, y, 1, 1);
//         }
//     }
// }



// This is the code for a modern art looking canvas

function modernart() {
    // "Modern art"
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < 100; i++) {
        rndrect();
    }
}

// Supporting functions

// Random RGB
function rndrgb() {
    return ctx.fillStyle = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    // return ctx.fillStyle = "rgb(53,76,255)"
}

// Random Gray scale
function rndgs() {
    randomgs = random(255);
    return ctx.fillStyle = "rgb(" + randomgs + "," + randomgs + "," + randomgs + ")";
    // return ctx.fillStyle = "rgb(53,53,53)"
}


// Draws a random rectangle on the page
function rndrect() {
    let x1 = random(canvas.width-100);
    let y1 = random(canvas.height-100);
    let w1 = random(100);
    let h1 = random(100);
    let r1 = random(255);
    let g1 = random(255);
    let b1 = random(255);

    ctx.fillStyle = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
    ctx.fillRect(x1, y1, w1, h1);
}


function random(value) {
    return Math.floor(Math.random() * value);
}