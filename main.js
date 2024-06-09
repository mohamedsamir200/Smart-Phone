
let currentPath = window.location.pathname;

let links = document.querySelectorAll("nav ul a");

links.forEach((ele) => {
    if (ele.href.includes(currentPath)) {
        ele.classList.add("active");
    }
})




