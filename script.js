let colorCode = document.getElementById("colorcode");
let body = document.getElementById("body");
let btn = document.getElementById("btn");
let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function generate() {
    let randomIndex = (Math.floor(Math.random()*16));
    return hex[randomIndex]
    //console.log(hex[randomIndex])
}
console.log(generate())
/*document.getElementById("color").addEventListener('click',function(){

})*/
btn.addEventListener('click', function(){
    let color = '#';
    for(let i=1;i<=6;i++){        
        color+=generate()
    }
    body.style.backgroundColor = color;
    colorCode.innerHTML = color;
})