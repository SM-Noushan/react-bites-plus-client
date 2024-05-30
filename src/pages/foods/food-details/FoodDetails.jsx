import { FaUsers } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import AddFood from "../add-food/AddFood";
import { useLoaderData, useParams } from "react-router-dom";
import moment from "moment";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { HSOverlay } from "preline/preline";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

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
  const myNoteRef = React.useRef(null);
  const food = useLoaderData() || null;
  const currentDate = moment().format("MM/DD/YYYY");
  const { user } = useAuth();
  const [rq, setRQ] = React.useState(false);
  const {
    donatorEmail,
    foodName,
    foodImage,
    foodStatus,
    donatorName,
    donatorPhotoURL,
    pickupLocation,
    foodQuantity,
    expireDate,
  } = food;
  const { id } = useParams() || null;
  const axiosSecure = useAxiosSecure();
  const { mutateAsync: requestMutation } = useMutation({
    mutationFn: (data) => {
      axiosSecure.put(`food/${id}`, data).then((res) => {
        if (res.data.modifiedCount) {
          setRQ(true);
          toast.success("Food requested");
          HSOverlay.close("#food-request-modal");
        }
      });
    },
  });

  React.useEffect(() => {
    foodStatus === "Requested" && setRQ(true);
    // console.log(request);
    if (window.HSStaticMethods) window.HSStaticMethods.autoInit();
  }, [foodStatus]);

  const handleRequest = async () => {
    const data = {
      foodStatus: "Requested",
      requesterEmail: user?.email,
      requesterNote: myNoteRef.current.value,
      requestDate: moment().format("YYYY-MM-DD"),
    };
    if (user?.email == donatorEmail)
      return toast.warn("!!!You can't request you own food");
    try {
      await requestMutation(data);
    } catch (err) {
      // console.log(err);
    }
  };
  return (
    <section>
      {/* <!-- Card Blog --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <Helmet>
          <title>Bites+ | {foodImage}</title>
        </Helmet>
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 sm:items-center gap-8">
          <div className="sm:order-2">
            <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
              <img
                className="size-full absolute top-0 start-0 object-cover rounded-lg"
                src={foodImage}
                alt="food-image"
              />
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div className="sm:order-1">
            <div className="mb-5 flex gap-4 items-center py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-white *:bg-gray-800 *:px-3.5 *:py-1.5 *:rounded-md">
              <p>
                Expires in:{" "}
                {moment(expireDate, "YYYY-MM-DD").format("Do MMM, YYYY")}
              </p>
              <div className="flex items-center gap-1.5">
                <p>Servings: &nbsp; {foodQuantity}</p>
                <FaUsers />
              </div>
            </div>

            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800">
              <p className="hover:text-lime-600">{foodName}</p>
            </h2>

            {/* <!-- Avatar --> */}
            <div className="mt-6 sm:mt-10 flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="size-10 sm:h-14 sm:w-14 rounded-full"
                  src={
                    donatorPhotoURL ||
                    "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt="donor-image"
                />
              </div>

              <div className="ms-3 sm:ms-4">
                <p className="sm:mb-1 font-semibold text-gray-800">
                  {donatorName}
                </p>
                <p className="text-xs text-gray-500">
                  Pickup: {pickupLocation}
                </p>
              </div>
            </div>
            {/* <!-- End Avatar --> */}

            <div className="mt-5">
              <button
                disabled={rq}
                className="inline-flex items-center gap-x-1.5 text-lime-600 decoration-2 font-medium bg-lime-50/70 hover:bg-lime-50 px-3 py-2.5 border-2 border-lime-400 rounded-lg"
                data-hs-overlay="#food-request-modal"
              >
                {rq ? "Already Requested" : "Request Food"}
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
                    <AddFood
                      variant={true}
                      request={{
                        foodName,
                        foodImage,
                        expireDate,
                        pickupLocation,
                      }}
                    >
                      {inputFiled("Food Id", "foodId", id)}
                      {inputFiled(
                        "Donator Email",
                        "donatorEmail",
                        donatorEmail
                      )}
                      {inputFiled("Donator Name", "donatorName", donatorName)}
                      {inputFiled(
                        "Requester Email",
                        "requesterEmail",
                        user.email
                      )}
                      {inputFiled("Request Date", "requestDate", currentDate)}
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
                          ref={myNoteRef}
                          id="requesterNotes"
                          name="requesterNotes"
                          className="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                          rows="6"
                          placeholder="Please provide any additional information or notes here..."
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
                  disabled={rq}
                  onClick={handleRequest}
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
