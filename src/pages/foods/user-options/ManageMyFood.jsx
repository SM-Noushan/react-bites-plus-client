import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";
import { Helmet } from "react-helmet-async";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import CardSkeleton from "../../../components/shared/CardSkeleton";
import "animate.css";

const swalWithCustomButtons = Swal.mixin({
  customClass: {
    confirmButton:
      "inline-flex items-center gap-x-1.5 py-2.5 px-3 rounded-md font-medium bg-red-500 text-white mr-4",
    cancelButton:
      "inline-flex items-center gap-x-1.5 py-2.5 px-3 rounded-md font-medium bg-teal-500 text-white",
  },
  buttonsStyling: false,
});

const ManageMyFood = ({ type }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const { data: foods, isLoading } = useQuery({
    queryKey: ["manageMyFoods"],
    queryFn: () =>
      axiosSecure.get(`/foods/?email=${user?.email}`).then((res) => res.data),
  });

  const { mutateAsync: deleteFoodMutation } = useMutation({
    mutationFn: (id) => {
      axiosSecure.delete(`food/${id}`).then((res) => {
        if (res?.data?.deletedCount) {
          queryClient.invalidateQueries(["manageMyFoods"]);
          Swal.fire({
            title: "Removed!",
            text: "Food Item Removed",
            icon: "success",
          });
        }
      });
    },
    // onSuccess: () => {
    //   console.log("onSuccess"); //it triggers on every deletion
    //   queryClient.invalidateQueries(["manageMyFoods"]); //it triggers only the first time
    // },
  });
  const handleDelete = (id) => {
    swalWithCustomButtons
      .fire({
        title: "Are you sure?",
        text: "Are you sure that you want to delete it?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        showClass: {
          popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
        },
        hideClass: {
          popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
        },
      })
      .then(async (result) => {
        try {
          if (result.isConfirmed) await deleteFoodMutation(id);
          else
            Swal.fire({
              title: "Cancelled!",
              text: "Cancelled delete request",
              icon: "error",
            });
        } catch (e) {
          console.log(e);
        }
      });
  };
  return (
    <>
      {/* <!-- Table Section --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto font-open-sans">
        <Helmet>
          <title>
            Bites+ | {type === "request" ? "My Food Request" : "Manage My Food"}
          </title>
        </Helmet>
        {/* <!-- Card --> */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {/* <!-- Header --> */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 font-playfair-display">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      Manage My Foods
                    </h2>
                    <p className="text-sm text-gray-600">Update or Remove</p>
                  </div>

                  {/* view all */}
                  {/* <div>
                    <div className="inline-flex gap-x-2">
                      <a
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                        href="#"
                      >
                        View all
                      </a>
                    </div>
                  </div> */}
                </div>
                {/* <!-- End Header --> */}

                {isLoading ? (
                  <CardSkeleton />
                ) : (
                  // <!-- Table -->
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 font-playfair-display">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Sl
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Food
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Notes
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Status
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Quantity
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Pickup
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Expires At
                            </span>
                          </div>
                        </th>
                        {type === "manage" && (
                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                Action
                              </span>
                            </div>
                          </th>
                        )}
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      {foods.map((food, idx) => (
                        <tr key={food._id}>
                          {/* sl */}
                          <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="text-sm text-gray-600">
                                {idx + 1}
                              </span>
                            </div>
                          </td>
                          {/* food */}
                          <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <div className="flex flex-col gap-y-2">
                                <img
                                  className="inline-block size-16 rounded-md"
                                  src={food.foodImage}
                                  alt="food-image"
                                />
                                <div className="grow">
                                  <span className="text-sm text-gray-600">
                                    {food.foodName}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          {/* notes */}
                          <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="text-sm text-gray-600">
                                {food.additionalNotes}
                              </span>
                            </div>
                          </td>
                          {/* status */}
                          <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full capitalize">
                                {food.foodStatus}
                              </span>
                            </div>
                          </td>
                          {/* quantity */}
                          <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="p-2 inline-flex items-center gap-x-1 text-xs font-medium bg-gray-200 rounded-full">
                                {food.foodQuantity}
                              </span>
                            </div>
                          </td>
                          {/* pickup */}
                          <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-slate-100 text-slate-800 rounded-full">
                                {food.pickupLocation}
                              </span>
                            </div>
                          </td>
                          {/* expires */}
                          <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="text-sm text-gray-600">
                                {moment(food.expireDate, "YYYY-MM-DD").format(
                                  "Do MMM, YYYY"
                                )}
                              </span>
                            </div>
                          </td>

                          {/* action */}
                          {type === "manage" && (
                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-1.5 flex gap-2">
                                <button
                                  type="button"
                                  className="flex flex-shrink-0 justify-center items-center gap-2 size-[38px] text-sm font-semibold rounded-lg border border-transparent bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                  <FaPencil />
                                </button>
                                <button
                                  onClick={() => handleDelete(food._id)}
                                  type="button"
                                  className="flex flex-shrink-0 justify-center items-center gap-2 size-[38px] text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                  <FaTrash />
                                </button>
                              </div>
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  // <!-- End Table -->
                )}

                {/* <!-- Footer --> */}
                {/* <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-800">6</span>{" "}
                      results
                    </p>
                  </div>

                  <div>
                    <div className="inline-flex gap-x-2">
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                      >
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
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                        Prev
                      </button>

                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Next
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
                </div> */}
                {/* <!-- End Footer --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Table Section --> */}
    </>
  );
};

ManageMyFood.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ManageMyFood;
