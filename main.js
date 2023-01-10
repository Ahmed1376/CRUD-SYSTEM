//========> create scroll BTN
let scrolBtn = document.querySelector(".up");
// console.log(this.scrollY);

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

//  ========> get the ids
let title = document.getElementById("title");
let category = document.getElementById("category");
let price = document.getElementById("price");
let tax = document.getElementById("tax");
let ads = document.getElementById("ads")
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.querySeletotalctor("count");
let createBTN = document.getElementById("createBTN");
// console.log(title, category, total, create);

// ========> count the price => total
// function theTotal() {
//     if (price.value != " ") {
//         let result = (+price.value + +tax.value + +ads.value) - +discount.value;
//         total.innerHTML = result;
//     }
/// ====> play by JS to get same result

// function theTotal() {
//     total.innerHTML = (+price.value + +tax.value + +ads.value) - +discount.value;
// }

// =====> 
// }
// let theTotal = function () {
//     console.log("test")
//     if (price.value != "") {
//         let totalOperation = (+price.value + +tax.value + +ads.value) - +discount.value;
//         total.innerHTML = totalOperation;
//     }
// }
// ===========> try another if condation way
function theTotal() {

    if (price.value = price.value)// ===> just to make sure to fill the price input
    {
        totalOperation = (+price.value + +tax.value + +ads.value) - +discount.value;
        total.innerHTML = totalOperation;
    }
}
