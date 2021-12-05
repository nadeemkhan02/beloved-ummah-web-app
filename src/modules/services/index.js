import axios from "axios";

export const getBookDataService = () => {
  return axios.get("http://api.alquran.cloud/v1/quran/ar.alafasy");
};
