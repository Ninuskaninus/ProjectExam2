export default function editVenue(id, formElements) {
  const token = localStorage.getItem("token");
  const apiKey = localStorage.getItem("apiKey");
  const url = `https://v2.api.noroff.dev/holidaze/venues/${id}`;
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "X-Noroff-API-Key": apiKey,
    },
    body: JSON.stringify(formElements),
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
