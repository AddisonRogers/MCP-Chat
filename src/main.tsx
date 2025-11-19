import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ErrorProvider} from "@/providers/errorProvider.tsx";
import {McpProvider} from "@/providers/mcpProvider.tsx";

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ErrorProvider>
                <McpProvider>
                    <App/>
                </McpProvider>
            </ErrorProvider>
        </QueryClientProvider>
    </StrictMode>,
);
