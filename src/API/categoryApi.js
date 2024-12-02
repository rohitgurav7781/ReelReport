import axios from 'axios';

export const fetchCategories = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: "https://staging1-rr.reelreport.com/util/getCategories",
      
    });
    return response.data.data|| response.data; 
  } catch (err) {
    throw new Error("Error fetching categories: " + err.message);
  }
};
