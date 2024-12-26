import React from "react";

const ReturnAndRefund = () => {
  return (
    <div className="w-full">
      {/* Terms Content */}
      <div className=" w-full ">
        <h2 className="text-2xl font-bold text-[#c61d21]">
          What is the general return policy on Books Purchase?
        </h2>
        <p className="text-start font-['Roboto'] text-black text-lg">
          We generally dont accept any returns. But in the unfortunate event
          that the products are genuinely damaged, so we give an option for you
          to inform us within 14 days of the date of receipt of delivery.
        </p>
        <p className="text-start font-['Roboto'] text-black text-lg">
          Only few points to consider:-
        </p>
        <ol className="list-decimal font-['Roboto'] ">
          <li className="text-lg [&::marker]:text-3xl [&::marker]:text-[#c61d21]">
            You can initiate the return process by mailing us at
            info@iskcon.comThe product should return to us within 14 days
            of the date of the receipt of delivery. Please ensure the product is
            in its original condition, unopened and unused product along with
            the original invoice, box and price tags.
          </li>
          <li className="text-lg [&::marker]:text-3xl [&::marker]:text-[#c61d21] ">
            If in case the courier is found ineligible for refund, we will send
            the product back to you. You will have an option to take refund or
            exchange the product, as per your request. Payment made by card will
            be refunded on the same bank account and an online transfer will be
            issued on the bank details shared by the customer for payment made
            by Cash on delivery.
          </li>
          <li className="text-lg [&::marker]:text-3xl [&::marker]:text-[#c61d21]">
            Please note that replacements are subject to availability of
            particular products.
          </li>
        </ol>
      </div>

      {/* Privacy Policy */}
      <h2 className="text-2xl font-bold text-[#c61d21]">
        What should I do if I receive a Defective item or not something which I
        ordered?
      </h2>
      <div>
        <p className="text-start font-['Roboto'] text-black text-lg">
          Under such circumstances you can inform us within the 14 days of
          receipt of the product. You can inform us on by writing a mail on
          info@iskcon.com
        </p>
        <p className="text-start font-['Roboto'] text-black text-lg">
          Please follow the steps below for returning damaged, defective or
          wrong product:-
        </p>
        <ol className="list-decimal font-['Roboto'] ">
          <li className="text-lg [&::marker]:text-3xl [&::marker]:text-[#c61d21]">
            Please notify us within 14 days of receipt of the products and
            product should reach us within 10 days of sending the request.
          </li>
          <li className="text-lg [&::marker]:text-3xl [&::marker]:text-[#c61d21] ">
            Product should be returned in original packaging along with original
            box, price tags and invoice.
          </li>
          <li className="text-lg [&::marker]:text-3xl [&::marker]:text-[#c61d21]">
            As soon as we receive your items back, we inspect it to ensure
            everything is present and is in original conditions and then we
            issue the full refund or exchange with similar or different item as
            per your request.
          </li>
          <li className="text-lg [&::marker]:text-3xl [&::marker]:text-[#c61d21]">
            Payment made by card will be refunded on the same bank account and
            an online transfer will be issued on the bank details shared by the
            customer for payment made by Cash on delivery.
          </li>
          <li className="text-lg [&::marker]:text-3xl [&::marker]:text-[#c61d21]">
            Please note that replacements are subject to availability of
            particular products.
          </li>
        </ol>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-[#c61d21]">
          I need to return an item, how do I arrange for a pickup?
        </h2>
        <p className="text-start font-['Roboto'] text-black text-lg">
          You can Contact Us to initiate a return. You will receive a call
          explaining the process, once you have initiated a return.
        </p>
        <p className="text-start font-['Roboto'] text-black text-lg">
          Wherever possible we will facilitate the pick-up of the item through
          our courier partners. In case, the pick-up cannot be arranged by us,
          you can return the item through a third-party courier service and we
          will return the courier costs of Rs 100 for any courier charges borne
          by you to send the product to us
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#c61d21]">
          What are the modes of refund available after cancellation or return?
        </h2>

        <p className="text-start font-['Roboto'] text-black text-lg">
          For payment made by:
        </p>
        <p className="text-start font-['Roboto'] text-black text-lg">
          Debit/Credit or any other Card- We will refund in the same bank
          account.
        </p>
        <p className="text-start font-['Roboto'] text-black text-lg">
          Cash on delivery or any other mode- An online transfer would be made
          using bank account details shared by the customer.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-[#c61d21]">
          <h2 className="text-2xl font-bold text-[#c61d21]">
            In case of a refund, in how many days will the money be refunded?
          </h2>
        </h2>

        <p className="text-start font-['Roboto'] text-black text-lg">
          The money will be refunded according to the guidelines above in 14
          working days.
        </p>
        <h2 className="text-2xl font-bold text-[#c61d21]">
          In how many days will the product be delivered in the product
          replacement process?
        </h2>
        <p className="text-start font-['Roboto'] text-black text-lg">
          The product will be replaced and delivered to you in 14 working days
          after your request for replacement of product is approved.
        </p>
        <h2 className="text-2xl font-bold text-[#c61d21]">
          I have placed an order but due to some reason I need to cancel it. Can
          I do that?
        </h2>
        <p className="text-start font-['Roboto'] text-black text-lg">
          If we receive a cancellation notice and the order has not been
          processed/ approved by us, we shall cancel the order and refund the
          entire amount to User within 14 working days We will not be able to
          cancel orders that have already been processed, it is pertinent to
          note that we have the full right to decide whether an order has been
          processed or not.
        </p>
      </div>
    </div>
  );
};

export default ReturnAndRefund;
