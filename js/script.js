console.log("JSOK");

// Importa Vue e crea una nuova applicazione Vue
const { createApp } = Vue;
createApp({
  data() {
    return {
      activeIndex: 0, // L'indice dell'immagine attiva
      //   Lista degli oggetti
      imagesList: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
      intervalId: null, // ID dell'intervallo per l'autoplay
    };
  },
  methods: {
    // Metodo per mostrare l'immagine precedente
    prevImg() {
      if (this.activeIndex === 0) {
        this.activeIndex = this.imagesList.length - 1;
      } else {
        this.activeIndex--;
      }
    },
    // Metodo per mostrare l'immagine successiva
    nextImg() {
      if (this.activeIndex === this.imagesList.length - 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex++;
      }
    },
    // Metodo per avviare l'autoplay
    autoPlay() {
      this.intervalId = setInterval(this.nextImg, 3000); // Cambia immagine ogni 3 secondi
    },
    // Metodo per fermare l'autoplay
    stopAutoPlay() {
      clearInterval(this.intervalId); // Ferma l'autoplay
      this.intervalId = null;
    },
  },
  // Metodo che viene eseguito ogni volta che il componente è aggiornato
  updated() {
    console.log(`L'indice dell'immagine attiva è: ${this.activeIndex}`);
  },
  // Metodo che viene eseguito una volta quando il componente è montato
  mounted() {
    this.autoPlay(); // Avvia l'autoplay quando il componente è montato
  },
}).mount("#carousel"); // Monta l'app Vue sull'elemento con id "carousel"
