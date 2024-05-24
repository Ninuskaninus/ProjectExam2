export default async function getApiKey() {
  const storedApiKey = localStorage.getItem('apiKey');
  if (storedApiKey) {
    return storedApiKey;
  }

  const token = localStorage.getItem('token');
  const url = 'https://v2.api.noroff.dev/auth/create-api-key';
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'API-key',
    }),
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const apiKey = result.data.key;
    localStorage.setItem('apiKey', apiKey);
    return apiKey;
  } catch (error) {
    console.log(error);
  }
}
