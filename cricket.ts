interface criconfig {

    players: [];
    balls: [];
}
let x:string;
let tabab = document.createElement("table");

let hit2 = document.getElementById('hit2');
let hit1 = document.getElementById('hit1');
let gresult = document.getElementById('gresult');
hit2.style.visibility = 'hidden';
gresult.style.visibility= 'hidden';

/*for (let i = 0; i < 11; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 8; j++) {
        let column = document.createElement("td");
        row.appendChild(column);
                tabab.appendChild(row);
                document.body.appendChild(tabab);

    }
}*/
let player_runs:  number[] = [];
let T1_player_runs:  number[] = [];
let T2_player_runs:  number[] = [];

let div = document.createElement("div");
let tabac = document.createElement("table");
class tab {



    constructor() {
        let arraya: number[] = [];
        let k: number;
        k = 0;
        let players_total_run: number[];
        for (let i = 0; i < 11; i++) {
            let runs = [0, 1, 2, 3, 4, 5, 6];
           let row = document.createElement("tr");
            let sum: number;
            sum = 0;


            for (let j = 0; j < 7; j++) {
                
               let column = document.createElement("td");
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
                    let runsstr = String(runs[Math.floor(Math.random() * runs.length)]);
                    let numbers_runs = parseInt(runsstr);


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
        var sum1 = arraya.reduce(function(a, b){
            return a + b;
        }, 0);
        console.log("Team1 runs",sum1);
       x = document.getElementById("team1score").innerHTML=String(sum1);
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

}
//console.log(JSON.stringify(players_total_run));
class tab1 {



    constructor(team1_score:string) {
        let arraya: number[] = [];
        let k: number;
        k = 0;
        let players_total_run: number[];
        for (let i = 0; i < 11; i++) {
            let runs = [0, 1, 2, 3, 4, 5, 6];
           let row = document.createElement("tr");
            let sum: number;
            sum = 0;


            for (let j = 0; j < 7; j++) {
                
               let column = document.createElement("td");
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
                    let runsstr = String(runs[Math.floor(Math.random() * runs.length)]);
                    let numbers_runs = parseInt(runsstr);


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
                        T2_player_runs.push(sum);

                        let sum1 = arraya.reduce(function(a, b){
                            return a + b;
                        }, 0);
                        console.log(sum1);
                        document.getElementById("team2score").innerHTML=String(sum1);
                        let team1_score_num=parseInt(team1_score);
                        if(sum1>team1_score_num){
                            document.getElementById("team_result").innerHTML="<b>team2 wins</b>";
                            return;
                        }
                        if(sum1<team1_score_num){
                            document.getElementById("team_result").innerHTML="<b>team1 wins</b>";
                            
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
        var sum = arraya.reduce(function(a, b){
            return a + b;
        }, 0);
        console.log("Team2 runs",sum);
        
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

}

class generate_result{
    constructor(){
    let index_of_player:number;
     index_of_player = player_runs.indexOf(Math.max(...player_runs));
     let man:number;
     if(index_of_player < 10){
         
         man = index_of_player+1;
        document.getElementById("man_of_Match").innerHTML="<b>Team 1<br> player</b> <b>"+man+"<br></b><b> score </b><b>"+player_runs[index_of_player]+"</b>";
       
          

     }
     if(index_of_player > 9){
         man = index_of_player-9;
         document.getElementById("man_of_Match").innerHTML="<b>Team 2<br> player</b> <b>"+man+"<br></b><b> score </b><b>"+player_runs[index_of_player]+"</b>";
        
        

   }

    }
}

class display_player_runs{
     constructor(){
        let total_table = document.createElement("table");

         for(let i=0;i<=T1_player_runs.length;i++){

            let column = document.createElement("tr");
            if(i==0){
                column.innerHTML = "<b>Total</b>"
            }
            if(i!=0){
            column.innerHTML="Player "+i+"--->"+String(T1_player_runs[i-1])+"  runs";
            }
            total_table.appendChild(column);
            document.getElementById("team1_total").appendChild(total_table);
               
         }
     }
}

class display_player_T2_runs{
    constructor(){
       let total_table = document.createElement("table");

        for(let i=0;i<=T2_player_runs.length;i++){

           let column = document.createElement("tr");
           if(i==0){
               column.innerHTML = "<b>Total</b>";
           }
           if(i!=0){
           column.innerHTML="Player "+i+"--->"+String(T2_player_runs[i-1])+"  runs";
           }
           total_table.appendChild(column);
           document.getElementById("team2_total").appendChild(total_table);
              
        }
    }
}


let team1 = () =>{
    let taba = new tab();
    let Total_tab1 = new display_player_runs();
    hit2.style.visibility = 'visible';
    hit1.style.visibility = 'hidden';
}

let team2 = () =>{
    let team1_score=(<HTMLElement>(document.getElementById("team1score"))).innerHTML as string;
   // alert(team1_score);

    let tabc = new tab1(team1_score);
    let Total_tab1 = new display_player_T2_runs();
    hit2.style.visibility = 'hidden';
    gresult.style.visibility= 'visible';
}

let generate_output = () =>{
      let result = new generate_result();
     
     
}
function testJS(){
    let team1_score=(<HTMLElement>(document.getElementById("team1score"))).innerHTML as string;

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