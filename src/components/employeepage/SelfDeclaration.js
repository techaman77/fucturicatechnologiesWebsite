import React, { useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import img from "./assets/pd.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SelfDeclaration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const userId = useSelector((state) => state.auth.userId);
  const [formData, setFormData] = useState({
    userId,
    username: "",
    mobile: "",
    email: "",
    address: "",
    termsAccepted: false,
  });
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loader

    // Validate form fields
    if (
      !formData.username ||
      !formData.mobile ||
      !formData.email ||
      !formData.address ||
      !formData.termsAccepted
    ) {
      setError(
        "Please fill in all fields and accept the terms and conditions."
      );
      return;
    }

    try {
      // Capture screenshot of the form component
      const canvas = await html2canvas(document.body);
      const screenshot = canvas.toDataURL("image/png");

      // Convert the screenshot to a Blob
      const blob = await fetch(screenshot).then((res) => res.blob());

      // Create FormData to include form data and the screenshot file
      const formDataWithFile = new FormData();
      formDataWithFile.append("userId", formData.userId);
      formDataWithFile.append("username", formData.username);
      formDataWithFile.append("number", formData.mobile);
      formDataWithFile.append("email", formData.email);
      formDataWithFile.append("address", formData.address);
      formDataWithFile.append("file", blob, "screenshot.png");

      // Send data to the API
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/send-email`,
        formDataWithFile,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Form submitted successfully:", response.data);
      navigate("/employee-panel");

      // Reset form after successful submission
      setFormData({
        username: "",
        mobile: "",
        email: "",
        address: "",
        termsAccepted: false,
      });
      setError(""); // Clear any existing error
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    } finally {
      setIsSubmitting(false); // Stop loader
    }
  };

  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-[90%] flex flex-col gap-10">
        <div>
          <h2 className="text-[#666666] text-center text-[52px] max-xl:text-[35px] max-lg:text-[28px] max-sm:text-[24px] font-semibold">
            Welcome to{" "}
            <span className="text-[#FB861E]">Fucturica Technologies </span>
          </h2>
        </div>
        <div className="flex justify-center gap-20">
          <img src={img} alt="pizza" />

          <form
            onSubmit={handleSubmit}
            className="space-x-10 bg-[#fff] p-10 rounded-[30px] shadow-xl"
          >
            <h3 className="text-[#666666] text-center text-[24px] font-light">
              Please Fill Out the Following Information
            </h3>
            <div className="flex flex-col py-10">
              <div className="space-y-5">
                <div>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    className="bg-transparent w-full border border-[#666666] rounded-2xl px-4 py-3"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    placeholder="Mobile No."
                    className="bg-transparent w-full border border-[#666666] rounded-2xl px-4 py-3"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="bg-transparent w-full border border-[#666666] rounded-2xl px-4 py-3"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <textarea
                    id="address"
                    name="address"
                    placeholder="Permanent Address"
                    className="bg-transparent w-full border border-[#666666] rounded-2xl px-4 py-3"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="text-[#666666]">
                <div className="space-x-5 px-5">
                  <input
                    type="checkbox"
                    id="termsAccepted"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="termsAccepted">
                    **Terms and Conditions**
                    <br />
                    1. You are not allowed to copy and paste into any form
                    field.
                    <br />
                    2. You may only log in with one device. Logging in with
                    multiple devices will result in the rejection of your
                    assignment.
                    <br />
                    3. You cannot work on Sundays.
                    <br />
                    4. You must work at least 6 hours per day; otherwise, your
                    login will be automatically rejected.
                    <br />
                    5. The following mistakes can lead to form rejection:
                    <br />
                    (a) Grammatical mistakes
                    <br />
                    (b) Missing capital letters at the beginning of sentences
                    <br />
                    (c) Missing full stops or commas
                    <br />
                    (d) Spelling mistakes
                    <br />
                    6. A maximum of 3 mistakes are allowed per form. Any form
                    with more than 3 mistakes will be considered rejected.
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-2 px-6 bg-gradient-to-r from-[#007BFF] to-[#0056B3] text-white rounded-[30px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Please wait..." : "Submit"}
              </button>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SelfDeclaration;
