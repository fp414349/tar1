import { useState, useEffect } from 'react';

import { useTransition } from 'react';
function PhotoList() {
  const [images, setImages] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        setImages(data);
      })
      .catch(error => {
        console.log(error);
      })
       });
  }, []); 
  return (
    <div>
      {images.map(image => (
        <img key={image.id} src={image.thumbnailUrl} alt={image.title} />
      ))}
    </div>
  );
}

export default PhotoList;
