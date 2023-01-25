// ==========> check the Ids

let title = document.getElementById("title");
let category = document.getElementById("category");
let price = document.getElementById("price");
let tax = document.getElementById("tax");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let search = document.getElementById("search");
// console.log(title, category, price, tax, ads, discount, total, count, search);

// ==============> create Btn
let scrBtn = document.querySelector(".up");
// console.log(this.scrollY);

// window.onscroll = function () {
//     if (this.scrollY >= 150) {
//         scrBtn.classList.add("show");

//     } else scrBtn.classList.remove("show");
// }
// scrBtn.onclick = function () {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     })
// };
// ================

let btnScrollY = document.getElementById("upBtn");
// console.log(this.scrollY);

window.onscroll = function () {
    if (this.scrollY >= 180) {
        btnScrollY.style.display = 'block';
    } else btnScrollY.style.display = 'none';
}
btnScrollY.onclick = function () {
    window.scrollTo({
        top: 0, behavior: 'smooth'
    })
};

