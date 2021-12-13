module.exports = function createPlopConfig(plop) {
  plop.setGenerator('component generator', {
    description: 'generate bootstrapped test, stories and styles',
    prompts: [
      {
        type: 'list',
        name: 'component_type',
        message: 'Choose the type of component you want to create:',
        choices: ['atoms', 'blocks', 'pages']
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'Enter a name'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{component_type}}/{{component_name}}/index.ts',
        templateFile: 'plop-templates/component.hbs'
      },
      {
        type: 'add',
        path: 'src/{{component_type}}/{{component_name}}/{{component_name}}.scss',
        templateFile: 'plop-templates/styles.hbs'
      },
      {
        type: 'add',
        path: 'src/{{component_type}}/{{component_name}}/{{component_name}}.stories.ts',
        templateFile: 'plop-templates/stories.hbs'
      },
      {
        type: 'add',
        path: 'src/{{component_type}}/{{component_name}}/{{component_name}}.test.ts',
        templateFile: 'plop-templates/test.hbs'
      },
      {
        type: 'append',
        path: './src/index.ts',
        template: `import './{{component_type}}/{{component_name}}';`
      }
    ]
  });
}
