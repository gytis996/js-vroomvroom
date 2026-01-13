import { fetchAllCars } from "./utils/fetch.js";

const productsWrapper = document.getElementById("products-wrapper");

const cars = await fetchAllCars();

cars.forEach((c) => {
  const card = document.createElement("a");
  card.classList.add("card");
  card.href = `aboutCar/index.html?id=${c.id}`;

  const title = document.createElement("h2");
  title.innerText = c.name;

  const price = document.createElement("p");
  price.innerText = `€${c.price}`;

  const img = document.createElement("img");
  img.src = c.imgUrl;
  img.alt = c.name;

  card.append(img, title, price);
  productsWrapper.appendChild(card);
});

const burger = document.querySelector(".burger-icon");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-open");
});
