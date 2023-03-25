function svg2img(){
    var svg = document.querySelector('#data');
    var xml = new XMLSerializer().serializeToString(svg);
    var svg64 = btoa(xml); //for utf8: btoa(unescape(encodeURIComponent(xml)))
    var b64start = 'data:image/svg+xml;base64,';
    var image64 = b64start + svg64;
    return image64;
};
var generateImage = document.getElementById("generateImage")
generateImage.addEventListener("click", async function(){

    function readFileAsText(file) {
        return new Promise((resolve,reject) => {
           let fileredr = new FileReader();
           fileredr.onload = () => resolve(fileredr.result);
           fileredr.onerror = () => reject(fileredr);
           fileredr.readAsText(file);
        });
    }
    var b64str = svg2img()

    const loadImage = (url) => new Promise((resolve, reject) => {
        const img = new Image(); // alt: document.createElement('img')
        img.addEventListener('load', () => resolve(img));
        img.addEventListener('error', (err) => reject(err));
        img.src = url;
    });

    var _img = await loadImage(b64str);
    var imgH=_img.naturalHeight; // original file height
    var imgW=_img.naturalWidth; // original file width

    const scale = window.devicePixelRatio*2;

    var _canvas = document.createElement('canvas');
    _canvas.width=imgW;
    _canvas.height=imgH;
    var _ctx = _canvas.getContext('2d');
    _canvas['style']['width'] = `${Math.round(imgW/scale)}px`;
    _canvas['style']['height'] = `${Math.round(imgH/scale)}px`;
    _canvas['style']['margin'] = '0';
    _canvas['style']['padding'] = '0';
    _ctx.scale(scale, scale);
    _ctx.drawImage(_img, 0, 0, Math.round(imgW/scale), Math.round(imgH/scale));

    var dwnLink=document.createElement('a');     
    // Note: fileName = original .svg filename     dwnLink.download=fileName.substr(0,fileName.lastIndexOf('.'))+'.png';
    dwnLink.href=_canvas.toDataURL();
    dwnLink.innerText='DOWNLOAD';
    dwnLink.download = 'image';
    dwnLink.classList = 'btn btn-primary';
    document.getElementById('downloadLink').innerHTML=dwnLink.outerHTML;
})