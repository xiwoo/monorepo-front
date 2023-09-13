import type { PlopTypes } from "@turbo/gen";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("error", {
    description: "Adds a new error Exception",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the error?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{pascalCase name}}Error.ts",
        templateFile: "templates/error.hbs",
      },
      {
        type: "append",
        path: "index.ts",
        pattern: /(?<insertion>\/\/ error exports)/g,
        template: 'export * from "./{{pascalCase name}}Error";',
      },
    ],
  });
}
