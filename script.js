window.addEventListener("scroll", function () {
let header = document.getElementById("myHeader");
if (window.scrollY > 155 ){
    header.classList.add("scrolled");
} else {
    header.classList.remove("scrolled");
}
});