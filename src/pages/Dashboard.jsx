import React, { useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  async function loadProfile() {
    try {
      const res = await API.get("/auth/profile");
      // backend may return { user: {...} } or just user data
      setUser(res.data.user || res.data);
    } catch (err) {
      console.error(err);
      localStorage.removeItem("token");
      navigate("/auth");
    }
  }

  useEffect(() => {
    loadProfile();
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/auth");
  }

  return (
    <div className="min-h-screen bg-[#070707] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-serif text-bg-brandBronze">Aarambha Dashboard</h1>
          <div className="flex items-center gap-4">
            <button onClick={handleLogout} className="px-4 py-2 bg-gray-800 rounded">
              Logout
            </button>
          </div>
        </header>

        <section className="bg-[#0b0b0b] rounded p-6 border border-gray-800">
          <h2 className="text-xl mb-3">Profile</h2>
          {user ? (
            <div className="text-gray-200">
              <div><strong>Name:</strong> {user.name}</div>
              <div><strong>Email:</strong> {user.email}</div>
              <div className="mt-4">Welcome to your dashboard. Add more widgets here (leads, appointments).</div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </section>
      </div>
    </div>
  );
}
