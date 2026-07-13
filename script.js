const albumButton = document.getElementById("albumButton");
const page5 = document.getElementById("page5");const beginButton = document.getElementById("beginButton");
const nextButton = document.getElementById("nextButton");
const page2Button = document.getElementById("page2Button");
const page3Button = document.getElementById("page3Button");

const cover = document.getElementById("cover");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");

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

page2Button.addEventListener("click", function () {
    page2.classList.remove("show");
    page2.classList.add("hidden");

    page3.classList.remove("hidden");
    page3.classList.add("show");
});

page3Button.addEventListener("click", function () {
    page3.classList.remove("show");
    page3.classList.add("hidden");

    page4.classList.remove("hidden");
    page4.classList.add("show");
});
albumButton.addEventListener("click", function () {
    page4.classList.remove("show");
    page4.classList.add("hidden");

    page5.classList.remove("hidden");
    page5.classList.add("show");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});