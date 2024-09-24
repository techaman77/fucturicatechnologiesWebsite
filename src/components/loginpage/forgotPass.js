import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // Step 1 for email, Step 2 for OTP
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/forgetPassword`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage("OTP has been sent to your email.");
        setStep(2); // Move to step 2 (OTP verification)
      } else {
        setErrorMessage("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "An error occurred");
      } else {
        setErrorMessage("An unexpected error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/verify-otp`,
        { otp, email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.user.isOtpRequired === false) {
        setSuccessMessage("Otp verified  Redirecting to login page...");
        navigate("/login");
      } else if (response.status === 200) {
        setSuccessMessage(
          "OTP verified. Redirecting to reset password page..."
        );
        setTimeout(
          () => navigate("/resetForgotPassword", { state: { email, otp } }),
          2000
        ); // Pass email and OTP to reset password page
      } else {
        setErrorMessage("Invalid OTP. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "An error occurred");
      } else {
        setErrorMessage("An unexpected error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">
          {step === 1 ? "Forgot Password" : "Enter OTP"}
        </h2>

        {step === 1 ? (
          // Step 1: Email input form
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <button
              type="submit"
              className={`w-full py-3 rounded-lg text-white ${
                isSubmitting ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending OTP..." : "Send OTP"}
            </button>
            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 mt-2">{successMessage}</p>
            )}
          </form>
        ) : (
          // Step 2: OTP input form
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <input
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 border border-blue-300 rounded-lg"
              required
            />
            <button
              type="submit"
              className={`w-full py-3 rounded-lg text-white ${
                isSubmitting ? "bg-blue-500" : "bg-blue-500 hover:bg-blue-600"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Verifying OTP..." : "Verify OTP"}
            </button>
            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 mt-2">{successMessage}</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
