import React, {createContext} from "react";

export type McpContextType = {
    mcpEndpoint: string;
    setMcpEndpoint: React.Dispatch<React.SetStateAction<string>>;
}

export const McpContext = createContext<McpContextType>({
    mcpEndpoint: "",
    setMcpEndpoint: () => {
    },
})