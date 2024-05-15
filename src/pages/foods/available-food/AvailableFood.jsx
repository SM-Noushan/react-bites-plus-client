import { Link } from "react-router-dom";
import FoodCard from "../../../components/FoodCard";
import React from "react";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../../../components/shared/CardSkeleton";

const AvailableFood = () => {
  const [filter, setFiler] = React.useState("0");
  const [search, setSearch] = React.useState("");
  const [layout, setLayout] = React.useState(true);
  const searchRef = React.useRef("");
  const axiosSecure = useAxiosSecure();

  const {
    data: foods,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["availableFoods", { search, filter }],
    queryFn: () =>
      axiosSecure
        .get(`/foods/?search=${search}&filter=${filter}`)
        .then((res) => res.data),
  });

  React.useEffect(() => {
    window.addEventListener("load", () => {
      const ft = window.HSSelect.getInstance("#filter");
      ft.on("change", (val) => setFiler(val));
    });
    // console.log(filter);
  }, [filter]);
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
            {/* <!-- Select --> */}
            <select
              id="filter"
              defaultValue={filter}
              data-hs-select='{
                "placeholder": "<span class=\"inline-flex items-center\"><svg class=\"flex-shrink-0 size-3.5 me-2\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"/></svg> Filter</span>",
                "toggleTag": "<button type=\"button\"></button>",
                "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-lime-500 focus:ring-lime-500 before:absolute before:inset-0 before:z-[1]",
                "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500",
                "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100",
                "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                "extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
              }'
              className=""
            >
              {/* <option value="">Filter</option> */}
              <option value="0">Default</option>
              <option value="1">Expired Date (Ascending)</option>
              <option value="-1">Expired Date (Descending)</option>
            </select>
            {/* <!-- End Select --> */}
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
