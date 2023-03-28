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
        theTitle: title.value,
        theCategory: category.value,
        thePrice: price.value,
        theTax: tax.value,
        theAds: ads.value,
        theDiscout: discount.value,
        theTotal: total.value,
    }

    console.log(dataObject);

}



// // =========================> Delete All Data Btn
let bigBtnDelete = document.getElementById('deleteAll');
bigBtnDelete.onclick = function () {
    dataArray.splice(0);
    localStorage.clear();
}

// // =========================> Count
