import img1 from "./assets/img1.png";

const SpeakWithPriestForm = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-y-scroll overflow-x-hidden md:overflow-y-hidden h-[500px] md:h-[600px]">
      {/* Left Side - Image */}
      <div className="w-full md:w-[40%] h-[200px] md:h-full">
        <img
          src={img1}
          alt="Speak with a Senior Priest"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-[full] md:w-[60%] p-6 flex flex-col justify-start items-start">
        <h2 className="text-[#1b1616] text-2xl font-bold font-['Poppins'] m-0">
          Speak with a  Senior Priest
          <hr
            className="w-[300%] text-black"
            style={{
              borderTop: "2px solid #00000",
            }}
          />
        </h2>

        <p className="text-[#7f7a7a] text-sm font-normal font-['Open Sans'] text-start mb-2">
          If you are facing a crisis or if you have questions to help progress
          on the spiritual path, write to us and we will get in touch. Remember,
          you are not alone.
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="text-black text-sm font-bold font-['Inter'] "
              >
                Name :
              </label>
              <input
                type="text"
                placeholder="Name"
                id="name"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-black text-sm font-bold font-['Inter'] "
              >
                Email :
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="text-black text-sm font-bold font-['Inter'] "
            >
              Phone :
            </label>
            <input
              type="tel"
              placeholder="Phone"
              id="phone"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div>
            <label
              htmlFor="note"
              className="text-black text-sm font-bold font-['Inter'] "
            >
              Special Note :
            </label>
            <textarea
              rows="4"
              id="note"
              placeholder="Special Note"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#c61d21] text-white py-2 rounded-md font-bold hover:bg-red-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SpeakWithPriestForm;
