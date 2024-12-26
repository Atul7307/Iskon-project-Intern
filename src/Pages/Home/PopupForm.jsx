import React, { useState } from "react";

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://example.com/your-background-image.jpg')", // Update your background image here
      }}
    >
      {/* Main Content */}
      <div className="p-8 text-white">
        <h1 className="text-4xl font-bold">ISKCON OF ATTAPUR</h1>
        <h2 className="text-6xl font-extrabold mt-2">BLISS OF BHAKTI</h2>

        <button
          onClick={() => setIsOpen(true)}
          className="mt-6 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-lg"
        >
          SPEAK WITH A SENIOR PRIEST &rarr;
        </button>
      </div>

      {/* Modal / Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative flex bg-white rounded-lg shadow-lg w-[90%] md:w-[60%] overflow-hidden">
            {/* Left Image Section */}
            <div
              className="hidden md:block w-1/2 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://example.com/left-image.jpg')", // Add left-side image here
              }}
            ></div>

            {/* Form Section */}
            <div className="w-full md:w-1/2 p-6 relative">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl font-bold"
              >
                &times;
              </button>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Speak with a Senior Priest
                </h2>
                <p className="text-gray-500 text-sm">
                  If you are facing a crisis or have a question, write to us, and
                  we will get in touch.
                </p>
              </div>

              {/* Form */}
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                  />
                </div>

                <div>
                  <textarea
                    rows="3"
                    placeholder="Special Note"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700"
                >
                  Submit &rarr;
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupForm;
