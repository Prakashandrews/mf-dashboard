"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const triggerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !password) {
      setIsError(true);
      return;
    }
    setIsError(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 font-sans">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl text-center">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Welcome Back</h2>
        <form onSubmit={triggerLogin}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition"
            />
          </div>
          {isError && (
            <div className="text-red-500 mb-3 text-sm">Username or Password cannot be empty</div>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-lg transition disabled:opacity-60"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <div className="mt-6 text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <a href="/signup" className="text-indigo-600 hover:underline font-semibold">Sign up</a>
        </div>
      </div>
    </div>
  );
} 