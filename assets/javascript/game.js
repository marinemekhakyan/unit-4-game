$(document).ready(function() {

    //Random number arrays

    //Computer choice
    let wins = 0;
    let losses = 0;

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

    var totalScore = 0;

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
        crystalValues(crystalNum);

        totalScore = 0;
        $("#score").html(totalScore);

        alert(x);
    }
    computerRandom(randomN);
    crystalsRandom(crystals);
    crystalValues(crystalNum);



    $("#crystal-1").on("click", function() { 
        console.log('totalScore', totalScore)
        console.log('c1', c1)
        totalScore += c1;
        $("#score").html(totalScore);
    });

    $("#crystal-2").on("click", function() {

        totalScore += c2;
        $("#score").html(totalScore);
    }); 

    $("#crystal-3").on("click", function(){

        totalScore += c3;
        $("#score").html(totalScore);
    });

    $("#crystal-4").on("click", function(){

        totalScore += c4;
        $("#score").html(totalScore);
    });

    $(".crystals").on("click", function(){

        if (totalScore === randomNum) {
            
            wins++;
            console.log(totalScore);
            $("#score").html(totalScore);
            $("#wins").html("Wins: " + wins);

            setTimeout(function() {resetGame("Yoohoo you win!")
        }, 1000); 
        }

        else if (totalScore > randomNum) {

                losses++;
                $("#score").html(totalScore);
                $("#losses").html("Losses: " + losses);

                setTimeout(function() {resetGame("You lose, try again!")}, 1000);
            }
        
    })

})