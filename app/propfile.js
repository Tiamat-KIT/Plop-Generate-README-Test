module.exports = function (
  /**@type {import("plop").NodePlopAPI} */  
  plop
  ) {
  plop.setGenerator('readmeGenerator', {
    description: 'Generate README file with selected libraries/frameworks',

    prompts: [
      {
        type: 'checkbox',
        name: 'libraries',
        message: 'Select the libraries/frameworks you are using:',
        choices: [
          'React',
          'Vue.js',
          'Angular',
          'Express.js',
          'Next.js',
          // Add more choices as needed
        ],
      },
    ],

    actions: function (data) {
      /* const title = `# ${process.cwd().split('/').pop()}\n## 使用しているもの一覧`; */
      const title = `# テスト\n## 使用しているもの一覧`;
      const selectedLibraries = data.libraries.map(library => `### ${library}`).join('\n');

      const content = `${title}\n${selectedLibraries}`;

      return [
        {
          type: 'add',
          path: 'README.md',
          template: content,
        },
      ];
    },
  });
};
