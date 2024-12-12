import React from "react";
import "./Arti.css";
import AartiImage from "./assets/images/Arti.jpg";
import MainImage from "./assets/images/Main.jpg";
import mobPage from "./assets/images/mob-page.jpg";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import flem from "./assets/images/flem.png";
import img1 from "./assets/image1.png";
import img2 from "./assets/image2.png";
import img3 from "./assets/image3.png";
import img4 from "./assets/image4.png";
import img5 from "./assets/image5.png";
import img6 from "./assets/image6.png";
import img7 from "./assets/image7.png";
import img8 from "./assets/image8.png";
import img9 from "./assets/image9.png";

const Flame = () => (
  <>
    <Header />
    <div className="flame-container">
      <img src={AartiImage} alt="Aarti" className="full-width-image" />
      {/* <img src={MainImage} alt="Main" className="full-width-image" /> */}

      {/* mangal Arti  */}
      <div className=" w-full m-0  ">
        <div className="max-w-[1570px] mx-auto mangal-arti bg-cover bg-center bg-no-repeat px-5">
          <p className="text-justify text-black text-sm lg:text-3xl font-normal font-['Open Sans'] capitalize leading-snug lg:leading-10  lg:pt-5 pt-3">
            The beautiful temple day is filled with various activities,
            especially the worship of the Deity in the temple, sankirtana,
            religious discourses all day Aarti schedule:
          </p>
          <div className="flex gap-1 lg:gap-7 flex-col lg:flex-row items-center">
            <img
              src={flem}
              alt=""
              className="w-[315px]  lg:w-[585px] lg:h-[595px]"
            />
            <div className="w-[361px] lg:w-[925px] text-justify">
              <h3 className="w-[361px] lg:w-auto text-[#770f32] text-lg text-center lg:text-start lg:text-4xl font-bold font-['Source Serif Pro'] capitalize">
                4.30 a.m. - 5.00 a.m. – Mangal Aarti
              </h3>
              <p className="w-[361px] lg:w-auto text-black text-sm lg:text-2xl font-normal font-['Open Sans'] capitalize  text-justify px-6">
                Our morning starts with Mangal Aarti. It starts at sharp 4:30.
                It is considered the most auspicious and blissful ceremony for
                all the participants. The Pujari blows the conch and the Deity’s
                curtains are opened. Prior to opening the curtain, the Pujari
                has awakened the Deities, offering them Balya-bhoga of morning
                paraphernalia, water, and milk sweets or other preparations
                suitable for early morning. The transcendental sound of the
                conch (shankh) is blown to signal the awakening of the Deities,
                who appear still dressed in their nightdress, without garlands
                or jewelry. While the Pujari is performing Mangala-Aarti, the
                devotees offer their obeisance’s and take up kirtan, which
                involves a set program of songs. Sri Sri Gurvashtakam is sung
                during the Mangal Aarti ceremony which is the glorification of
                the guru on how he engages his disciples in the process of
                Bhakti-yoga. Then Narsingh Aarti is sung. This aarti signifies
                the devotee’s surrender unto Lord Narasimha Dev and even
                glorifies Lord Narsimha Dev for His pastime of the killing of
                the demon Hiranyakasipu. The Lord Narsimha Dev removes all the
                obstacles from the path of Bhakti.
              </p>
            </div>
          </div>
        </div>

        {/* card section */}
        <div className=" mx-auto  card bg-cover bg-center bg-no-repeat py-11  lg:mb-6 relative lg:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-24 px-6 lg:px-28 w-full place-items-center lg:place-items-start">
            <div className="flex-col justify-start items-center gap-1 lg:gap-6 inline-flex w-[300px] lg:w-auto">
              <img
                src={img1}
                alt=""
                className="w-[300px] h-[200px] lg:w-[426px] lg:h-[323px]"
              />
              <h3 className="text-[#f3b01b] text-lg font-bold font-['Source Serif Pro'] capitalize text-center">
                5.00 a.m. - 5.15 a.m. – Tulsi-Aarti
              </h3>
              <p className="text-white/75 text-sm font-semibold font-['Open Sans'] capitalize text-justify">
                Right after the Mangal Aarti, the prayer to Tulsi Maharani takes
                place. Tulsi is the most sacred plant and is known as the
                favorite of Lord Krishna. The worship of Tulsi Maharani is
                beneficial as she awards Bhakti to the devotees. One devotee
                offers Aarti incense, lamp, and flowers, on behalf of all the
                devotees and then everyone waters the roots of Tulsi Maharani to
                take her blessings
              </p>
            </div>

            <div className="flex-col justify-start items-center gap-1 lg:gap-6 inline-flex w-[300px] lg:w-auto">
              <img
                src={img2}
                alt=""
                className="w-[300px] h-[200px] lg:w-[426px] lg:h-[323px]"
              />
              <h3 className="text-[#f3b01b] text-lg font-bold font-['Source Serif Pro'] capitalize text-center">
                7.15 a.m. - 7.30 a.m. – Darshan Aarti
              </h3>
              <p className="text-white/75 text-sm font-semibold font-['Open Sans'] capitalize text-justify">
                Once the Deities are ornamented, dressed, and worshipped
                privately, they give Darshan to all the devotees so that people
                can offer prayers and worship. The chief priest offers Aarti a
                lamp, incense, Chamara, and peacock fan. It’s a blissful sight,
                full of devotion. Prayers from Brahma Samhita are sung to
                glorify the Lord.
              </p>
            </div>

            <div className="flex-col justify-start items-center gap-1 lg:gap-6 inline-flex w-[300px] lg:w-auto">
              <img
                src={img3}
                alt=""
                className="w-[300px] h-[200px] lg:w-[426px] lg:h-[323px]"
              />
              <h3 className="text-[#f3b01b] text-lg font-bold font-['Source Serif Pro'] capitalize text-center">
                7.30- 7:45 a.m. – Guru-Puja
              </h3>
              <p className="text-white/75 text-sm font-semibold font-['Open Sans'] capitalize text-justify">
                In this session, ISKCON members offer greetings to Srila
                Prabhupada. They express gratitude to him and beg for his mercy
                of him as, without the guru, one cannot reach the Supreme. He is
                the bestower of knowledge in the heart of the sincere devotee.
                During the Guru Puja, devotees sing and offer flower petals at
                the lotus feet of great Srila Prabhupada.
              </p>
            </div>

            <div className="flex-col justify-start items-center gap-1 lg:gap-6 inline-flex w-[300px] lg:w-auto">
              <img
                src={img4}
                alt=""
                className="w-[300px] h-[200px] lg:w-[426px] lg:h-[323px]"
              />
              <h3 className="text-[#f3b01b] text-lg font-bold font-['Source Serif Pro'] capitalize text-center">
                8:00- 9:00am – Srimad-Bhagavatam Class
              </h3>
              <p className="text-white/75 text-sm font-semibold font-['Open Sans'] capitalize text-justify">
                After Guru Puja, all the devotees sit down together and hear the
                auspicious Srimad-Bhagavatam. Keeping with an ancient tradition
                of passing down spiritual knowledge, our well-versed speakers
                teach the essence of this timeless scripture, giving everyone
                the opportunity to grow in spiritual life. The spokesperson
                reads the stanza and explanations by
              </p>
            </div>

            <div className="flex-col justify-start items-center gap-1 lg:gap-6 inline-flex w-[300px] lg:w-auto">
              <img
                src={img5}
                alt=""
                className="w-[300px] h-[200px] lg:w-[426px] lg:h-[323px]"
              />
              <h3 className="text-[#f3b01b] text-lg font-bold font-['Source Serif Pro'] capitalize text-center">
                12.30 p.m. - 12.55 p.m. – Raj Bhoga Aarti
              </h3>
              <p className="text-white/75 text-sm font-semibold font-['Open Sans'] capitalize text-justify">
                This particular Aarti lasts up to 20 minutes. During the Aarti,
                food is offered to all the Deities. The chief priest also offers
                aromatic incense, fresh flowers, Chamara, and a peacock fan to
                the Deities.
              </p>
            </div>

            <div className="flex-col justify-start items-center gap-1 lg:gap-6 inline-flex w-[300px] lg:w-auto">
              <img
                src={img6}
                className="w-[300px] h-[200px] lg:w-[426px] lg:h-[323px]"
              />
              <h3 className="text-[#f3b01b] text-lg font-bold font-['Source Serif Pro'] capitalize text-center">
                4.20 p.m. - 4.30 p.m. – Dhupa Aarti
              </h3>
              <p className="text-white/75 text-sm font-semibold font-['Open Sans'] capitalize text-justify">
                This Dhupa Aarti lasts up to 10 minutes. The chief priest offers
                Aarti with aromatic incense, fresh flowers, Chamara, and a
                peacock fan as well. After that, bhog of fruits was offered to
                the Deities.
              </p>
            </div>
          </div>

          <div class=" w-full h-[38px] lg:h-[100px] bg-gradient-to-t from-[#682D33] via-[#682D33]  via-[#FFDFBE] to-[#fce9d7] absolute -top-1 lg:-top-16 "></div>
          <div class=" w-full h-[38px] lg:h-[100px] bg-gradient-to-b from-[#682D33] via-[#682D33]  via-[#FFDFBE] to-[#fce9d7] absolute -bottom-1 lg:-bottom-16"></div>
        </div>

        {/* next card */}
        <div className="flex flex-col lg:flex-row  justify-start items-center lg:items-start gap-3 lg:gap-24 pt-6 lg:pt-16  px-6 lg:px-28  mangal-arti bg-cover bg-center bg-no-repeat w-full">
          <div className="w-full flex-col justify-center items-center gap-1 lg:gap-7 flex lg:w-1/3">
            <img
              src={img7}
              className="lg:w-[426px] lg:h-[323px] w-[300px] h-[200px] "
              alt=""
            />
            <div className="flex-col justify-start items-start gap-1 lg:gap-1.5 flex w-[300px] lg:w-auto">
              <h3 className="self-stretch text-center text-black text-lg lg:text-2xl font-bold font-['Source Serif Pro'] capitalize text-center  lg:text-justify">
                7.00 p.m. - 7:30 p.m.- Sandhya Aarti
              </h3>
              <p className="self-stretch text-justify text-[#770f32] text-sm lg:text-xl font-normal font-['Open Sans '] capitalize">
                Sandhya Aarti is better known as Gaura Aarti. All the devotees
                sing Gaura Aarti and offer worship to Lord Chaitanya. This is
                one of the most magnificent and wonderful arti where people from
                all over the place come to praise the Lord. Devotees sing loudly
                and dance. The blissful sight is not to be missed
              </p>
            </div>
          </div>

          <div className="flex-col justify-center items-center gap-1 lg:gap-7 flex lg:w-1/3">
            <img
              src={img8}
              className="lg:w-[426px] lg:h-[323px] w-[300px] h-[200px]"
              alt=""
            />
            <div className="flex-col justify-start items-start gap-1 lg:gap-1.5 flex w-[300px] lg:w-auto">
              <h3 className="self-stretch text-center text-black text-lg lg:text-2xl font-bold font-['Source Serif Pro'] capitalize text-center">
                8:00 p.m. -9:00 p.m.
              </h3>
              <p className="self-stretch text-justify text-[#770f32] text-sm lg:text-xl font-normal font-['Open Sans '] capitalize text-center">
                Just like morning, in the evening it is also conducted with the
                same devotion and manner. It is held for the worshippers and
                residents as well.
              </p>
            </div>
          </div>

          <div className="flex-col justify-center items-center gap-1 lg:gap-7 flex lg:w-1/3">
            <img
              src={img9}
              className="lg:w-[426px] lg:h-[323px] w-[300px] h-[200px]"
              alt=""
            />
            <div className="flex-col justify-center items-center gap-1 lg:gap-1.5 flex w-[300px] lg:w-auto">
              <h3 className="self-stretch text-center text-black text-lg lg:text-2xl font-bold font-['Source Serif Pro'] capitalize text-center">
                8:30 p.m.-8.45 p.m. – Shayan Aarti
              </h3>
              <p className="self-stretch text-justify text-[#770f32] text-sm lg:text-xl font-normal font-['Open Sans '] capitalize">
                It is the final Aarti of the day. This Aarti ceremony is the
                last chance to see and worship the Deities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Flame;
