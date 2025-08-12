let i = 0;
let txt = 'Lewin Lin';
let typingSpeed = 250;

window.copy = copy;
window.mouseOut = mouseOut;
window.leftArrow = leftArrow;
window.rightArrow = rightArrow;

document.addEventListener('DOMContentLoaded', function() {
    typingAni();
}, false);

function typingAni() {
  if (i < txt.length) {
    document.getElementById("title-name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typingAni, typingSpeed);
  }
}

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
    let val = scrollPos / 40;
    let body = document.body;
    let color = rgb(0, 0, 0 + val);

    body.style.backgroundColor = color;
}

function copy() {
    navigator.clipboard.writeText("lewinwork349@gmail.com");

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