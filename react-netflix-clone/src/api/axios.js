import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "431e3c874a1f8f851c3a452ec1e5e708",
    language: "ko-KR",
  },
});

export default instance;
