import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../components/shared/Spinner";
import useAuth from "../../hooks/useAuth";

const errorSign = (
  <div className="absolute inset-y-3 end-0 pointer-events-none pe-3">
    <svg
      className="size-5 text-red-500"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  </div>
);

const Signin = () => {
  const {
    createUserWithGoogle,
    logIn,
    user,
    loading: authLoading,
    setLoading: setAuthLoading,
  } = useAuth();
  const [credentialError, setCredentialError] = React.useState(false);
  const [passwordShown, setPasswordShown] = React.useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const handleOnSubmit = (data) => {
    const { email, password } = data;
    logIn(email, password)
      .then(() => {
        setCredentialError(false);
        toast.success("Signin successful");
        if (location.state) console.log(location?.state);
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        setAuthLoading(false);
        setCredentialError(true);
        toast.error("Error! Try again.");
      });
  };
  const handleSocialSignUp = (provider) => {
    provider()
      .then(() => {
        toast.success("Signin successful");
        setCredentialError(false);
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        setAuthLoading(false);
        toast.error("Error! Try again.");
      });
  };

  if (authLoading) return <Spinner />;
  if (user) return <Navigate to={location.state ? location.state : "/"} />;
  return (
    <section className="flex flex-wrap md:justify-start md:flex-nowrap py-7 relative max-w-7xl w-full px-4 md:px-6 lg:px-8 mx-auto font-open-sans">
      <Helmet>
        <title>Bites+ | Signin</title>
      </Helmet>
      <div className="my-7 bg-white border border-gray-200 rounded-xl shadow-sm max-w-xl mx-auto w-full">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 font-playfair-display">
              Sign in
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Don&apos;t have an account yet? &nbsp;
              <Link
                className="text-blue-600 decoration-2 hover:underline font-medium"
                to="/signup"
              >
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <button
              onClick={() => handleSocialSignUp(createUserWithGoogle)}
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-400 bg-white text-gray-800 shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg
                className="w-4 h-auto"
                width="46"
                height="47"
                viewBox="0 0 46 47"
                fill="none"
              >
                <path
                  d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                  fill="#4285F4"
                />
                <path
                  d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                  fill="#34A853"
                />
                <path
                  d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                  fill="#FBBC05"
                />
                <path
                  d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                  fill="#EB4335"
                />
              </svg>
              Sign in with Google
            </button>

            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">
              Or
            </div>

            {/* <!-- Form --> */}
            <form onSubmit={handleSubmit(handleOnSubmit)}>
              <div className="grid gap-y-4">
                {/* <!-- Form Group --> */}
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="email@example.com"
                      autoComplete="username"
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                      required
                      aria-describedby="email-error"
                      {...register("email", {
                        required: true,
                      })}
                    />
                    {errors?.email && errorSign}
                  </div>
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Form Group --> */}
                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block text-sm mb-2">
                      Password
                    </label>
                    {/* <a
                      className="text-sm text-blue-600 decoration-2 hover:underline font-medium "
                      href="../examples/html/recover-account.html"
                    >
                      Forgot password?
                    </a> */}
                  </div>
                  <div className="relative">
                    <input
                      type={passwordShown ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="******"
                      autoComplete="current-password"
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                      required
                      aria-describedby="password-error"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password required",
                        },
                        maxLength: {
                          value: 20,
                          message: "Max password length 20",
                        },
                      })}
                    />
                    <button
                      onClick={togglePasswordVisiblity}
                      className={
                        errors?.password
                          ? "absolute right-10 top-3"
                          : "absolute right-3 top-3"
                      }
                      type="button"
                    >
                      {passwordShown ? (
                        <FaRegEye className="h-5 w-5" />
                      ) : (
                        <FaRegEyeSlash className="h-5 w-5" />
                      )}
                    </button>
                    {errors?.password && errorSign}
                  </div>
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Checkbox --> */}
                {/* <div className="flex items-center">
                    <div className="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="shrink-0 mt-0.5 border border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                      />
                    </div>
                    <div className="ms-3">
                      <label htmlFor="remember-me" className="text-sm">
                        Remember me
                      </label>
                    </div>
                  </div> */}
                {/* <!-- End Checkbox --> */}

                {/* Error Message */}
                <div>
                  {(Object.entries(errors).length > 0 || credentialError) && (
                    <p className="flex items-center gap-1 text-red-600 text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="-mt-px h-4 w-4 "
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {((errors?.email?.message || errors?.password?.message) &&
                        !credentialError &&
                        "Email and Password Required") ||
                        (credentialError && "Invalid Credentials")}
                    </p>
                  )}
                </div>
                {/* End Error Message */}

                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-lime-600 text-white hover:bg-lime-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Sign in
                </button>
              </div>
            </form>
            {/* <!-- End Form --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
