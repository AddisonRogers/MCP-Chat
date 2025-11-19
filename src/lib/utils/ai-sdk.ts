import {generateText, type ToolSet} from "ai";
import {createAzure} from "@ai-sdk/azure";
import {experimental_createMCPClient as createMCPClient} from 'ai';
import {StreamableHTTPClientTransport} from '@modelcontextprotocol/sdk/client/streamableHttp.js';

const azure = createAzure({
    resourceName: import.meta.env.VITE_AZURE_RESOURCE_NAME, // Azure resource name from env
    apiKey: import.meta.env.VITE_AZURE_API_KEY, // Azure API key from env
});

const model = azure(import.meta.env.VITE_AZURE_MODEL_NAME);

export type GenerateTextWithAzureOptions = {
    prompt: string;
    handleError: (message: string) => void;
    mcpEndpoint?: string;
};

/**
 * Generates text using the Azure AI SDK.
 * @param prompt The input prompt for the LLM.
 * @param handleError A function to handle errors.
 * @param mcpEndpoint The MCP endpoint URL.
 * @returns The generated text.
 */
export async function generateTextWithAzure(props: GenerateTextWithAzureOptions): Promise<string> {

    const {prompt, handleError, mcpEndpoint} = props;

    const url = new URL(mcpEndpoint || import.meta.env.VITE_AZURE_MCP_ENDPOINT || "");
    let mcpAvailable: boolean = false;

    try {
        await fetch(url);
        mcpAvailable = true;
        console.debug("MCP endpoint available");
    } catch {
        const errorMessage = "Error fetching MCP endpoint.";
        console.error(errorMessage);
        handleError(errorMessage);
    }

    try {
        let tools: ToolSet | undefined;
        let mcpClient: any; // Ignore Need to import the type MCPClient

        if (mcpAvailable) {
            console.debug("MCP endpoint available so using the tools");

            mcpClient = await createMCPClient({
                transport: new StreamableHTTPClientTransport(url, {
                    sessionId: '',
                })

            });

            tools = await mcpClient.tools();
        }

        const {text} = await generateText({
            model,
            tools,
            prompt,
        });
        console.log("Azure AI Response:", text); // Log the response

        if (mcpAvailable && mcpClient) {
            mcpClient.close();
        }

        return text;
    } catch (error) {
        const errorMessage = `Error generating text with Azure AI: ${error}`;
        console.error(errorMessage);
        handleError(errorMessage);
        throw error;
    }
}