module.exports = (plop) => {
  // create your generators here
  plop.setGenerator("component", {
    description: "Generate a new component to add to the component library",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "What do you want to create?",
        choices: ["component", "endpoint", "public-layout", "admin-layout"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of the this entity?",
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
          path: "../../tests/components/{{properCase name}}/index.test.tsx",
          templateFile: "./templates/Tests.hbs",
        });
      }

      if (type === "public-layout") {
        actions.push({
          type: "add",
          path: "../../layouts/public/{{properCase name}}/index.tsx",
          templateFile: "./templates/PublicLayout.hbs",
        });
        actions.push({
          type: "add",
          path: "../../layouts/public/{{properCase name}}/types.ts",
          templateFile: "./templates/Types.hbs",
        });
        actions.push({
          type: "add",
          path: "../../tests/layouts/public/{{properCase name}}/index.test.tsx",
          templateFile: "./templates/LayoutTest.hbs",
        });

        actions.push({
          path: "../../layouts/index.ts",
          pattern: /(\/\/ PUBLIC LAYOUT IMPORTS)/g,
          template:
            "export { default as {{properCase name}} } from '@layouts/public/{{properCase name}}';\n$1",
          type: "modify",
        });
      }

      if (type === "admin-layout") {
        actions.push({
          type: "add",
          path: "../../layouts/admin/{{properCase name}}/index.tsx",
          templateFile: "./templates/AdminLayout.hbs",
        });
        actions.push({
          type: "add",
          path: "../../layouts/admin/{{properCase name}}/types.ts",
          templateFile: "./templates/Types.hbs",
        });
        actions.push({
          type: "add",
          path: "../../tests/layouts/admin/{{properCase name}}/index.test.tsx",
          templateFile: "./templates/LayoutTest.hbs",
        });

        actions.push({
          path: "../../layouts/index.ts",
          pattern: /(\/\/ ADMIN LAYOUT IMPORTS)/g,
          template:
            "export { default as {{properCase name}} } from '@layouts/public/{{properCase name}}';\n$1",
          type: "modify",
        });
      }

      if (type === "endpoint") {
        actions.push({
          type: "add",
          path: "../../server/db/models/{{properCase name}}.ts",
          templateFile: "./templates/Model.hbs",
        });

        actions.push({
          type: "add",
          path: "../../server/graphql/resolvers/{{properCase name}}.ts",
          templateFile: "./templates/Resolver.hbs",
        });

        actions.push({
          type: "add",
          path: "../../server/graphql/schema/{{properCase name}}.ts",
          templateFile: "./templates/Schema.hbs",
        });

        actions.push({
          path: "../../server/graphql/schema/index.ts",
          pattern: /(\/\/ SCHEMA EXPORTS)/g,
          template: "export * from './{{properCase name}}';\n$1",
          type: "modify",
        });

        actions.push({
          path: "../../pages/api/graphql/index.ts",
          pattern: /(\/\/ RESOLVER IMPORTS)/g,
          template:
            "import {{properCase name}}sResolver from '@gql/server/resolvers/{{properCase name}}';\n$1",
          type: "modify",
        });
        actions.push({
          path: "../../pages/api/graphql/index.ts",
          pattern: /(\/\/ RESOLVER ARRAY)/g,
          template: "\t{{properCase name}}sResolver,\n$1",
          type: "modify",
        });
      }
      return actions;
    },
  });
};
