// ==========> check the Ids

let title = document.getElementById("title");
let category = document.getElementById("category");
let price = document.getElementById("price");
let tax = document.getElementById("tax");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let create = document.getElementById("create");
let count = document.getElementById("count");
let search = document.getElementById("search");
// console.log(title, category, price, tax, ads, discount, total, count, search);

// ==============> create Btn
// let scrBtn = document.getElementById("upBtn");
let scrBtn = document.querySelector(".up");
// console.log(this.scrollY);
window.onscroll = function () {
    if (this.scrollY >= 150) {
        scrBtn.classList.add("show");
    } else scrBtn.classList.remove("show");
}
scrBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};

// ================  Btn by other way
// let btnScrollY = document.getElementById("upBtn");
// console.log(this.scrollY);
// window.onscroll = function () {
//     if (this.scrollY >= 180) {
//         btnScrollY.style.display = 'block';
//     } else btnScrollY.style.display = 'none';
// }
// btnScrollY.onclick = function () {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     })
// };

// ==============> operation 
function totalOperation() {
    // if (price.value === price.value) 
    // if (price.value != '')                           
    if (price.value != null) {
        let totalSum = (+price.value + +tax.value + +ads.value) - discount.value;
        total.innerHTML = totalSum;
        // totalSum = total.innerHTML;    ======> does not work
        total.style.color = 'rgb(0, 255, 4)'
    } else total.style.color = ' #ff0505'
};

// =================> CREATE THE DATA 
allProducts = [];   //// the problem is JS read the code from up to down, so when I click the      Btn create will save only the last values AS the array is located up and empety !!.
if (localStorage.product != null) {
    allProducts = JSON.parse(localStorage.product)
} else {
    allProducts = []
};

create.onclick = function () {
    let typeDevice = {
        title: title.value,
        category: category.value,
        price: price.value,
        tax: tax.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
    };
    allProducts.push(typeDevice);
    localStorage.product = JSON.stringify(allProducts);

};

// localStorage.clear();
// localStorage.removeItem('AhmedDiab');









