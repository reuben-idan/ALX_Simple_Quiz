function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer was selected
    if (selectedRadio) {
        const userAnswer = selectedRadio.value;
        const feedbackElement = document.getElementById('feedback');
        
        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        // If no answer was selected
        const feedbackElement = document.getElementById('feedback');
        feedbackElement.textContent = "Please select an answer before submitting.";
        feedbackElement.style.color = "red";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
