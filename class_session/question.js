function question(){
    let correctAnswers = ["option1", "option3", "option2"]; //set correct answers
    let userAnswers = []; //create array to collect user's answers

    let score = 0;
    let questions = document.getElementsByClassName("question");

    for (let i = 0; i < questions.length; i++)
    {
        let inputs = questions[i].getElementsByTagName("input");
        let answerFound = false; // add this variable to track if user selected an answer

        for (let j = 0; j < inputs.length; j++)
        {
            if (inputs[j].checked) // traps the exact option the user checked
            {
                userAnswers.push(inputs[j].value);
                answerFound = true;
            } 
        }

        // add default value of an empty string if user did not select an answer
        if (!answerFound) {
            userAnswers.push("");
        }
    }

    for (let k = 0; k < correctAnswers.length; k++)
    {
        if (userAnswers[k] === correctAnswers[k])
        {
            score++;
        }
    }

    alert("You scored " + score + " out of " + correctAnswers.length + ".");
}
