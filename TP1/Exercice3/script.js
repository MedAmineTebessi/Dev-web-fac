hideButton = document.getElementById('btn');
img = document.getElementById('img');

hideButton.addEventListener("click", function(){
    if (img.style.visibility === 'hidden') {
        img.style.visibility = 'visible';
        hideButton.textContent = 'Masquer l\'image';
    } else {
        img.style.visibility = 'hidden';
        hideButton.textContent = 'Afficher l\'image';
    }
});

hideButton.addEventListener("click", function() {
    if (img.style.opacity === '0') {
        img.style.opacity = '1';
        hideButton.textContent = 'Masquer l\'image';
    } else {
        img.style.opacity = '0';
        hideButton.textContent = 'Afficher l\'image';
    }
});