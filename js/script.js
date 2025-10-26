console.log("script.js connected!");

//connect to DOM (resource 1)

let buttons = document.querySelectorAll(".answer-btn");

let userAnswers = {};

//Event listener (resource 2)

buttons.forEach(function(button){
    button.addEventListener("click", function() {
        //highlight (resource 2)
        let questionBlock = button.closest(".question-block");
        let allButtons = questionBlock.querySelectorAll(".answer-btn");
        allButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });
        button.classList.add("selected");
        //tracking & storing (resource 3)
        let house = button.dataset.answer;
        let questionID = button.closest(".container").id;
        userAnswers[questionID] = house;
        console.log("Selected house for", questionID, ":", house);
        onsole.log("Current answers:", userAnswers);
    });
});

//connect to DOM (resource 1), show results/count (resource2)
let showResultButton = document.getElementById("show-result");
showResultButton.addEventListener("click", function() {
    let housePoints = {
        Gryffindor: 0,
        Hufflepuff: 0,
        Ravenclaw: 0,
        Slytherin: 0
    };
for (let question in userAnswers) {
    let chosenHouse = userAnswers[question];
    housePoints[chosenHouse] += 1;
}
let topHouse = "None";
  let topCount = 0;
  for (let house in housePoints) {
    if (housePoints[house] > topCount) {
      topCount = housePoints[house];
      topHouse = house;
    }
  }

let resultContainer = document.getElementById("result-container");
let resultText = document.getElementById("result-text");


  if (topHouse === "Gryffindor") {
    resultText.textContent = "You’re a Gryffindor! Brave, daring, and full of heart.";
  } else if (topHouse === "Hufflepuff") {
    resultText.textContent = "You’re a Hufflepuff! Loyal, kind, and hardworking.";
  } else if (topHouse === "Ravenclaw") {
    resultText.textContent = "You’re a Ravenclaw! Wise, clever, and creative.";
  } else if (topHouse === "Slytherin") {
    resultText.textContent = "You’re a Slytherin! Ambitious, resourceful, and determined.";
  } else {
    resultText.textContent = "Please answer at least one question before showing results!";
  }

  resultContainer.style.display = "block";
});
