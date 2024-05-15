import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import AddFoodErrorMsg from "./AddFoodErrorMsg";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { useLoaderData, useParams } from "react-router-dom";

const AddFood = ({ variant = null, children, request = {} }) => {
  const food = useLoaderData();
  const { id } = useParams() || null;
  // console.log(food);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const currentDate = moment().format("YYYY-MM-DD");
  const [monitorFoodStatus, setMonitorFoodStatus] = React.useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  React.useEffect(() => {
    if (food?.foodStatus === "Not Available") setMonitorFoodStatus(false);
    if (variant)
      Object.keys(request).forEach((key) => {
        setValue(key, food[key]);
      });
    if (variant === false)
      Object.keys(food).forEach((key) => {
        if (key != "_id") setValue(key, food[key]);
      });
  }, [food, variant, setValue, request]);

  const { mutateAsync: addFoodMutation } = useMutation({
    mutationFn: (data) => {
      // console.log(data);
      variant === null
        ? axiosSecure.post("/food", data).then((res) => {
            if (res?.data?.insertedId) {
              setMonitorFoodStatus(true);
              reset();
              toast.success("Successfully Added");
            } else toast.error("Failed to add. Try again");
          })
        : axiosSecure.put(`/food/${id}`, data).then((res) => {
            if (res?.data?.modifiedCount) {
              toast.success("Successfully Updated");
            } else toast.error("Failed to update. Try again");
          });
    },
  });
  const handleLocalSubmit = async (data) => {
    if (variant === null) {
      data.donatorName = user?.displayName;
      data.donatorEmail = user?.email;
      data.donatorPhotoURL = user?.photoURL;
      data.donatorUID = user?.uid;
      data.foodStatus = monitorFoodStatus ? "Available" : "Not Available";
    }
    // console.log(data);
    try {
      // console.log(data);
      await addFoodMutation(data);
    } catch (err) {
      toast.error("Error! Try again.");
    }
  };
  return (
    <>
      {/* <!-- Card Section --> */}
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto font-open-sans">
        <Helmet>
          {variant === null ? (
            <title>Bites+ | Add Food</title>
          ) : (
            variant === false && <title>Bites+ | Update Food</title>
          )}
        </Helmet>
        <form onSubmit={handleSubmit(handleLocalSubmit)}>
          {/* <!-- Card --> */}
          <div className="bg-white rounded-xl shadow">
            <div
              className="relative h-40 rounded-t-xl bg-no-repeat bg-cover bg-center"
              style={
                variant
                  ? {
                      backgroundImage: `url(${request.foodImage})`,
                    }
                  : {
                      backgroundImage: `url('https://preline.co/assets/svg/examples/abstract-bg-1.svg')`,
                    }
              }
            />

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
                      readOnly={variant}
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

                {children}

                {/* food status */}
                {!variant && (
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
                          value="Available"
                          onChange={() => setMonitorFoodStatus(true)}
                          checked={monitorFoodStatus}
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
                          value="Not Available"
                          onChange={() => setMonitorFoodStatus(false)}
                          checked={!monitorFoodStatus}
                        />
                        <span className="text-sm text-gray-500 ms-3">
                          Not Available
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* food quantity & expire date */}
                <div className="flex gap-6 items-center *:flex-1">
                  {/* food quantity */}
                  {!variant && (
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
                  )}

                  {/* expire date */}
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
                        // defaultValue={currentDate}
                        min={currentDate}
                        readOnly={variant}
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
                  <label
                    htmlFor="pickupLocation"
                    className="block text-sm mb-2"
                  >
                    Pickup Location
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="pickupLocation"
                      name="pickupLocation"
                      placeholder="Enter food location"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                      aria-describedby="foodImage-error"
                      readOnly={variant}
                      {...register("pickupLocation", { required: true })}
                    />
                  </div>
                  {errors?.pickupLocation && (
                    <AddFoodErrorMsg message="Food Location" />
                  )}
                </div>

                {/* additional notes */}
                {!variant && (
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
                )}
              </div>
              {/* <!-- End Grid --> */}

              {!variant && (
                <div className="mt-5 flex justify-center gap-x-2">
                  <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-lime-600 text-white hover:bg-lime-700 disabled:opacity-50 disabled:pointer-events-none">
                    {variant === false ? "Update" : "Add"} Food Item
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* <!-- End Card --> */}
        </form>
      </div>
      {/* <!-- End Card Section -->    */}
    </>
  );
};

AddFood.propTypes = {
  variant: PropTypes.bool,
  children: PropTypes.node,
  request: PropTypes.object,
};

export default AddFood;
