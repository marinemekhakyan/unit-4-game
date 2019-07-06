$(document).ready(function() {

    //Random number arrays

    //Computer choice

    let randomN = [];

    for (let i = 19; i < 121; i ++) {
        randomN.push(i);
    }
    //Crystals - user choice
    let crystals = [];

    for (let c = 1; c < 13; c++) {
        crystals.push(c);
    }

    let randomNum;
    let crystalNum = [];

    let c1;
    let c2; 
    let c3;
    let c4;

    let totalScore = 0;

    let wins = 0;
    let losses = 0;

 //Functions

 function computerRandom(arr) {
        
    let x = arr[Math.floor(Math.random() * arr.length)];
    randomNum = x;
    $("#random-number").html(randomNum);
    console.log("Random Number:" + randomNum);
}

function crystalsRandom(arr) {

    for (let y = 0; y < 4; y ++) {
        
        let a = arr[Math.floor(Math.random() * arr.length)];

        crystalNum.push(a);

        console.log("crystal numbers:" + crystalNum);
    }
}

function crystalValues(arr) {

    for (i = 0; i < arr.length; i++) {

        $(".crystals" + (i++)).attr("value", arr[i]);
        console.log(this);
    }

    c1 = arr[0];
    c2 = arr[1];
    c3 = arr[2];
    c4 = arr[3];
}

function resetGame(x) {
    crystalNum = [];

    computerRandom (randomN);
    crystalsRandom (crystals);

    totalScore = 0;
    $("#score").html(totalScore);

    alert(x);
}
computerRandom(randomN);
crystalsRandom(crystals);
crystalValues(crystalNum);

})