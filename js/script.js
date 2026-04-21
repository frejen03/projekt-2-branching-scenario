const btns = document.querySelectorAll(".btn"); //Denne her variabel gælder for alle elementer, som har class'en "btn"
// Test ved at bruge "undersøg" i browser --> åben console --> søg btns --> se dem dukke op

const stages = document.querySelectorAll(".stage");

const showStage = (index) => {
    // fjern active fra alle
    for (const stage of stages) {
        stage.classList.remove("active");
    }
}

    // tilføj active til den ønskede
    stages[index].classList.add("active");

const nextStage = (e) => {
    switch(e.target.textContent) {
        
        case "Start":
            showStage(1); //gå til stage 1
        break;

        case "Option 1":
            alert("Du valgte option 1");
        break;

        case "Option 2":
            alert("Du valgte option 2");
        break;

        case "Option 3":
            alert("Du valgte option 3");
        break;

        default: console.log("Don't Know"); //Fejlmeddelelse til os selv, hvis den ikke "kender" knappen
    }
}

for (const btn of btns) { //For hver element, der har denne class (btn), skal der ske noget
    btn.addEventListener("click", nextStage); //Hvad den skal lytte efter? = "click" --> Hvad skal den gøre? = funktionen "nextStage"
} 
