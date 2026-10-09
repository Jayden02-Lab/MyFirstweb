/* =========================================================
   ICT251 Activity 3 - Interactive Personal Website
   Author: Mukuka Patrick Mwaba
   File: js/script.js
   Description: JavaScript features for the personal website
   ========================================================= */

/* ---------------------------------------------------------
   FEATURE 1: Theme Switch (light / dark mode)
   --------------------------------------------------------- */
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    if (themeToggle) themeToggle.textContent = "☀️ Light Mode";
  } else {
    document.body.classList.remove("dark-theme");
    if (themeToggle) themeToggle.textContent = "🌙 Dark Mode";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    const isDark = document.body.classList.contains("dark-theme");
    applyTheme(isDark ? "light" : "dark");
  });
}

/* ---------------------------------------------------------
   FEATURE 2: Expandable Project Details
   --------------------------------------------------------- */
const toggleButtons = document.querySelectorAll(".toggle-details");

toggleButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const card = button.closest(".project-card");
    const details = card.querySelector(".project-details");
    if (!details) return;

    const isHidden = details.hasAttribute("hidden");
    if (isHidden) {
      details.removeAttribute("hidden");
      button.textContent = "Hide Details";
    } else {
      details.setAttribute("hidden", "");
      button.textContent = "Show Details";
    }
  });
});

/* ---------------------------------------------------------
   FEATURE 3: Study Hours Calculator
   --------------------------------------------------------- */
const calcButton = document.getElementById("calculateHours");
const hoursInput = document.getElementById("hoursPerDay");
const daysInput = document.getElementById("daysPerWeek");
const calcResult = document.getElementById("calcResult");

function calculateStudyHours() {
  if (!hoursInput || !daysInput || !calcResult) return;

  const hours = parseFloat(hoursInput.value);
  const days = parseInt(daysInput.value, 10);

  if (isNaN(hours) || hours < 0) {
    calcResult.textContent = "Please enter valid hours per day (0 or more).";
    return;
  }
  if (isNaN(days) || days < 1 || days > 7) {
    calcResult.textContent = "Days per week must be between 1 and 7.";
    return;
  }

  const total = hours * days;
  calcResult.textContent = "You plan to study " + total + " hours per week.";
}

if (calcButton) {
  calcButton.addEventListener("click", calculateStudyHours);
}

/* ---------------------------------------------------------
   FEATURE 4: Contact Form Validation + Preview (compulsory)
   --------------------------------------------------------- */
const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("form-feedback");
const preview = document.getElementById("form-preview");

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const topic = document.getElementById("topic").value.trim();
    const message = document.getElementById("message").value.trim();

    const errors = [];

    if (name === "") errors.push("Name cannot be empty or spaces only.");
    if (email === "") {
      errors.push("Email cannot be empty.");
    } else if (!isValidEmail(email)) {
      errors.push("Please enter a valid email address.");
    }
    if (message === "") errors.push("Message cannot be empty or spaces only.");

    if (errors.length > 0) {
      feedback.textContent = errors.join(" ");
      feedback.style.color = "red";
      preview.textContent = "";
      return;
    }

    feedback.textContent = "Your data was validated successfully.";
    feedback.style.color = "green";

    preview.textContent =
      "Name: " + name +
      " | Email: " + email +
      " | Topic: " + (topic || "(no topic)") +
      " | Message: " + message;

    contactForm.reset();
  });
}