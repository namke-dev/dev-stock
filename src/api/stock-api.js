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
  try {
    console.log(`Call api => ${BASE_URL}/${url}`);
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("Error in fetchFromApi:", error);
    throw error; // Rethrow the error so that it can be caught by the caller
  }
};

export const fetchStockOverview = async (stockSymbol) => {
  if (!stockSymbol) return null;
  const url = `stock-overview?symbol=${stockSymbol}`;
  try {
    const response = await fetchFromApi(url);
    if (response.status === "OK") {
      return response.data;
    } else {
      console.error(
        "Error in fetchStockOverview: Invalid response status",
        response
      );
      return null;
    }
  } catch (error) {
    console.error("Error in fetchStockOverview:", error);
    return null;
  }
};
