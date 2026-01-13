import { getCarById, deleteCarById } from "../utils/fetch.js";

const productsWrapper = document.getElementById("products-wrapper");
const deleteBtn = document.getElementById("delete-btn");
const backBtn = document.getElementById("back-btn");
const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const car = await getCarById(id);

const card = document.createElement("div");
card.classList.add("card");

const img = document.createElement("img");
img.src = car.imgUrl;
img.alt = car.name;

const title = document.createElement("h2");
title.innerText = car.name;

const description = document.createElement("p");
description.innerText = `About transport: ${car.description}`;

const year = document.createElement("p");
year.innerText = `Year: ${car.year}`;

const price = document.createElement("p");
price.innerText = `Price: €${car.price}`;

const location = document.createElement("p");
location.innerText = `Location: ${car.location}`;

card.append(img, title, description, year, price, location);
productsWrapper.appendChild(card);

deleteBtn.addEventListener("click", async () => {
  await deleteCarById(id);

  const messageCard = document.createElement("div");
  messageCard.classList.add("message-card");
  messageCard.innerText = "Transport deleted successfully! Redirecting...";
  document.querySelector(".page-wrapper").appendChild(messageCard);

  setTimeout(() => {
    window.location.replace("../index.html");
  }, 5000);
});

const burger = document.querySelector(".burger-icon");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-open");
});

backBtn.addEventListener("click", () => {
  window.location.href = "../index.html";
});
