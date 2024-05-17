export default async function getVenues() {
  const url =
    "https://v2.api.noroff.dev/holidaze/venues/?_owner=true&_bookings=true";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const results = await response.json();
    const data = results.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
