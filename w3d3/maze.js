$(function() {

    let gameStarted = false;

    $(".boundary").mouseover(gameOver);
    $("#maze").mouseleave(function() {
        if (gameStarted) {
            gameOver();
        }
    })

    $("#start").click(function() {
        gameStarted = true;
        $(".boundary").removeClass("youlost");
        $("#status").text("Game started!")
    });

    $("#end").mouseenter(gameWin);

    function gameOver() {
        if (gameStarted) {
            $(".boundary").addClass("youlost");
            $("#status").text("You Lost!");
            gameStarted = false;
        }
    }

    function gameWin() {
        if (gameStarted) {
            $("#status").text("You win!");
            gameStarted = false;
        }
    }
});