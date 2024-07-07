const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});



function take(selector) {
  return document.querySelector(selector);
}

/**
 * Get all required elements
 */
const nameElement = take(".small_user");
const emailElement = take(".small_email");
const subjectElement = take(".small_subject");
const messageElement = take(".small_message");
const smallbtn = take(".small_btn");

/**
 * Event listener for the small button
 */
smallbtn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = nameElement.value.trim();
  const email = emailElement.value.trim();
  const subject = subjectElement.value.trim();
  const message = messageElement.value.trim();

  // Validate inputs
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "parthabatabyal30032004@gmail.com",
    Password: "853B96803DD5858544539D81A40EC96E2EA9",
    To: "parthabatabyal30032004@gmail.com",
    From: email,
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
});
