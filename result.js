var winner = localStorage.getItem("winner");
var mom = localStorage.getItem("MOM");
document.getElementById("winnerTag").innerText = winner;
document.getElementById("momTag").innerText = mom;
localStorage.removeItem("winner");
localStorage.removeItem("MOM");
function startMatchAgain() {
    window.open("cricket.html", "_self");
}
