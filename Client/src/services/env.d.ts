import 'vite/client'

declare module 'vite/client' {
  interface ImportMeta {
    env: {
      [key: string]: string | undefined
      VITE_BACKEND_URL: string
    }
  }
}