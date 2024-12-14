exports.handler = async (event) => {
  // Dynamically import `node-fetch` for ESM support
  const fetch = (await import('node-fetch')).default;

  const { path, httpMethod, headers, body } = event;
  const portfolioBaseUrl = 'https://danilo-portfolio.netlify.app';

  // Ensure the request path starts with `/portfolio`
  if (!path.startsWith('/portfolio')) {
    return {
      statusCode: 400,
      body: 'Invalid path: All requests must start with /portfolio',
    };
  }

  // Transform the path to remove "/portfolio" but keep sub-paths
  const targetPath = path.replace('/portfolio', '') || '/'; // Default to '/' if no sub-path
  const targetUrl = `${portfolioBaseUrl}${targetPath}`;

  try {
    // Proxy the request to the portfolio site
    const response = await fetch(targetUrl, {
      method: httpMethod,
      headers,
      body,
    });

    // Get the response body and headers
    const responseBody = await response.text();
    const responseHeaders = response.headers.raw();

    return {
      statusCode: response.status,
      body: responseBody,
      headers: {
        ...responseHeaders, // Include the original response headers
        'Access-Control-Allow-Origin': '*', // Adjust for CORS
      },
    };
  } catch (error) {
    console.error('Error proxying request:', error);
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};
