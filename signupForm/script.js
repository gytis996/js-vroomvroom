const form = document.getElementById("signup-form");
const message = document.getElementById("message");
const burger = document.querySelector(".burger-icon");
const navLinks = document.querySelector(".nav-links");
const backBtn = document.getElementById("back-btn");

form.addEventListener("submit", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = {
    name,
    email,
    password,
  };

  localStorage.setItem("user", JSON.stringify(user));

  message.textContent = "Signup successful!";
  message.style.color = "green";

  setTimeout(() => {
    window.location.href = "../index.html";
  }, 1500);
});

backBtn.addEventListener("click", () => {
  window.location.href = "../index.html";
});

burger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-open");
});
