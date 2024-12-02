import axios from 'axios';

export const fetchVideos = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: "https://staging1-rr.reelreport.com/videos?latitude=40.6970193&longitude=-74.309324&latitudeDelta=27.115651189346742&longitudeDelta=127.44140624999999",
      
    });
    return response.data.data.data || response.data; 
  } catch (err) {
    throw new Error("Error fetching videos: " + err.message);
  }
};
