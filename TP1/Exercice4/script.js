images= ['NUITETOILEE', 'p1bis2', 'p7', 'p7bis', 'p7bis2', 'p9', 'p10', 'p11'];

btnsuiv = document.getElementById("btn+");
btnprec = document.getElementById("btn-");
img = document.getElementById("img");
i=0;


function majsrc(){
    Nimg=images[i];
    srcN=`C:/Users/atebe/OneDrive/Documents/TP DevWebAvancéeAmine2024/TP1/sources/${Nimg}.jpeg`;
    document.getElementById("img").src=srcN;    
}
function afficherimgalea(){
    i=Math.floor(Math.random()*images.length);
    majsrc()
    textimg()
}

function textimg(){
    let txtim = document.getElementById("txt");
    txt="";
    switch(i){
        case 0:
            txt="NUITETOILEE";
            txtim.innerHTML=`<strong>${txt}</strong>`;
            break;
        case 1:
            txt="p1bis2";
            txtim.innerHTML=`<strong>${txt}</strong>`;
            break;
        case 2:
            txt="p7";
            txtim.innerHTML=`<strong>${txt}</strong>`;
            break;
        case 3:
            txt="p7bis";
            txtim.innerHTML=`<strong>${txt}</strong>`;
            break;
        case 4:
            txt="p7bis2";
            txtim.innerHTML=`<strong>${txt}</strong>`;
            break;
        case 5:
            txt="p9";
            txtim.innerHTML=`<strong>${txt}</strong>`;
            break;
        case 6:
            txt="p10";
            txtim.innerHTML=`<strong>${txt}</strong>`;
            break;
        case 7:
            txt="p11";
            txtim.innerHTML=`<strong>${txt}</strong>`;
            break;
    }  
}
function hidetext(){
    let txtim = document.getElementById("txt");
    txtim.innerHTML="";
}

img.addEventListener("mouseenter", function() {
    textimg();
});
img.addEventListener("mouseleave",function(){
    hidetext();
})

btnsuiv.addEventListener("click",function(){
    i = (i+1)%images.length;
    majsrc();
    textimg();
})
btnprec.addEventListener("click",function(){
    if(i===0){
        i=(images.length)-1;
        majsrc();
        textimg();
    }
    else{
        i=i-1;
        majsrc();
        textimg();
    }
    
})

majsrc();

textimg();
afficherimgalea();
setInterval(afficherimgalea,2000);