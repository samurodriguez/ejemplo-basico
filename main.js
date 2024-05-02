"use strict";

const btn = document.querySelector("button");
// const section = document.querySelector("section");

btn.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("button", event);

  btn.classList.toggle("like");

  //   if (btn.className === "like") {
  //     btn.className = "";
  //   } else {
  //     btn.className = "like";
  //   }
});

// section.addEventListener("click", (event) => {
//   console.log("section", event);
// });

// document.addEventListener("click", (event) => {
//   console.log("document", event.target);
// });

const clearBtn = document.querySelector(".clear");
const text = document.querySelector(".text");

clearBtn.addEventListener("click", () => {
  text.textContent = Math.random();
});
