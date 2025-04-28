"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaLock, FaEnvelope, FaArrowLeft, FaPhone } from "react-icons/fa";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [accCreated, setAccCreated] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "mobileNumber" && value.length > 10) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    // Simple email regex
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAccCreated(false);
    setIsError(false);
    setErrorMessage("");
    // Validation
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword ||
      !formData.firstName || !formData.lastName || !formData.mobileNumber) {
      setIsError(true);
      setErrorMessage("All fields are required");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setIsError(true);
      setErrorMessage("Passwords do not match");
      return;
    }
    if (!validateEmail(formData.email)) {
      setIsError(true);
      setErrorMessage("Invalid email format");
      return;
    }
    if (formData.mobileNumber.length < 10) {
      setIsError(true);
      setErrorMessage("Invalid mobile number");
      return;
    }
    setIsError(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAccCreated(true);
      setFormData({
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
      });
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 font-sans">
      <div className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-2xl text-center relative">
        <button
          onClick={() => router.push("/login")}
          className="absolute left-6 top-6 flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-semibold cursor-pointer"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
        <h2 className="mb-6 text-2xl font-bold text-gray-800 mt-2">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500" />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition text-base"
            />
          </div>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500" />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition text-base"
            />
          </div>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition text-base"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition text-base"
            />
          </div>
          <div className="relative">
            <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500" />
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition text-base"
              maxLength={10}
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition text-base"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 outline-none transition text-base"
            />
          </div>
          {isError && (
            <div className="text-red-500 mb-2 text-sm font-medium">{errorMessage}</div>
          )}
          {accCreated && (
            <div className="text-green-600 mb-2 text-sm font-medium">Account created! Redirecting to login...</div>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-lg transition disabled:opacity-60 mt-2"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
} 