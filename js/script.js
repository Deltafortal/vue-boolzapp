// VUE
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            head: `L'inverno sta arrivando`,
        }
    }
});

app.mount('#root');