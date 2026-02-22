// DOM elements
const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const content = document.getElementById("content");
const greeting = document.getElementById("greeting");
const adultMessage = document.getElementById("adultMessage");
const ageInMonths = document.getElementById("ageInMonths");
const quotesContainer = document.getElementById("quotes");
const resetBtn = document.getElementById("resetBtn");
const backToForm = document.getElementById("backToForm");

// Motivational quotes array
const quotes = [
  "Keep pushing forward! You got this!",
  "Believe in yourself and all that you are.",
  "You can always achieve what you want and your age will never limit you!",
  "Stay strong!"
];

// Save user info in localStorage
function saveUser(name, age) {
  const user = { name, age: parseInt(age) };
  localStorage.setItem("user", JSON.stringify(user));
  return user;
}