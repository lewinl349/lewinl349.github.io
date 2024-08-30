function copy() {
    navigator.clipboard.writeText("lewinl349@gmail.com");

    var tooltip = document.getElementById("copy-tooltip");
    tooltip.innerHTML = "Copied!"
}

function mouseOut() {
    var tooltip = document.getElementById("copy-tooltip");
    tooltip.innerHTML = "Copy Email?"
}