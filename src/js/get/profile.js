import getApiKey from "../post/apiKey.js";

export default async function getProfile() {
  /*   const token = localStorage.getItem("token");
  const apiKey = localStorage.getItem("apiKey");
  if (!apiKey) {
    getApiKey();
  }
  const username = localStorage.getItem("username");
  const url = `https://v2.api.noroff.dev/holidaze/profiles/${username}?_bookings=true&_venues=true`;

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-Noroff-API-Key": apiKey,
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      const profile = data.data;
      return profile;
    })
    .catch((error) => {
      console.error(error);
    }); */
}
