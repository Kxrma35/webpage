// DOM elements
const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const content = document.getElementById("content");
const greetingEl = document.getElementById("greeting");
const adultMessage = document.getElementById("adultMessage");
const ageInMonthsEl = document.getElementById("ageInMonths");
const quotesEl = document.getElementById("quotes");
const resetBtn = document.getElementById("resetBtn");
const backToForm = document.getElementById("backToForm");

// Load user data if available
const savedUser = JSON.parse(localStorage.getItem("user"));
if (savedUser) {
  showContent(savedUser.name, savedUser.age);
}

// Handle form submission
userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value);

  if (!name || isNaN(age)) return;

  localStorage.setItem("user", JSON.stringify({ name, age }));
  showContent(name, age);
});

// Show personalized content
function showContent(name, age) {
  // Hide form, show content
  userForm.classList.add("hidden");
  content.classList.remove("hidden");
  backToForm.classList.remove("hidden");

  // Greeting
  greetingEl.textContent = `Hello ${name}, welcome!`;

  // Adult content check
  if (age >= 18) {
    adultMessage.textContent = "You can access adult content.";
  } else {
    adultMessage.textContent = "You are too young for adult content.";
  }

  // Age in months
  ageInMonthsEl.textContent = `You are ${age * 12} months old.`;

  // Motivational quotes
  quotesEl.innerHTML = "";
  for (let i = 0; i < 1; i++) {
    const p = document.createElement("p");
    p.textContent = '"Your past does not define who you are!"';
    quotesEl.appendChild(p);
  }
}

// Reset button
resetBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  content.classList.add("hidden");
  userForm.classList.remove("hidden");
  backToForm.classList.add("hidden");
  userForm.reset();
});

// Back to form link
backToForm.addEventListener("click", () => {
  content.classList.add("hidden");
  userForm.classList.remove("hidden");
  backToForm.classList.add("hidden");
});
