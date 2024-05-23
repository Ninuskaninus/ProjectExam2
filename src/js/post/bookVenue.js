export default async function BookVenue(booking) {
  const token = localStorage.getItem("token");
  const apiKey = localStorage.getItem("apiKey");
  const url = "https://v2.api.noroff.dev/holidaze/bookings";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "X-Noroff-API-Key": apiKey,
    },
    body: JSON.stringify(booking),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok) {
      alert("Booking successful!");
      window.location.href = "/";
      window.location.reload();
    } else {
      alert(`Failed to book: ${data.message || "Unknown error"}`);
    }

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    alert("An error occurred while booking. Please try again.");
  }
}
