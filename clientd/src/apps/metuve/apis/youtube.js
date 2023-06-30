import axios from "axios";

const KEY = "AIzaSyB52WQVrM0pgqy6N0q_O9_XDvTkeY1VOuM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    type: "video",
    key: KEY
  }

})