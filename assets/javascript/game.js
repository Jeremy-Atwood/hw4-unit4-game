$(document).ready(function () {
    //Generating random number
    var ran = Math.floor(Math.random() * 101 + 19);

    //giving the random number to the page.
    $("#ranNum").text(ran);

    //Generating random numbers for each crystal
    var cry1 = Math.floor(Math.random() * 11 + 1);
    console.log("cry1 is: " + cry1);
    var cry2 = Math.floor(Math.random() * 11 + 1);
    console.log("cry2 is: " + cry2);
    var cry3 = Math.floor(Math.random() * 11 + 1);
    console.log("cry3 is: " + cry3);
    var cry4 = Math.floor(Math.random() * 11 + 1);
    console.log("cry4 is: " + cry4);

    //Global variables
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    var userSum = 0;

    $("#total").text(userTotal);
    $("#wins").text(wins);
    $("#losses").text(losses);

    //Game reset
    function reset() {
        random = Math.floor(Math.random() * 101 + 19);
        $("#ranNum").text(random);
        var cry1 = Math.floor(Math.random() * 11 + 1);
        var cry2 = Math.floor(Math.random() * 11 + 1);
        var cry3 = Math.floor(Math.random() * 11 + 1);
        var cry4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $("total").text(userTotal);
    }
    //On click for the jewels with the random number
    $("#bCrys").on("click", function () {
        userSum = userTotal + cry1;
        console.log("Total1= " + userTotal);
        $("total").text(userTotal);

        if (userSum === ran) {
            win();
        } else if (userTotal > ran) {
            lose();
        }
    });
    $("#gCrys").on("click", function () {
        userSum = userTotal + cry2;
        console.log("Total2= " + userTotal);
        $("total").text(userTotal);

        if (userSum === ran) {
            win();
        } else if (userTotal > ran) {
            lose();
        }
    });
    $("#rCrys").on("click", function () {
        userSum = userTotal + cry3;
        console.log("Total3= " + userTotal);
        $("total").text(userTotal);

        if (userSum === ran) {
            win();
        } else if (userTotal > ran) {
            lose();
        }
    });
    $("#yCrys").on("click", function () {
        userSum = userTotal + cry4;
        console.log("Total4= " + userTotal);
        $("total").text(userTotal);

        if (userSum === ran) {
            win();
        } else if (userTotal > ran) {
            lose();
        }
    });

    function win() {
        wins++
        $("wins").text(wins)
        reset();
    }
    function lose () {
        losses++;
        $("losses").text(losses);
        reset();
    }
});