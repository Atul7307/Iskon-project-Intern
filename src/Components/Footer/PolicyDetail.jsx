import { useParams, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TermsAndConditions from "./TermsConditon";

const policiesContent = {
  "term--conditions-of-donation": {
    title: "Terms & Conditions of Donation",
    content: <TermsAndConditions/>,
  },
  "terms--conditions-of-book-store": {
    title: "Terms & Conditions of Book Store",
    content: "Content for Terms & Conditions of Book Store...",
  },
  "privacy-policy-of-book-store": {
    title: "Privacy Policy of Book Store",
    content: "Content for Privacy Policy of Book Store...",
  },
  "return-and-refund-policy-of-book-store": {
    title: "Return and Refund Policy of Book Store",
    content: "Content for Return and Refund Policy of Book Store...",
  },
  "shipping--delivery-policy-of-book-store": {
    title: "Shipping & Delivery Policy of Book Store",
    content: "Content for Shipping & Delivery Policy of Book Store...",
  },
  "guidelines-to-please-krishna-during-purushottam-month": {
    title: "Guidelines to Please Krishna During Purushottam Month",
    content: "Content for Guidelines to Please Krishna...",
  },
  "term--conditions": {
    title: "Term & Conditions",
    content: "Content for Terms & Conditions...",
  },
  "krsna-app-privacy-policy": {
    title: "Krsna App Privacy Policy",
    content: "Content for Krsna App Privacy Policy...",
  },
};

const PolicyDetail = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const policy = policiesContent[slug]; // Match the slug to the policy content

  if (!policy) {
    return <div className="container mx-auto p-6">Policy not found!</div>;
  }

  return (
    <>
    <Header/>
      <div className="w-[70%] mx-auto py-6">
        <nav className="text-sm text-slate-600 mb-4">
          <Link to="/" className="hover:underline  no-underline text-slate-950 font-bold">
            Home
          </Link>{" "}
          &gt;
          <Link to="/policies-usage" className="hover:underline  no-underline text-slate-950 font-bold">
            {" "}
            Policies of Usage
          </Link>{" "}
          &gt;
          {policy.title}
        </nav>
        <h1 className="text-3xl font-bold text-[#c61d21] mb-4">
          {policy.title}
        </h1>
        <div className="w-full">
        {policy.content}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PolicyDetail;
