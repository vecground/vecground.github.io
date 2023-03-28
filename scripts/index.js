// This is the main JS file that will serve as the entry point for app.
import layerBlurGradient from "./layerBlurGradient.js";
//read the SVG.
let svg = document.querySelector("#data");
let svgType = svg.getAttribute("data-type");
if(svgType == 'Minecraft'){
    //need to call the minecraft API to handel this for us.
    minecraftGraphics(svg);
}else if(svgType == "layerBlurGradient"){
    // calling the specific function to handel this type of SVG.
    console.log(layerBlurGradient(svg))
}else if(svgType == "angularGradient"){
    // calling the function to handel the type of gradient.
    angularGradient(svg);
}