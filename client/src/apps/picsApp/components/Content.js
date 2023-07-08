import { useState, useRef, useEffect, useCallback } from 'react';
import React from 'react';
import axios from 'axios';
// import CardItem from "./CardItem";

const Content = (props) => {
  const [images, setImages] = useState(props.data);
  const imageRefs = useRef([]);

  useEffect(() => {
    setImages(props.data);
    imageRefs.current = Array(props.data.length)
      .fill()
      .map((_, i) => imageRefs.current[i] || React.createRef());
  }, [props.data]);



  const loadMoreImages = useCallback(async () => {
    const page = Math.floor(images.length / 50) + 1; // Calculate the next page based on the current number of images
    const perPage = 50; // Specify the number of images per page

    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: 'car',
          page: page,
          per_page: perPage,
          client_id: process.env.REACT_APP_UNSPLASH_KEY,
        },
      });

      const newImages = response.data.results.map((result) => ({
        id: result.id,
        urls: result.urls,
      }));

      setImages((prevImages) =>
        Array.isArray(prevImages) ? [...prevImages, ...newImages] : newImages
      );
    } catch (error) {
      console.log('Error occurred while fetching more images:', error);
    }
  }, [images.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadMoreImages();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadMoreImages]);

  const renderImages = () => {
    const columnCount = 4;
    const columns = Array.from({ length: columnCount }, () => []);

    images.forEach((image, index) => {
      const columnIndex = index % columnCount;
      columns[columnIndex].push(image);
    });

    return columns.map((column, index) => (
      <div key={index} className="column">
        {column.map((image) => (
          <div
            key={image.id}
            id={`image-container-${image.id}`}
            ref={imageRefs.current.find((ref) => ref.current?.id === `image-container-${image.id}`)}
            className="image-container"
          >
            <img
              loading="lazy"
              src={image.urls.regular}
              alt={` ${image.id}`}
              className="image"
            />
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div>
      <div className="photos">{renderImages()}</div>
    </div>
  );
};

export default Content;
