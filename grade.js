let studentmark 
function score(studentmark) {
  if (studentmark < 50) {
    output = "student grade is F";
  } else if (studentmark >= 30 && studentmark <= 40) {
    output = "student grade is E";
  } else if (studentmark >= 50 && studentmark <= 60) {
    output = "student grade is D";
  } else if (studentmark >= 70 && studentmark <= 80) {
    output = "student grade is C";
  } else if (studentmark >= 90 && studentmark <= 100) {
    output = "student grade is B";
  } else {
    output = "student grade is A";
  }
  return output;
}
var result = score(studentmark);
console.log(result);