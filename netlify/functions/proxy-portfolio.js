import axios from 'axios';

export const handler = async (event) => {
export const handler = async (event) => {
  const { path, httpMethod, headers, body } = event;
  const portfolioBaseUrl = 'https://danilo-portfolio.netlify.app';

  const targetUrl = `${portfolioBaseUrl}${path.replace('/portfolio', '')}`;

  try {
    const response = await axios({
      url: targetUrl,
      method: httpMethod,
      headers,
      data: body,
    });

    return {
      statusCode: response.status,
      body: response.data,
      headers: {
        ...response.headers,
        'Access-Control-Allow-Origin': '*',
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
