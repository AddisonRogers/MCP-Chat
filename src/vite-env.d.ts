/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_AZURE_RESOURCE_NAME: string
    readonly VITE_AZURE_API_KEY: string
    readonly VITE_AZURE_MODEL_NAME: string
    readonly VITE_AZURE_MCP_ENDPOINT: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}