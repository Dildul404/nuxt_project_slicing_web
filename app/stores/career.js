export const useCareer = defineStore("career", {
    state: () => ({
        items: []
    }),

    getters: {},

    actions: {
        addItem(career) {
            this.items = career
            console.log("career added")
        },

        clearCareer() {
            this.items = []
            console.log("article removed")
        },

        findCareer(career) {
            this.items.find(item => item.role === career)
        }
    }
})