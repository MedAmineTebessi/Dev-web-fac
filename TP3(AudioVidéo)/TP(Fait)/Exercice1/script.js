const images = Array.from(document.getElementsByClassName("img"));


images.forEach((element) => {
    element.addEventListener("click", function() {
        var animalName = element.querySelector("p").textContent.trim().toLowerCase();
        var audio;

        switch (animalName) {
          case "chat":
            audio = new Audio("C:/Users/atebe/OneDrive/Documents/TP DevWebAvancéeAmine2024/TP3(AudioVidéo)/ressources/audio-video/sons/chatons.mp3");
            break;
          case "lion":
            audio = new Audio("C:/Users/atebe/OneDrive/Documents/TP DevWebAvancéeAmine2024/TP3(AudioVidéo)/ressources/audio-video/sons/lion.wav");
            break;
          case "loup":
            audio = new Audio("C:/Users/atebe/OneDrive/Documents/TP DevWebAvancéeAmine2024/TP3(AudioVidéo)/ressources/audio-video/sons/loup.wav");
            break;
          case "singe":
            audio = new Audio("C:/Users/atebe/OneDrive/Documents/TP DevWebAvancéeAmine2024/TP3(AudioVidéo)/ressources/audio-video/sons/singe.wav");
            break;
          case "perroquet":
            audio = new Audio("C:/Users/atebe/OneDrive/Documents/TP DevWebAvancéeAmine2024/TP3(AudioVidéo)/ressources/perroquet.mp3");
            break;
        }
        
        if (audio) {
            images.style.add("transition", "")
            audio.play();
        }
    });
});



    
