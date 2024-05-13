import { Link } from "react-router-dom";
import FoodCard from "../FoodCard";

const FeaturedFoods = () => {
  return (
    <>
      {/* <!-- Card Blog --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto font-open-sans">
        {/* <!-- Title --> */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight font-playfair-display">
            Featured Foods
          </h2>
          <p className="mt-1 text-gray-600">
            Explore our Featured Foods section where abundance meets
            opportunity! Discover a diverse range of high-quality food options
            ready to be shared and enjoyed.
          </p>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
        {/* <!-- End Grid --> */}

        {/* <!-- Card --> */}
        <div className="mt-12 text-center">
          <Link
            className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full bg-lime-600 text-white hover:bg-lime-700 shadow-sm disabled:opacity-50 disabled:pointer-events-none"
            to="/foods"
          >
            See All
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
          </Link>
        </div>
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Card Blog --> */}
    </>
  );
};

export default FeaturedFoods;
