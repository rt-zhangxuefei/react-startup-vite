/// <reference types="vite/client" />

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.less' {
  const content: string;
  export default content;
}

interface ImportMetaEnv {
  readonly VITE_USE_HASH_ROUTE: string;
  readonly VITE_OUT_DIR: string;
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
