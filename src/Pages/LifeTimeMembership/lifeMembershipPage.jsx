import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
// import upperPage from "./assests/lpm1.jpg"
// import lowerPage from "./assests/lpm2.jpg"
// import middlePage from "./assests/lpm3.png"
import bellicon from "./assests/bellicon.png";
import UpperImageBG from "./assests/lpm1bg.jpg";
// import secondbg from "./assests/secongbgpng.png"
import thirdbg from "./assests/bg3.jpg";
import barcode1 from "./assests/barcode1.jpg";
import barcode2 from "./assests/barcode2.jpg";
import mobileImage from "./assests/bgmobielescree2.jpg";
import DesktopImage from "./assests/threemerged.jpg";

const LifeMembershipPage = () => {
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
    <>
      <Header />
      {/* <img className='w-full' src={upperPage} alt="" /> */}
      <div className="bg-[#FEEEDC] z-1">
        {/* first part */}
        <div
          className="w-full bg-contain md:bg-cover"
          style={{ backgroundImage: `url(${UpperImageBG})` }}
        >
          <div className="firstPart text-center flex flex-column items-center justify-center pt-2 px-4 ">
            <h1 className="text-[50px] text-orange font-bold pt-2 pb-3">
              Welcome to ISCKON vijayawada
            </h1>
            <p className="md:text-[26px] text-[16px] w-full text-justify font-semibold md:max-w-[90%]  md:leading-9 md:text-center text-red tracking-none ">
              ISKCON is a non-profit organization that works for social welfare.
              ISKCON has only one aim and that is spreading the values and
              teachings of our Vedas. ISKCON Vijaywada is a beautiful place for
              gaining such values and for making your life even more fruitful
              and meaningful. It isan unique VCEC or Vedic and cultural
              Education Center. It is located in the heart of a cosmopolitan
              city. This center is determinedly trying to build up the spiritual
              and ethical fabric of society with the help of different cultural
              and spiritual educational programs.
            </p>
            <p className="md:pt-5 pt-3 md:text-[26px] text-[16px] w-full text-justify font-semibold md:max-w-[80%] md:leading-9 md:text-center text-red tracking-none">
              The Life Membership facility is an opportunity to become part of
              ISKCON’s family. A.C. Bhakti vedanta Swami introduced the Life
              Membership program in early 70’s and invited citizens of
              Vijayawada and across the world to reside in the temple for a
              couple of days, attend spiritual programs and receive Krishna
              conscious association.
            </p>
          </div>
          <div className="secondPart mt-3 items-center px-3">
            <h2 className="leading-tight md:leading-9 text-center pb-2.5 md:text-[42px] text-[32px] bg-[radial-gradient(circle,_#C61D21,_#AA191C,_#600E10)] bg-clip-text text-transparent text-4xl font-bold">
              Why take a Lifetime Membership from ISKCON Vijaywada?
            </h2>
            <p className="w-full text-justify md:text-center md:justify-center pt-2.5 md:text-[26px] text-[18px] max-w-[95%] mx-auto md:leading-9 tracking-none font-normal text-black ">
              Choosing a lifelong membership at ISKCON Vijaywada represents a
              commitment to spiritual growth and service. By becoming a patron,
              you will gain personal benefits while actively contributing to the
              global propagation of Krishna awareness.
            </p>
            <p className="w-full text-justify md:text-center md:text-[26px] text-[18px] max-w-[95%] md:max-w-[60%] mx-auto md:leading-9 tracking-none font-normal text-black ">
              Begin this revolutionary journey with ISKCON Vijayavada and enjoy
              a lifetime of spiritual importance.
            </p>

            <h2 className="text-center pt-3 md:pt-0 md:pb-2.5 md:text-[42px] text-[32px] bg-[radial-gradient(circle,_#C61D21,_#AA191C,_#600E10)] bg-clip-text text-transparent text-4xl font-bold">
              Who Can Enroll?
            </h2>
            <p className="text-[16px] w-full text-justify md:justify-center max-w-[95%] md:text-center md:text-[28px] md:max-w-[60%] mx-auto leading-2 tracking-none font-normal text-black pt-8 md:pt-2">
              Open to everyone, regardless of citizenship or country of
              residence. Embrace the spiritual journey without restrictions.
            </p>
            <p className="md:text-[28px] text-[16px] w-full text-justify md:justify-center  max-w-[95%] leading-2 tracking-normal md:text-center mx-auto text-red">
              Choosing a lifelong membership at ISKCON Vijaywada represents a
              commitment to spiritual growth and service. By becoming a patron,
              you will gain personal benefits while actively contributing to the
              global propagation of Krishna awareness.
            </p>
            <p className="md:text-[28px] text-[16px] w-full text-justify max-w-[90%]  md:text-center mx-auto text-red tracking-none">
              Begin this revolutionary journey with ISKCON Vijayawada and enjoy
              a lifetime of spiritual importance.
            </p>
          </div>
          <div className="thirdPart mt-1.5 mx-3">
            <h2 className="text-center font-bold py-3 md:text-[42px] text-[32px] bg-[linear-gradient(0deg,_#C61D21_0%,_#600E10_100%)] bg-clip-text text-transparent">
              Life Patron Membership What Does It Include?
            </h2>

            <div className="gridForsix grid md:grid-cols-2 grid-cols-1 gap-4 md:max-w-[80%] max-w-[95%] items-center mx-auto">
              <div className="flex items-start">
                <img
                  src={bellicon}
                  alt="belliconImage"
                  className="md:mr-4 mr-2 flex items-center md:w-[25px] w-[17px]  md:pt-0 pt-2"
                />
                <div>
                  <h3 className="mb-3 md:text-3xl text-2xl bg-[radial-gradient(circle,_#C61D21,_#AA191C,_#600E10)] bg-clip-text text-transparent">
                    {" "}
                    Seva (Service)
                  </h3>
                  <p className="md:text-xl text-base w-full text-justify leading-2 tracking-none font-normal text-black flex md:text-left">
                    Accept the opportunity to serve the Supreme Lord Sri Krishna
                    and express your thanks with sincere service. Feel the
                    delight of being the ultimate giver and receiver.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <img
                  src={bellicon}
                  alt="bellicon"
                  className="md:mr-4 mr-2 flex items-center md:w-[25px] w-[17px]  md:pt-0 pt-2"
                />
                <div>
                  <h3 className="mb-3 md:text-3xl text-2xl bg-[radial-gradient(circle,_#C61D21,_#AA191C,_#600E10)] bg-clip-text text-transparent">
                    Spiritual Knowledge
                  </h3>
                  <p className="md:text-xl text-base w-full text-justify  leading-2 tracking-none font-normal text-black flex md:text-left">
                    Transform your home into a metaphysical library with a full
                    set of Shrimad-Bhagavatam in your preferred language –
                    Bengali, Hindi, or English.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <img
                  src={bellicon}
                  alt="bellicon"
                  className="md:mr-4 mr-2 flex items-center md:w-[25px] w-[17px]  md:pt-0 pt-2"
                />
                <div>
                  <h3 className="mb-3 md:text-3xl text-2xl bg-[radial-gradient(circle,_#C61D21,_#AA191C,_#600E10)] bg-clip-text text-transparent">
                    Meals
                  </h3>
                  <p className="md:text-xl text-base w-full text-justify leading-2 tracking-none font-normal text-black flex md:text-left">
                    Meals Whether you stay overnight or not, relish free
                    prasadam in every ISKCON centre for three days per year,
                    twice daily. Indulge in temple resident meals, excluding
                    restaurant meals or snacks sold on temple premises. Special
                    occasions like birthdays or anniversaries are marked with
                    cake prasadam.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <img
                  src={bellicon}
                  alt="bellicon"
                  className="md:mr-4 mr-2 flex items-center md:w-[25px] w-[17px]  md:pt-0 pt-2"
                />
                <div>
                  <h3 className="mb-3 md:text-3xl text-2xl bg-[radial-gradient(circle,_#C61D21,_#AA191C,_#600E10)] bg-clip-text text-transparent">
                    Patron Card/Transfer of Patronship
                  </h3>
                  <p className="md:text-xl text-base w-full text-justify leading-2 tracking-none font-normal text-black flex md:text-left">
                    Receive a centrally issued hologram patronship card with
                    your portrait and patron number. Stay connected with an
                    up-to-date list of ISKCON centres across the world. The
                    patron’s card represents your devotion and connection to the
                    global ISKCON family.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <img
                  src={bellicon}
                  alt="bellicon"
                  className="md:mr-4 mr-2 flex items-center md:w-[25px] w-[17px]  md:pt-0 pt-2"
                />
                <div>
                  <h3 className="mb-3 md:text-3xl text-2xl bg-[radial-gradient(circle,_#C61D21,_#AA191C,_#600E10)] bg-clip-text text-transparent">
                    Contribution to Iskcon Vijaywada Temple{" "}
                  </h3>
                  <p className="md:text-xl text-base w-full text-justify leading-2 tracking-none font-normal text-black flex md:text-left">
                    Your generous donation is crucial in constructing the Iskcon
                    Vijayawada Temple. Contribute to the physical manifestation
                    of a divine space that echoes the spirit of devotion.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <img
                  src={bellicon}
                  alt="bellicon"
                  className="md:mr-4 mr-2 flex items-center md:w-[25px] w-[17px]  md:pt-0 pt-2"
                />
                <div>
                  <h3 className="mb-3 md:text-3xl text-2xl bg-[radial-gradient(circle,_#C61D21,_#AA191C,_#600E10)] bg-clip-text text-transparent">
                    Prasadam, on Special Occasions
                  </h3>
                  <p className="md:text-xl text-base w-full text-justify leading-2 tracking-none font-normal text-black flex md:text-left">
                    Receive prasadam on special occasions such as birthdays and
                    anniversaries as part of blessings from lord Krishna on your
                    special day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second background part */}
        <div
          className=" w-full bg-cover items-center md:pl-44  pt-5 md:pt-10 md:b-[70px] overflow-hidden"
          style={{
            backgroundImage: `url(${
              window.innerWidth >= 768 ? DesktopImage : mobileImage
            })`,
          }}
        >
          <div className="flex flex-col items-start md:px-6 justify-center pl-10">
            <h2 className=" text-red font-bold md:text-[45px] text-[24px] text-left pt-2  ">
              ISKCON Lifetime Membership at Rs.
              <span className="text-[#515659]">35,555 /-</span> Only
            </h2>
            <p className="md:text-[20px] text-[16px] text-left font-bold leading-7 text-red tracking-none">
              (Installment option is also available)
            </p>
          </div>
          <ul className=" flex flex-col items-start md:pl-5 pl-10 leading-4 md:mt-5 mt-2">
            <li className="md:text-2xl text-base leading-2 tracking-none font-normal text-black">
              <span className="text-2xl">&#8226;</span> Patronship card on
              completion of your contribution
            </li>
            <li className="md:text-2xl text-base leading-2 tracking-none font-normal text-black">
              <span className="text-2xl">&#8226;</span> Accommodation of special
              rates for 3 days in any ISKCON guest house in one calendar year.
            </li>
            <li className="md:text-2xl text-base leading-2 tracking-none font-normal text-black">
              <span className="text-2xl">&#8226;</span> Tax benefit under
              section 80 G
            </li>
            <li className="md:text-2xl text-base leading-2 tracking-none font-normal text-black">
              <span className="text-2xl">&#8226;</span> Special Prasadam on your
              and your family member’s major life events like birthdays and
              Anniversaries
            </li>
            <li className="md:text-2xl text-base leading-2 tracking-none font-normal text-black">
              <span className="text-2xl">&#8226;</span> Books for Spiritual
              Enlightenment
            </li>
            <li className="md:text-2xl text-base leading-2 tracking-none font-normal text-black">
              <span className="text-2xl">&#8226;</span> Jap mala and bead bag
            </li>
            <li className="md:text-2xl text-base leading-2 tracking-none font-normal text-black">
              <span className="text-2xl">&#8226;</span> Special Passes for entry
              on major festivals and events
            </li>
          </ul>

          <div className="flex flex-col md:items-start items-center mt-5 md:pb-20 pb-5 ml-5">
            <div
              className="bg-[#C61D21] rounded-md px-8 py-2.5 text-white md:text-xl text-base font-semibold text-center"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #C61D21, #AA191C, #600E10)",
              }}
            >
              For any query call on +91-97005 62621
            </div>
          </div>
        </div>

        {/* third part */}
        <div
          className="w-full bg-cover items-center"
          style={{ backgroundImage: `url(${thirdbg})` }}
        >
          <div className="gridFortwo grid md:grid-cols-2 grid-cols-1 gap-2  md:max-w-[80%] max-w-[90%] items-center mx-auto pt-10">
            <div className="flex items-start md:gap-3 gap-1">
              <img
                src={bellicon}
                alt="belliconImage"
                className="md:mr-4 mr-1 flex items-center pt-2 md:w-[12px] w-[17px]"
              />
              <div>
                <h3 className="mb-3 md:text-3xl text-2xl bg-[radial-gradient(circle,_#C61D21,_#AA191C,_#600E10)] bg-clip-text text-transparent pb-1">
                  Book Set
                </h3>
                <p className="md:text-lg text-base w-full text-justify leading-2 tracking-none font-normal text-black flex md:text-left">
                  Collect your full book set from the temple after receiving the
                  entire payment. Additional charges apply for sending items to
                  the patron’s address.
                </p>
              </div>
            </div>

            <div className="flex items-start md:gap-3 gap-1">
              <img
                src={bellicon}
                alt="bellicon"
                className="md:mr-4 mr-1 flex items-center pt-2 md:w-[12px] w-[17px]"
              />
              <div>
                <h3 className="mb-3 md:text-3xl text-2xl bg-[radial-gradient(circle,_#C61D21,_#AA191C,_#600E10)] bg-clip-text text-transparent pb-1">
                  Visiting ISKCON Centers
                </h3>
                <p className="md:text-lg text-base w-full text-justify leading-2 tracking-none font-normal text-black flex md:text-left">
                  Wait for your card’s arrival before contacting other centres
                  for accommodation. Directly contact any official ISKCON centre
                  to confirm accommodation using your card details.
                </p>
              </div>
            </div>
          </div>

          <NavLink
            to="https://rzp.io/rzp/0oDifSu"
            style={{ textDecoration: "none" }}
          >
            {/* <img className='w-full' src={middlePage} alt="" /> */}
            <div
              class=" md:px-60 px-20 flex md:flex-row flex-col items-center justify-between md:py-2 py-1.5 md:gap-10 no-underline md:pt-4 py mt-5"
              style={{
                background:
                  "linear-gradient(to right, #FEEEDC 0%, #C34C41 16%, #BC3521 84%, #FEEEDC 100%)",
                textDecoration: "none",
              }}
            >
              <p
                class="text-white md:text-3xl text-base italic font-normal text-left no-underline"
                style={{ textDecoration: "none" }}
              >
                Donation of Rs.35,555 for Life Patron Membership Programme One
                Time Payment
              </p>
              <button
                class="bg-orange justify-center md:text-2xl text-base border-2 border-yellow-300 text-white font-medium py-2 px-4 rounded-full shadow-lg md:mr-10 md:inline no-underline whitespace-nowrap"
                style={{
                  borderRadius: "0 35px 35px 35px",
                  textDecoration: "none",
                }}
              >
                Contribute Now
              </button>
            </div>
          </NavLink>

          {/* <img className='w-full' src={lowerPage} alt="" /> */}
          <div className="mx-4">
            <div className="md:mx-44 md:border-5 border-2 md:rounded-2xl rounded-lg border-[#C61D21] mt-5 justify-center items-center  overflow-hidden">
              <h2 className="md:py-4 py-3 bg-[#C61D21] text-white text-center md:text-3xl text-base">
                Donation Through Bank (NEFT/RTGS){" "}
              </h2>
              <ul className=" flex flex-col justify-center xl:pl-80 md:pl-40pl-10 md:items-start md:space-y-5 space-y-2 leading-4 my-4 items-center">
                <li className="md:text-2xl text-base  leading-2 tracking-none font-bold text-black">
                  <span className="md:text-2xl text-base text-[#C61D21]">
                    Bank Name:
                  </span>{" "}
                  HDFC Bank
                  <button
                    class="bg-gray-200 md:text-xs text-[10px] px-2 md:py-0.5 border-1 border-[#C61D21] ml-2 rounded-full"
                    onClick={() => copyToClipboard("HDFC Bank", "bankName")}
                  >
                    {copiedText === "bankName" ? "Copied!" : "Copy"}
                  </button>
                </li>
                <li className="md:text-2xl text-base  leading-2 tracking-none font-bold text-black">
                  <span className="md:text-2xl text-base text-[#C61D21]">
                    Account Name:
                  </span>{" "}
                  Isckon
                  <button
                    class="bg-gray-200 md:text-xs text-[10px] px-2 md:py-0.5  border-1 border-[#C61D21] ml-2 rounded-full"
                    onClick={() => copyToClipboard("ISKCON", "accountName")}
                  >
                    {copiedText === "accountName" ? "Copied!" : "Copy"}
                  </button>
                </li>
                <li className="md:text-2xl text-base  leading-2 tracking-none font-bold text-black">
                  <span className=" text-[#C61D21]">Account Number:</span>{" "}
                  50100436709020
                  <button
                    class="bg-gray-200 md:text-xs text-[10px] px-2 md:py-0.5 border-1 border-[#C61D21] ml-2 rounded-full"
                    onClick={() =>
                      copyToClipboard("50100436709020", "accountNumber")
                    }
                  >
                    {copiedText === "accountNumber" ? "Copied!" : "Copy"}
                  </button>
                </li>
                <li className="md:text-2xl text-base  leading-2 tracking-none font-bold text-black">
                  <span className=" text-[#C61D21]">IFSC Code:</span> HDFC00568
                  <button
                    class="bg-gray-200 md:text-xs text-[10px] px-2 md:py-0.5 border-1 border-[#C61D21] ml-2 rounded-full"
                    onClick={() => copyToClipboard("HDFC00568", "ifscCode")}
                  >
                    {copiedText === "ifscCode" ? "Copied!" : "Copy"}
                  </button>
                </li>
                <li className="md:text-2xl text-base leading-2 tracking-none font-bold text-black">
                  <span className=" text-[#C61D21]">Branch:</span>{" "}
                  ONE TOWN VIJAYAWADA
                  <button
                    class="bg-gray-200 md:text-xs text-[10px] px-2 md:py-0.5 border-1 border-[#C61D21] ml-2 rounded-full"
                    onClick={() =>
                      copyToClipboard("ONE TOWN VIJAYAWADA", "branch")
                    }
                  >
                    {copiedText === "branch" ? "Copied!" : "Copy"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-4">
          <div className="md:mx-44  md:border-5 border-2 md:rounded-2xl rounded-lg border-[#C61D21] mt-10 overflow-hidden">
            <h2 className="md:py-4 py-2 bg-[#C61D21] text-white text-center md:text-3xl text-base">
              Donate Through UPI
            </h2>

            <div className="flex md:flex-row flex-col justify-around items-center pt-3 md:pb-3 pb-4 gap-4">
              <div className="md:block flex gap-2">
                <h2 className="md:text-2xl text-base text-[#C61D21]">
                  UPI ID:
                </h2>
                <p className="md:text-xl text-base  text-black">
                  {" "}
                  ISCKONVIJAYAWADA@IDFCBANK
                </p>
              </div>
              <img src={barcode1} alt="" width="200px" height="200px" />
              <img src={barcode2} alt="" width="200px" height="200px" />
            </div>
          </div>

          <div className="text-left md:mx-44 mt-5 mb-10">
            <h2 className="text-3xl  text-[#C61D21] text-left font-bold">
              NOTE:
            </h2>
            <p className="md:text-2xl mt-4 text-base text-black w-full text-justify font-semibold">
              If you make a donation via bank account transfer or UPI, please
              send a screenshot of your transaction for our records. You can
              share it with us on WhatsApp at
              <span className="text-red">+91 9955685568</span>. Thank you for
              your support!
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default LifeMembershipPage;
