document.addEventListener("scroll", () => {
    changeBackground(window.scrollY);
});

function rgb(r, g , b) {
    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);

    return ["rgb(",r,",",g,",",b,")"].join("");
}

function changeBackground(scrollPos) {
    let val = scrollPos / 20;
    let body = document.body;
    let color = rgb(24, 24, 38 + val);

    body.style.backgroundColor = color;
}

function copy() {
    navigator.clipboard.writeText("lewinl349@gmail.com");

    let tooltip = document.getElementById("copy-tooltip");
    tooltip.innerHTML = "Copied!";
}

function mouseOut() {
    let tooltip = document.getElementById("copy-tooltip");
    tooltip.innerHTML = "Copy Email?";
}

function leftArrow() {
    document.getElementById('scroll-gallery').scrollLeft -= 520;
}

function rightArrow() {
    document.getElementById('scroll-gallery').scrollLeft += 520;
}