function submitAnswers() {
    var q1 = document.getElementsByName("q1");
    var q2 = document.getElementsByName("q2");
    var q3 = document.getElementsByName("q3");
    var score = 0;
    
    // Check answer to question 1
    if (q1[1].checked) {
      score++;
    }
    
    // Check answer to question 2
    if (q2[2].checked) {
      score++;
    }
    
    // Check answer to question 3
    if (q3[0].checked) {
      score++;
    }
    
    // Display score
   alert("you scored " + score + "/3")
  }
  