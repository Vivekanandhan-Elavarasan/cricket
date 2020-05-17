var x;
var tabab = document.createElement("table");
var hit2 = document.getElementById('hit2');
var hit1 = document.getElementById('hit1');
var gresult = document.getElementById('gresult');
hit2.style.visibility = 'hidden';
gresult.style.visibility = 'hidden';
/*for (let i = 0; i < 11; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 8; j++) {
        let column = document.createElement("td");
        row.appendChild(column);
                tabab.appendChild(row);
                document.body.appendChild(tabab);

    }
}*/
var player_runs = [];
var T1_player_runs = [];
var T2_player_runs = [];
var div = document.createElement("div");
var tabac = document.createElement("table");
var tab = /** @class */ (function () {
    function tab() {
        var arraya = [];
        var k;
        k = 0;
        var players_total_run;
        for (var i = 0; i < 11; i++) {
            var runs = [0, 1, 2, 3, 4, 5, 6];
            var row = document.createElement("tr");
            var sum = void 0;
            sum = 0;
            for (var j = 0; j < 7; j++) {
                var column = document.createElement("td");
                if (j == 8 && i != 0) {
                    column.innerHTML = "total";
                }
                if (j == 0 && i != 0) {
                    column.innerHTML = "player" + i;
                }
                if (i == 0 && j != 0 && j < 7) {
                    column.innerHTML = "Ball" + j;
                }
                if (i == 0 && j == 0) {
                    column.innerHTML = "Team";
                }
                /*  if (i == 0 && j == 7) {
                      column.innerHTML = "Total";
                  }*/
                if (i != 0 && i < 11 && j != 0 && j < 7) {
                    var runsstr = String(runs[Math.floor(Math.random() * runs.length)]);
                    var numbers_runs = parseInt(runsstr);
                    column.innerHTML = runsstr;
                    if (runsstr == undefined) {
                        numbers_runs = 0;
                    }
                    console.log(numbers_runs);
                    sum += numbers_runs;
                    if (runsstr == "0" || j == 6) {
                        column.innerHTML = runsstr;
                        console.log("total", sum);
                        arraya.push(sum);
                        player_runs.push(sum);
                        T1_player_runs.push(sum);
                        //players_total_run.push(sum);
                        j = 6;
                        /*if(j==7){
                            column.innerHTML=String(sum);
                        }*/
                    }
                    /*  */
                }
                // console.log(array);
                //column.innerHTML="column";
                row.appendChild(column);
                tabab.appendChild(row);
                document.getElementById("team1").appendChild(tabab);
            }
        }
        console.log(arraya);
        var sum1 = arraya.reduce(function (a, b) {
            return a + b;
        }, 0);
        console.log("Team1 runs", sum1);
        x = document.getElementById("team1score").innerHTML = String(sum1);
        /* for(let k=0;k<10;k++){
             
             let row1 = document.createElement("tr");
            // let dummy:number = arraya[k];
            
             if(k==0){
                 row1.innerHTML="<b>Total</b>";
             }
             if(k!=0){
                 row1.innerHTML=String(arraya[k]);
             }
     
                 tabab.appendChild(row1);
                // tabab.setAttribute("class","col-md-4");
                
                 div.appendChild(tabab);
                // div.setAttribute("class","row");
                 document.getElementById("team1").appendChild(div);
         }*/
    }
    return tab;
}());
//console.log(JSON.stringify(players_total_run));
var tab1 = /** @class */ (function () {
    function tab1(team1_score) {
        var arraya = [];
        var k;
        k = 0;
        var players_total_run;
        for (var i = 0; i < 11; i++) {
            var runs = [0, 1, 2, 3, 4, 5, 6];
            var row = document.createElement("tr");
            var sum_1 = void 0;
            sum_1 = 0;
            for (var j = 0; j < 7; j++) {
                var column = document.createElement("td");
                if (j == 8 && i != 0) {
                    column.innerHTML = "total";
                }
                if (j == 0 && i != 0) {
                    column.innerHTML = "player" + i;
                }
                if (i == 0 && j != 0 && j < 7) {
                    column.innerHTML = "Ball" + j;
                }
                if (i == 0 && j == 0) {
                    column.innerHTML = "Team2";
                }
                /*  if (i == 0 && j == 7) {
                      column.innerHTML = "Total";
                  }*/
                if (i != 0 && i < 11 && j != 0 && j < 7) {
                    var runsstr = String(runs[Math.floor(Math.random() * runs.length)]);
                    var numbers_runs = parseInt(runsstr);
                    column.innerHTML = runsstr;
                    if (runsstr == undefined) {
                        numbers_runs = 0;
                    }
                    console.log(numbers_runs);
                    sum_1 += numbers_runs;
                    if (runsstr == "0" || j == 6) {
                        column.innerHTML = runsstr;
                        console.log("total", sum_1);
                        arraya.push(sum_1);
                        player_runs.push(sum_1);
                        T2_player_runs.push(sum_1);
                        var sum1 = arraya.reduce(function (a, b) {
                            return a + b;
                        }, 0);
                        console.log(sum1);
                        document.getElementById("team2score").innerHTML = String(sum1);
                        var team1_score_num = parseInt(team1_score);
                        if (sum1 > team1_score_num) {
                            document.getElementById("team_result").innerHTML = "<b>team2 wins</b>";
                            return;
                        }
                        if (sum1 < team1_score_num) {
                            document.getElementById("team_result").innerHTML = "<b>team1 wins</b>";
                        }
                        //players_total_run.push(sum);
                        j = 6;
                        /*if(j==7){
                            column.innerHTML=String(sum);
                        }*/
                    }
                    /*  */
                }
                // console.log(array);
                //column.innerHTML="column";
                row.appendChild(column);
                tabac.appendChild(row);
                document.getElementById("team2").appendChild(tabac);
            }
        }
        console.log(arraya);
        var sum = arraya.reduce(function (a, b) {
            return a + b;
        }, 0);
        console.log("Team2 runs", sum);
        /*for(let k=0;k<10;k++){
            
            let row1 = document.createElement("tr");
           // let dummy:number = arraya[k];
           
            if(k==0){
                row1.innerHTML="<b>Total</b>";
            }
            if(k!=0){
                row1.innerHTML=String(arraya[k]);
            }
    
                tabac.appendChild(row1);
               // tabab.setAttribute("class","col-md-4");
               
                div.appendChild(tabac);
               // div.setAttribute("class","row");
                document.getElementById("team2").appendChild(div);
        }*/
    }
    return tab1;
}());
var generate_result = /** @class */ (function () {
    function generate_result() {
        var index_of_player;
        index_of_player = player_runs.indexOf(Math.max.apply(Math, player_runs));
        var man;
        if (index_of_player < 10) {
            man = index_of_player + 1;
            document.getElementById("man_of_Match").innerHTML = "<b>Team 1<br> player</b> <b>" + man + "<br></b><b> score </b><b>" + player_runs[index_of_player] + "</b>";
        }
        if (index_of_player > 9) {
            man = index_of_player - 9;
            document.getElementById("man_of_Match").innerHTML = "<b>Team 2<br> player</b> <b>" + man + "<br></b><b> score </b><b>" + player_runs[index_of_player] + "</b>";
        }
    }
    return generate_result;
}());
var display_player_runs = /** @class */ (function () {
    function display_player_runs() {
        var total_table = document.createElement("table");
        for (var i = 0; i <= T1_player_runs.length; i++) {
            var column = document.createElement("tr");
            if (i == 0) {
                column.innerHTML = "<b>Total</b>";
            }
            if (i != 0) {
                column.innerHTML = "Player " + i + "--->" + String(T1_player_runs[i - 1]) + "  runs";
            }
            total_table.appendChild(column);
            document.getElementById("team1_total").appendChild(total_table);
        }
    }
    return display_player_runs;
}());
var display_player_T2_runs = /** @class */ (function () {
    function display_player_T2_runs() {
        var total_table = document.createElement("table");
        for (var i = 0; i <= T2_player_runs.length; i++) {
            var column = document.createElement("tr");
            if (i == 0) {
                column.innerHTML = "<b>Total</b>";
            }
            if (i != 0) {
                column.innerHTML = "Player " + i + "--->" + String(T2_player_runs[i - 1]) + "  runs";
            }
            total_table.appendChild(column);
            document.getElementById("team2_total").appendChild(total_table);
        }
    }
    return display_player_T2_runs;
}());
var team1 = function () {
    var taba = new tab();
    var Total_tab1 = new display_player_runs();
    hit2.style.visibility = 'visible';
    hit1.style.visibility = 'hidden';
};
var team2 = function () {
    var team1_score = (document.getElementById("team1score")).innerHTML;
    // alert(team1_score);
    var tabc = new tab1(team1_score);
    var Total_tab1 = new display_player_T2_runs();
    hit2.style.visibility = 'hidden';
    gresult.style.visibility = 'visible';
};
var generate_output = function () {
    var result = new generate_result();
};
function testJS() {
    var team1_score = (document.getElementById("team1score")).innerHTML;
    document.getElementById('team1score_2').innerHTML = team1_score;
}
function NewTab() {
    window.open("\index_cricket_01.html", "_blank");
}
//let tab2 = new tab1();
//let tabb = new tab();
//let table2 = new tab();
/* if(j!=0 && j<7){
            if(r==undefined){
                runsstr=="0";
            }
          sum+=parseInt(runsstr);
          if(i!=0 && i<11){
             players_total_run.push(sum);
             console.log(players_total_run);
           }
         }
         console.log(sum); */ 
