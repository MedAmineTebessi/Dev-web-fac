hd=document.getElementsByClassName("sp");

bt=document.getElementById("bt");

bt.addEventListener("click",function(){
    for(i=0;i<hd.length;i++){
        hd[i].classList.add("hidden");
    }
});



