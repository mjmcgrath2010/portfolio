const { act } = require("react-dom/test-utils");

module.exports = (plop) => {
  // create your generators here
  plop.setGenerator("component", {
    description: "Generate a new component to add to the component library",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "What is the name of the component?",
        choices: ["component", "endpoint"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: (data) => {
      const { type } = data;
      const actions = [];

      if (type === "component") {
        actions.push({
          type: "add",
          path: "../../components/{{properCase name}}/index.tsx",
          templateFile: "./templates/Component.hbs",
        });
        actions.push({
          type: "add",
          path: "../../components/{{properCase name}}/types.ts",
          templateFile: "./templates/Types.hbs",
        });
        actions.push({
          type: "add",
          path: "../../stories/{{properCase name}}.tsx",
          templateFile: "./templates/Story.hbs",
        });
        actions.push({
          type: "add",
          path: "../../tests/{{properCase name}}/index.test.tsx",
          templateFile: "./templates/Tests.hbs",
        });
      }

      if (type === "endpoint") {
        actions.push({
          type: "add",
          path: "../../server/db/models/{{properCase name}}.tsx",
          templateFile: "./templates/Model.hbs",
        });

        actions.push({
          type: "add",
          path: "../../server/graphql/resolvers/{{properCase name}}.tsx",
          templateFile: "./templates/Resolver.hbs",
        });

        actions.push({
          type: "add",
          path: "../../server/graphql/schema/{{properCase name}}.tsx",
          templateFile: "./templates/Schema.hbs",
        });
      }
      return actions;
    },
  });
};
