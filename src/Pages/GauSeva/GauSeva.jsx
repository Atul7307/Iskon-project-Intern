import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./GauSeva.css";
import DonationForm from "./donationForm";
import banner from "./assets/banner.png";
import cow from "./assets/cow.png";
import krishna from "./assets/krishna.png";
import flower1 from "./assets/flower1.png";
import flower2 from "./assets/flower2.png";
import gaumobbg from './assets/mobile/gaumobbg.png'

const GauSeva = () => {
  const [copiedText, setCopiedText] = useState(null);

  const copyToClipboard = async (text, id) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        setCopiedText(id);
        setTimeout(() => setCopiedText(null), 2000);
      } else {
        alert("Copy functionality is not supported in this browser.");
      }
    } catch (error) {
      console.error("Failed to copy text: ", error);
      alert("Failed to copy. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      {/* banner */}
      <div className="relative bg-yellow-200 md:bg-none">
        <img src={banner} alt="banner" />
        <div className="flex flex-col justify-center items-start absolute w-[50%] top-[4%] md:top-[18%] left-[5%] md:left-[15%] md:gap-4">
          <h3 className='text-black text-[6px] md:text-3xl font-semibold font-["Open Sans"] m-0 w-[110%] md:w-full'>
            "Whoever feeds the cow with grass and water every day derives the
            benefit equivalent to performing Ashwamedha Yajna. There is no doubt
            about this."
          </h3>
          <p className="text-black text-[8px] md:text-3xl font-normal font-['Open Sans'] m-0">
            (Brhat Parasara Smriti 5.26-27){" "}
          </p>
          <p className="text-black text-[8px] md:text-3xl font-normal font-['Open Sans'] m-0 text-start leading-[8px]">
            Express your care & devotion for cows by offering{" "}
          </p>
          <h2 className="text-[#c61d21] text-base md:text-6xl font-bold font-['Open Sans'] m-0 hidden md:block">
            Gau Poshana Seva{" "}
          </h2>
          <p className="text-black text-[8px] md:text-3xl font-normal font-['Open Sans '] m-0 hidden md:block">
            Avail 80G exemption for your donation
          </p>
        </div>
        <div className="absolute  bottom-[28%]  left-[12%] md:hidden">
          <p className="inline text-[#c61d21] text-xl font-bold font-['Open Sans'] font-bold  text-start m-0">
            Gau Poshana Seva
          </p>
          <br />
          <p className="text-black text-[10px] font-normal font-['Open Sans '] m-0 text-start ">
            Avail 80G Exemption for your donation
          </p>
        </div>
      </div>
      <div className="page w-[100%] pb-[5%]">
        <DonationForm />
        {/* Krishna Description */}

        <div className="hidden md:flex w-[90%] mx-auto gap-2 border-2 border-[#c61d21] bg-[#fff2e2]  px-10 rounded-lg">
          <img src={krishna} alt="krishna" className="w-[30%] " />
          <div className="flex flex-col items-start justify-center ">
            <h3 className="text-[#c61d21] text-[56px] font-bold font-['Open Sans'] text-start">
              Lord Krishna is described as
            </h3>
            <p className="text-[#c61d21] text-4xl font-normal font-['Open Sans'] text-start">
              "namo brahmanya devaya go-brahmana hitaya ca"
            </p>
            <p className="text-black text-3xl font-normal font-['Open Sans'] text-start">
              (Vishnu Purana 1.19.65), the well-wisher of cows. This was
              well-reflected in His care for cows as a cowherd boy in
              Vrindavana. In fact, Lord Krishna's other names, Govinda and
              Gopala mean, “friend and protector of cows”
            </p>
          </div>
        </div>

        {/* krishna Description Mobile */}
        <div className="w-[90%] mx-auto border-2 border-[#c61d21] rounded-2xl mt-[30px] py-2 px-3 md:hidden"
        style={
          {
            boxShadow:"0 0 20px #df744d"
          }
        }
        >
          <div>
          <h3 className="text-[#c61d21] text-lg font-bold font-['Open Sans'] text-center m-0">Lord Krishna is described as </h3>
          <p className="text-[#c61d21] text-[10px] font-normal font-['Open Sans'] text-center my-1">"namo brahmanya devaya go-brahmana hitaya ca"</p>
          </div>
          <div className="flex gap-1 items-center">
            <img src={krishna} alt="" 
            className="w-[30%]"
            />
            <p className="text-black text-[9px] font-normal font-['Open Sans'] text-start m-0">(Vishnu Purana 1.19.65), the well-wisher of cows. This was
              well-reflected in His care for cows as a cowherd boy in
              Vrindavana. In fact, Lord Krishna's other names, Govinda and
              Gopala mean, “friend and protector of cows”</p>
          </div>

        </div>

        {/* Gaushala */}
        <h3 className=" text-[#c61d21] text-2xl md:text-[64px] font-bold font-['Open Sans'] text-center my-[3%]" 
        style={
          {
            textShadow:"0 0 20px rgb(255, 255, 0, 0.9)"
          }
        }>
          Our Gaushala at a glance
        </h3>
        <div className="md:flex  justify-between w-full gau p-5 hidden  ">
          <div className="w-[70%]  ">
            <h4 className="text-[#c61d21] text-5xl font-bold font-['Open Sans'] m-0 text-start">
              Care:
            </h4>
            <p className="text-black text-[40px] font-normal font-['Open Sans'] m-0 text-start">
              Daily cow care, medical care, once a month routine check-up,
              emergency care
            </p>
            <h4 className="text-[#c61d21] text-5xl font-bold font-['Open Sans'] m-0 text-end">
              Facilities for the cows:
            </h4>
            <p className="text-black text-[40px] font-normal font-['Open Sans'] m-0 text-end">
              {" "}
              Clean, hygienic indoor & outdoor sheds, gutters for proper
              cleanliness, 24 hours clean water connection, large grazing field,
              lush green trees for cool breeze
            </p>
          </div>
          <img src={cow} alt="" className="w-[30%]" />
        </div>

        {/* Gaushal Mobile */}
        <div
          className="w-full py-3 mb-5 md:hidden"
          style={{
            boxShadow: "0 0 20px #f9c0ab",
            backgroundImage:`url(${gaumobbg})`,
            backgroundSize:"cover",
            
          }}
        >
          <div className="w-[80%]  mx-auto mb-[15px]">
            <p className="text-[#c61d21] text-[11px] font-bold font-['Open Sans'] m-0 ">
              Care:{" "}
              <span className="text-black font-normal">
                Daily cow care , medical care, once a month routine check-up ,
                emergency care
              </span>
            </p>
          </div>
          <div className="w-[90%] ml-[10%] flex ">
            <div className="flex flex-col gap-2">
              <h2 className="text-[#c61d21] text-xs font-bold font-['Open Sans'] m-0 text-end">
                Facilities for the cows:
              </h2>
              <p className="text-black text-[10px] font-normal font-['Open Sans'] m-0 text-end">
                Clean, hygienic indoor & outdoor sheds, gutters for proper
                cleanliness, 24 hours clean water connection, large grazing
                field, lush green trees for cool breeze
              </p>
            </div>
            <img src={cow} alt="" 
            className="w-[30%]"
            />
          </div>
        </div>

        {/* Donatation */}
        <div className="w-[95%] md:w-full mx-auto donate md:pb-[2%]">
          <div className="w-full md:w-[70%] flex justify-between mx-auto items-center">
            <img src={flower1} alt="" className="w-[20%]" />
            <h2 className="text-[#c61d21] text-base md:text-6xl font-bold font-['Open Sans'] m-0">
              Donate as your wish
            </h2>
            <img src={flower2} alt="" className="w-[20%]" />
          </div>
          {/* donation section */}
          <div className="flex flex-col md:flex-row justify-around gap-3 w-full md:w-[90%] mx-auto">
            {/* left part */}
            <div className="border-4 md:border-2 border-[#c61d21] rounded-lg  w-full md:w-[45%] pb-3">
              <div className="flex justify-center items-center  bg-[#c61d21] rounded-t-sm p-2">
                <p className="text-white text-xl md:text-[29.06px] font-bold font-['Open Sans'] m-0">
                  Donation Through Bank (NEFT/RTGS)
                </p>
              </div>

              <div className="w-full p-3 flex flex-col gap-3">
                <p className="text-[#c61d21] text-[10px] md:text-[27.14px] font-bold font-['Open Sans'] flex justify-start items-center gap-3 m-0">
                  Bank Name:
                  <span className="text-black  font-semibold font-['Open Sans']">
                    HDFC Bank
                  </span>
                  <div className="w-[50px] md:w-[57.54px] h-[23.33px] bg-[#d9d9d9] rounded-3xl border border-[#bc3521] inline-flex justify-center items-center">
                    <button
                      className="text-black/60 text-xs md:text-sm font-bold font-['Open Sans'] m-0 px-1"
                      onClick={() => copyToClipboard("hdfc Bank", "bankname")}
                    >
                      {copiedText === "bankname" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </p>

                <p className="text-[#c61d21] text-[10px] md:text-[27.14px] font-bold font-['Open Sans'] flex justify-start items-center gap-3 m-0">
                  Account Name:
                  <span className="text-black  font-semibold font-['Open Sans']">
                    isckon
                  </span>
                  <div className="w-[50px] md:w-[57.54px] h-[23.33px] bg-[#d9d9d9] rounded-3xl border border-[#bc3521] inline-flex justify-center items-center">
                    <button
                      className="text-black/60 text-xs md:text-sm font-bold font-['Open Sans'] m-0 px-1"
                      onClick={() => copyToClipboard("isckon", "accountname")}
                    >
                      {copiedText === "accountname" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </p>

                <p className="text-[#c61d21] text-[10px] md:text-[27.14px] font-bold font-['Open Sans'] flex justify-start items-center gap-3 m-0">
                  Account Number:
                  <span className="text-black font-semibold font-['Open Sans']">
                    50100436709020
                  </span>
                  <div className="w-[50px] md:w-[57.54px] h-[23.33px] bg-[#d9d9d9] rounded-3xl border border-[#bc3521] inline-flex justify-center items-center">
                    <button
                      className="text-black/60 text-xs md:text-sm font-bold font-['Open Sans'] m-0 px-1"
                      onClick={() =>
                        copyToClipboard("50100436709020", "account")
                      }
                    >
                      {copiedText === "account" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </p>

                <p className="text-[#c61d21] text-[10px] md:text-[27.14px] font-bold font-['Open Sans'] flex justify-start items-center gap-3 m-0">
                  IFSC Code:
                  <span className="text-black font-semibold font-['Open Sans']">
                    hdfc0000568
                  </span>
                  <div className="w-[50px] md:w-[57.54px] h-[23.33px] bg-[#d9d9d9] rounded-3xl border border-[#bc3521] inline-flex justify-center items-center">
                    <button
                      className="text-black/60 text-xs md:text-sm font-bold font-['Open Sans'] m-0 px-1"
                      onClick={() => copyToClipboard("hdfc0000568", "ifsce")}
                    >
                      {copiedText === "ifsce" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </p>

                <p className="text-[#c61d21] text-[10px] md:text-[27.14px] font-bold font-['Open Sans'] flex justify-start items-center gap-3 m-0">
                  Branch:
                  <span className="text-black font-semibold font-['Open Sans']">
                    ONE TOWN VIJAYAWADA
                  </span>
                  <div className="w-[50px] md:w-[57.54px] h-[23.33px] bg-[#d9d9d9] rounded-3xl border border-[#bc3521] inline-flex justify-center items-center">
                    <button
                      className="text-black/60 text-xs md:text-sm font-bold font-['Open Sans'] m-0 px-1"
                      onClick={() =>
                        copyToClipboard("ONE TOWN VIJAYAWADA", "branch")
                      }
                    >
                      {copiedText === "branch" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </p>
              </div>
            </div>

            {/* right part */}
            <div className="border-4 md:border-2 border-[#c61d21] rounded-lg w-full md:w-[45%] ">
              <div className="flex  justify-center items-center  bg-[#c61d21] rounded-t-sm p-2">
                <p className="text-white text-xl md:text-[29.06px] font-bold font-['Open Sans'] m-0">
                  E-payments
                </p>
              </div>

              <div className="w-full p-3  flex flex-col gap-3 ">
                <p className="text-[#c61d21] text-[10px] md:text-[27.14px] font-bold font-['Open Sans'] flex justify-start items-center gap-3 m-0">
                  Bank Name:
                  <span className="text-black  font-semibold font-['Open Sans']">
                    Bandhan Bank
                  </span>
                  <div className="w-[50px] md:w-[57.54px] h-[23.33px] bg-[#d9d9d9] rounded-3xl border border-[#bc3521] inline-flex justify-center items-center">
                    <button
                      className="text-black/60 text-xs md:text-sm font-bold font-['Open Sans'] m-0 px-1"
                      onClick={() => copyToClipboard("Bandhan Bank", "bank")}
                    >
                      {copiedText === "bank" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </p>

                <p className="text-[#c61d21] text-[10px] md:text-[27.14px] font-bold font-['Open Sans'] flex justify-start items-center gap-3 m-0">
                  Account Name:
                  <span className="text-black font-semibold font-['Open Sans']">
                    isckon
                  </span>
                  <div className="w-[50px] md:w-[57.54px] h-[23.33px] bg-[#d9d9d9] rounded-3xl border border-[#bc3521] inline-flex justify-center items-center">
                    <button
                      className="text-black/60 text-xs md:text-sm font-bold font-['Open Sans'] m-0 px-1"
                      onClick={() => copyToClipboard("isckon", "account name")}
                    >
                      {copiedText === "account name" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </p>

                <p className="text-[#c61d21] text-[10px] md:text-[27.14px] font-bold font-['Open Sans'] flex justify-start items-center gap-3 m-0">
                  Account Number:
                  <span className="text-black font-semibold font-['Open Sans']">
                    50210013824156
                  </span>
                  <div className="w-[50px] md:w-[57.54px] h-[23.33px] bg-[#d9d9d9] rounded-3xl border border-[#bc3521] inline-flex justify-center items-center">
                    <button
                      className="text-black/60 text-xs md:text-sm font-bold font-['Open Sans'] m-0 px-1"
                      onClick={() =>
                        copyToClipboard("50210013824156", "account no.")
                      }
                    >
                      {copiedText === "account no." ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </p>

                <p className="text-[#c61d21] text-[10px] md:text-[27.14px] font-bold font-['Open Sans'] flex justify-start items-center gap-3 m-0">
                  IFSC Code:
                  <span className="text-black  font-semibold font-['Open Sans']">
                    BDBL0001832
                  </span>
                  <div className="w-[50px] md:w-[57.54px] h-[23.33px] bg-[#d9d9d9] rounded-3xl border border-[#bc3521] inline-flex justify-center items-center">
                    <button
                      className="text-black/60 text-xs md:text-sm font-bold font-['Open Sans'] m-0 px-1"
                      onClick={() => copyToClipboard("bdbl0001832", "ifce")}
                    >
                      {copiedText === "ifce" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </p>

                <p className="text-[#c61d21] text-[10px] md:text-[27.14px] font-bold font-['Open Sans'] flex justify-start items-center gap-3 m-0">
                  Branch:
                  <span className="text-black  font-semibold font-['Open Sans']">
                    satyanaryana puram
                  </span>
                  <div className="w-[50px] md:w-[57.54px] h-[23.33px] bg-[#d9d9d9] rounded-3xl border border-[#bc3521] inline-flex justify-center items-center">
                    <button
                      className="text-black/60 text-xs md:text-sm font-bold font-['Open Sans'] m-0 px-1"
                      onClick={() =>
                        copyToClipboard("satyanaryana puram", "branche")
                      }
                    >
                      {copiedText === "branche" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </p>

                <p className="text-[#c61d21] text-[10px] md:text-[27.14px] font-bold font-['Open Sans'] flex justify-start items-center gap-3 m-0">
                  UPI id:
                  <span className="text-black font-semibold font-['Open Sans']">
                    getepay.mbandhan98906@icici
                  </span>
                  <div className="w-[50px] md:w-[57.54px] h-[23.33px] bg-[#d9d9d9] rounded-3xl border border-[#bc3521] inline-flex justify-center items-center">
                    <button
                      className="text-black/60 text-xs md:text-sm font-bold font-['Open Sans'] m-0 px-1"
                      onClick={() =>
                        copyToClipboard("getepay.mbandhan98906@icici", "UPI id")
                      }
                    >
                      {copiedText === "UPI id" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </p>
              </div>
            </div>
          </div>

          <p className="text-[#c61d21] text-3xl font-normal font-['Open Sans'] lowercase tracking-widest w-[95%] mx-auto pt-3 hidden md:block">
            For UPI, NEFT, or bank transfer donations, kindly share the
            transaction details on WhatsApp at 9955685568 or via email at
            seva@iskconvijayawada.org.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GauSeva;
