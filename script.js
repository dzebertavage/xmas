let answerField = document.querySelector("#answer");
let answer = "";
let correct = "merrychristmasiloveyou";
let submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", () => {
    console.log(answerField.value);
    let answer = answerField.value;
    if (answer === correct) {
        alert("Your third present is sleeping late! <3");
    } else {
        alert("Nice try ;)");
    }
});