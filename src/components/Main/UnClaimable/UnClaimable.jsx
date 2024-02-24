import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../AboutUs/AboutUs.css";
export default function UnClaimable() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <p>Un-Claimable Products</p>
        <hr />
        <p className="aboutText1">*Flash sale items with No-Return Policy</p>
        <div className="container aboutText mt-2">
          Product(s) which are sold for a special super low price (Marked down
          products, Flash Sales, Seasons Sales, Special offers, Today Deals,
          Open Box, Daily Deals or any other Product(s) which have been sold
          with discount)
        </div>
        <div className="container aboutText mt-2">
          Free-size or Multi color Product(s) cannot be claimed. (Product(s)
          listed on the Site as multi-color, free-size, assorted color, assorted
          design, etc. are items on which size/color cannot be guaranteed and is
          subject to availability.)
        </div>
        <p className="aboutText2 mt-2">Return & Replacement Policy</p>
        <div className="container aboutText mt-2">
          To claim for a Return, please check if the purchased Product(s) falls
          under the warranty as per the Warranty Policy. If the Product(s) is
          under warranty, then you can claim for Return based on the following
          conditions:
        </div>
        <div className="container aboutText mt-2">
          Customer can claim for Return in the event that the product is damaged
          or not functional within 3 days from the date of receiving the
          Product(s).
        </div>
        <div className="container aboutText mt-2">
          If customer does not like the product, only replacement is possible
          (excluding Marked down products, Flash Sales, Seasons Sales, Special
          offers)with another product of the same or greater value (Delivery
          charges will apply).
        </div>
        <div className="container aboutText mt-2">
          Shipping and payment processing charges are non-refundable.
        </div>
        <p className="aboutText2">Replacement Procedure</p>
        <div className="container aboutText mt-2">
          a. Approved: If the Product(s) is found faulty as per the policy then
          the Replacement process will be initiated.
        </div>
        <div className="container aboutText mt-2">
          b. Not Approved: For Product(s) not faulty and claimed due to the
          Product(s) not being as per expectations, pickup charges of (AED 20)
          replacement with another product delivery charges will be applicable.
        </div>
        <div className="container aboutText mt-2">
          c. If product is already out from its original packing or used
          already, in this case no returned or refund will given.
        </div>
        <p className="aboutText2">Delivery Policy</p>
        <div className="container aboutText mt-2">
          We like to give our customers’ the flexibility of Free Delivery in
          major parts of UAE at the time of Promotions.
        </div>
        <div className="container aboutText mt-2">
          Other than that, we charge delivery charge depends on the
          product/delivery location.
        </div>
        <p className="aboutText2">
          Note: The Shipping charges and VAT charges are non-refundable.
        </p>
        <p className="aboutText1">Product Images</p>
        <div className="container aboutText mt-2">
          All product images are for illustrative purposes only and may differ
          from the actual product due to product enhancement. Due to differences
          in monitors, colors of products may also appear different to those
          shown on the site.
        </div>
        <p className="aboutText1">Privacy Policy</p>
        <p className="aboutText2">Privacy Policy:</p>
        <div className="container aboutText mt-2">
          Dealsmart is operated by Dealsmart  which may operate other
          websites. It is Dealsmart's policy to respect your privacy regarding
          any information we may collect while operating our websites.
        </div>
        <p className="aboutText2">Privacy Policy Changes</p>
        <div className="container aboutText mt-2">
          Although most changes are likely to be minor, Dealsmart may change its
          Privacy Policy from time to time. Dealsmart encourage visitors to
          frequently check this page for any changes to its Privacy Policy. Your
          continued use of this site after any change in this Privacy Policy
          will constitute your acceptance of such change.
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}
