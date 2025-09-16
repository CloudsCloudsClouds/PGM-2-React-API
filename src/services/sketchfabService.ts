import axios from "axios";

export interface Model {
  id: string;
  name: string;
  thumbnail: string;
  viewurl: string;
}

const API_URL = "https://api.sketchfab.com/v3/models";

export const fetchModels = async (query: string): Promise<Model[]> => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: query,
        type: "models",
        count: 12,
      },
    });
    return response.data.results.map((item: any) => ({
      id: item.uid,
      name: item.name,
      thumbnail: item.thumbnails.images[0].url,
      viewurl: item.viewurl,
    }));
  } catch (error) {
    console.error("Error fetching models:", error);
    throw error;
  }
};
