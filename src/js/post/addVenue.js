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
      console.error("Error response:", {
        status: response.status,
        statusText: response.statusText,
        body: json,
      });
      return json; 
    }
  } catch (error) {
    console.error("Fetch error:", {
      message: error.message,
      name: error.name,
      stack: error.stack,
    });
    return { message: error.message }; 
  }
}
