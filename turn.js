const button = document.querySelector(".turn")
let con = 0;
button.addEventListener('click',ChangeToButton);

function ChangeToButton (){

if(con===0){
    button.textContent= "Turn on"
    button.style.backgroundColor = "green"
    con = 1
}
else{
    button.textContent = "Turn off"
    button.style.backgroundColor = "white"
    con = 0
}
}








