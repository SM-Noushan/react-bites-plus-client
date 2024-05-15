import React from "react";

const FAQ = () => {
  return (
    <>
      {/* <!-- FAQ --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Title --> */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800">
            Frequently Asked Questions
          </h2>
        </div>
        {/* <!-- End Title --> */}

        <div className="max-w-5xl mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                How does BitesPlus work?
              </h3>
              <p className="mt-2 text-gray-600">
                BitesPlus is a community-driven platform where donors can upload
                surplus food items, and those in need can request and collect
                these items. Our goal is to reduce food waste and support
                community members facing food insecurity.
              </p>
            </div>
            {/* <!-- End Col --> */}

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                How can I donate food through BitesPlus?
              </h3>
              <p className="mt-2 text-gray-600">
                To donate food, simply create an account, click on the "Donate
                Food" button, and fill out the form with details about the food
                item, pickup location, and any additional notes. Once submitted,
                your listing will be visible to those in need.
              </p>
            </div>
            {/* <!-- End Col --> */}

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                How can I request food on BitesPlus?
              </h3>
              <p className="mt-2 text-gray-600">
                To request food, create an account and browse the available food
                items listed by donors. When you find something you need, click
                on the "Request" button and follow the instructions to arrange
                for pickup.
              </p>
            </div>
            {/* <!-- End Col --> */}

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Is there a cost to use BitesPlus?
              </h3>
              <p className="mt-2 text-gray-600">
                No, BitesPlus is completely free to use. Our mission is to
                facilitate food sharing and reduce food waste in the community
                without any cost to users.
              </p>
            </div>
            {/* <!-- End Col --> */}

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                What types of food can be donated?
              </h3>
              <p className="mt-2 text-gray-600">
                Donors can offer a wide variety of food items, including fresh
                produce, packaged goods, and cooked meals. However, we encourage
                donors to ensure that all food items are safe, properly stored,
                and within their expiration dates to ensure safety and quality.
              </p>
            </div>
            {/* <!-- End Col --> */}

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                How do I contact BitesPlus for support or more information?
              </h3>
              <p className="mt-2 text-gray-600">
                If you need assistance or have any questions, you can contact
                our support team through the "Contact Us" page on our website.
                We are available during business hours.
              </p>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
      {/* <!-- End FAQ --> */}
    </>
  );
};

export default FAQ;
