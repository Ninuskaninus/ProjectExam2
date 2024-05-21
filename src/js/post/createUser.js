import login from "./login.js";

export default async function register(user) {
  const url = "https://v2.api.noroff.dev/auth/register";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  console.log("Sending user data:", options.body);

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      console.error("Response error:", data);
      let errorMessage = "Registration failed";
      if (data.errors && data.errors.length > 0 && data.errors[0].message) {
        errorMessage = data.errors[0].message;
      }
      throw new Error(errorMessage);
    } else {
      login({
        email: user.email,
        password: user.password,
      });
    }

    return data;
  } catch (error) {
    console.error("Catch error:", error.message);
    throw new Error(`Registration failed: ${error.message}`);
  }
}
