import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const config: CodegenConfig = {
  overwrite: true,
  // Dùng link trực tiếp có dấu ? để ổn định nhất trên Pantheon
  schema: "https://dev-comnieudanhtien.pantheonsite.io/?graphql", 
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
    "src/gql/schema.gql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
