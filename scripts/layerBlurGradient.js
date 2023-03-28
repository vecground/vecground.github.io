import generateRGB from "./generateRGB.js";
export default function layerBlurGradient(svg){
    let layers = svg.getAttribute('data-layers').split(" ");
    // Handel the primary, secondary, and ternary colors.
    document.getElementById("generateColor").addEventListener("click", function(){
        // So, the user just pressed the generate color method. lets generate some colors.
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
}