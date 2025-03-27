document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

// Blocca i tasti F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.addEventListener("keydown", function(event) {
    if (
        event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && event.key === "I") || 
        (event.ctrlKey && event.shiftKey && event.key === "J") || 
        (event.ctrlKey && event.key === "U")
    ) {
        event.preventDefault();
    }
});

// Blocca la console aperta
(function() {
    var before = new Date().getTime();
    debugger;
    var after = new Date().getTime();
    if (after - before > 100) {
        document.body.innerHTML = "<h1>Accesso negato</h1>";
    }
})();

document.addEventListener("keydown", function(event) {
    if (event.key === "F5" || (event.ctrlKey && event.key === "r")) {
        event.preventDefault();
    }
});

// Blocca il tasto destro del mouse (context menu)
document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Impedisce l'apertura del menu contestuale
});

// Impedire l'uso di altri tasti di navigazione come F12 (DevTools)
document.addEventListener("keydown", function(event) {
    if (event.key === "F12") {
        event.preventDefault(); // Blocca l'apertura degli strumenti di sviluppo
    }
}); 




// !INDEX SCRIPT // 

const usernameWindow = document.getElementById("username-help");
const body = document.getElementById("container");
const loader = document.getElementById("loader-container");
const hiddenUser = document.getElementById("mostra-p");
const hiddenButton = document.getElementById("mostra-button");

document.addEventListener("click", function (event) {
    if (
        usernameWindow.style.display === "flex" &&
        !usernameWindow.contains(event.target) &&
        event.target.id !== "username-input" && 
        event.target.className !== "question-username" 
    ) {
        closeuser();
    }
});

function username() {
    usernameWindow.style.display = "flex";
    body.style.filter = "blur(4px)";
}

function closeuser() {
    usernameWindow.style.display = "none";
    body.style.filter = "none";
    hiddenUser.innerHTML = "*************";
}

function rivela() {
    if (hiddenUser.innerHTML === "*************") {
        hiddenUser.innerHTML = "SCLDNB3490BP2";
        hiddenButton.innerHTML = "NASCONDI USERNAME"

    }
    else {
        hiddenUser.innerHTML = "*************";
        hiddenButton.innerHTML = "RIVELA USERNAME"
    }
}


function accedi() {
    let username = document.getElementById("username-input");
    let codiceScuola = document.getElementById("codicescuola-input"); 
    let errore = document.getElementById("accesso-errore");
    let correctUsername = "SCLDNB3490BP2";

    const isInteger = /^\d+$/.test(codiceScuola.value);

    if (username.value === correctUsername && codiceScuola.value !== "" && isInteger) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("codiceScuola", codiceScuola.value);
        username.value = "";
        codiceScuola.value = "";

        body.style.filter = "blur(4px)";
        loader.style.display = "flex";
        loader.style.opacity = "1";

        setTimeout(() => {
            window.location.href = "pre-test.html";
        }, 3000);
        
    } 
    else {
        errore.style.display = "flex";
        errore.innerHTML = "Username o Codice Scuola errato. Si prega di riprovare.";
        
        setTimeout(() => {
            errore.style.display = "none";
            errore.innerHTML = "";
        }, 3500);
    }
}



// !PRE-TEST SCRIPT // 

const codScuola = document.getElementById("cod-candidato");
const userLocal = document.getElementById("user-candidato")
const codicescuolaLocal = localStorage.getItem("codiceScuola");

document.addEventListener("DOMContentLoaded", () => {
    codScuola.innerHTML = "Codice-Scuola: " + codicescuolaLocal;
    userLocal.innerHTML = "Username: " + localStorage.getItem("username");
});
    
function inizia() {

    const bodyPre = document.getElementById("contain-all");
    const loaderPre = document.getElementById("loader-container"); 

    bodyPre.style.filter = "blur(4px)";
    loaderPre.style.display = "flex";
    loaderPre.style.opacity = "1";

    setTimeout(() => {
        window.location.href = "test.html";
    }, 3000);
}


// !TEST SCRIPT //

const primaParte = document.getElementById("prima-parte");
const secondaParte = document.getElementById("seconda-parte");
const terzaParte = document.getElementById("terza-parte");
const totalParte = document.getElementById("up-sections");

const totalPrima = document.getElementById("container-all");
const totalSeconda = document.getElementById("container-all-due");
const totalTerza = document.getElementById("container-total-tre");

const warningWind = document.getElementById("warningFinestra");
const termina = document.getElementById("termina");

const terminaFinestra = document.getElementById("termina-finestra");

const imgUp = document.getElementById("img-up");


function warning() {

    primaParte.style.display = "none";
    secondaParte.style.display = "none";
    terzaParte.style.display = "none";
    warningWind.style.display = "flex";
    termina.style.display = "none";
    totalPrima.style.filter = "blur(4px)";
    totalSeconda.style.filter = "blur(4px)";
    totalTerza.style.filter = "blur(4px)";
}

function exit() {
    const loader2 = document.getElementById("loader-container");
    const bodyTest = document.getElementById("container-all");
    const upBar = document.querySelector("up-bar");

    warningWind.style.display ="none";
    bodyTest.style.filter = "blur(4px)";
    loader2.style.display = "flex";
    loader2.style.opacity = "1";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 3000);
}

function stay() {
    const warningWind = document.getElementById("warningFinestra");

    primaParte.style.display = "flex";
    secondaParte.style.display = "flex";
    terzaParte.style.display = "flex";

    warningWind.style.display = "none";
    termina.style.display = "flex";
    totalPrima.style.filter = "none";
    totalSeconda.style.filter = "none";
    totalTerza.style.filter = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    // Verifica che gli elementi esistano
    console.log("Prima parte:", primaParte);
    console.log("Seconda parte:", secondaParte);
    console.log("Terza parte:", terzaParte);
    console.log("Container prima:", totalPrima);
    console.log("Container seconda:", totalSeconda);
    console.log("Container terza:", totalTerza);

    if (primaParte && secondaParte && terzaParte) {
        // Imposta i colori iniziali
        primaParte.style.backgroundColor = "green";
        secondaParte.style.backgroundColor = "white";
        terzaParte.style.backgroundColor = "white";

        // Nascondi le altre sezioni all'avvio
        if (totalSeconda) totalSeconda.style.display = "none";
        if (totalTerza) totalTerza.style.display = "none";

        // Aggiungi gli event listener per il click
        primaParte.addEventListener("click", vaiallaprima);
        secondaParte.addEventListener("click", vaiallaseconda);
        terzaParte.addEventListener("click", vaiallaterza);
    }

    const termina = document.getElementById("termina");
    setTimeout(() => {
        termina.style.display = "flex";
    }, 3600000);
});


document.addEventListener("DOMContentLoaded", () => {
    startTimer();
});

function startTimer() {
    let totalSeconds = 60 * 60; 

    const timerDisplay = document.getElementById("timer"); 

    function updateTimer() {
        if (totalSeconds <= 0) {
            console.log("Tempo scaduto!");
            timerDisplay.textContent = "00:00:00"; 
            window.location.href = "provacompleta.html"; 
            clearInterval(timerInterval);
            return;
        }

        totalSeconds--;

        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        timerDisplay.textContent = "Tempo rimasto: " + `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    
        if (minutes < 15) {
            timerDisplay.style.color = "red";
        }
    }

    updateTimer(); 
    const timerInterval = setInterval(updateTimer, 1000); 
}

//CONTATORE PAROLE
const textarea = document.querySelector('.textarea textarea');
const wordCountDisplay = document.getElementById('word-count');
const wordLimit = 190;

textarea.addEventListener('input', () => {
    const text = textarea.value.trim();
    const wordCount = text.split(/\s+/).filter(Boolean).length;

    wordCountDisplay.textContent = wordCount;

    // Se il numero di parole supera il limite, tronca il testo
    if (wordCount >= wordLimit) {
        const words = text.split(/\s+/).slice(0, wordLimit).join(' ');
        textarea.value = words;  // Trunca il testo a 190 parole
    }
});

let confermaUscita = null; // Dichiarata con let per poterla modificare

function terminaSi() {
    confermaUscita = true;
    localStorage.setItem("esci", JSON.stringify(confermaUscita)); // Salvo come stringa JSON

    terminaFinestra.style.display = "none"; 
    loader.style.display = "flex";
    loader.style.opacity = "1";
    
    checkAnswers() // Chiude la finestra di conferma

    // Esegue il codice per terminare la prova
    terminaProvaEffettiva();
}

function terminaNo() {
    confermaUscita = false;
    localStorage.setItem("esci", JSON.stringify(confermaUscita)); // Salvo come stringa JSON

    terminaFinestra.style.display = "none"; // Chiude la finestra di conferma
    totalPrima.style.filter = "none";
    totalSeconda.style.filter = "none";
    totalTerza.style.filter = "none";
    primaParte.style.display = "flex";
    secondaParte.style.display = "flex";
    terzaParte.style.display = "flex";
    imgUp.style.visibility = "visible";
}

function terminaprova() {
    // Mostra la finestra di conferma e applica il blur
    terminaFinestra.style.display = "flex";
    totalPrima.style.filter = "blur(4px)";
    totalSeconda.style.filter = "blur(4px)";
    totalTerza.style.filter = "blur(4px)";
    primaParte.style.display = "none";
    secondaParte.style.display = "none";
    terzaParte.style.display = "none";
    imgUp.style.visibility = "hidden";

    checkAnswers()

    // Aspetta la risposta dell'utente prima di procedere
}

function terminaProvaEffettiva() {
    setTimeout(() => {
        window.location.href = "provacompleta.html";
    }, 3000);
}

function checkAnswers() {
    // Seleziona tutti gli input di tipo radio che sono stati scelti
    const selectedAnswers = document.querySelectorAll('input[type="radio"]:checked');
    let correctCount = 0;

    selectedAnswers.forEach(input => {
        // Se l'attributo data-correct è "true", significa che è la risposta corretta
        if (input.dataset.correct === "true") {
            correctCount++;
        }
    });

    // Salva il risultato nel localStorage
    localStorage.setItem("risposte-esatte", correctCount);
    return correctCount;
}

function vaiallaprima() {
    secondaParte.style.backgroundColor = "white";
    primaParte.style.backgroundColor = "green";
    terzaParte.style.backgroundColor = "white";

    totalPrima.style.display = "flex";
    totalSeconda.style.display = "none";
    totalTerza.style.display = "none";
    
}

function vaiallaseconda() {
    secondaParte.style.backgroundColor = "green";
    primaParte.style.backgroundColor = "white";
    terzaParte.style.backgroundColor = "white";

    totalPrima.style.display = "none";
    totalSeconda.style.display = "flex";
    totalTerza.style.display = "none";


}

function vaiallaterza() {
    secondaParte.style.backgroundColor = "white";
    primaParte.style.backgroundColor = "white";
    terzaParte.style.backgroundColor = "green";

    totalTerza.style.display = "flex";
    totalPrima.style.display = "none";
    totalSeconda.style.display = "none";

}
