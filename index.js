var boxButton = document.querySelectorAll(".box");


var turnO = true;
var winningArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
var audio;

$(".box").click(function () {
    var music= new Audio("sounds/button-click.mp3");
    music.play();
    if (turnO) {
        $(this).text("O");
        $(".winner").text("Player X's Turn");
        turnO = false;
    }
    else {
        $(this).text("X");
        $(".winner").text("Player O's Turn");
        turnO = true;
    }
    $(this).prop("disabled", true);
    checkWinner();
})

function checkWinner() {
    for (let pattern of winningArray) {
        var val1 = boxButton[pattern[0]].innerText;
        var val2 = boxButton[pattern[1]].innerText;
        var val3 = boxButton[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 == val2 && val2 == val3) {
                $(".box").prop("disabled", true);
                celebrate();
                showWinner(val1);
            }
        }
    }

}
function celebrate() {
    $("body").addClass("win-celebration");
    setTimeout(function () {
        $("body").removeClass("win-celebration");
    }, 100);
    audio = new Audio("sounds/music.mp3");
    audio.play();
}
function showWinner(player) {
    $(".winner").text("Player" + " " + player + " wins")
}
function restartGame() {
    $(".box").text("").prop("disabled", false);
    turnO = true;
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
        $(".winner").text("Start The Game");
    }


}
