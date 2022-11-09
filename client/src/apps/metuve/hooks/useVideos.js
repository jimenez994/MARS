import { useEffect, useState } from "react";
import youtube from '../apis/youtube';

const useVideos = (defaultSearch) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearch);
  }, [defaultSearch]);

  const search = async (searchInput) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchInput,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
