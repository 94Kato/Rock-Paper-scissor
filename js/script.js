let Player = 0 ; 
let PC = 0 ;
let x;
let arrayList = ["R", "P", "S"];
let R = "R";
let P = "P";
let S = "S";

function imageClicked (x) {
    
    document.getElementById("result").textContent = "";

    if ( Player < 5 && PC < 5) {
        if (x == "R") {
            let randomIndex = Math.floor(Math.random() * arrayList.length);
            let randomArray = arrayList[randomIndex];

            if (randomArray == "R") {
                document.getElementById("result").textContent = "TIE";
            }
            else if (randomArray == "P") {
                PC++;
                document.getElementById("score PC").textContent = PC;
                
            }
            else {
                Player++;
                document.getElementById("score Player").textContent = Player;
            }


        } else if (x == "P") {
            let randomIndex = Math.floor(Math.random() * arrayList.length);
            let randomArray = arrayList[randomIndex];

            if (randomArray == "P") {
                document.getElementById("result").textContent = "TIE";
            }
            else if (randomArray == "S") {
                PC++;
                document.getElementById("score PC").textContent = PC;
            }
            else {
                Player++;
                document.getElementById("score Player").textContent = Player;
            }


        } else {
            let randomIndex = Math.floor(Math.random() * arrayList.length);
            let randomArray = arrayList[randomIndex];

            if (randomArray == "S") {
                document.getElementById("result").textContent = "TIE";
            }
            else if (randomArray == "R") {
                PC++;
                document.getElementById("score PC").textContent = PC;
            }
            else {
                Player++;
                document.getElementById("score Player").textContent = Player;
            }
        }
    } if (Player == 5 && PC != 5) {
        document.getElementById("result").textContent = "You Win";
        document.getElementById("reset").textContent ="Play Again";
        document.getElementById("reset").style.display="block";

        document.getElementById("reset").style.visibility = "visible";
        
      

    } if (PC == 5 && Player != 5) {
        document.getElementById("result").textContent = "You Lose";
        document.getElementById("reset").textContent ="Play Again";
        document.getElementById("reset").style.display="block";

        document.getElementById("reset").style.visibility = "visible";
       
      
        
      
    }


}

function reset() {
    Player = 0;
    PC = 0;
    document.getElementById("score Player").textContent = Player;
    document.getElementById("score PC").textContent = PC;
    document.getElementById("reset").textContent ="";
    document.getElementById("result").textContent = "";
    document.getElementById("reset").style.display="noun";
    document.getElementById("reset").style.visibility = "hidden";
    
   
    
}

