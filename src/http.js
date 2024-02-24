import axios from "axios";
export default axios.create({
  baseURL: "https://api.dealsmart.ae/api",
  headers: {
    "Content-type": "application/json",
  },
});
