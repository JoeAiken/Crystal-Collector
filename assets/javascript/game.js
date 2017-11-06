$(function() {

    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    $("#total-wins").text(wins);
    $("#total-losses").text(losses);
    $("#your-score").text(totalScore);



    var randomNum = Math.floor(Math.random() * 102 + 19);
    $("#number-to-guess").text(randomNum);

    var number1 = Math.floor(Math.random() * 12 + 1);
    var number2 = Math.floor(Math.random() * 12 + 1);
    var number3 = Math.floor(Math.random() * 12 + 1);
    var number4 = Math.floor(Math.random() * 12 + 1);

    function reset() {

        randomNum = Math.floor(Math.random() * 102 + 19);
        $("#number-to-guess").text(randomNum);

        number1 = Math.floor(Math.random() * 12 + 1);
        number2 = Math.floor(Math.random() * 12 + 1);
        number3 = Math.floor(Math.random() * 12 + 1);
        number4 = Math.floor(Math.random() * 12 + 1);

        totalScore = 0;
        $("#your-score").text(totalScore);

    }

    function win() {

        alert("You've won!!");

        wins++;

        $("#total-wins").text(wins);


        reset();


    }

    function lose() {

        alert("You've lost! Try Again!");

        losses++;

        $("#total-losses").text(losses);


        reset();

    }

    $(".gem").hover(function() {

        $(this).css("opacity", 0.2);

    }, function() {
        $(this).css("opacity", 1);

    })




    $("#crystal1").on("click", function() {

        totalScore = totalScore + number1;

        $("#your-score").text(totalScore);

        if (totalScore === randomNum) {

            win();
        }

        else if (totalScore > randomNum) {

            lose();
        }

    });


    $("#crystal2").on("click", function() {

        totalScore = totalScore + number2;

        $("#your-score").text(totalScore);

        if (totalScore === randomNum) {

            win();
        }

        else if (totalScore > randomNum) {

            lose();
        }

    });

    $("#crystal3").on("click", function() {

        totalScore = totalScore + number3;

        $("#your-score").text(totalScore);

        if (totalScore === randomNum) {

            win();
        }

        else if (totalScore > randomNum) {

            lose();
        }

    });

    $("#crystal4").on("click", function() {

        totalScore = totalScore + number4;

        $("#your-score").text(totalScore);

        if (totalScore === randomNum) {

            win();
        }

        else if (totalScore > randomNum) {

            lose();
        }

    });











});
