import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { type UseQueryResult, useQuery } from '@tanstack/react-query';
import { experimental_createMCPClient as createMCPClient, type Tool } from 'ai';
import ky, { type HTTPError } from 'ky';
import { useContext } from 'react';
import { McpContext } from '@/contexts/mcpContext.tsx';

const fetchMCPTools = async (endpoint: string): Promise<unknown> => {
  if (!endpoint.trim()) {
    throw new Error('Endpoint URL is required');
  }

  // if endpoint is not valid, throw error
  if (!endpoint.startsWith('http://') && !endpoint.startsWith('https://')) {
    throw new Error(
      'Invalid endpoint URL. Please provide a valid HTTP or HTTPS URL.'
    );
  }

  if (!endpoint.endsWith('/')) {
    endpoint += '/';
  }

  const url = new URL(endpoint);

  try {
    // This will throw if no endpoint is found
    await ky.get(url);
  } catch (error: HTTPError | any) {
    let errorMessage: string;

    // Network/connection errors (no server)
    if (
      error.name === 'TypeError' ||
      error.code === 'ECONNREFUSED' ||
      error.code === 'ENOTFOUND'
    ) {
      errorMessage =
        'No server found at endpoint. Please check if the server is running.';
      console.error(errorMessage, error);
      throw error;
    }

    // HTTP status errors (server exists but path doesn't)
    else if (
      error.response?.status === 400 ||
      error.response?.status === 404 ||
      error.response?.status === 405
    ) {
      errorMessage = 'Server found.';
      console.debug(errorMessage, error);
    } else {
      errorMessage = `Error fetching MCP endpoint: ${error.message || 'Unknown error'}`;
      console.error(errorMessage, error);
      throw error;
    }
  }

  let mcpClient: any;

  try {
    // Create MCP client and get tools
    mcpClient = await createMCPClient({
      transport: new StreamableHTTPClientTransport(url, {
        sessionId: '',
      }),
    });
  } catch (error) {
    console.error('Error fetching MCP tools:', error);
    throw error;
  }

  const mcpTools = await mcpClient.tools();

  console.log('MCP Tools:', mcpTools);

  // Close the client
  mcpClient.close();

  return mcpTools;
};

export function useMCPToolsQuery(): UseQueryResult<Tool[], unknown> {
  const { mcpEndpoint } = useContext(McpContext);

  return useQuery({
    queryKey: ['mcp-tools', mcpEndpoint],
    queryFn: () => fetchMCPTools(mcpEndpoint),
    select: (tools) =>
      tools
        ? Object.entries(tools).map(([name, tool]) => ({
            name,
            ...tool,
          }))
        : [],
    enabled: false, // Don't auto-fetch, only when user clicks "Test"
    retry: false,
    staleTime: 5 * 60 * 1000, // Consider data stale after 5 minutes
  });
}
