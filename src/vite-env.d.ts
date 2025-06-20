/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USE_HASH_ROUTE: string;
  readonly VITE_OUT_DIR: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
