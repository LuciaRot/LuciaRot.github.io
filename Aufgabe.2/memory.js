// Wort aus Eingabefeld + mischen
function mixLetters(_letter) {
    var res = _letter.split("");
    console.log(res);
    var ctr = res.length;
    while (ctr > 0) {
        var index_1 = Math.floor(Math.random() * ctr);
        ctr--;
        var temp = res[ctr];
        res[ctr] = res[index_1];
        res[index_1] = temp;
    }
    console.log(res + " Res Mixed");
    console.log(_letter);
}
//Timer
function startGame(_time) {
    var countDownEnd = new Date();
    var temp = countDownEnd.getSeconds();
    temp = temp + _time;
    console.log(_time);
    var i = setInterval(function () {
        var now = new Date();
        var store = now.getSeconds();
        var distance = temp - store;
        countDownEnd.innerHTML = distance + " s";
        if (distance == 0) {
            countDownEnd.innerHTML = "GameOver :(";
            clearInterval(i);
        }
    }, 1000);
}
//# sourceMappingURL=memory.js.map