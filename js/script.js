const { createApp } = Vue;

createApp({

    data() {
        return {
            title: "",
            messaggio: "sonny",
            coloreTesto: "",
            path: "./img/",
            imgName: "boolando.png"
        }
    },

    methods: {
        changeImg: "aaa",
    }
}).mount("#app");