export default async function getApiKey() {
  /*   const storedApiKey = localStorage.getItem("apiKey");
  if (storedApiKey) {
    return storedApiKey;
  }

  const url = "https://v2.api.noroff.dev/auth/create-api-key";
  const token = localStorage.getItem("token");

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: "API key",
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const apiKey = data.data.key;
    localStorage.setItem("apiKey", apiKey);
    return apiKey;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch API key");
  } */
}
