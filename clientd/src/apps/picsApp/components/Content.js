import { useState, useRef, useEffect } from 'react';
import React from 'react';

const Content = (props) => {


  const [images, setImages] = useState(props.data);
  console.log('images:', images);

  const imageRefs = useRef([]);

  useEffect(() => {
    // Initialize the array of refs
    imageRefs.current = Array(images.length)
      .fill()
      .map((_, i) => imageRefs.current[i] || React.createRef());
  }, [images]);

  const getColumnHeights = () => {
    const heights = imageRefs.current.map((ref) => ref.current.offsetHeight);
    return heights;
  };

  const renderImages = () => {
    const columnCount = 4;
    const columns = Array.from({ length: columnCount }, () => []);

    images.forEach((image, index) => {
      const columnHeights = getColumnHeights(columns);
      const maxColumnHeight = Math.max(...columnHeights);
      const columnIndex = columnHeights.indexOf(maxColumnHeight);

      columns[columnIndex].push(image);
    });

    return columns.map((column, index) => (
      <div key={index} className="column">
        {column.map((image, idx) => (
          <div
            key={image.id}
            id={`image-container-${image.id}`}
            ref={imageRefs.current[idx]}
            className="image-container"
          >
            <img
              src={image.urls.regular}
              alt={` ${image.id}`}
              className="image"
            />
          </div>
        ))}
      </div>
    ));
  };

  const handleLoadMore = () => {
    // Simulating the addition of more images
    const newImages = [
      { id: 4, width: 210, height: 320, urls: { regular: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxODI1NDZ8MHwxfHNlYXJjaHw0fHxyZWQlMjBzbWlsZXxlbnwwfHx8fDE2ODgwNzYxODF8MA&ixlib=rb-4.0.3&q=80&w=1080" } },
      { id: 5, width: 210, height: 320, urls: { regular: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxODI1NDZ8MHwxfHNlYXJjaHw0fHxyZWQlMjBzbWlsZXxlbnwwfHx8fDE2ODgwNzYxODF8MA&ixlib=rb-4.0.3&q=80&w=1080" } },
      { id: 6, width: 210, height: 320, urls: { regular: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxODI1NDZ8MHwxfHNlYXJjaHw0fHxyZWQlMjBzbWlsZXxlbnwwfHx8fDE2ODgwNzYxODF8MA&ixlib=rb-4.0.3&q=80&w=1080" } },
    ];

    setImages((prevImages) =>
      Array.isArray(prevImages) ? [...prevImages, ...newImages] : newImages
    );
  };

  return (
    <div>
      <div className="photos">{renderImages()}</div>
      <button onClick={handleLoadMore}>Load More Images</button>
    </div>
  );
};

export default Content;
