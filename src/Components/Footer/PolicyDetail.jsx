import { useParams, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TermsAndConditions from "./TermsConditon";
import TermsAndConditionsOfBook from './TermsConditionofBook'
import PrivacyPolicyOfBook from './PrivacyPolicyofBook'
import ReturnAndRefund from './ReturnAndRefund'
import ShippingAndDelivery from "./ShippingAndDelivery";
import Guidlines from './Guidlines'
import Conditions from "./Conditions";

const policiesContent = {
  "term--conditions-of-donation": {
    title: "Terms & Conditions of Donation",
    content: <TermsAndConditions/>,
  },
  "terms--conditions-of-book-store": {
    title: "Terms & Conditions of Book Store",
    content: <TermsAndConditionsOfBook/>,
  },
  "privacy-policy-of-book-store": {
    title: "Privacy Policy of Book Store",
    content: <PrivacyPolicyOfBook/>,
  },
  "return-and-refund-policy-of-book-store": {
    title: "Return and Refund Policy of Book Store",
    content: <ReturnAndRefund/>,
  },
  "shipping--delivery-policy-of-book-store": {
    title: "Shipping & Delivery Policy of Book Store",
    content: <ShippingAndDelivery />,
  },
  "guidelines-to-please-krishna-during-purushottam-month": {
    title: "Guidelines to Please Krishna During Purushottam Month",
    content: <Guidlines />,
  },
  "term--conditions": {
    title: "Term & Conditions",
    content: <Conditions />,
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
      <div className="w-[70%] mx-auto py-6 pt-16">
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
