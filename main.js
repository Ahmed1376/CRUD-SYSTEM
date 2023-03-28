// =========================> Check The Ids

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
// // console.log(title, category, price, tax, ads, discount, total, count, search);


// // =========================> Create Btn
// // let btnScrollY = document.getElementById("upBtn");
// // console.log(this.scrollY);
// // window.onscroll = function () {
// //     if (this.scrollY >= 150) {
// //         btnScrollY.style.display = 'block';
// //     } else btnScrollY.style.display = 'none';
// // }
// // btnScrollY.onclick = function () {
// //     window.scrollTo({
// //         top: 0,
// //         behavior: 'smooth'
// //     })
// // };


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

// // =========================> Operation
function operation() {
    if (price.value != '') {
        let resultOperation = (+price.value + +tax.value + +ads.value) - +discount.value;
        total.innerHTML = resultOperation;
        total.style.color = '#44ff00';
    } else total.style.color = '#ff0505';
}

// // =========================> Create Data In Array/Object and LocalStorage
let dataArray;
if (localStorage.storData != null) {
    dataArray = JSON.parse(localStorage.storData);
} else {
    dataArray = [];
}
create.onclick = function () {
    let dataObject = {
        title: title.value,
        category: category.value,
        price: price.value,
        tax: tax.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
    }
    dataArray.push(dataObject)
    localStorage.setItem('storData', JSON.stringify(dataArray));
    clearData();
    showAllData();
}
// console.log(dataArray);
// localStorage.clear();


// // =========================> Clear Inputs
function clearData() {
    title.value = '';
    category.value = '';
    price.value = '';
    tax.value = '';
    ads.value = '';
    discount.value = '';
    total.value = '';
    count.value = '';
}

// // =========================>  Display The Data
function showAllData() {
    let dataDisplay = '';
    for (let i = 0; i < dataArray.length; i++) {
        dataDisplay +=
            `
             <tr> 
                <td>${i}</td>
                <td>${dataArray[i].title}</td>
                <td>${dataArray[i].category}</td>
                <td>${dataArray[i].price}</td>
                <td>${dataArray[i].tax}</td>
                <td>${dataArray[i].ads}</td>
                <td>${dataArray[i].discount}</td>
                <td>${dataArray[i].count}</td>
                <td><button id="update">UPDATE</button></td>
                <td><button id="delete"  onclick="btnDel(${i})" >DELETE</button></td>
           </tr>
        `
    };
    document.getElementById('tbody1').innerHTML = dataDisplay;
    if (dataArray.length > 0) {
        document.getElementById('deleteAll').style.display = 'block';
    } else {
        document.getElementById('deleteAll').style.display = 'none';
    }
}
showAllData();

// // =========================> Delete Btn By Raw
function btnDel(i) {
    dataArray.splice(i, 1);
    localStorage.storData = JSON.stringify(dataArray);
    showAllData();
}

// // =========================> Delete All Data Btn
let bigBtnDelete = document.getElementById('deleteAll');
bigBtnDelete.onclick = function () {
    dataArray.splice(0);
    localStorage.clear();
}

// // =========================> Count


