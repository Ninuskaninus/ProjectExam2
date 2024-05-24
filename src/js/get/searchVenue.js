export default async function searchVenue(search) {
  const url = `https://v2.api.noroff.dev/holidaze/venues/search?q=${search}`;
  const response = await fetch(url);
  const results = await response.json();

  const data = results.data;
  if (data.length === 0) {
    alert('No venues found, please try another search.');
  }

  return data;
}
