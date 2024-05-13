import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Header = () => {
  const { user, loading, logOut } = useAuth();
  const navigate = useNavigate();
  const navItemsCSS =
    "relative inline-block text-black before:w-full px-2 py-1 rounded-md";
  const dropdownItemsCSS =
    "flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm hover:bg-gray-100 relative text-black";
  const handleSignout = () => {
    logOut()
      .then(() => {
        toast.success("Signout successful");
        navigate("/signin");
      })
      .catch(() => {
        toast.error("Error! Try Again");
      });
  };
  return (
    <>
      {/* <!-- ========== HEADER ========== --> */}
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 font-open-sans">
        <nav
          className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto"
          aria-label="Global"
        >
          <div className="md:col-span-3">
            {/* <!-- Logo --> */}
            <Link
              to="/"
              className="flex-none rounded-xl text-xl lg:text-3xl font-semibold focus:outline-none focus:opacity-80 flex items-center font-playfair-display"
              aria-label="BitePlus"
            >
              <svg
                className="size-8 lg:size-10"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
              >
                <style type="text/css">
                  {
                    "\n\t.st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n"
                  }
                </style>
                <path d="M29,10c-0.6,0-1,0.4-1,1v1c0,6.6-5.4,12-12,12S4,18.6,4,12v-1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1c0,7.7,6.3,14,14,14 s14-6.3,14-14v-1C30,10.4,29.6,10,29,10z" />
                <path d="M25,11H14.9c-0.5,0-0.9,0.3-1,0.8c-0.1,0.7-0.8,1.2-1.5,1.2s-1.3-0.5-1.5-1.2c-0.1-0.5-0.5-0.8-1-0.8H7c-0.6,0-1,0.4-1,1 c0,5.5,4.5,10,10,10s10-4.5,10-10C26,11.4,25.6,11,25,11z M17,18c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1V18z  M21,17c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1V17z" />
              </svg>
              <p>
                Bites<span className="text-lime-400">Plus</span>
              </p>
            </Link>
            {/* <!-- End Logo --> */}
          </div>

          {/* <!-- Button Group --> */}
          <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
            {loading ? (
              <div className="hidden lg:flex animate-pulse h-10 w-32 bg-gray-200 rounded-lg" />
            ) : user ? (
              <button
                onClick={handleSignout}
                className="flex items-center gap-x-2 font-semibold text-gray-500 hover:text-lime-600 sm:border-s sm:border-gray-300 sm:ps-6"
              >
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="user-img"
                    className="rounded-full size-7"
                  />
                ) : (
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
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                )}
                Sign out
              </button>
            ) : (
              <>
                <Link
                  to="signin"
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Sign in
                </Link>
                <Link
                  to="signup"
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500"
                >
                  Sign up
                </Link>
              </>
            )}
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-4"
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
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          {/* <!-- End Button Group --> */}

          {/* <!-- Collapse --> */}
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
              <div>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `${navItemsCSS} text-lime-400 md:border-2 md:border-lime-400`
                      : `${navItemsCSS} hover:text-lime-400`
                  }
                >
                  Home
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/foods"
                  className={({ isActive }) =>
                    isActive
                      ? `${navItemsCSS} text-lime-400 md:border-2 md:border-lime-400`
                      : `${navItemsCSS} hover:text-lime-400`
                  }
                >
                  Available Foods
                </NavLink>
              </div>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4 px-2.5">
                <button
                  type="button"
                  className="flex items-center w-full text-black hover:text-gray-500 font-medium"
                >
                  Options
                  <svg
                    className="flex-shrink-0 ms-2 size-4"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                  <NavLink
                    to="/food/add"
                    className={({ isActive }) =>
                      isActive
                        ? `ring-2 ring-lime-400 ${dropdownItemsCSS}`
                        : dropdownItemsCSS
                    }
                  >
                    Add Food
                  </NavLink>
                  <NavLink
                    to="/food/manage"
                    className={({ isActive }) =>
                      isActive
                        ? `ring-2 ring-lime-400 ${dropdownItemsCSS}`
                        : dropdownItemsCSS
                    }
                  >
                    Manage My Foods
                  </NavLink>
                  <NavLink
                    to="/food/request"
                    className={({ isActive }) =>
                      isActive
                        ? `ring-2 ring-lime-400 ${dropdownItemsCSS}`
                        : dropdownItemsCSS
                    }
                  >
                    My Food Request
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Collapse --> */}
        </nav>
      </header>
      {/* <!-- ========== END HEADER ========== --> */}
    </>
  );
};

export default Header;
