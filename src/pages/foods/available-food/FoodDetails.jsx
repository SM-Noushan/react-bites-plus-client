import React from "react";
import { FaUsers } from "react-icons/fa6";

const FoodDetails = () => {
  return (
    <section>
      {/* <!-- Card Blog --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 sm:items-center gap-8">
          <div className="sm:order-2">
            <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
              <img
                className="size-full absolute top-0 start-0 object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
                alt="food-image"
              />
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div className="sm:order-1">
            <div className="mb-5 flex gap-4 items-center py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-white *:bg-gray-800 *:px-3.5 *:py-1.5 *:rounded-md">
              <p>Expires in: 21-12-2024</p>
              <div className="flex items-center gap-1.5">
                <p>Servings: &nbsp; 42</p>
                <FaUsers />
              </div>
            </div>

            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800">
              <p className="hover:text-lime-600">Food Name direct hiring</p>
            </h2>

            {/* <!-- Avatar --> */}
            <div className="mt-6 sm:mt-10 flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="size-10 sm:h-14 sm:w-14 rounded-full"
                  src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="donor-image"
                />
              </div>

              <div className="ms-3 sm:ms-4">
                <p className="sm:mb-1 font-semibold text-gray-800">
                  Donor Name
                </p>
                <p className="text-xs text-gray-500">Pickeup: Dhaka</p>
              </div>
            </div>
            {/* <!-- End Avatar --> */}

            <div className="mt-5">
              <button
                className="inline-flex items-center gap-x-1.5 text-lime-600 decoration-2 hover:underline font-medium"
                href="#"
              >
                Read more
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Blog --> */}
    </section>
  );
};

export default FoodDetails;
