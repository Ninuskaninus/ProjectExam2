export default async function addVenue(formElement) {
  const url = "https://v2.api.noroff.dev/holidaze/venues";
  const token = localStorage.getItem("token");
  const apiKey = localStorage.getItem("apiKey");

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "X-Noroff-API-Key": apiKey,
    },
    body: JSON.stringify(formElement),
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (response.ok) {
      alert("Venue added successfully");
      window.location.href = "/";
    } else {
      console.error("Error response:", json);
      alert(`Failed to add venue: ${json.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error("Fetch error:", error.message, error);
    alert(`Failed to add venue: ${error.message}`);
  }
}
