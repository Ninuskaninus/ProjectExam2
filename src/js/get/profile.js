import getApiKey from "../post/apiKey.js";
export default async function getProfile() {
  const token = localStorage.getItem("token");
  const apiKey = await getApiKey();
  const user = localStorage.getItem("username");
  const url = `https://v2.api.noroff.dev/holidaze/profiles/${user}?_bookings=true&_venues=true`;

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-Noroff-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const profile = result.data;
    return profile;
  } catch (error) {
    console.log(error);
  }
}
