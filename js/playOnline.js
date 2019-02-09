/*
Set up game
*/
(function () {
    var chessBoard = new NPCB ({
        parentElement: "#canvas-container-0"
    });
    chessBoard.startGame ();

    /*
    Debug functionality to test player num
    */
    $(document).unbind ('keydown.debugPlayerNum').
        on ('keydown.debugPlayerNum', function (evt) {

        if (evt.keyCode === proto.UP) {
            console.log ('calling setPlayerNum');
            chessBoard.setPlayerNum (chessBoard.playerNum + 1);
        }
        if (evt.keyCode === proto.DOWN) {
            console.log ('calling setPlayerNum');
            chessBoard.setPlayerNum (chessBoard.playerNum - 1);
        }
    });
}) ();
