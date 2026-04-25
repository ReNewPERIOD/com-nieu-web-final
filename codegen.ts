import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  // Dùng link chuẩn, Vercel sẽ tự xử lý tốt hơn máy cá nhân
  schema: "https://dev-comnieudanhtien.pantheonsite.io/graphql", 
  generates: {
    "src/gql/": {
      preset: "client",
    },
    "src/gql/schema.gql": {
      plugins: ["schema-ast"],
    },
  },

export default config;
