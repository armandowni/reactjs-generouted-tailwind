/// <reference types="vite/client" />

interface ImportMetaEnv {
  // basic
  readonly VITE_BASE_API_URL;
  readonly VITE_BASE_URL;
  readonly VITE_PORT;
  readonly VITE_DIV_ID;
  readonly VITE_TYPE_LAYOUT;

  // mode
  readonly VITE_ENVMODE;

  // microsoft
  readonly VITE_MS_CLIENTID;
  readonly VITE_MS_TENANTID;
  readonly VITE_MS_REDIRECT_URL;

  // google
  readonly VITE_GOOGLE_REDIRECTID;

  // google
  readonly VITE_TEXTEDITOR_KEY;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
