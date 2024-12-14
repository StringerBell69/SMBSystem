const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { path } = event;
  const portfolioBaseUrl = 'https://danilo-portfolio.netlify.app/';

  // Build the target URL
  const targetUrl = `${portfolioBaseUrl}${path.replace('/portfolio', '')}`;

  try {
    // Forward the request to the portfolio site
    const response = await fetch(targetUrl, {
      method: event.httpMethod,
      headers: event.headers,
      body: event.body,
    });

    // Return the response to the client
    const responseBody = await response.text();
    return {
      statusCode: response.status,
      body: responseBody,
      headers: {
        ...response.headers.raw(),
        'Access-Control-Allow-Origin': '*', // Optional: Adjust for CORS if needed
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
