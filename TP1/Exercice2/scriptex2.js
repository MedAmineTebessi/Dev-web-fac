
btn = document.getElementById("btnlogin");
btn.addEventListener('click', function() {
    psd = document.getElementById("Password").value;
    Cpsd = document.getElementById("CPassword").value;

    if (psd !== Cpsd) {
        alert("Les mots de passe ne sont pas identiques !");
        return;
    }

    if (psd.length < 8) {
        alert('Le mot de passe doit contenir au moins 8 caractères.');
        return;
    }
    if (!/^[A-Za-z]/.test(psd)){
        alert('Le mot de passe doit commencer par une lettre alphabétique.');
        return;
    }

    alert('Le mot de passe est valide !');
});
