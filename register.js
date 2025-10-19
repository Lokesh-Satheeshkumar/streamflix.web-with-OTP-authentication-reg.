let emailGlobal = '';

function showStep(stepId) {
  document.getElementById('step1').style.display = 'none';
  document.getElementById('step2').style.display = 'none';
  document.getElementById('step3').style.display = 'none';
  document.getElementById(stepId).style.display = 'block';
}

async function sendOTP() {
  try {
    const email = document.getElementById('email').value;
    console.log("sendOTP called with email:", email);

    if (!email) {
      alert("Please enter your email");
      return;
    }

    emailGlobal = email;

    const res = await fetch('http://localhost:5000/api/auth/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    if (!res.ok) {
      throw new Error('Failed to send OTP');
    }

    const data = await res.json();
    document.getElementById('message').innerText = data.message;

    if (res.ok) {
      showStep('step2');
    }
  } catch (error) {
    console.error('Error in sendOTP:', error);
    document.getElementById('message').innerText = 'Error sending OTP. Try again later.';
  }
}

async function verifyOTP() {
  try {
    const otp = document.getElementById('otp').value;
    console.log("verifyOTP called with OTP:", otp);

    if (!otp) {
      alert("Please enter the OTP");
      return;
    }

    const res = await fetch('http://localhost:5000/api/auth/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: emailGlobal, otp })
    });

    if (!res.ok) {
      throw new Error('Failed to verify OTP');
    }

    const data = await res.json();
    document.getElementById('message').innerText = data.message;

    if (res.ok && data.success) {
      showStep('step3');
    }
  } catch (error) {
    console.error('Error in verifyOTP:', error);
    document.getElementById('message').innerText = 'Error verifying OTP. Try again later.';
  }
}

async function completeRegistration() {
  try {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log("completeRegistration called with username:", username);

    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }

    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email: emailGlobal, password })
    });

    if (!res.ok) {
      throw new Error('Failed to complete registration');
    }

    const data = await res.json();
    document.getElementById('message').innerText = data.message;

    if (res.ok) {
      alert('✅ Registered successfully! Now you can login.');
      window.location.href = 'index.html';
    }
  } catch (error) {
    console.error('Error in completeRegistration:', error);
    document.getElementById('message').innerText = 'Error completing registration. Try again later.';
  }
}

function resendOTP() {
  console.log("resendOTP called");
  sendOTP(); // Reuse same function
}
