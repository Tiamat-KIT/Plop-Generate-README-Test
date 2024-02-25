module.exports = (
    /** @type {import("plop").NodePlopAPI} */
    plop
) => {
    plop.setGenerator("README",{
        description: "README.md File For project.",
        prompts: [
            {
                type: "list",
                name: "LangName",
                message: "What's your project Development Language?",
                choices: ["TypeScript","JavaScript","Python","Java","Ruby","Go","PHP","Rust"]
            },{
                type: "checkbox",
                name: "Style",
                message: "What's Style Library do you use?",
                choices: ["CSS","TailwindCSS","daisyui","shadcn/ui"]   
            },{
                type: "checkbox",
                name: "MultipleChoice",
                message: "package in this project. Input use package names.",
                choices: ["React","Next.js","Vue.js","Nuxt.js","Angular","Svelte","Solid.js","Astro"]
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
            const CurrentDirectoryh1 = "# " + __dirname.split("\\").pop();
            const RepositoryDescription = "### 概要\n" + data.description;
            const DevLang = `## 開発言語\n<img src="https://img.shields.io/badge/-${data.LangName}-000000.svg?logo=${data.LangName.toLowerCase()}&style=popout">`;
            const StyleLibrary = `## Style Library\n${DisplayInline(data.Style.map(item => `<img src="https://img.shields.io/badge/-${item}-000000.svg?logo=${item.toLowerCase()}&style=popout">`))}`;
            const selected = "## ライブラリ・フレームワーク\n" + data.MultipleChoice.map(item => `<img src="https://img.shields.io/badge/-${item}-000000.svg?logo=${item.toLowerCase()}&style=popout">`).join("\n");
            return [
                {
                    type: "add",
                    path: "./Example-README.md",
                    template: `${CurrentDirectoryh1}\n\n${RepositoryDescription}\n\n${DevLang}\n\n${StyleLibrary}\n\n${selected}`
                }
            ]
        }
    })
}
