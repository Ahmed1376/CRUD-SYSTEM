let scrolBtn = document.querySelector(".up");
console.log(this.scrollY);

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