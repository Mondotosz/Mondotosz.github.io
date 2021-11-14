document.addEventListener("alpine:init", () => {
    // Data
    Alpine.data('dropdown', () => ({
        open: false,

        trigger: {
            ['@click']() {
                this.open = true
            },
        },

        dialogue: {
            ['x-show']() {
                return this.open
            },
            ['@click.outside']() {
                this.open = false
            },
        }
    }))

    Alpine.data('skillDisplay', (url) => ({
        _url: url,
        _skills: [],
        styles: ["bg-blue-400 border-blue-400", "bg-green-400 border-green-400", "bg-yellow-400 border-yellow-400"],
        init() {
            fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this._skills = data
                })
        },
        get skills() {
            return [...this._skills].sort((a, b) => { return b.level - a.level })
        }
    }))
    // Stores
})