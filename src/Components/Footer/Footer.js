import footerImg from "./assets/image/footer_img.png";
import itemImg1 from "./assets/image/daily.png";
import itemImg2 from "./assets/image/temple.png";
import itemImg3 from "./assets/image/Vaishanava.png";
import itemImg4 from "./assets/image/reach.png";
import phone from "./assets/image/phone.svg";
import whatsapp from "./assets/image/whatsapp.svg";
import mail from "./assets/image/mail.svg";
import pin from "./assets/image/pin.svg";
import footerLogo from "./assets/image/footerLogo.png";
import insta from "./assets/image/Instagram.png";
import facebook from "./assets/image/Facebook Circled.png";
import youtube from "./assets/image/YouTube.png";
import linkedin from "./assets/image/LinkedIn.png";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <section>
      <div className="row pt-4 align-items-center justify-content-between gap-3 w-[90%] mx-auto">
        <div className="col-12 col-lg-4 pt-3 d-flex justify-content-center align-items-center">
          <div className="imgContainer">
            <img className="footerImg" src={footerImg} alt="Footer" />
            <div className="textBox">
              <h3 className="imgSub">His Divine Grace</h3>
              <h4 className="imgHead">A.C. BHAKTIVEDANTA SWAMI PRABHUPADA</h4>
            </div>
          </div>
        </div>

        <div className="col-12 mob-contact">
          <h1 className="textHead">CONTACT US</h1>
          <div className="d-flex justify-content-center mb-2 gap-3">
            <img src={phone} alt="phone icon" />
            <h3 style={{ color: "white", fontWeight: "400" }}>
              Call: 8006880038
            </h3>
          </div>
          <div className="d-flex justify-content-center mb-2 gap-3">
            <img src={whatsapp} alt="whatsapp icon" />
            <h3 style={{ color: "white", fontWeight: "400" }}>
              Whatsapp: 9955685568
            </h3>
          </div>


          <div className="d-flex justify-content-center mb-2 gap-3">
            <img src={mail} alt="e-mail icon" />
            <h3 style={{ color: "white", fontWeight: "400" }}>
              Email: seva@iskconvijayawada.org
            </h3>
          </div>
        </div>


        <div className="col-12 col-lg-4 pb-4 ">
          <div className="Box">
            <h1 className="textHead">NEWSLETTER</h1>
            <input className="form-control" type="text" placeholder="Name" />
            <input className="form-control" type="email" placeholder="Email" />
            <input className="form-control" type="phone" placeholder="Phone" />
            <button type="button" className="btn form-btn">
              Subscribe
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-3">
          <div className="Box">
            <h1 className="textHead">QUICK LINKS</h1>
            <div className="item-text" style={{ padding: "10px 15px" }}>
              <img
                className="item-img"
                src={itemImg1}
                alt="Item1"
                style={{ width: "45px", height: "45px", marginInlineStart: 6 }}
              />
              <h3 className="text">Daily Darshan</h3>
            </div>
            <div className="item-text">
              <img className="item-img" src={itemImg2} alt="Item2" />
              <h3 className="text">Temple Schedule</h3>
            </div>
            <div className="item-text">
              <img className="item-img" src={itemImg3} alt="Item3" />
              <h3 className="text">Vaishnava Calendar</h3>
            </div>
            <div className="item-text">
              <img className="item-img" src={itemImg4} alt="Item4" />
              <h3 className="text">How to Reach</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row our-temple align-items-start">
        <div className="col-12 col-lg-6 pb-4 text-center">
          <h2 className="textHead">OUR TEMPLES</h2>
          <div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={pin} alt="Location pin icon" />
              <h5 className="footer-text">
                ISKCON SRI RADHA SHYAM SUNDAR MANDIR
              </h5>
            </div>
            <h6 className="footer-sub-text">
              Main Temple - Amaravathi Karakatta Road, Undavalli, Vijayawada,
              522 501
            </h6>
            <div className="d-flex justify-content-center">
              <img src={pin} alt="Location pin icon" />
              <h5 className="footer-text">ISKCON SRI JAGANNATH MANDIR</h5>
            </div>
            <h6 className="footer-sub-text">
              City Temple - Skew Bridge, Krishna Lanka, Vijayawada - 520013
            </h6>
          </div>
        </div>
        <div
          className="col-12 col-lg-6 footerRight hide"
          style={{ textAlign: "center" }}
        >
          <h3 className="mb-3" style={{ color: "white" }}>
            CONTACT US
          </h3>
          <div className="d-flex justify-content-center align-items-center mb-2 gap-2">
            <img src={phone} alt="phone icon" />
            <h3 style={{ color: "white", fontWeight: "400" }}>
              Call: 8006880038
            </h3>
          </div>
          <div className="d-flex justify-content-center align-items-center mb-2 gap-3">
            <img src={whatsapp} alt="whatsapp icon" />
            <h3 style={{ color: "white", fontWeight: "400" }}>
              Whatsapp: 9955685568
            </h3>
          </div>
          <div className="d-flex justify-content-center align-items-center mb-2 gap-3">
            <img src={mail} alt="e-mail icon" />
            <h3 style={{ color: "white", fontWeight: "400" }}>
              Email: seva@iskconvijayawada.org
            </h3>
          </div>
        </div>
      </div>
      <div className="row mb-1">
        <div
          className="copyright"
          style={{
            borderTop: "1px solid white",

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="d-flex align-items-center footer-copyright">
            <img src={footerLogo} alt="Footer Logo" className="footer-logo" />
            <h5
              style={{
                color: "white",
                fontWeight: "400",
              }}
            >
              © 2024 ISKCON Vijayawada
            </h5>
            <a href="#" style={{ textDecoration: "none" }}>
              <Link to="/policies-usage" className="text-white no-underline hover:underline">Policies of uses</Link>
            </a>
          </div>
          <div className="d-flex gap-3 justify-content-center">
            <button
              onClick={() =>
                window.open(
                  "https://www.instagram.com/iskconvijayawada?igsh=bGZ2aWo1ejd6bDRp",
                  "_blank"
                )
              }
              style={{ background: "none", border: "none", padding: 0 }}
            >
              <img src={insta} alt="Instagram" />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.facebook.com/iskconvja1?mibextid=kFxxJD",
                  "_blank"
                )
              }
              style={{ background: "none", border: "none", padding: 0 }}
            >
              <img src={facebook} alt="Facebook" />
            </button>
            <button
              onClick={() =>
                window.open("https://www.youtube.com/@chakradharidas", "_blank")
              }
              style={{ background: "none", border: "none", padding: 0 }}
            >
              <img src={youtube} alt="YouTube" />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/75569807/admin/inbox/thread/2-NzJmODJkZjYtNjUxOC00ZjE1LWFmMDYtOTliYWIzODA0NWU2XzAxMA==/",
                  "_blank"
                )
              }
              style={{ background: "none", border: "none", padding: 0 }}
            >
              <img src={linkedin} alt="LinkedIn" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Footer;
