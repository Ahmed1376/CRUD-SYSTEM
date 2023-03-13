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
//     if (this.scrollY >= 150) {
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
    if (price.value != '') {
        let totalSum = (+price.value + +tax.value + +ads.value) - discount.value;
        total.innerHTML = totalSum;
        // totalSum = total.innerHTML;    ======> does not work
        total.style.color = 'rgb(0, 255, 4)'
    } else total.style.color = ' #ff0505'
};

// =================> CREATE THE DATA 
allPro = [];   //// the problem is JS read the code from up to down, so when I click the Btn create will save only the last values AS the array is located up and empety !!.
if (localStorage.proStore != null) {
    allPro.push(JSON.parse(localStorage.proStore));
}

create.onclick = function () {
    let typeDevice = {
        theTitle: title.value,
        theCategory: category.value,
        thePrice: price.value,
        tax: tax.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,

    }
    allPro.push(typeDevice);
    // localStorage.productTv = JSON.stringify(allPro);
    // localStorage.productMobile = JSON.stringify(allPro);
    localStorage.setItem('proStore', JSON.stringify(allPro));
    clearInputes();

};

function clearInputes() {
    title.value = '';
    category.value = ""
    price.value = '';
    tax.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    search.value = '';
}
// localStorage.clear();

// localStorage.removeItem('productLap');

// ======> function to clear the inputs'data [ canceled and replaced by HTML reset]
// console.log(localStorage.getItem(JSON.parse(proStore)));
console.log(allPro);

