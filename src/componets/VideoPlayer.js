import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVideos } from '../API/videoApi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon issue with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const VideoPlayer = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchVideoDetails();
  }, [id]);

  const fetchVideoDetails = async () => {
    try {
      const videoData = await fetchVideos();
      const selectedVideo = videoData.find((v) => v.muxPlaybackId === id);
      setVideo(selectedVideo || null);
    } catch (err) {
      console.error('Error fetching video details', err);
      setVideo(null);
    }
  };

  const tabIcons = {
    Like: (
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z" fill="#323232"></path>
      </svg>
    ),
    Share: (
      <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.75 1.5L8.5 9.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M16.75 1.5L11.5 16.5L8.5 9.75L1.75 6.75L16.75 1.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    ),
    Sports: (
      <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.52 1.5L5.82 3H9.75V7.5H7.23L6.93 6H1.5V1.5H5.52ZM6.75 0H0V12.75H1.5V7.5H5.7L6 9H11.25V1.5H7.05L6.75 0Z" fill="#323232"></path>
      </svg>
    ),
  };

  return (
    <div className="flex flex-col sm:grid-cols-2 p-8 justify-start bg-white h-screen">
      <div className="flex space-x-4">
        {/* Video Player Section */}
        <div className="relative w-[60%]">
          <button
            className="absolute top-2 left-2 z-10 bg-white m-1 mt-2 rounded-full shadow-md"
            type="button"
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
          {video ? (
            <video
              className="overflow-hidden w-full rounded-[14px] bg-black"
              style={{ aspectRatio: 16 / 9, overflow: 'hidden' }}
              src={`https://stream.mux.com/${video.muxPlaybackId}/medium.mp4`}
              controls
              autoPlay
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <h1>No video available</h1>
          )}

          <div className="mt-6 space-y-4">
            {video ? (
              <>
                <h1 className="text-xl text-ellipsis font-medium">{video.title}</h1>
                <div className="flex flex-row items-center space-x-4">
                  <h1 className="text-xl text-ellipsis font-medium">{video.views} views</h1>
                  <span className="text-gray-500">• 1 week ago</span>
                  <span className="text-gray-500">• 2:33 PM</span>
                  
                  <svg
                    className='mr-1'
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7448 4.63268C11.0448 1.55268 8.35811 0.166016 5.99811 0.166016C5.99811 0.166016 5.99811 0.166016 5.99144 0.166016C3.63811 0.166016 0.944777 1.54602 0.244777 4.62602C-0.535223 8.06601 1.57144 10.9793 3.47811 12.8127C4.18478 13.4927 5.09144 13.8327 5.99811 13.8327C6.90478 13.8327 7.81144 13.4927 8.51144 12.8127C10.4181 10.9793 12.5248 8.07268 11.7448 4.63268ZM5.99811 7.97268C4.83811 7.97268 3.89811 7.03268 3.89811 5.87268C3.89811 4.71268 4.83811 3.77268 5.99811 3.77268C7.15811 3.77268 8.09811 4.71268 8.09811 5.87268C8.09811 7.03268 7.15811 7.97268 5.99811 7.97268Z"
                      fill="black"
                    ></path>
                  </svg>
                  
                  <span>{video.locationString}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2"> 
                    <img
                      src="https://demo.reelreport.net/assets/logoIcon-CS-jNTMX.svg"
                      alt="logo"
                      className="h-10 w-10"
                    />
                    <span>{video.ownerUsername}</span>
                  </div>

                  <div className="flex items-center justify-end space-x-4">
                    <div className="flex items-center font-sans text-gray-800 px-4 py-2 min-h-[36px] text-sm font-medium rounded-full mt-0 mb-0 border-[1px] bg-[#e9eef5b2] cursor-pointer">
                      {tabIcons.Like}
                    </div>
                    <div className="flex items-center font-sans text-gray-800 px-4 py-2 min-h-[36px] text-sm font-medium rounded-full mt-0 mb-0 border-[1px] gap-2 bg-[#e9eef5b2] cursor-pointer">
                      {tabIcons.Share} Share
                    </div>
                    <div className="flex items-center font-sans text-gray-800 px-4 py-2 min-h-[36px] text-sm font-medium rounded-full mt-0 mb-0 border-[1px] gap-2  cursor-pointer">
                      {tabIcons.Sports} Report
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>

        {/* Map Section */}
        <div className="w-[40%] h-[600px]">
          {video && video.latitude && video.longitude ? (
            <MapContainer 
              center={[video.latitude, video.longitude]} 
              zoom={13} 
              scrollWheelZoom={false}
              className="h-full w-full rounded-[14px]"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[video.latitude, video.longitude]}>
                <Popup>
                  {video.locationString || 'Video Location'}
                </Popup>
              </Marker>
            </MapContainer>
          ) : (
            <div className="flex items-center justify-center h-full border rounded-[14px]">
              No location data available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;