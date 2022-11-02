const { createApp } = Vue;

createApp({

    data() {
        return {
            title: "Ciao",
            messaggio: "sonny",
            coloreTesto: "",
            path: "./img/",
            imgName: "boolando.png"
        }
    },
}).mount('#app');