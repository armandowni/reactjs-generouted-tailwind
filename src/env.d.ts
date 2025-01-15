/// <reference types="vite/client" />

interface ImportMetaEnv {
  // basic
  readonly VITE_BASE_API_URL;
  readonly VITE_BASE_API_PATHNAME;
  readonly VITE_PORT;
  
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
