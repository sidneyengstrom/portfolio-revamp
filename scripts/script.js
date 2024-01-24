'use strict';
const siteWrapper = document.querySelector(".site-wrapper");
const copyright = document.querySelector(".copyright");


function layoutResize() {
    let screenWidth = window.innerWidth;

    if (screenWidth >= 768) {
        siteWrapper.classList.add("desktop");
    } else if (screenWidth < 768) {
        siteWrapper.classList.remove("desktop");
    }
}

function updateCopyrightDate() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    copyright.innerHTML = `&copy; Sidney Engstrom, ${currentYear}`;
}

window.addEventListener("resize", layoutResize);
updateCopyrightDate();

