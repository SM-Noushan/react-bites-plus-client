import {
  FaArrowRightFromBracket,
  FaCalendarCheck,
  FaLocationArrow,
  FaUsers,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const FoodCard = () => {
  return (
    <div className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5">
      <div className="aspect-w-16 aspect-h-11 overflow-hidden rounded-xl">
        <img
          className="w-full object-cover rounded-xl hover:scale-125 hover:brightness-75 duration-1000 transition"
          src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="food-image"
        />
      </div>
      <div className="my-6">
        <h3 className="text-xl font-semibold text-gray-800 font-playfair-display">
          Food Name
        </h3>
        <div>
          <div className="">
            <h4 className="text-lg font-semibold mt-5">Information</h4>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <FaUsers />
                <h6>Quantity :</h6>
              </div>
              <h5>10 Servings</h5>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <FaCalendarCheck />
                <h6>Expired &nbsp; :</h6>
              </div>
              <h5>10 september</h5>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <FaLocationArrow />
                <h6>Pickup &nbsp; &nbsp; :</h6>
              </div>
              <h5>Dhaka</h5>
            </div>
          </div>
        </div>
        <p className="text-sm mt-5 text-gray-600">
          Notes: At Wake, our mission has always been focused on bringing
          openness.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="mt-auto flex items-center gap-x-3">
          <img
            className="size-8 rounded-full"
            src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="donator-image"
          />
          <div>
            <h5 className="text-sm text-gray-800">By, Lauren Waller</h5>
          </div>
        </div>
        <Link className="text-emerald-400 text-xl hover:text-white hover:bg-lime-400 p-2 rounded-full">
          <FaArrowRightFromBracket />
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
