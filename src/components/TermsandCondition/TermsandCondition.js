import React, { useState } from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import html2canvas from "html2canvas"; // Import html2canvas
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import img1 from "./assets/Accept terms-cuate 1 (1).svg"; // Adjust the path to your image

const TermsandCondition = () => {
  // States to handle the checkbox selections
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  // State to manage form submission and errors
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Initialize useNavigate
  const navigate = useNavigate();

  const termsData = [
    "Copy-pasting into form fields is strictly prohibited.",
    "Only one device login is permitted. Logging in from multiple devices will lead to assignment rejection.",
    "No work is allowed on Sundays.",
    "A minimum of 6 hours of daily work is required. Failure to comply will result in login rejection.",
    "Completing 2500 forms per month is mandatory, with deductions for incomplete submissions.",
  ];

  const rejectionCriteria = [
    "Grammatical, punctuation, or spelling errors.",
    "Maximum of 3 mistakes per form. More than 3 will lead to form rejection.",
  ];

  // Function to handle Cancel button click
  const handleCancel = () => {
    navigate("/self-declaration"); // Navigate to SelfDeclaration page
  };

  const handleAgree = async () => {
    if (isChecked1 && isChecked2) {
      try {
        // Retrieve form data from local storage
        const formData = JSON.parse(localStorage.getItem("formData"));

        if (formData) {
          // Update formData with termsAccepted
          formData.termsAccepted = true;
          localStorage.setItem("formData", JSON.stringify(formData));

          setIsSubmitting(true); // Start loader

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
          formDataWithFile.append("termsAccepted", formData.termsAccepted); // Include termsAccepted
          formDataWithFile.append("file", blob, "screenshot.png");

          // Log formData and screenshot details to the console
          console.log("Form Data:", formData);

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
          localStorage.removeItem("formData"); // Clear form data from local storage
          setError(""); // Clear any existing error
        }
      } catch (error) {
        console.error("There was an error submitting the form:", error);
        setError("There was an error submitting the form. Please try again.");
      } finally {
        setIsSubmitting(false); // Stop loader
      }
    } else {
      setError("Please accept the terms and conditions.");
    }
  };

  return (
    <>
      <div className="p-4 flex flex-col md:flex-row items-center mx-auto space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 text-center md:text-left md:ml-[200px]">
          <h2 className="font-[500] text-[28px] md:text-[44px] leading-[36px] md:leading-[53.64px] text-[#666666] font-semibold">
            Terms and Conditions
          </h2>
          <p className="text-[#666666] font-light text-[14px] md:text-[16px] lg:text-[20px] mt-2 md:mt-4">
            Please read these terms and conditions.
          </p>
        </div>
        <img
          src={img1}
          alt="Terms Illustration"
          className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[500px] mt-4 md:mt-0"
        />
      </div>
      <div className="max-w-full md:max-w-[1239px] mx-auto p-4 flex flex-col gap-4 md:gap-6 ml-[210px]">
        <p className="text-[#666666] text-[16px] md:text-[18px] font-semibold text-center md:text-left">
          <span className="font-bold">Terms and Conditions:</span>
        </p>
        {termsData.map((item, index) => (
          <p
            key={index}
            className="text-[#666666] text-[14px] md:text-[16px] lg:text-[18px] text-center md:text-left"
          >
            {index + 1}. {item}
          </p>
        ))}
        <p className="text-[#666666] text-[16px] md:text-[18px] font-semibold text-center md:text-left">
          <span className="font-bold">Form Rejection Criteria:</span>
        </p>
        <ul className="list-disc pl-5 text-[#666666] text-[14px] md:text-[16px] lg:text-[18px] text-center md:text-left">
          {rejectionCriteria.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="w-[1021px] h-[114px] mx-auto gap-[16px] ml-[220px] mt-[10px]">
        {/* Content goes here */}
        <p className="text-[#666666] text-[10px] md:text-[10px] lg:text-[16px] font-bold text-center md:text-left font-#666666">
          By using our services, you acknowledge that you have read and agree to
          these terms and conditions.
        </p>
        <div className="items-center gap-4 mt-4">
          {/* Checkbox 1 */}
          <div className="flex items-center">
            <div
              className="cursor-pointer"
              onClick={() => setIsChecked1(!isChecked1)} // Toggle state on click
            >
              {isChecked1 ? (
                <MdCheckBox className="mr-2 text-[#FB861E]" /> // Checked icon
              ) : (
                <MdCheckBoxOutlineBlank className="mr-2 text-[#FB861E]" /> // Unchecked icon
              )}
            </div>
            <label className="text-[#666666]">
              Accept the Terms and Conditions
            </label>
          </div>

          {/* Checkbox 2 */}
          <div className="flex items-center mt-2">
            <div
              className="cursor-pointer"
              onClick={() => setIsChecked2(!isChecked2)} // Toggle state on click
            >
              {isChecked2 ? (
                <MdCheckBox className="mr-2 text-[#FB861E]" /> // Checked icon
              ) : (
                <MdCheckBoxOutlineBlank className="mr-2 text-[#FB861E]" /> // Unchecked icon
              )}
            </div>
            <label className="text-[#666666]">Lorem ipsum dolor sit amet</label>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4 m-[40px]">
        <button
          type="button" // Changed from "submit" to "button" to avoid form submission
          className="w-full max-w-[190px] h-[45px] px-[24px] py-[12px] rounded-[30px] bg-white text-[#007BFF] font-bold border border-[#007BFF] hover:bg-[#007BFF] hover:text-white transition-colors duration-300"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          type="button" // Changed from "submit" to "button" to avoid form submission
          className={`w-full max-w-[190px] h-[45px] px-[24px] py-[12px] rounded-[30px] font-bold border border-[#007BFF] transition-colors duration-300 ${
            isChecked1 && isChecked2
              ? "bg-[#007BFF] text-white hover:bg-[#0056b3]"
              : "text-gray-500 cursor-not-allowed"
          }`}
          onClick={handleAgree} // Call handleAgree on button click
          disabled={!isChecked1 || !isChecked2}
        >
          Agree
        </button>
      </div>
    </>
  );
};

export default TermsandCondition;
