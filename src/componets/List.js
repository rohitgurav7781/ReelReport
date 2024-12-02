import React, { useState, useEffect } from 'react';
import { fetchVideos } from '../API/videoApi';

const List = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      const videoData = await fetchVideos();
      setVideos(videoData.slice(0, 35)); // Limit to 35 videos
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const handleVideoClick = (video) => {
    window.location.href = `/video/${video.muxPlaybackId}`;
  };

  if (loading) {
    return (
      <div className="p-3">
        <div className="p-4 text-2xl font-semibold">Explore</div>
        <div className="text-center text-gray-500">Loading videos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-3">
        <div className="p-4 text-2xl font-semibold">Explore</div>
        <div className="text-center text-red-500">Error loading videos: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="p-3 mx-3">
      <div className="p-4 text-2xl font-semibold">Explore</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-8 max-h-[100vh] overflow-auto ">
        {videos.map((video) => (
          <div
            key={video.id}
            className="w-full cursor-pointer"
            onClick={() => handleVideoClick(video)}
          >
            <div className="relative aspect-video">
              <img
                className="w-full h-full object-cover rounded-[14px]"
                src={`https://image.mux.com/${video.muxPlaybackId}/thumbnail.jpg`}
                alt={video.title}
              />
              <div className="absolute top-2 left-2 bg-gray-600 text-white rounded-full px-2 py-1 flex items-center space-x-1">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7448 4.63268C11.0448 1.55268 8.35811 0.166016 5.99811 0.166016C5.99811 0.166016 5.99811 0.166016 5.99144 0.166016C3.63811 0.166016 0.944777 1.54602 0.244777 4.62602C-0.535223 8.06601 1.57144 10.9793 3.47811 12.8127C4.18478 13.4927 5.09144 13.8327 5.99811 13.8327C6.90478 13.8327 7.81144 13.4927 8.51144 12.8127C10.4181 10.9793 12.5248 8.07268 11.7448 4.63268ZM5.99811 7.97268C4.83811 7.97268 3.89811 7.03268 3.89811 5.87268C3.89811 4.71268 4.83811 3.77268 5.99811 3.77268C7.15811 3.77268 8.09811 4.71268 8.09811 5.87268C8.09811 7.03268 7.15811 7.97268 5.99811 7.97268Z" fill="white"></path></svg>
                <span>{video.locationString}</span>
              </div>
            </div>
            <div className="font-semibold mt-2">{video.title}</div>
            <div className="flex items-center space-x-2 mt-2">
              <img  
                src="https://demo.reelreport.net/assets/logoIcon-CS-jNTMX.svg"
                alt="logo"
                className="h-8 w-8"
              />
              <div className="font-medium">{video.ownerUsername}</div>
            </div>
            <div className="flex ml-10 items-center text-gray-500 text-sm">
              <span>{video.views} Views</span>
              <span className="mx-2">• 1 week ago</span>
              <span>{video.createdAt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default List;