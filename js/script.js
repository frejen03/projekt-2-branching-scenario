// ==================== HENT ELEMENTER ==================== //

// Henter alle knapper med class "btn"
const btns = document.querySelectorAll(".btn");

// Henter alle "stages" (sektioner)
const stages = document.querySelectorAll(".stage");


// ==================== FUNKTION: VIS STAGE ==================== //

const showStage = (index) => {
    // Loop igennem alle stages og fjern "active"
    for (const stage of stages) {
        stage.classList.remove("active");
    }

    // Tilføj "active" til den stage vi vil vise
    stages[index].classList.add("active");
};


// ==================== FUNKTION: NÅR DER KLIKKES ==================== //

const nextStage = (e) => {

    // Henter teksten fra den knap der blev klikket
    const text = e.target.textContent.trim();

    // Switch bruges til at reagere forskelligt afhængig af knap
    switch(text) {

        case "Start":
            // Gå til næste stage (index 1)
            showStage(1);
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

        default:
            // Hvis noget ikke matcher
            console.log("Don't know");
    }
};


// ==================== EVENT LISTENERS ==================== //

// For hver knap → lyt efter klik
for (const btn of btns) {
    btn.addEventListener("click", nextStage);
}