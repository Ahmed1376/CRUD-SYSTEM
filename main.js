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
    // if (price === price.value)                          
    if (price.value != '') {
        let totalSum = (+price.value + +tax.value + +ads.value) - discount.value;
        total.innerHTML = totalSum;
        // totalSum = total.innerHTML;    ======> does not work
        total.style.color = 'rgb(0, 255, 4)'
    } else total.style.color = ' #ff0505'
};

// =================> CREATE THE DATA 
let dataArray;
if (localStorage.ahmedStore != null) {
    dataArray = JSON.parse(localStorage.ahmedStore);
} else {
    dataArray = [];
}

create.onclick = function () {
    objProduct = {
        title: title.value,
        category: category.value,
        price: price.value,
        tax: tax.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
    };
    dataArray.push(objProduct)
    localStorage.setItem('ahmedStore', JSON.stringify(dataArray));
    console.log(objProduct);
    clearInputes();
    dataShow();
}
// ====================> clear
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
// localStorage.removeItem('product');

// =========================================================================
function dataShow() {
    let theTable = '';
    for (let i = 0; i < dataArray.length; i++) {

        theTable += `

<tr>
        <td>${i}</td>
        <td>${dataArray[i].title}</td>
        <td>${dataArray[i].category}</td>
        <td>${dataArray[i].price}</td>
        <td>${dataArray[i].tax}</td>
        <td>${dataArray[i].ads}</td>
        <td>${dataArray[i].discount}</td>
        <td>${dataArray[i].total}</td>
        <td><button>UPDATE</button></td>
        <td><button>DELETE</button></td>
 </tr>
 `

    }

    document.getElementById('tbody1').innerHTML = theTable;
}
dataShow();
// ===============================
// function dataShow() {
//     let theTable = '';
//     for (let i = 0; i < allPro.length; i++) {
//         // theTable = allPro[i].title;
//         // console.log(theTable);
//         theTable += `
//                 <tr>
//                 <td>${i}</td>
//                 <td>${allPro[i].title}</td>
//                 <td>${allPro[i].category}</td>
//                 <td>${allPro[i].price}</td>
//                 <td>${allPro[i].tax}</td>
//                 <td>${allPro[i].ads}</td>
//                 <td>${allPro[i].discount}</td>
//                 <td>${allPro[i].total}</td>
//                 <td><button>UPDATE</button></td>
//                 <td><button>DELETE</button></td>
//             </tr>
//          `
//     }
//     document.getElementById('tbody1').innerHTML = theTable;
// }
// dataShow();