// // -----1----
// // Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// // <div id="text"> зникав.

// const textEl = document.getElementById("text");
// const button = document.querySelector(".btn");

// button.addEventListener("click", () => {
//   if (textEl.hidden === false) {
//     textEl.remove();
//   }
// });

// // -----2----
// // Напишіть такий код, щоб після натискання на кнопку, вона зникала.
// const button2 = document.querySelector(".btn2");

// button2.addEventListener("click", () => {
//   if (button2.hidden === false) {
//     button2.remove();
//   }
// });

// // -----3----
// // Створіть дерево, яке показує/приховує дочірні вузли при кліці

// const parent = document.querySelector(".parent");
// parent.addEventListener("click", handleClick);

// function handleClick(event) {
//   const elem = event.target;
//   const children = elem.querySelectorAll(":scope > div");
//   classCheck = event.target.querySelector("hidden");
//   children.forEach((desc) => {
//     desc.classList.toggle("hidden");
//   });
// }
