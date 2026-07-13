const button = document.getElementById("beginButton");
const cover = document.getElementById("cover");
const page1 = document.getElementById("page1");

button.addEventListener("click", function(){

    cover.style.display = "none";

    page1.classList.remove("hidden");

    page1.classList.add("show");

});