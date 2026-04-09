import axios from "axios";

const BASE_URL = "https://jsearch.p.rapidapi.com/search";

export const fetchJobs = async ({
  search = "developer",
  location = "Pakistan",
  page = 1,
}) => {
  const options = {
    method: "GET",
    url: BASE_URL,
    params: {
      query: `${search} in ${location}`,
      page,
      num_pages: 1,
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
    },
  };

  const response = await axios.request(options);
  return response.data.data || [];
};
