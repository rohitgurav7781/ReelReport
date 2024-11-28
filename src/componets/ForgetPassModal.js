import React from 'react';

const ForgetPasswordModal = ({
  email,
  emailError,
  handleBackToSignIn,
  handleCloseForgetPasswordModal,
  handleEmailChange,
  handleSubmit
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 mt-6">
      <div className="relative w-full max-w-[576px] rounded-lg bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between mb-8">
         <div className="flex items-center space-x-4">
            <button
              className="text-black"
              type="button"
              onClick={handleBackToSignIn}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 6L9 12L15 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold">Forget Password</h2>
          </div>

          <button
            className="text-black"
            type="button"
            onClick={handleCloseForgetPasswordModal}
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
        </div>

        <p>Enter your email to recover your password</p>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="mt-8">
            <label
              htmlFor="email"
              className="block font-medium text-gray-700 text-lg"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => handleEmailChange({ target: { value: email } })}
              className={`block w-full border mt-4 py-4 px-4 rounded-full text-base ${
                emailError ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="Enter Email"
            />
            {emailError && (
              <p className="mt-2 text-sm text-red-500">{emailError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-[rgb(220,38,38)] py-3 text-md font-medium text-white"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordModal;