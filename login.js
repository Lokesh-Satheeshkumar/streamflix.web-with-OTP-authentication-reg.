document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  alert(`Logging in with username: ${username} and password: ${password}`);

  // Here you can add real authentication logic later
});
// Example, inside your login success handler:
window.location.href = "index.html";


document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const res = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  const msg = document.getElementById('loginMessage');

  if (res.ok) {
    msg.textContent = '✅ Login successful!';
    msg.style.color = 'green';

    // Save token in localStorage (for future use)
    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.user.username);

    // Redirect to streaming page
    window.location.href = 'home.html';
  } else {
    msg.textContent = `❌ ${data.message}`;
    msg.style.color = 'red';
  }
});
