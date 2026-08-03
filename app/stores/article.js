export const useArticle = defineStore("article", {
    state: () => ({
        items: []
    }),

    getters: {},

    actions: {
        addItem(article) {
            this.items = article
            console.log("article added")
        },

        clearArticle() {
            this.items = []
            console.log("article removed")
        },

        findItem(article) {
            this.items.find(item => item.title === article)
        }
    }
})