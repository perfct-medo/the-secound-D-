let acClass = document.querySelectorAll("#mn li a");
acClass.forEach((element) => {
    element.onclick = function() {
        acClass.forEach((element) => {
            element.classList.remove("active");
        });
        element.classList.add("active");
    };
});
let acClassP = document.querySelectorAll("#fpolits li");
acClassP.forEach((element) => {
    element.onclick = function() {
        acClassP.forEach((element) => {
            element.classList.remove("active");
        });
        element.classList.add("active");
    };
});