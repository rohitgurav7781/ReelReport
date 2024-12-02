import React, { useState } from "react";
import SignInModal from './SignInModal';
import ForgetPasswordModal from './ForgetPassModal';
import AccountModal from "./AccountModal";

const Navbar = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showForgetPass, setShowForgetPass] = useState(false);
  const [showAccount,setShowAccount] = useState(false);
  const [username, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");


  const handleSignIn = () => {
    setShowSignInModal(true);
  };

  const handleCloseSignInModal = () => {
    setShowSignInModal(false);
    resetForm();
  };

  const handleForgetPass = () => {
    setShowForgetPass(true);
    setShowSignInModal(false);
  };

  const handleBackToSignIn = () => {
    setShowForgetPass(false);
    setShowAccount(false)
    setShowSignInModal(true);
    resetForm();
  };

  const handleCloseForgetPasswordModal = () => {
    setShowForgetPass(false);
    setEmail("");
  };

  const handleAccount = ()=>{
    setShowAccount(true)
  }

  const handleCloseAccountModal = ()=>{
    setShowAccount(false);
    setUserName("")
    setEmail("");
    setPassword("");
  }

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
  };

  const validateEmail = (value) => {
    if (!value) {
      return "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Invalid email address";
    }
    return "";
  };

  const validatePassword = (value) => {
    return value ? "" : "Password is required";
  };

  const validateUsername = (value) => {
    return value ? "" : "UserName is required";
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    setUserNameError(validateUsername(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const usernameValidation = validateUsername(username)

    setEmailError(emailValidation);
    setPasswordError(passwordValidation);

    if (!emailValidation && !passwordValidation && !usernameValidation) {
      console.log("Form submitted successfully!");
    }
  };

  return (
    <nav className="z-50 w-screen bg-zinc-950">
      <div className="flex items-center justify-between overflow-x-scroll px-4 py-4">
        <div className="flex items-center space-x-3 md:space-x-6 rtl:space-x-reverse">
          <a className="min-w-[120px]" href="/">
            <img
              src="https://demo.reelreport.net/assets/logo-CRSp59X4.svg"
              alt="ReelReport Logo"
              className="h-9 sm:h-10"
              width="155"
              height="40"
            />
          </a>
          <div className="rounded-2xl border-[1.5px] border-green-500">
            <p className="my-1 px-2 text-[9px] text-white sm:px-4 sm:text-sm">
              Beta
            </p>
          </div>
        </div>

        <div className="z-50 flex items-center gap-1 sm:gap-3">
          <ul className="flex items-center">
            <li
              className="bg-gray-800 h-10 w-[100px] cursor-pointer rounded-full text-white flex items-center justify-evenly"
              onClick={handleSignIn}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.0013 7.99992C9.84225 7.99992 11.3346 6.50753 11.3346 4.66658C11.3346 2.82564 9.84225 1.33325 8.0013 1.33325C6.16035 1.33325 4.66797 2.82564 4.66797 4.66658C4.66797 6.50753 6.16035 7.99992 8.0013 7.99992Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.7268 14.6667C13.7268 12.0867 11.1601 10 8.0001 10C4.8401 10 2.27344 12.0867 2.27344 14.6667"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-semibold">Sign In</span>
            </li>
          </ul>
        </div>
      </div>

      {showSignInModal && (
         <SignInModal 
          email={email}
          password={password}
          emailError={emailError}
          passwordError={passwordError}
          handleCloseSignInModal={handleCloseSignInModal}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleSubmit={handleSubmit}
          handleForgetPass={handleForgetPass}
          handleAccount={handleAccount}
        />
    
      )}

      {showForgetPass && (
        <ForgetPasswordModal 
          email={email}
          emailError={emailError}
          handleBackToSignIn={handleBackToSignIn}
          handleCloseForgetPasswordModal={handleCloseForgetPasswordModal}
          handleEmailChange={handleEmailChange}
          handleSubmit={handleSubmit}
        />
      )}

      {showAccount && (
        <AccountModal
        username={username}
        email={email}
        password={password}
        userNameError={userNameError}
        emailError={emailError}
        passwordError={passwordError}
        handleUsernameChange={handleUserNameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleBackToSignIn={handleBackToSignIn}
        handleCloseAccountModal={handleCloseAccountModal}
        />
      )}


    </nav>
  );
};

export default Navbar;