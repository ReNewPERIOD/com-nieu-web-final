import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const config: CodegenConfig = {
  overwrite: true,
  // Dùng link trực tiếp có dấu ? để ổn định nhất trên Pantheon
  schema: "https://dev-comnieudanhtien.pantheonsite.io/?graphql", 
  generates: {
    "gql/": {  // Bỏ chữ src/ đi vì project của bạn không dùng thư mục src
      preset: "client",
    },
    "gql/schema.gql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
