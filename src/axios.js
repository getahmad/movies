import axios from "axios";

const app = axios.create({
  baseUrl: "https://api.themoviedb.org/3",
});

export default app;
