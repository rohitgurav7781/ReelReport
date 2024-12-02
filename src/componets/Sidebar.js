import React, { useState } from 'react';

const SidebarButton = ({ to, icon, label }) => {
  return (
    <a
      href={to}
      className={`
        mb-6 flex cursor-pointer flex-col items-center justify-center gap-2 px-4 py-2
        text-black/70 
      `}
    >
      <div className="h-6 w-6">{icon}</div>
      <div className="text-dark font-h4 !font-normal">{label}</div>
    </a>
  );
};

const MobileFooterButton = ({ to, icon, label }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <a
      href={to}
      onClick={() => setIsActive(true)}
      className={`
        flex flex-col items-center justify-center flex-1 py-2
        ${isActive ? 'text-white' : 'text-white/70'}
      `}
    >
      <div className="h-6 w-6">{icon}</div>
      <div className="text-xs font-normal">{label}</div>
    </a>
  );
};


const MobileFooterNavigation = () => {
  const homeIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.8319 8.01002L14.2819 2.77002C13.0019 1.75002 11.0019 1.74002 9.73192 2.76002L3.18192 8.01002C2.24192 8.76002 1.67192 10.26 1.87192 11.44L3.13192 18.98C3.42192 20.67 4.99192 22 6.70192 22H17.3019C18.9919 22 20.5919 20.64 20.8819 18.97L22.1419 11.43C22.3219 10.26 21.7519 8.76002 20.8319 8.01002ZM12.7519 18C12.7519 18.41 12.4119 18.75 12.0019 18.75C11.5919 18.75 11.2519 18.41 11.2519 18V15C11.2519 14.59 11.5919 14.25 12.0019 14.25C12.4119 14.25 12.7519 14.59 12.7519 15V18Z"
      ></path>
    </svg>
  );

  const libraryIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.30219 22.7501C2.94219 22.7501 2.59218 22.6601 2.29218 22.4801C1.62218 22.0901 1.24219 21.3101 1.24219 20.3401V8.98013C1.24219 6.85013 2.97217 5.12012 5.10217 5.12012H12.8822C15.0122 5.12012 16.7422 6.85013 16.7422 8.98013V20.3401C16.7422 21.3101 16.3622 22.0801 15.6922 22.4801C15.0222 22.8701 14.1622 22.8301 13.3122 22.3601L9.3822 20.1701C9.1922 20.0601 8.79217 20.0601 8.60217 20.1701L4.67218 22.3601C4.21218 22.6201 3.74219 22.7501 3.30219 22.7501ZM5.11218 6.63013C3.81218 6.63013 2.7522 7.69011 2.7522 8.99011V20.3501C2.7522 20.7601 2.87219 21.0801 3.06219 21.1901C3.25219 21.3001 3.59221 21.2501 3.95221 21.0501L7.8822 18.8601C8.5222 18.5101 9.48219 18.5101 10.1222 18.8601L14.0522 21.0501C14.4122 21.2501 14.7422 21.3001 14.9422 21.1901C15.1322 21.0801 15.2522 20.7601 15.2522 20.3501V8.99011C15.2522 7.69011 14.1922 6.63013 12.8922 6.63013H5.11218Z" fill="white"></path><path d="M14.69 22.7501C14.25 22.7501 13.79 22.6201 13.32 22.3701L9.39001 20.1801C9.20001 20.0801 8.78998 20.0801 8.59998 20.1801L4.67999 22.3701C3.82999 22.8401 2.95999 22.8801 2.29999 22.4901C1.62999 22.1001 1.25 21.3201 1.25 20.3601V9.00012C1.25 6.87012 2.97999 5.14014 5.10999 5.14014H12.89C15.02 5.14014 16.75 6.87012 16.75 9.00012V20.3601C16.75 21.3201 16.37 22.1001 15.7 22.4901C15.4 22.6601 15.06 22.7501 14.69 22.7501ZM9 18.6001C9.4 18.6001 9.79 18.6901 10.12 18.8701L14.05 21.0601C14.41 21.2601 14.75 21.3101 14.94 21.1901C15.13 21.0801 15.25 20.7601 15.25 20.3501V8.99011C15.25 7.69011 14.19 6.63013 12.89 6.63013H5.10999C3.80999 6.63013 2.75 7.69011 2.75 8.99011V20.3501C2.75 20.7601 2.87 21.0801 3.06 21.1901C3.25 21.3001 3.59001 21.2501 3.95001 21.0501L7.88 18.8601C8.20001 18.6901 8.6 18.6001 9 18.6001Z" fill="white"></path><path d="M20.69 18.87C20.25 18.87 19.79 18.74 19.32 18.49L15.63 16.43C15.39 16.3 15.25 16.05 15.25 15.78V9C15.25 7.7 14.19 6.64001 12.89 6.64001H8C7.59 6.64001 7.25 6.30001 7.25 5.89001V5.12C7.25 2.99 8.97999 1.26001 11.11 1.26001H18.89C21.02 1.26001 22.75 2.99 22.75 5.12V16.48C22.75 17.44 22.37 18.22 21.7 18.61C21.4 18.78 21.06 18.87 20.69 18.87ZM16.75 15.33L20.05 17.18C20.41 17.38 20.74 17.43 20.94 17.31C21.14 17.19 21.25 16.88 21.25 16.47V5.10999C21.25 3.80999 20.19 2.75 18.89 2.75H11.11C9.80999 2.75 8.75 3.80999 8.75 5.10999V5.13H12.89C15.02 5.13 16.75 6.85999 16.75 8.98999V15.33Z" fill="white"></path></svg>
  );

  const feedIcon = (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
     <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z"></path>
     <path d="M22 10.75H18C14.58 10.75 13.25 9.41999 13.25 5.99999V1.99999C13.25 1.69999 13.43 1.41999 13.71 1.30999C13.99 1.18999 14.31 1.25999 14.53 1.46999L22.53 9.46999C22.74 9.67999 22.81 10.01 22.69 10.29C22.57 10.57 22.3 10.75 22 10.75ZM14.75 3.80999V5.99999C14.75 8.57999 15.42 9.24999 18 9.24999H20.19L14.75 3.80999Z"></path>
     <path d="M13 13.75H7C6.59 13.75 6.25 13.41 6.25 13C6.25 12.59 6.59 12.25 7 12.25H13C13.41 12.25 13.75 12.59 13.75 13C13.75 13.41 13.41 13.75 13 13.75Z"></path>
     <path d="M11 17.75H7C6.59 17.75 6.25 17.41 6.25 17C6.25 16.59 6.59 16.25 7 16.25H11C11.41 16.25 11.75 16.59 11.75 17C11.75 17.41 11.41 17.75 11 17.75Z"></path>
   </svg>
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black cursor-pointer sm:hidden md:block lg:hidden z-50">
      <div className="flex justify-around items-center">
        <MobileFooterButton to="/" icon={homeIcon} label="Home" />
        <MobileFooterButton to="/library" icon={libraryIcon} label="Library" />
        <MobileFooterButton to="/feed" icon={feedIcon} label="Feed" />
      </div>
    </div>
  );
};









const Sidebar = () => {
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
   <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000B3" xmlns="http://www.w3.org/2000/svg"><path d="M3.30219 22.7501C2.94219 22.7501 2.59218 22.6601 2.29218 22.4801C1.62218 22.0901 1.24219 21.3101 1.24219 20.3401V8.98013C1.24219 6.85013 2.97217 5.12012 5.10217 5.12012H12.8822C15.0122 5.12012 16.7422 6.85013 16.7422 8.98013V20.3401C16.7422 21.3101 16.3622 22.0801 15.6922 22.4801C15.0222 22.8701 14.1622 22.8301 13.3122 22.3601L9.3822 20.1701C9.1922 20.0601 8.79217 20.0601 8.60217 20.1701L4.67218 22.3601C4.21218 22.6201 3.74219 22.7501 3.30219 22.7501ZM5.11218 6.63013C3.81218 6.63013 2.7522 7.69011 2.7522 8.99011V20.3501C2.7522 20.7601 2.87219 21.0801 3.06219 21.1901C3.25219 21.3001 3.59221 21.2501 3.95221 21.0501L7.8822 18.8601C8.5222 18.5101 9.48219 18.5101 10.1222 18.8601L14.0522 21.0501C14.4122 21.2501 14.7422 21.3001 14.9422 21.1901C15.1322 21.0801 15.2522 20.7601 15.2522 20.3501V8.99011C15.2522 7.69011 14.1922 6.63013 12.8922 6.63013H5.11218Z" fill="#000000B3"></path><path d="M14.69 22.7501C14.25 22.7501 13.79 22.6201 13.32 22.3701L9.39001 20.1801C9.20001 20.0801 8.78998 20.0801 8.59998 20.1801L4.67999 22.3701C3.82999 22.8401 2.95999 22.8801 2.29999 22.4901C1.62999 22.1001 1.25 21.3201 1.25 20.3601V9.00012C1.25 6.87012 2.97999 5.14014 5.10999 5.14014H12.89C15.02 5.14014 16.75 6.87012 16.75 9.00012V20.3601C16.75 21.3201 16.37 22.1001 15.7 22.4901C15.4 22.6601 15.06 22.7501 14.69 22.7501ZM9 18.6001C9.4 18.6001 9.79 18.6901 10.12 18.8701L14.05 21.0601C14.41 21.2601 14.75 21.3101 14.94 21.1901C15.13 21.0801 15.25 20.7601 15.25 20.3501V8.99011C15.25 7.69011 14.19 6.63013 12.89 6.63013H5.10999C3.80999 6.63013 2.75 7.69011 2.75 8.99011V20.3501C2.75 20.7601 2.87 21.0801 3.06 21.1901C3.25 21.3001 3.59001 21.2501 3.95001 21.0501L7.88 18.8601C8.20001 18.6901 8.6 18.6001 9 18.6001Z" fill="#000000B3"></path><path d="M20.69 18.87C20.25 18.87 19.79 18.74 19.32 18.49L15.63 16.43C15.39 16.3 15.25 16.05 15.25 15.78V9C15.25 7.7 14.19 6.64001 12.89 6.64001H8C7.59 6.64001 7.25 6.30001 7.25 5.89001V5.12C7.25 2.99 8.97999 1.26001 11.11 1.26001H18.89C21.02 1.26001 22.75 2.99 22.75 5.12V16.48C22.75 17.44 22.37 18.22 21.7 18.61C21.4 18.78 21.06 18.87 20.69 18.87ZM16.75 15.33L20.05 17.18C20.41 17.38 20.74 17.43 20.94 17.31C21.14 17.19 21.25 16.88 21.25 16.47V5.10999C21.25 3.80999 20.19 2.75 18.89 2.75H11.11C9.80999 2.75 8.75 3.80999 8.75 5.10999V5.13H12.89C15.02 5.13 16.75 6.85999 16.75 8.98999V15.33Z" fill="#000000B3"></path></svg>
  );

  const feedIcon = (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
     <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z"></path>
     <path d="M22 10.75H18C14.58 10.75 13.25 9.41999 13.25 5.99999V1.99999C13.25 1.69999 13.43 1.41999 13.71 1.30999C13.99 1.18999 14.31 1.25999 14.53 1.46999L22.53 9.46999C22.74 9.67999 22.81 10.01 22.69 10.29C22.57 10.57 22.3 10.75 22 10.75ZM14.75 3.80999V5.99999C14.75 8.57999 15.42 9.24999 18 9.24999H20.19L14.75 3.80999Z"></path>
     <path d="M13 13.75H7C6.59 13.75 6.25 13.41 6.25 13C6.25 12.59 6.59 12.25 7 12.25H13C13.41 12.25 13.75 12.59 13.75 13C13.75 13.41 13.41 13.75 13 13.75Z"></path>
     <path d="M11 17.75H7C6.59 17.75 6.25 17.41 6.25 17C6.25 16.59 6.59 16.25 7 16.25H11C11.41 16.25 11.75 16.59 11.75 17C11.75 17.41 11.41 17.75 11 17.75Z"></path>
   </svg>
  );

  return (
    <>
       <div className="hidden sm:block md:hidden lg:block border-r border-gray-300">
        <div className="py-2">
          <SidebarButton to="/" icon={homeIcon} label="Home" />
          <SidebarButton to="/library" icon={libraryIcon} label="Library" />
          <SidebarButton to="/feed" icon={feedIcon} label="Feed" />
        </div>
      </div>

      
      <MobileFooterNavigation /> 

     
    
    </>
  );
};

export default Sidebar;