function calculateGrade() {
    // Get subject marks from input fields
    const subject1 = parseInt(document.getElementById('subject1').value);
    const subject2 = parseInt(document.getElementById('subject2').value);
    const subject3 = parseInt(document.getElementById('subject3').value);
  
    // Calculate total marks and average
    const totalMarks = subject1 + subject2 + subject3;
    const average = totalMarks / 3;
  
    // Determine grade based on average
    let grade;
    if (average >= 90) {
      grade = 'A';
    } else if (average >= 80) {
      grade = 'B';
    } else if (average >= 70) {
      grade = 'C';
    } else if (average >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }
  
    // Display the result in the designated paragraph
    const result = document.getElementById('result');
    result.textContent = `Your average score is ${average} and your grade is ${grade}.`;
  }
  