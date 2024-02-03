module.exports = (
    /** @type {import("plop").NodePlopAPI} */
    plop
) => {
    plop.setGenerator("README",{
        description: "README.md File For project.",
        prompts: [{
                type: "checkbox",
                name: "MultipleChoice",
                message: "What do you want to include in your README?",
                choices: ["React","Next.js","Vue.js","Nuxt.js","Angular","Svelte","Express.js","Solid.js","Playwright","typescript","javascript","storybook","TailwindCSS","DaisyUI"]
        }],
        actions: (
            data
        ) => {
            // const InputImg = `<img src="https://img.shields.io/badge/-${item}-000000.svg?logo=React&style=popout">`;
            // const selected = data.MultipleChoice.map(item => `## ${item}`).join("\n");
            const DisplayInline = (imgs) => {
                return `<div style="display: inline">\n${imgs}\n</div>`
            }
            const selected = data.MultipleChoice.map(item => `<img src="https://img.shields.io/badge/-${item}-000000.svg?logo=${item.toLowerCase()}&style=popout">`).join("\n");
            return [
                {
                    type: "add",
                    path: "./README.md",
                    template: DisplayInline(selected)
                }
            ]
        }
    })

}