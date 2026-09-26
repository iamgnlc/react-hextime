/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SENTRY_KEY?: string;
  readonly VITE_SENTRY_PID?: string;
  readonly VITE_GITHUB_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
