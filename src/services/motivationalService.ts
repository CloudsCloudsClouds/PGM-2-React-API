import axios from "axios";

const API_URL = "https://corsproxy.io/?url=https://zenquotes.io/api/random";

export const getMotivation = async (): Promise<string> => {
  try {
    const response = await axios.get(API_URL);
    console.log(response);
    return response.data[0].q;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
