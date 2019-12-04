window.addEventListener("load", function () {
    document.querySelector(".btn1").addEventListener("mousedown", function () { playSample("kick.mp3"); });
    document.querySelector(".btn2").addEventListener("mousedown", function () { playSample("snare.mp3"); });
    document.querySelector(".btn3").addEventListener("mousedown", function () { playSample("hihat.mp3"); });
    document.querySelector(".btn4").addEventListener("mousedown", function () { playSample("F.mp3"); });
    document.querySelector(".btn5").addEventListener("mousedown", function () { playSample("G.mp3"); });
    document.querySelector(".btn6").addEventListener("mousedown", function () { playSample("A.mp3"); });
    document.querySelector(".btn7").addEventListener("mousedown", function () { playSample("C.mp3"); });
    document.querySelector(".btn8").addEventListener("mousedown", function () { playSample("laugh-1.mp3"); });
    document.querySelector(".btn9").addEventListener("mousedown", function () { playSample("laugh-2.mp3"); });
    document.querySelector(".play").addEventListener("click", StartBeat);
});
function playSample(myMP3) {
    var sound = new Audio("assets/" + myMP3);
    sound.play();
}
;
function StartBeat() {
    var Kick = setInterval(myBeat, 300);
    var index = 0;
    var Beat = ["assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3"];
    function myBeat() {
        var mySound = new Audio(Beat[index]);
        mySound.play();
        index += 1;
        if (index > 3)
            index = 0;
        console.log(Beat[index]);
    }
    ;
}
;
//# sourceMappingURL=drumpad.js.map