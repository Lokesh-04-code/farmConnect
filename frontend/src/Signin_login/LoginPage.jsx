import React, { useState } from 'react';

const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    // Set the login URL dynamically based on the role
    let url = '';
    if (role === 'Farmer') {
      url = 'http://localhost:5000/api/farmer/login';
    } else if (role === 'Buyer') {
      url = 'http://localhost:5000/api/buyer/login';
    } else {
      alert('Please select a role.');
      return;
    }

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      const result = await res.json();
      if(result.status==='success'){
        localStorage.setItem('token',result.accessToken)
        localStorage.setItem('role',role)
        props.check(false);

      }
      if (res.ok) {
        alert(result.message || 'Login successful!');
        
        // Optionally: Store access token in localStorage
        // localStorage.setItem('token', result.accessToken);
        // Navigate to dashboard if needed
      } else {
        alert(result.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign In</h2>
        <form onSubmit={handleLogin}>
          <label className="block mb-2 text-gray-600">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded mb-4"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="block mb-2 text-gray-600">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded mb-6"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Select your role</option>
              <option value="Farmer">Farmer</option>
              <option value="Buyer">User/Buyer</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
