import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const PoliciesUsage = () => {
  const policies = [
    { id: 1, title: "Term & Conditions of Donation" },
    { id: 2, title: "Terms & Conditions of Book Store" },
    { id: 3, title: "Privacy Policy of Book Store" },
    { id: 4, title: "Return and Refund Policy of Book Store" },
    { id: 5, title: "Shipping & Delivery Policy of Book Store" },
    { id: 6, title: "Guidelines to Please Krishna During Purushottam Month" },
    { id: 7, title: "Term & Conditions" },
  ];

  // Helper function to create slugs from titles
  const createSlug = (title) =>
    title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  return (
    <>
    <Header />
      <div className="mx-auto p-6 w-[70%] pt-16">
        <nav className="text-sm text-slate-600  mb-4">
          <Link to="/" className="hover:underline no-underline text-slate-950 font-bold">
            Home
          </Link>{" "}
          &gt; Policies of Usage
        </nav>
        <h1 className="text-2xl font-bold text-[#c61d21] mb-4">
          Policies of Usage
        </h1>

        <ul className="list-decimal ml-5 text-[#c61d21] ">
          {policies.map((policy) => (
            <li key={policy.id} className="mb-2 ">
              <Link
                to={`/policies-usage/${createSlug(policy.title)}`}
                className="hover:underline no-underline text-[#c61d21] text-xl font-['Inter']"
              >
                {policy.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </>
  );
};

export default PoliciesUsage;
