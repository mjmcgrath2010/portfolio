module.exports = (plop) => {
  // create your generators here
  plop.setGenerator("component", {
    description: "Generate a new component to add to the component library",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../../components/{{properCase name}}/index.tsx",
        templateFile: "./templates/Component.hbs",
      },
      {
        type: "add",
        path: "../../components/{{properCase name}}/types.ts",
        templateFile: "./templates/Types.hbs",
      },
      {
        type: "add",
        path: "../../stories/{{properCase name}}.tsx",
        templateFile: "./templates/Story.hbs",
      },
      {
        type: "add",
        path: "../../tests/{{properCase name}}/index.test.tsx",
        templateFile: "./templates/Tests.hbs",
      },
    ],
  });
};
