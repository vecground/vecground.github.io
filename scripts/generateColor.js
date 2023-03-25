var background = document.querySelector(".background");
var triangles = document.querySelectorAll(".triangle");
var hue = generateHue();
document.getElementById("generateColor").addEventListener("click", ()=>{
    let color = generateColor(hue)
    background.style.fill = color;
    let secondaryColor = generateShade(hue);
    triangles.forEach(triangle => {
        triangle.style.fill = secondaryColor;
    });
})
document.getElementById("generateShade").addEventListener("click", ()=>{
    let secondaryColor = generateShade(hue);
    triangles.forEach(triangle => {
        triangle.style.fill = secondaryColor;
    });
})
function generateColor(hue){
    var color = generateShade(hue);
    return color;
}
function generateHue(){
    hue = Math.floor(Math.random() * 361);
    return hue
}
function generateShade(hue){
    let s = Math.floor(Math.random() * 101);
    let l = Math.floor(Math.random() * 101);
    let shade = 'hsl(' + hue + ', ' + s + '%, ' + l + '%)';
    return shade
}