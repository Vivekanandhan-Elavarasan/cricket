class Team{
    score:number[] = [];
    
    battingPlayer:number = 0;
    ball:number = 0;

    hit(runs:number){
        if(this.battingPlayer === 10){
            return;
        }
        (<HTMLDivElement>document.getElementById(currentPlayer + "" + this.battingPlayer + "" + (this.ball))).innerText = runs + "";
        console.log(currentPlayer + "" + this.battingPlayer + "" + (this.ball));
        this.score.push(runs);
        this.ball++;
        if(runs === 0){
            this.battingPlayer++;
            this.ball = 0;
        }
        if(this.ball === 6){
            this.ball = 0;
            this.battingPlayer++;
        }
    }

    total(){
        let sum = 0;
        for(let i = 0; i < this.score.length; i++){
            sum += this.score[i];
        }
        return sum;
    }
}

var teamOne = new Team();

var teamTwo = new Team();

function generateTable(id:string){

    var table = document.createElement("table");

    var player = 0;
    if(id === "One"){
        player = 1;
    }
    else{
        player = 2;
    }
    
    //table.innerHTML += "<div id='" + (player) + "" + (j) + "" + (i) + "'>" + (player) + "" + (j) + "" + (i) + "</div>";
    var heading = table.insertRow();
    heading.insertCell();
    for(var x = 1 ; x <= 6; x++){
        var head = heading.insertCell();
        head.innerText = "Ball " + x;
    }

    for(var j = 0; j < 10; j++){
        let tr = table.insertRow();
        for(let i = 0; i < 7 ; i++){
            let td = tr.insertCell();
            if(i === 0){
                td.innerText = "Player " + (j + 1);
            }
            else if(i < 7){
                td.innerHTML = "<div id='" + id + "" + (j) + "" + (i - 1) + "'></div>";
            }

        }

    }

    document.getElementById("player"+id).appendChild(table);
}

var currentPlayer = "One";

var timer = 60;

generateTable("One");
generateTable("Two");

function startMatch(){
    setTimeout(incrementTimer, 1000);
    (<HTMLButtonElement>document.getElementById("hitBtn")).disabled = false;
    (<HTMLButtonElement>document.getElementById("hitBtn")).setAttribute("class", "btn btn-primary");
    (<HTMLDivElement>document.getElementById("textDiv")).innerText = "";
    (<HTMLButtonElement>document.getElementById("startMatch")).setAttribute("class", "btn btn-primary disabled");
    (<HTMLButtonElement>document.getElementById("startMatch")).disabled = true;
}

function incrementTimer(){

    if(currentTeam().battingPlayer === 10){
        switchTeams();
        return;
    }
    timer--;
    (<HTMLDivElement>document.getElementById("timer")).innerText = timer + "";
    if(timer >= 0){
        setTimeout(incrementTimer, 1000);
    }
    else{
        timer = 60;
        (<HTMLDivElement>document.getElementById("timer")).innerText = 60 + "";
        switchTeams();
    }
}

var oneTotal = 0;
var twoTotal = 0;

function hit(){
    if(currentPlayer === "One"){
        hitBall(teamOne);
    }
    else{
        hitBall(teamTwo);
    }
}

function currentTeam(){
    if(currentPlayer === "One"){
        return(teamOne);
    }
    else{
        return(teamTwo);
    }
}

function hitBall(team:Team){
    var run = Math.floor(Math.random() * 7);
    if(currentPlayer === "One"){
        oneTotal += run;
        (<HTMLDivElement>document.getElementById(currentPlayer + "TotalText")).innerText = (oneTotal) + "";
    }
    else{
        twoTotal += run;
        (<HTMLDivElement>document.getElementById(currentPlayer + "TotalText")).innerText = (twoTotal) + "";
    }
    
    team.hit(run);
}

function allOut(){
    (<HTMLDivElement>document.getElementById("timer")).innerText = "All Out";
}

function switchTeams(){
    if(currentPlayer === "Two"){
        gameOver();
        return;
    }
    timer = 60;
    (<HTMLDivElement>document.getElementById("timer")).innerText = "60";
    (<HTMLDivElement>document.getElementById("textDiv")).innerText = "Team One's turn is Over. Click on Start for Team two to Bat.";
    (<HTMLButtonElement>document.getElementById("hitBtn")).disabled = true;
    (<HTMLButtonElement>document.getElementById("hitBtn")).setAttribute("class", "btn btn-primary disabled");
    (<HTMLButtonElement>document.getElementById("startMatch")).innerText = "Team Two Start Batting";
    (<HTMLButtonElement>document.getElementById("startMatch")).setAttribute("class", "btn btn-primary");
    (<HTMLButtonElement>document.getElementById("startMatch")).disabled = false;
    if(currentPlayer === "One"){
        currentPlayer = "Two";
    }
}

function gameOver(){
    (<HTMLDivElement>document.getElementById("timer")).innerText = "Game Over";
    (<HTMLDivElement>document.getElementById("textDiv")).innerText = "Game is Over. Click on Generate Results to view results.";
    (<HTMLButtonElement>document.getElementById("hitBtn")).disabled = true;
    (<HTMLButtonElement>document.getElementById("hitBtn")).setAttribute("class", "btn btn-primary disabled");
    (<HTMLButtonElement>document.getElementById("startMatch")).innerText = "Game Over";
    (<HTMLButtonElement>document.getElementById("resBtn")).disabled = false;
    (<HTMLButtonElement>document.getElementById("resBtn")).setAttribute("class", "btn btn-primary");
}

function generateResults(){

    var teamOneMax = 0;
    var teamOnePlayer = 0;
    for(var j = 0; j < 10; j++){
        var tSum = 0;
        for(var i = 0; i < 6; i++){
            var t = parseInt((<HTMLDivElement>document.getElementById("One" + j + "" + i)).innerText);
            if(t === 0){
                break;
            }
            tSum += t;
        }
        if(tSum > teamOneMax){
            teamOneMax = tSum;
            teamOnePlayer = i - 1;
        }
    }

    var teamTwoMax = 0;
    var teamTwoPlayer = 0;
    for(var j = 0; j < 10; j++){
        var tSum = 0;
        for(var i = 0; i < 6; i++){
            var t = parseInt((<HTMLDivElement>document.getElementById("Two" + j + "" + i)).innerText);
            if(t === 0){
                break;
            }
            tSum += t;
        }
        if(tSum > teamTwoMax){
            teamTwoMax = tSum;
            teamTwoPlayer = i - 1;
        }
    }
    
    if(oneTotal > twoTotal){
        localStorage.setItem("winner","Team One");
    }
    else{
        localStorage.setItem("winner","Team Two");
    }
    

    if(teamOneMax > teamTwoMax){
        localStorage.setItem("MOM","Team One Player " + teamOnePlayer + " with a score of " + teamOneMax);
    }
    else{
        localStorage.setItem("MOM","Team Two Player " + teamTwoPlayer + " with a score of " + teamTwoMax);
    }

    window.open("results.html", "_blank");
}