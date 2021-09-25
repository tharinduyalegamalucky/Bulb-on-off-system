function ClickMe() {
    var image=document.getElementById('img');
    var text=document.getElementById('btn');

    if(image.src.match('bulbon')){
        image.src="./img/pic_bulboff.gif";
        text.innerText="Off This Bulb";
    }else {
        image.src="./img/pic_bulbon.gif";
        text.innerText="On This Bulb";
    }
}