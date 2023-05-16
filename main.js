// =========================> Check The Ids

let category = document.getElementById("category");
let title = document.getElementById("title");
let price = document.getElementById("price");
let tax = document.getElementById("tax");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let create = document.getElementById("create");
let count = document.getElementById("count");
let search = document.getElementById("search");
let mood = 'creation';
let temp;

// console.log(title, category, price, tax, ads, discount, total, count, search);


// // =========================> Create Btn
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

// // =========================> Btn By Other Way
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

// =========================> Operation


function operation() {
    if (price.value != '') {
        let resuletOperation = (+price.value + +tax.value + +ads.value) - +discount.value;
        total.innerHTML = resuletOperation;
        total.style.color = '#00ff00';
    } else {
        total.innerHTML = '';
        total.style.color = '#ff0000';
    }
}


// =========================> Create 
let dataArray;
if (localStorage.dataStore != null) {
    dataArray = JSON.parse(localStorage.dataStore);
} else {
    dataArray = [];
}

create.onclick = function () {
    let dataObject = {
        category: category.value,
        title: title.value,
        price: price.value,
        tax: tax.value,
        ads: ads.value,
        count: count.value,
        discount: discount.value,
        total: total.innerHTML,
    };

    localStorage.setItem('dataStore', JSON.stringify(dataArray));
    total.style.color = '#ff0000';

    //=========================>  Count
    if (mood === 'creation') {
        if (dataObject.count > 1) {
            for (let i = 0; i < dataObject.count; i++) {
                dataArray.push(dataObject);
            }
        } else {
            dataArray.push(dataObject);
        }
    } else {
        dataArray[temp] = dataObject
        mood = 'creation';
        create.innerHTML = 'Create';
        count.style.display = 'block';
    }
    localStorage.setItem('dataStore', JSON.stringify(dataArray));
    clear();
    displayData();
}

// =========================> Clear Inputs
function clear() {
    category.value = '';
    title.value = '';
    price.value = '';
    tax.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
};


// =========================> Display Data

// let tboody = document.getElementById('tbody');

function displayData() {
    let display = '';
    for (let i = 0; i < dataArray.length; i++) {
        display += `
        <tr>
            <td>${i}</td>
            <td>${dataArray[i].category}</td>
            <td>${dataArray[i].title}</td>
            <td>${dataArray[i].price}</td>
            <td>${dataArray[i].tax}</td>
            <td>${dataArray[i].ads}</td>
            <td>${dataArray[i].discount}</td>
            <td>${dataArray[i].total}</td>
            <td><button id="update" onclick="upDate (${i})" >update</button></td>
            <td><button id="delete" onclick="deleteBtn(${i})">delete</button></td>
        </tr>
            `
    }
    document.getElementById('tbody').innerHTML = display;

    let DellAllBtn = document.getElementById('deleteAll1');
    if (dataArray.length > 0) {
        DellAllBtn.innerHTML =
            `
            <button onclick='deleteAll ()' > Delete All Data : ( ${dataArray.length} )</button>
         
            `
    } else {
        DellAllBtn.innerHTML = '';
    }
}
displayData();

// =========================> Delete Btn

function deleteBtn(i) {
    dataArray.splice(i, 1).value;
    localStorage.dataStore = JSON.stringify(dataArray);
    displayData();
}

// =========================> Delete All Btn

function deleteAll() {
    dataArray.splice(0);
    localStorage.clear();
    displayData();
}

// =========================> Up Date

function upDate(i) {
    // console.log(i);
    category.value = dataArray[i].category;
    title.value = dataArray[i].title;
    price.value = dataArray[i].price;
    tax.value = dataArray[i].tax;
    ads.value = dataArray[i].ads;
    discount.value = dataArray[i].discount;
    // total.value = dataArray[i].total;
    operation();
    count.style.display = 'none';
    create.innerHTML = "Update";
    mood = 'upDate';
    temp = i;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


