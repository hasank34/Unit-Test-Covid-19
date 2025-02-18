import axios from "axios";

const api = axios.create({
  baseURL: "https://covid-19-data.p.rapidapi.com",
  params: { format: "json" },
  headers: {
    "x-rapidapi-key": "eed126f9bcmshc5525da323f2af8p1ab61fjsn34753381407b",
    // "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
  },
});

export default api;
