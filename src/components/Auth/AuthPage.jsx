// src/components/Auth/AuthPage.jsx
import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-brandBlack to-black text-white px-4">
      <div className="w-full max-w-md backdrop-blur-md bg-white/5 border border-brandGold/10 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-serif text-center text-brandGold mb-2">
          {isRegister ? "Create Account" : "Welcome Back"}
        </h2>
        <p className="text-gray-400 text-center mb-8 text-sm">
          {isRegister ? "Join Aarambha Legal Portal" : "Login to your account"}
        </p>

        <form className="space-y-5">
          {isRegister && (
            <div className="flex items-center border border-white/10 rounded-md px-3 py-2">
              <User className="w-5 h-5 text-brandGold mr-2" />
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent flex-1 outline-none text-sm text-white placeholder-gray-400"
              />
            </div>
          )}

          <div className="flex items-center border border-white/10 rounded-md px-3 py-2">
            <Mail className="w-5 h-5 text-brandGold mr-2" />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent flex-1 outline-none text-sm text-white placeholder-gray-400"
            />
          </div>

          <div className="flex items-center border border-white/10 rounded-md px-3 py-2">
            <Lock className="w-5 h-5 text-brandGold mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent flex-1 outline-none text-sm text-white placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brandGold text-brandBlack py-2 rounded-full font-medium hover:scale-[1.02] transition-all"
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <div className="text-center mt-6 text-gray-400 text-sm">
          {isRegister ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsRegister(false)}
                className="text-brandGold hover:underline"
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setIsRegister(true)}
                className="text-brandGold hover:underline"
              >
                Register
              </button>
            </>
          )}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/"
            className="text-xs text-gray-500 hover:text-brandGold transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

