import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNavButton = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        flex flex-col items-center justify-center flex-1 py-2
        ${isActive ? 'text-black' : 'text-black/70'}
      `}
    >
      <div className="h-6 w-6">{icon}</div>
      <div className="text-xs font-normal">{label}</div>
    </NavLink>
  );
};

const BottomNavigation = () => {
  const homeIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#FFF"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.8319 8.01002L14.2819 2.77002C13.0019 1.75002 11.0019 1.74002 9.73192 2.76002L3.18192 8.01002C2.24192 8.76002 1.67192 10.26 1.87192 11.44L3.13192 18.98C3.42192 20.67 4.99192 22 6.70192 22H17.3019C18.9919 22 20.5919 20.64 20.8819 18.97L22.1419 11.43C22.3219 10.26 21.7519 8.76002 20.8319 8.01002ZM12.7519 18C12.7519 18.41 12.4119 18.75 12.0019 18.75C11.5919 18.75 11.2519 18.41 11.2519 18V15C11.2519 14.59 11.5919 14.25 12.0019 14.25C12.4119 14.25 12.7519 14.59 12.7519 15V18Z"
        fill="black"
      ></path>
    </svg>
  );

  const libraryIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M3.30219 22.7501C2.94219 22.7501 2.59218 22.6601 2.29218 22.4801C1.62218 22.0901 1.24219 21.3101 1.24219 20.3401V8.98013C1.24219 6.85013 2.97217 5.12012 5.10217 5.12012H12.8822C15.0122 5.12012 16.7422 6.85013 16.7422 8.98013V20.3401C16.7422 21.3101 16.3622 22.0801 15.6922 22.4801C15.0222 22.8701 14.1622 22.8301 13.3122 22.3601L9.3822 20.1701C9.1922 20.0601 8.79217 20.0601 8.60217 20.1701L4.67218 22.3601C4.21218 22.6201 3.74219 22.7501 3.30219 22.7501ZM5.11218 6.63013C3.81218 6.63013 2.7522 7.69011 2.7522 8.99011V20.3501C2.7522 20.7601 2.87219 21.0801 3.06219 21.1901C3.25219 21.3001 3.59221 21.2501 3.95221 21.0501L7.8822 18.8601C8.5222 18.5101 9.48219 18.5101 10.1222 18.8601L14.0522 21.0501C14.4122 21.2501 14.7422 21.3001 14.9422 21.1901C15.1322 21.0801 15.2522 20.7601 15.2522 20.3501V8.99011C15.2522 7.69011 14.1922 6.63013 12.8922 6.63013H5.11218Z" fill="black"></path></svg>
  );

  const feedIcon = (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z" fill="black"></path></svg>
  );

  return (
    <div className="sm:block md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 z-50">
      <div className="flex justify-around">
        <BottomNavButton to="/" icon={homeIcon} label="Home" />
        <BottomNavButton to="/library" icon={libraryIcon} label="Library" />
        <BottomNavButton to="/feed" icon={feedIcon} label="Feed" />
      </div>
    </div>
  );
};

export default BottomNavigation;