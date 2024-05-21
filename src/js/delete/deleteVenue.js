export default async function deleteVenue(id) {
  const url = "https://v2.api.noroff.dev/holidaze/venues/" + id;
  const token = localStorage.getItem("token");
  const apiKey = localStorage.getItem("apiKey");
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
      "X-Noroff-API-Key": apiKey,
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      window.location.href = "/";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
