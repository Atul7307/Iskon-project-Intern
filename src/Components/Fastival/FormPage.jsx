import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { slugify } from "../utils/slugify";
import boxes from "./boxes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const FormPage = () => {
  const { slug } = useParams();
  const [showMemorySection, setShowMemorySection] = useState(false);

  // Match the slug with the event name
  const selectedEvent = boxes.find((box) => slugify(box.heading) === slug);

  const handleCheckboxChange = (e) => {
    setShowMemorySection(e.target.checked);
  };

  

  return (
    <div className="w-full bg-[#fff0de]">
      <Header />

      <div className="max-w-5xl mx-auto  md:mt-10 px-8 py-2 md:p-8 ">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-6 uppercase text-[#c61d21] font-['Open Sans'] font-bold">
          QUICK DONATE
        </h2>
        <p className="text-sm text-center mb-6 text-black font-semibold font-['Open Sans']">
          If you would like to make a donation towards a particular area of activity, please select
          an option from below. ISKCON relies entirely on voluntary donations, so every donation
          counts - Please note that donation is processed on a secure site.
        </p>

        {/* Form Container */}
        <div className=" md:grid grid-cols-1 md:grid-cols-3 gap-8 bg-white shadow-lg border-2 border-black rounded-lg md:p-5 place-items-center md:place-content-between w-full ">
          {/* Left Side - Image */}
          <div className=" flex items-start justify-center p-2">
            <img
              src={selectedEvent?.img || ""}
              alt={selectedEvent?.heading || "Event"}
              className="w-full h-auto max-w-sm rounded-2xl border-[6px] border-[#c61d21] justify-self-center"
            />
          </div>

          {/* Right Side - Form */}
            <form className="col-span-2 grid grid-cols-1 md:gap-1 text-sm px-2 pb-2 md:pb-0">
            {/* Donation For & Amount */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <div>
                <label className="text-gray-700 font-semibold">Donation For</label>
                <input
                  type="text"
                  placeholder={selectedEvent?.heading || "Enter Event"}
                  className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200 m-0"
                  disabled
                />
              </div>
              <div>
                <label className="text-gray-700 font-semibold">Amount</label>
                <input
                  type="number"
                  placeholder="Enter Amount"
                  className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Mobile & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <div>
                <label className="text-gray-700 font-semibold">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200 m-0"
                />
              </div>
            </div>

            {/* Name & PAN */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <div>
                <label className="text-gray-700 font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200 m-0"
                />
              </div>
              <div>
                <label className="text-gray-700 font-semibold">PAN (Optional)</label>
                <input
                  type="text"
                  placeholder="PAN"
                  className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200 m-0"
                />
              </div>
            </div>

            {/* Address & PIN */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <div>
                <label className="text-gray-700 font-semibold">Address (Optional)</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200 m-0"
                />
              </div>
              <div>
                <label className="text-gray-700 font-semibold">PIN Code (Optional)</label>
                <input
                  type="text"
                  placeholder="PIN Code"
                  className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                id="reference"
                className="w-4 h-4 text-blue-600"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="reference" className="text-gray-700 text-sm">
                This donation is in the memory/honor of someone or performed on a specific occasion
              </label>
            </div>

            {/* Conditional Section */}
            {showMemorySection && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-t pt-4">
                <div>
                  <label className="text-gray-700 font-semibold">Title</label>
                  <select className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200">
                    <option>Select Title</option>
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Dr.</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-700 font-semibold">Name</label>
                  <input
                    type="text"
                    placeholder="In Name Of"
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-semibold">Relation</label>
                  <input
                    type="text"
                    placeholder="Relation"
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-semibold text-[9px] m-0">Relative Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-semibold">Occasion</label>
                  <select className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200">
                    <option>Select Occasion</option>
                    <option>Birthday</option>
                    <option>marriage Anniversary</option>
                    <option>Death Anniversary</option>
                    <option>Any Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-700 font-semibold">Occasion Date</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
              </div>
            )}

            {/* Message */}
          <div>
            <label className="text-gray-700 font-semibold">Message/Project/Remarks</label>
            <textarea
              rows="3"
              placeholder="Message"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#c61d21] text-white font-semibold py-2 rounded hover:bg-[#c61d2061] transition"
            >
              DONATE NOW
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FormPage;
