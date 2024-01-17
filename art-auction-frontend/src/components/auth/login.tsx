import React, { useState } from 'react';

const Login: React.FC = () => {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // logic here
        console.log('Login button clicked!')
    }
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Left side with art pictures */}
      <div className="w-1/2 p-4 bg-gray-200">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/public/images/164333_1627908988 1.png"
            alt="Artwork 1"
            className="rounded-lg col-span-2"
          />
          <img
            src="/public/images/56255473_1937401643031861_905627174717882368_n 1.png"
            alt="Artwork 2"
            className="rounded-lg row-span-2"
          />
          <img
            src="/public/images/ArtFrauds 1.png"
            alt="Artwork 3"
            className="rounded-lg col-span-2"
          />
          <img
            src="/public/images/bored-ape-900x449 1.png"
            alt="Artwork 4"
            className="rounded-lg row-span-2"
          />
          <img
            src="/public/images/Monet-Camille 1.png"
            alt="Artwork 5"
            className="rounded-lg col-span-2"
          />
        </div>
      </div>

      {/* Right side with the login form */}
      <div className="w-1/2 p-4 bg-white">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
        
        <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
         
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Login;