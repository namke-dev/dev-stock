import axios from "axios";

const BASE_URL_OPEN_NINJA = "https://real-time-finance-data.p.rapidapi.com";
const BASE_URL_ALPHA_VANTAGE = "https://alpha-vantage.p.rapidapi.com";

const optionsOpenNinjaApi = {
  url: BASE_URL_OPEN_NINJA,
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_REACT_APP_API_KEY,
    "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
  },
};

const optionsAlphaVantageApi = {
  url: BASE_URL_ALPHA_VANTAGE,
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_REACT_APP_API_KEY,
    "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  try {
    console.log(`Call api => ${BASE_URL_OPEN_NINJA}/${url}`);
    const { data } = await axios.get(
      `${BASE_URL_OPEN_NINJA}/${url}`,
      optionsOpenNinjaApi
    );
    return data;
  } catch (error) {
    console.error("Error in fetchFromApi:", error);
    throw error; // Rethrow the error so that it can be caught by the caller
  }
};

export const fetchFromTimeSeriesApi = async (url) => {
  try {
    console.log(`Call api => ${BASE_URL_ALPHA_VANTAGE}/${url}`);
    const { data } = await axios.get(
      `${BASE_URL_ALPHA_VANTAGE}/${url}`,
      optionsAlphaVantageApi
    );
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

export const fetchStockTimeSeriesDaily = async (stockSymbol, functionName) => {
  if (!stockSymbol || !functionName) return null;

  const url = `query?symbol=${
    stockSymbol.split(":")[0]
  }&function=${functionName}`;

  try {
    const response = await fetchFromTimeSeriesApi(url);
    if (response) {
      return response;
    } else {
      console.error(
        "Error in StockTimeSeriesDaily: Invalid response status",
        response
      );
      return null;
    }
  } catch (error) {
    console.error("Error in fetchStockOverview:", error);
    return null;
  }
};
