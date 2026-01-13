import { addNewCar } from "../utils/fetch.js";
const backBtn = document.getElementById("back-btn");
const submitBtn = document.getElementById("submit-btn");
const nameInput = document.getElementById("name");
const descriptionInput = document.getElementById("description");
const yearInput = document.getElementById("year");
const priceInput = document.getElementById("price");
const locationInput = document.getElementById("location");
const imageUrlInput = document.getElementById("imgUrl");

submitBtn.addEventListener("click", async (e) => {
  const car = {
    name: nameInput.value,
    description: descriptionInput.value,
    year: yearInput.value,
    price: priceInput.value,
    location: locationInput.value,
    imgUrl: imageUrlInput.value,
  };

  const nameRegex = /^[a-zA-Z0-9 ]{2,50}$/;
  const yearRegex = /^(19|20)\d{2}-(0[1-9]|1[0-2])$/;
  const priceRegex = /^(?!0+(\.0+)?$)\d+(\.\d{1,2})?$/;
  const locationRegex = /^[\p{L} ,.'-]{2,50}$/u;

  if (!nameRegex.test(car.name)) {
    alert("Please enter a valid car name (letters, numbers, 2-50 chars).");
    return;
  }

  if (!yearRegex.test(car.year)) {
    alert("Year must be in format YYYY-MM (e.g., 2023-05).");
    return;
  }

  if (!priceRegex.test(car.price)) {
    alert("Price must be a number (up to 1 decimals).");
    return;
  }

  if (!locationRegex.test(car.location)) {
    alert("Location must be valid (letters, commas, dots, spaces).");
    return;
  }

  const carRes = await addNewCar(car);

  if (carRes) {
    const messageCard = document.createElement("div");
    messageCard.classList.add("message-card");
    messageCard.innerText = "Transport added successfully! Redirecting...";
    document.querySelector(".form").appendChild(messageCard);

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 3000);
  }
});

const burger = document.querySelector(".burger-icon");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-open");
});

backBtn.addEventListener("click", () => {
  window.location.href = "../index.html";
});
