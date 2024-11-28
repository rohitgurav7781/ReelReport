import React from 'react';

const SignInModal = ({
  email,
  password,
  emailError,
  passwordError,
  handleCloseSignInModal,
  handleEmailChange,
  handlePasswordChange,
  handleSubmit,
  handleForgetPass,
  handleAccount
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 mt-6">
      <div className="relative w-full max-w-[576px] rounded-lg bg-white p-6 shadow-lg">
        <button
          className="absolute right-4 text-black"
          type="button"
          onClick={handleCloseSignInModal}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="13"
              cy="13"
              r="12.5"
              fill="#1B1C1D"
              stroke="#E9EEF5"
            ></circle>
            <path
              d="M17.6562 16.0039C17.9023 16.2773 17.9023 16.6875 17.6562 16.9336C17.3828 17.207 16.9727 17.207 16.7266 16.9336L13.5 13.6797L10.2461 16.9336C9.97266 17.207 9.5625 17.207 9.31641 16.9336C9.04297 16.6875 9.04297 16.2773 9.31641 16.0039L12.5703 12.75L9.31641 9.49609C9.04297 9.22266 9.04297 8.8125 9.31641 8.56641C9.5625 8.29297 9.97266 8.29297 10.2188 8.56641L13.5 11.8477L16.7539 8.59375C17 8.32031 17.4102 8.32031 17.6562 8.59375C17.9297 8.83984 17.9297 9.25 17.6562 9.52344L14.4023 12.75L17.6562 16.0039Z"
              fill="white"
            ></path>
          </svg>
        </button>

        <h2 className="mb-8 text-2xl font-bold">Sign in to ReelReport</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="mb-2.5 block font-medium text-gray-700 text-lg"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => handleEmailChange({ target: { value: email } })}
              className={`block w-full border py-4 px-4 rounded-full text-base ${
                emailError ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="Enter Email"
            />
            {emailError && (
              <p className="mt-2 text-sm text-red-500">{emailError}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-2.5 block font-medium text-gray-700 text-lg"
            >
              Password
            </label>
            <div className="relative w-full">
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={() => handlePasswordChange({ target: { value: password } })}
                className={`block w-full border py-4 px-4 rounded-full text-base ${
                  passwordError ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="Enter Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 flex items-center right-4 px-3 cursor-pointer"
                tabIndex={-1}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4L20 20" stroke="#BFCAD9" strokeWidth="2" strokeLinecap="round"></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.22308 5.63732C4.19212 6.89322 2.60069 8.79137 1.73175 11.0474C1.49567 11.6604 1.49567 12.3396 1.73175 12.9526C3.31889 17.0733 7.31641 20 12 20C14.422 20 16.6606 19.2173 18.4773 17.8915L17.042 16.4562C15.6033 17.4309 13.8678 18 12 18C8.17084 18 4.89784 15.6083 3.5981 12.2337C3.54022 12.0835 3.54022 11.9165 3.5981 11.7663C4.36731 9.76914 5.82766 8.11625 7.6854 7.09964L6.22308 5.63732ZM9.47955 8.89379C8.5768 9.6272 7.99997 10.7462 7.99997 12C7.99997 14.2091 9.79083 16 12 16C13.2537 16 14.3728 15.4232 15.1062 14.5204L13.6766 13.0908C13.3197 13.6382 12.7021 14 12 14C10.8954 14 9.99997 13.1046 9.99997 12C9.99997 11.2979 10.3618 10.6802 10.9091 10.3234L9.47955 8.89379ZM15.9627 12.5485L11.4515 8.03729C11.6308 8.0127 11.8139 8 12 8C14.2091 8 16 9.79086 16 12C16 12.1861 15.9873 12.3692 15.9627 12.5485ZM18.5678 15.1536C19.3538 14.3151 19.9812 13.3259 20.4018 12.2337C20.4597 12.0835 20.4597 11.9165 20.4018 11.7663C19.1021 8.39172 15.8291 6 12 6C11.2082 6 10.4402 6.10226 9.70851 6.29433L8.11855 4.70437C9.32541 4.24913 10.6335 4 12 4C16.6835 4 20.681 6.92668 22.2682 11.0474C22.5043 11.6604 22.5043 12.3396 22.2682 12.9526C21.7464 14.3074 20.964 15.5331 19.9824 16.5682L18.5678 15.1536Z"
                    fill="#BFCAD9"
                  ></path>
                </svg>
              </button>
            </div>
            {passwordError && (
              <p className="mt-2 text-sm text-red-500">{passwordError}</p>
            )}
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold cursor-pointer" onClick={handleForgetPass}>
              Forgot Password ?
            </p>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-[rgb(220,38,38)] py-3 text-md font-medium text-white"
          >
            Sign in
          </button>
          <p className="text-center cursor-pointer text-lg font-medium text-gray-800" onClick={handleAccount}>
            Don't have an Account?
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;