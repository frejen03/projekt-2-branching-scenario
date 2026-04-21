const btns = document.querySelectorAll(".btn"); //Denne her variabel gælder for alle elementer, som har class'en "btn"
// Test ved at bruge "undersøg" i browser --> åben console --> søg btns --> se dem dukke op

const nextStage = (e) => {
    console.log(e.target.textContent); //TEST først = console.log("Clicked")
    switch(e.target.textContent) {
        case "Start": console.log("Start was clicked");
        //HER! fortsætter vi næste gang
        break;
        default: console.log("Don't Know"); //Fejlmeddelelse til os selv, hvis den ikke "kender" knappen
    }
}

for (const btn of btns) { //For hver element, der har denne class (btn), skal der ske noget
    btn.addEventListener("click", nextStage); //Hvad den skal lytte efter? = "click" --> Hvad skal den gøre? = funktionen "nextStage"
} 
