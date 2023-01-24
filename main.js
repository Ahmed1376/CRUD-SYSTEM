// ==========> check the Ids

// let title = document.getElementById("title");
// let category = document.getElementById("category");
// let price = document.getElementById("price");
// let tax = document.getElementById("tax");
// let ads = document.getElementById("ads");
// let discount = document.getElementById("discount");
// let total = document.getElementById("total");
// let count = document.getElementById("count");
// let search = document.getElementById("search");
// console.log(title, category, price, tax, ads, discount, total, count, search);
// ==============> create Btn

let scrolBtn = document.getElementById(".upBtn")
// console.log(this.scrollY);
// window.onscroll = function () {
//     if (this.scrollY >= 300) {
//         up.classList.add("show")
//     } else
//         up.classList.remove("show")
// };

// ==========
window.onscroll = function () {
    if (this.scrollY >= 200) {
        scrolBtn.classList.add("show");

    } else scrolBtn.classList.remove("show");
}
scrolBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};
// ================
