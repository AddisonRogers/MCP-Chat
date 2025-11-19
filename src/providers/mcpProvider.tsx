import React, {type ReactNode, useState} from "react";
import {McpContext, type McpContextType} from "@/contexts/mcpContext.tsx";

export type McpProviderProps = {
    children: ReactNode;
};

export const McpProvider: React.FC<McpProviderProps> = ({children}) => {

    const [mcpEndpoint, setMcpEndpoint] = useState<string>(
        import.meta.env.VITE_AZURE_MCP_ENDPOINT || ""
    );

    const value: McpContextType = {
        mcpEndpoint,
        setMcpEndpoint,
    }

    return (
        <McpContext.Provider value={value}>
            {children}
        </McpContext.Provider>
    );
}
