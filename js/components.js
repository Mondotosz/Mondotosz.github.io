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

    Alpine.data('languages', () => ({
        _languages: [],
        styles: ["bg-blue-400 border-blue-400", "bg-green-400 border-green-400", "bg-yellow-400 border-yellow-400"],
        init() {
            fetch("/data/languages.json")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this._languages = data
                })
        },
        get languages() {
            return [...this._languages].sort((a, b) => { return b.level - a.level })
        }
    }))

    Alpine.data('tools', () => ({
        tools: [],
        styles: ["bg-blue-400 border-blue-400", "bg-green-400 border-green-400", "bg-yellow-400 border-yellow-400"],
        init() {
            fetch("/data/tools.json")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this.tools = data
                    this.tools.sort((a, b) => { return b.level - a.level })
                })
        }
    }))

    Alpine.data('technologies', () => ({
        technologies: [],
        styles: ["bg-blue-400 border-blue-400", "bg-green-400 border-green-400", "bg-yellow-400 border-yellow-400"],
        init() {
            fetch("/data/technologies.json")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this.technologies = data
                    this.technologies.sort((a, b) => { return b.level - a.level })
                })
        }
    }))
    // Stores
})