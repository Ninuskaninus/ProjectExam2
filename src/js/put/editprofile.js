export default async function editProfile(profile) {
  const token = localStorage.getItem('token');
  const apiKey = localStorage.getItem('apiKey');
  const username = localStorage.getItem('username');
  const url = `https://v2.api.noroff.dev/holidaze/profiles/${username}`;

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': apiKey,
    },
    body: JSON.stringify(profile),
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    window.location.reload();
    return json;
  } catch (error) {
    console.error(error);
  }
}
