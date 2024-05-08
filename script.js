// Variable initialization
const plusBtn = document.querySelectorAll(".dropdown-list .list-item img");
const faqAns = document.querySelectorAll(".dropdown-list .list-item .ans");

window.onload = () => {
    plusBtn[0].parentElement.classList.add("active");
    plusBtn[0].src = "./assets/images/icon-minus.svg";
    faqAns[0].style.display = "block";
}

plusBtn.forEach((item, index) => {
    item.addEventListener("click", () => {

        if(!item.parentElement.classList.contains("active")){
            item.parentElement.classList.add("active");
            item.src = "./assets/images/icon-minus.svg";
            faqAns[index].style.display = "block";
        }else{
            item.parentElement.classList.remove("active");
            item.src = "./assets/images/icon-plus.svg";
            faqAns[index].style.display = "none";
        }
    })
})