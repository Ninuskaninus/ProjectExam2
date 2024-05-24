export default async function login(loginForm) {
  try {
    const response = await fetch('https://v2.api.noroff.dev/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginForm),
    });
    const data = await response.json();
    const profile = data.data;
    localStorage.setItem('token', profile.accessToken);
    localStorage.setItem('username', profile.name);
    window.location.href = '/';
  } catch (error) {
    console.error(error);
  }
}
