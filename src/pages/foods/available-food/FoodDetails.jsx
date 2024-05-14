import React from "react";
import { FaUsers } from "react-icons/fa6";
import AddFood from "../add-food/AddFood";

const inputFiled = (label, idName, val) => (
  <div>
    <label htmlFor="foodName" className="block text-sm mb-2">
      {label}
    </label>
    <div className="relative">
      <input
        type="text"
        id={idName}
        name={idName}
        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
        aria-describedby="foodName-error"
        defaultValue={val}
        readOnly
      />
    </div>
  </div>
);

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
                className="inline-flex items-center gap-x-1.5 text-lime-600 decoration-2 font-medium bg-lime-50/70 hover:bg-lime-50 px-3 py-2.5 border-2 border-lime-400 rounded-lg"
                data-hs-overlay="#food-request-modal"
              >
                Request Food
                <svg
                  className="flex-shrink-0 size-4 rotate-90"
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
      {/* modal */}
      <div>
        <div
          id="food-request-modal"
          className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
        >
          <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
            <div className="w-full max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
              <div className="flex justify-between items-center py-3 px-4 border-b">
                <h3 className="font-bold text-gray-800">Request Food</h3>
                <button
                  type="button"
                  className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-overlay="#food-request-modal"
                >
                  <span className="sr-only">Close</span>
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="p-4 overflow-y-auto">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Food Information
                    </h3>
                    <AddFood variant={true}>
                      {inputFiled("Food Id", "foodId", "id1727838919838")}
                      {inputFiled("Donator Email", "donatorEmail", "donator@example.com")}
                      {inputFiled("Donator Name", "donatorName", "donator name")}
                      {inputFiled("Requester Name", "requesterName", "requester name")}
                    </AddFood>
                    <form className="px-8 sm:px-13 lg:px-16">
                      <div className="space-y-2">
                        <label
                          htmlFor="requesterNotes"
                          className="block text-sm mb-2"
                        >
                          My Notes
                        </label>

                        <textarea
                          id="requesterNotes"
                          name="requesterNotes"
                          className="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                          rows="6"
                          placeholder="Please provide any additional information or notes here..."
                          //   {...register("requesterNotes")}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-overlay="#food-request-modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-lime-600 text-white hover:bg-lime-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Make Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;
