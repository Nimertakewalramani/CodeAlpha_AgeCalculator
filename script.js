function calculateAge() {
  let dob = document.getElementById("dob").value;

  if (dob === "") {
    document.getElementById("result").innerText = "Please select your date of birth.";
    return;
  }

  let today = new Date();
  let birthDate = new Date(dob);

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    let daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    ageDays += daysInPrevMonth;
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  let message =
    "You are " + ageYears + " years, " + ageMonths + " months, and " + ageDays + " days old.";
  document.getElementById("result").innerText = message;
}
