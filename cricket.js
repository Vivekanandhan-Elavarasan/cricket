var Team = /** @class */ (function () {
    function Team() {
        this.score = [];
        this.battingPlayer = 0;
        this.ball = 0;
    }
    Team.prototype.hit = function (runs) {
        if (this.battingPlayer === 10) {
            return;
        }
        document.getElementById(currentPlayer + "" + this.battingPlayer + "" + (this.ball)).innerText = runs + "";
        console.log(currentPlayer + "" + this.battingPlayer + "" + (this.ball));
        this.score.push(runs);
        this.ball++;
        if (runs === 0) {
            this.battingPlayer++;
            this.ball = 0;
        }
        if (this.ball === 6) {
            this.ball = 0;
            this.battingPlayer++;
        }
    };
    Team.prototype.total = function () {
        var sum = 0;
        for (var i = 0; i < this.score.length; i++) {
            sum += this.score[i];
        }
        return sum;
    };
    return Team;
}());
var teamOne = new Team();
var teamTwo = new Team();
function generateTable(id) {
    var table = document.createElement("table");
    var player = 0;
    if (id === "One") {
        player = 1;
    }
    else {
        player = 2;
    }
    //table.innerHTML += "<div id='" + (player) + "" + (j) + "" + (i) + "'>" + (player) + "" + (j) + "" + (i) + "</div>";
    var heading = table.insertRow();
    heading.insertCell();
    for (var x = 1; x <= 6; x++) {
        var head = heading.insertCell();
        head.innerText = "Ball " + x;
    }
    for (var j = 0; j < 10; j++) {
        var tr = table.insertRow();
        for (var i = 0; i < 7; i++) {
            var td = tr.insertCell();
            if (i === 0) {
                td.innerText = "Player " + (j + 1);
            }
            else if (i < 7) {
                td.innerHTML = "<div id='" + id + "" + (j) + "" + (i - 1) + "'></div>";
            }
        }
    }
    document.getElementById("player" + id).appendChild(table);
}
var currentPlayer = "One";
var timer = 60;
generateTable("One");
generateTable("Two");
function startMatch() {
    setTimeout(incrementTimer, 1000);
    document.getElementById("hitBtn").disabled = false;
    document.getElementById("hitBtn").setAttribute("class", "btn btn-primary");
    document.getElementById("textDiv").innerText = "";
    document.getElementById("startMatch").setAttribute("class", "btn btn-primary disabled");
    document.getElementById("startMatch").disabled = true;
}
function incrementTimer() {
    if (currentTeam().battingPlayer === 10) {
        switchTeams();
        return;
    }
    timer--;
    document.getElementById("timer").innerText = timer + "";
    if (timer >= 0) {
        setTimeout(incrementTimer, 1000);
    }
    else {
        timer = 60;
        document.getElementById("timer").innerText = 60 + "";
        switchTeams();
    }
}
var oneTotal = 0;
var twoTotal = 0;
function hit() {
    if (currentPlayer === "One") {
        hitBall(teamOne);
    }
    else {
        hitBall(teamTwo);
    }
}
function currentTeam() {
    if (currentPlayer === "One") {
        return (teamOne);
    }
    else {
        return (teamTwo);
    }
}
function hitBall(team) {
    var run = Math.floor(Math.random() * 7);
    if (currentPlayer === "One") {
        oneTotal += run;
        document.getElementById(currentPlayer + "TotalText").innerText = (oneTotal) + "";
    }
    else {
        twoTotal += run;
        document.getElementById(currentPlayer + "TotalText").innerText = (twoTotal) + "";
    }
    team.hit(run);
}
function allOut() {
    document.getElementById("timer").innerText = "All Out";
}
function switchTeams() {
    if (currentPlayer === "Two") {
        gameOver();
        return;
    }
    timer = 60;
    document.getElementById("timer").innerText = "60";
    document.getElementById("textDiv").innerText = "Team One's turn is Over. Click on Start for Team two to Bat.";
    document.getElementById("hitBtn").disabled = true;
    document.getElementById("hitBtn").setAttribute("class", "btn btn-primary disabled");
    document.getElementById("startMatch").innerText = "Team Two Start Batting";
    document.getElementById("startMatch").setAttribute("class", "btn btn-primary");
    document.getElementById("startMatch").disabled = false;
    if (currentPlayer === "One") {
        currentPlayer = "Two";
    }
}
function gameOver() {
    document.getElementById("timer").innerText = "Game Over";
    document.getElementById("textDiv").innerText = "Game is Over. Click on Generate Results to view results.";
    document.getElementById("hitBtn").disabled = true;
    document.getElementById("hitBtn").setAttribute("class", "btn btn-primary disabled");
    document.getElementById("startMatch").innerText = "Game Over";
    document.getElementById("resBtn").disabled = false;
    document.getElementById("resBtn").setAttribute("class", "btn btn-primary");
}
function generateResults() {
    var teamOneMax = 0;
    var teamOnePlayer = 0;
    for (var j = 0; j < 10; j++) {
        var tSum = 0;
        for (var i = 0; i < 6; i++) {
            var t = parseInt(document.getElementById("One" + j + "" + i).innerText);
            if (t === 0) {
                break;
            }
            tSum += t;
        }
        if (tSum > teamOneMax) {
            teamOneMax = tSum;
            teamOnePlayer = i - 1;
        }
    }
    var teamTwoMax = 0;
    var teamTwoPlayer = 0;
    for (var j = 0; j < 10; j++) {
        var tSum = 0;
        for (var i = 0; i < 6; i++) {
            var t = parseInt(document.getElementById("Two" + j + "" + i).innerText);
            if (t === 0) {
                break;
            }
            tSum += t;
        }
        if (tSum > teamTwoMax) {
            teamTwoMax = tSum;
            teamTwoPlayer = i - 1;
        }
    }
    if (oneTotal > twoTotal) {
        localStorage.setItem("winner", "Team One");
    }
    else {
        localStorage.setItem("winner", "Team Two");
    }
    if (teamOneMax > teamTwoMax) {
        localStorage.setItem("MOM", "Team One Player " + teamOnePlayer + " with a score of " + teamOneMax);
    }
    else {
        localStorage.setItem("MOM", "Team Two Player " + teamTwoPlayer + " with a score of " + teamTwoMax);
    }
    window.open("results.html", "_blank");
}
