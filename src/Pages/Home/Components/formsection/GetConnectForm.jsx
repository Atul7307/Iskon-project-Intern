import img1 from "./assets/img3.png";

const GetConnectForm = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-y-auto overflow-x-hidden md:overflow-y-hidden h-[500px] md:h-[600px]">
      {/* Left Side - Image */}
      <div className="w-[full] md:w-[40%] h-[300px] md:h-full ">
        <img
          src={img1}
          alt="Speak with a Senior Priest"
          className="object-cover  w-full h-full "
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-[full] md:w-[60%] p-6 flex flex-col justify-start items-start">
        <h2 className="text-[#1b1616] text-2xl font-bold font-['Poppins'] m-0">
          GET CONNECTED TO ISKCON
          <hr
            className="w-[300%] text-black"
            style={{
              borderTop: "2px solid #00000",
            }}
          />
        </h2>

        <p className="text-[#7f7a7a] text-sm font-normal font-['Open Sans'] text-start  mb-2">
          If you eat Bhagavat Prasad you gradually become Spiritualised as
          Prasad has the potency to take you toward God-realisation.
        </p>

        <form className="space-y-4">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-1">
            <div>
              <label
                htmlFor="name"
                className="text-black text-sm font-bold font-['Inter'] m-0"
              >
                Name :
              </label>
              <input
                type="text"
                placeholder="Name"
                id="name"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 m-0 h-8"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-black text-sm font-bold font-['Inter'] m-0"
              >
                Email :
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 m-0 h-8"
              />
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
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 h-8"
              />
            </div>

            <div>
              <label
                htmlFor="Date"
                className="text-black text-sm font-bold font-['Inter'] m-0"
              >
                Date of Birth :
              </label>
              <input
                type="date"
                placeholder="Date"
                id="Date"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 m-0 h-8"
              />
            </div>

            <div>
              <label
                htmlFor="Gathering"
                className="text-black text-sm font-bold font-['Inter'] m-0"
              >
                Gender :
              </label>
              <input
                type="text"
                placeholder="Gender"
                id="Gathering"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 m-0 h-8"
              />
            </div>

            <div>
              <label
                htmlFor="Address"
                className="text-black text-sm font-bold font-['Inter'] m-0"
              >
                Profession :
              </label>
              <input
                type="text"
                placeholder="Address"
                id="Address"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 m-0 h-8"
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="text-black text-sm font-bold font-['Inter'] "
              >
                Location :
              </label>
              <input
                type="tel"
                placeholder="Location"
                id="location"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 h-8"
              />
            </div>

            <div>
              <label
                htmlFor="status"
                className="text-black text-sm font-bold font-['Inter'] m-0"
              >
                Marital Status :
              </label>
              <input
                type="text"
                placeholder="Marital Status"
                id="status"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 m-0 h-8"
              />
            </div>
          </div>
          <div className="m-0">
            <label
              htmlFor="note"
              className="text-black text-sm font-bold font-['Inter'] m-0"
            >
              Note :
            </label>
            <textarea
              rows="4"
              id="note"
              placeholder="Note"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 m-0 h-20"
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

export default GetConnectForm;
