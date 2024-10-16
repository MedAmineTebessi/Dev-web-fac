dv=document.getElementById("divvide");

dv.addEventListener("click", function(){
    Mouse_X = event.clientX;
    Mouse_Y=event.clientY;
    dv.innerHTML=`<p>Position de la souris :<br> (X=${Mouse_X},Y=${Mouse_Y})</p>`;
})

dv.addEventListener("mouseover",function(){
    dv.innerHTML="BONJOUR";
    dv.id="Animdiv";
})
dv.addEventListener("mouseout",function(){
    dv.id="divvide";
    dv.innerHTML="";
})
