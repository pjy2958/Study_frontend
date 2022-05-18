document.addEventListener("DOMContentLoaded", () => {
    // alert("잘 들어오나 확인");
    const boxEle = document.querySelector("#box");
    const colorBtnEle = document.querySelector(".colorBtn");
    const btnEle = document.querySelector("button");

    boxEle.addEventListener("click", function (e) {
        e.currentTarget.style.backgroundColor = "red";
    });
    colorBtnEle.addEventListener("click", function (e) {
        e.currentTarget.style.backgroundColor = "blue";
    });
    btnEle.addEventListener("click", function (e) {
        e.currentTarget.style.backgroundColor = "grey";
        e.currentTarget.style.padding = "10px 20px";
    });
});