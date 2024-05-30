import { Link } from "react-router-dom";
import FoodCard from "../../../components/FoodCard";
import React from "react";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../../../components/shared/CardSkeleton";

const AvailableFood = () => {
  const [filter, setFiler] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [layout, setLayout] = React.useState(true);
  const searchRef = React.useRef("");
  const axiosSecure = useAxiosSecure();

  const { data: foods, isLoading } = useQuery({
    queryKey: ["availableFoods", { search, filter }],
    queryFn: () =>
      axiosSecure
        .get(`/foods/?search=${search}&filter=${filter}`)
        .then((res) => res.data),
  });

  React.useEffect(() => {
    // console.log("aaaaaa>>");
    // window.addEventListener("load", () => {
    //   const ft = window.HSSelect.getInstance("#filter");
    //   console.log("XXX>>");
    //   ft.on("change", (val) => {
    //     console.log("val>>", val);
    //     setFiler(val);
    //   });
    // });
    // console.log(filter);
  }, []);
  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  return (
    <>
      {/* <!-- Card Blog --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto font-open-sans">
        <Helmet>
          <title>Bites+ | Available Foods</title>
        </Helmet>
        {/* <!-- Title --> */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight font-playfair-display">
            Available Foods
          </h2>
          <p className="mt-1 text-gray-600">
            Discover a wealth of options in our Available Foods section, where
            abundance meets convenience. Utilize our advanced search and sorting
            by expiration date features to find the perfect match for your
            needs, hassle-free.
          </p>
        </div>
        {/* <!-- End Title --> */}
        <div>
          <div className="flex justify-center items-center gap-2">
            {/* <!-- SearchBox --> */}
            <div className="relative max-w-sm w-full">
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                <svg
                  className="flex-shrink-0 size-4 text-gray-400"
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
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <input
                ref={searchRef}
                className="py-3 ps-10 pe-4 block w-full border border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                type="text"
                placeholder="Search"
                defaultValue={search}
              />
            </div>
            <button
              onClick={handleSearch}
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-lime-600 text-white hover:bg-lime-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Search
            </button>
            {/* <!-- End SearchBox --> */}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-60 mb-4">
            {/* <!-- Filter --> */}
            <div className="hs-dropdown relative inline-flex">
              <button
                id="hs-dropdown-default"
                type="button"
                className="hs-dropdown-toggle w-60 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg
                  className="flex-shrink-0 size-3.5 me-2"
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
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
                Filter
              </button>

              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                aria-labelledby="hs-dropdown-default"
              >
                <button
                  onClick={() => setFiler(0)}
                  className="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                >
                  Default{" "}
                  {filter === 0 && (
                    <svg
                      className="flex-shrink-0 size-3.5 text-emerald-600"
                      xmlns="http:.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => setFiler(1)}
                  className="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                >
                  Expired Date (Ascending)
                  {filter === 1 && (
                    <svg
                      className="flex-shrink-0 size-3.5 text-emerald-600"
                      xmlns="http:.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => setFiler(-1)}
                  className="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                >
                  Expired Date (Descending)
                  {filter === -1 && (
                    <svg
                      className="flex-shrink-0 size-3.5 text-emerald-600"
                      xmlns="http:.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {/* End Filter */}
          </div>
          <div>
            <button
              onClick={() => setLayout(!layout)}
              className="hidden lg:inline-flex py-3 px-4 items-center text-sm font-semibold rounded-lg border border-transparent bg-lime-600 text-white hover:bg-lime-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Change Layouts
            </button>
          </div>
        </div>

        {/* <!-- Grid --> */}
        <div
          className={`grid sm:grid-cols-2 lg:${
            layout ? "grid-cols-3" : "grid-cols-2"
          } gap-6`}
        >
          {isLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            foods.map((food) => <FoodCard key={food._id} food={food} />)
          )}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Blog --> */}
    </>
  );
};

export default AvailableFood;
