export default async function deleteVenue(id) {
  const url = `https://v2.api.noroff.dev/holidaze/venues/${id}`;
  const token = localStorage.getItem("token");
  const apiKey = localStorage.getItem("apiKey");

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "X-Noroff-API-Key": apiKey,
    },
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      window.location.href = "/";
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({})); // Handle case where response body is empty
      console.error("Error response:", errorData);
      throw new Error(
        `Failed to delete venue: ${errorData.message || "Unknown error"}`
      );
    }
  } catch (error) {
    console.error("Fetch error:", error.message);
  }

}
