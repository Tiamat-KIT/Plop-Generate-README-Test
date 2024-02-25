module.exports = (plop) => {
    plop.setGenerator("README", {
        description: "README.md File For project.",
        prompts: [
            {
                type: "confirm",
                name: "isFullStack",
                message: "Is this a full-stack project?",
                default: false
            },
            // Common questions for both frontend and backend
            {
                type: "input",
                name: "description",
                message: "It's a description of this project."
            },
            // Conditional prompts based on whether it's a full-stack project or not
            {
                when: (answers) => answers.isFullStack,
                type: "list",
                name: "frontendLang",
                message: "What's your frontend Development Language?",
                choices: ["TypeScript", "JavaScript", "Vue.js", "React", "Angular", "Svelte"]
            },
            {
                when: (answers) => answers.isFullStack,
                type: "list",
                name: "backendLang",
                message: "What's your backend Development Language?",
                choices: ["Node.js", "Python", "Ruby", "Go", "Java", "PHP"]
            },
            {
                when: (answers) => answers.isFullStack,
                type: "checkbox",
                name: "frontendFrameworks",
                message: "What frontend frameworks do you use?",
                choices: ["React", "Vue.js", "Angular", "Svelte", "Next.js"]
            },
            {
                when: (answers) => answers.isFullStack,
                type: "checkbox",
                name: "backendFrameworks",
                message: "What backend frameworks do you use?",
                choices: ["Express.js", "Django", "Rails", "Spring", "Laravel"]
            },
            // Questions for frontend only if it's not a full-stack project
            {
                when: (answers) => !answers.isFullStack,
                type: "list",
                name: "frontendLang",
                message: "What's your frontend Development Language?",
                choices: ["TypeScript", "JavaScript", "Vue.js", "React", "Angular", "Svelte"]
            },
            {
                when: (answers) => !answers.isFullStack,
                type: "checkbox",
                name: "frontendFrameworks",
                message: "What frontend frameworks do you use?",
                choices: ["React", "Vue.js", "Angular", "Svelte", "Next.js"]
            },
            // Questions for backend only if it's not a full-stack project
            {
                when: (answers) => !answers.isFullStack,
                type: "list",
                name: "backendLang",
                message: "What's your backend Development Language?",
                choices: ["Node.js", "Python", "Ruby", "Go", "Java", "PHP"]
            },
            {
                when: (answers) => !answers.isFullStack,
                type: "checkbox",
                name: "backendFrameworks",
                message: "What backend frameworks do you use?",
                choices: ["Express.js", "Django", "Rails", "Spring", "Laravel"]
            }
        ],
        actions: (data) => {
            // Here you can generate your README.md content based on the answers
            // For example, you can use the answers to create a markdown file
            // This is just a placeholder for the generation logic
            return [
                {
                    type: "add",
                    path: "./Extend-README.md",
                    templateFile: "./template/README.md.hbs",
                    data: data
                }
            ];
        }
    });
};