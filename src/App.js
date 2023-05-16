import React, { useState } from 'react';
import Input from './Input';
import PhotoList from './PhotoList';

function App() {
  const [images, setImages]  = useState(false);

  const handleButtonClick = () => {
    setImages(true);
  };

  return (
    <div>
      <Input onClick={handleButtonClick} />
      {images && <PhotoList />}
    </div>
  );
}

export default App;
