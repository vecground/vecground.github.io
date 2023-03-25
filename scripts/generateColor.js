import generateRGB from "./generateRGB.js";
var base = document.querySelector(".base");
var primarys = document.querySelectorAll(".primary");
var hue = generateHue();

//read the total layers in this SVG.
let svg = document.querySelector("#data");
let layers = svg.getAttribute('data-layers').split(" ");
document.getElementById("generateColor").addEventListener("click", ()=>{
    // If this button was pressed then genrate colors for every elements in SVG.
    layers.forEach(layer => {
        // for every layer count the number of elements with tha classname are preset there.
        console.log(document.getElementsByClassName(layer).length)
        if(document.getElementsByClassName(layer).length > 2){
            //more than 1 element is preset with this name.
            let elements = document.getElementsByClassName(layer);
            let color = generateRGB();
            for(let i=0; i<elements.length; i++){
                elements[i].style.fill = color;
            }
        }else{
            document.getElementsByClassName(layer)[0].style.fill = generateRGB();
        }
    });
})
document.getElementById("generateShade").addEventListener("click", ()=>{
    let secondaryColor = generateShade(hue);
    primarys.forEach(primary => {
        primary.style.fill = secondaryColor;
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