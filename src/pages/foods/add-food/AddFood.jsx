import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import AddFoodErrorMsg from "./AddFoodErrorMsg";
import React from "react";
import moment from "moment";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const AddFood = () => {
  const { user } = useAuth();
  const currentDate = moment().format("YYYY-MM-DD");
  const [monitorFoodStatus, setMonitorFoodStatus] = React.useState("available");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLocalSubmit = (data) => {
    data.donatorName = user?.displayName;
    data.donatorEmail = user?.email;
    data.donatorPhotoURL = user?.photoURL;
    console.log(data);
  };
  return (
    <>
      {/* <!-- Card Section --> */}
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto font-open-sans">
        <Helmet>
            <title>Bites+ | Add Food</title>
        </Helmet>
        <form onSubmit={handleSubmit(handleLocalSubmit)}>
          {/* <!-- Card --> */}
          <div className="bg-white rounded-xl shadow">
            <div className="relative h-40 rounded-t-xl bg-[url('https://preline.co/assets/svg/examples/abstract-bg-1.svg')] bg-no-repeat bg-cover bg-center" />

            <div className="pt-0 p-4 sm:pt-0 sm:p-7">
              {/* <!-- Grid --> */}
              <div className="space-y-4 sm:space-y-6 mt-12">
                {/* food name */}
                <div>
                  <label htmlFor="foodName" className="block text-sm mb-2">
                    Food Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="foodName"
                      name="foodName"
                      placeholder="Enter food name"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                      aria-describedby="foodName-error"
                      {...register("foodName", {
                        required: true,
                      })}
                    />
                  </div>
                  {errors?.name && <AddFoodErrorMsg message="Food Name" />}
                </div>

                {/* food image */}
                <div>
                  <label htmlFor="foodName" className="block text-sm mb-2">
                    Food Image
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      id="foodImage"
                      name="foodImage"
                      placeholder="Enter food name"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                      aria-describedby="foodImage-error"
                      {...register("foodImage", {
                        required: true,
                        pattern:
                          /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(\/[a-zA-Z0-9.\-=&?%_+,]*)*$/i,
                      })}
                    />
                  </div>
                  {errors?.foodImage && (
                    <AddFoodErrorMsg message="Food Image | Invalid URL" />
                  )}
                </div>

                {/* food status */}
                <div>
                  <label
                    htmlFor="food-status-checkbox"
                    className="block text-sm mb-2"
                  >
                    Food Status
                  </label>
                  <div className="flex gap-6">
                    <label
                      htmlFor="food-status-checkbox-available"
                      className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <input
                        type="radio"
                        name="food-status-checkbox"
                        className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        id="food-status-checkbox-available"
                        {...register("foodStatus", { required: true })}
                        value="available"
                        onChange={() => setMonitorFoodStatus("available")}
                        checked={monitorFoodStatus === "available"}
                      />
                      <span className="text-sm text-gray-500 ms-3">
                        Available
                      </span>
                    </label>

                    <label
                      htmlFor="food-status-checkbox-notAvailable"
                      className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <input
                        type="radio"
                        name="food-status-checkbox"
                        className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        id="food-status-checkbox-notAvailable"
                        {...register("foodStatus", { required: true })}
                        value="not available"
                        onChange={() => setMonitorFoodStatus("not available")}
                        checked={monitorFoodStatus === "not available"}
                      />
                      <span className="text-sm text-gray-500 ms-3">
                        Not Available
                      </span>
                    </label>
                  </div>
                </div>

                {/* food quantity & expire date */}
                <div className="flex gap-6 items-center *:flex-1">
                  <div>
                    <label
                      htmlFor="foodQuantity"
                      className="block text-sm mb-2"
                    >
                      Food Quantity
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="foodQuantity"
                        name="foodQuantity"
                        placeholder="Enter food quantity"
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                        aria-describedby="foodImage-error"
                        min="0"
                        {...register("foodQuantity", {
                          required: true,
                          min: 0,
                        })}
                      />
                    </div>
                    {errors?.foodQuantity && (
                      <AddFoodErrorMsg message="Food Quantity " />
                    )}
                  </div>

                  <div>
                    <label htmlFor="expireDate" className="block text-sm mb-2">
                      Expire Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="expireDate"
                        name="expireDate"
                        placeholder="Enter food location"
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                        aria-describedby="foodImage-error"
                        min={currentDate}
                        {...register("expireDate", { required: true })}
                      />
                    </div>
                    {errors?.expireDate && (
                      <AddFoodErrorMsg message="Expire Date" />
                    )}
                  </div>
                </div>

                {/* food location */}
                <div>
                  <label htmlFor="foodLocation" className="block text-sm mb-2">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="foodLocation"
                      name="foodLocation"
                      placeholder="Enter food location"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                      aria-describedby="foodImage-error"
                      {...register("foodLocation", { required: true })}
                    />
                  </div>
                  {errors?.foodLocation && (
                    <AddFoodErrorMsg message="Food Location" />
                  )}
                </div>

                {/* additional notes */}
                <div className="space-y-2">
                  <label
                    htmlFor="additionalNotes"
                    className="block text-sm mb-2"
                  >
                    Additional Notes
                  </label>

                  <textarea
                    id="additionalNotes"
                    className="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                    rows="6"
                    placeholder="Please provide any additional information or notes here..."
                    {...register("additionalNotes")}
                  />
                </div>
              </div>
              {/* <!-- End Grid --> */}

              <div className="mt-5 flex justify-center gap-x-2">
                <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-lime-600 text-white hover:bg-lime-700 disabled:opacity-50 disabled:pointer-events-none">
                  Add Food Item
                </button>
              </div>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </form>
      </div>
      {/* <!-- End Card Section -->    */}
    </>
  );
};

export default AddFood;
