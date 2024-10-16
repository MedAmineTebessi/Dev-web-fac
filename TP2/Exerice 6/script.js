boat=document.getElementById("img");

droite=true;

function moveBoat(){
    if (droite){
        boat.classList.add('animate1');
        boat.classList.remove('animate2')
    }
    else{
        boat.classList.add('animate2');
        boat.classList.remove('animate1');
    }
    droite=!droite;
}

setInterval(moveBoat, 2000);