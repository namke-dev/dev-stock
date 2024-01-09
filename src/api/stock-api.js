import axios from "axios";

const BASE_URL = "https://real-time-finance-data.p.rapidapi.com";

const options = {
  url: BASE_URL,
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_REACT_APP_API_KEY,
    "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  console.log(`Call api => ${BASE_URL}/${url}`);
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
