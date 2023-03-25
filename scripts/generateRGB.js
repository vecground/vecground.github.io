export default function generateRGB(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const alpha = Math.floor(Math.random() * 255);
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}