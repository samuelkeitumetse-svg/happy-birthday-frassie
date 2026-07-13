const beginButton = document.getElementById("beginButton");
const nextButton = document.getElementById("nextButton");

const cover = document.getElementById("cover");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

beginButton.addEventListener("click", function () {
    cover.style.display = "none";

    page1.classList.remove("hidden");
    page1.classList.add("show");
});

nextButton.addEventListener("click", function () {
    page1.classList.remove("show");
    page1.classList.add("hidden");

    page2.classList.remove("hidden");
    page2.classList.add("show");
});