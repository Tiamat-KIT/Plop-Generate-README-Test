module.exports = (
    /** @type {import("plop").NodePlopAPI} */
    plop
) => {
    plop.setGenerator("README",{
        description: "README.md File For project.",
        prompts: [{
                type: "checkbox",
                name: "MultipleChoice",
                message: "package in this project. Input use package names.",
                choices: ["React","Next.js","Vue.js","Nuxt.js","Angular","Svelte","Express.js","Solid.js","Playwright","typescript","javascript","storybook","TailwindCSS","daisyui"]
        },{
            type: "input",
            name: "description",
            message: "It's a description of this project."
        
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
                    path: "./Example-README.md",
                    template: `# ${__dirname.split("\\").pop()}\n### 概要\n ${data.description}\n\n${DisplayInline(selected)}`
                }
            ]
        }
    })
}