import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const config: CodegenConfig = {
  overwrite: true,
  // Sử dụng biến môi trường hoặc link trực tiếp có dấu ? để ổn định hơn
  schema: "https://dev-comnieudanhtien.pantheonsite.io/?graphql", 
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [], // Đảm bảo mảng plugins trống để preset client tự xử lý
    },
    "src/gql/schema.gql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
