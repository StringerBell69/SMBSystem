const fetch = require('node-fetch');

exports.handler = async (event) => {
  const portfolioBaseUrl = 'https://danilo-portfolio.netlify.app'; // Base portfolio URL
  const { path, httpMethod, headers, body } = event;

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
  
  console.log('Proxying request to:', targetUrl);

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

    console.log('Response from portfolio site:', {
      status: response.status,
      headers: responseHeaders,
    });

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
