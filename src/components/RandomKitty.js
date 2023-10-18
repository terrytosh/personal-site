import './style.css';
import React, { useState } from 'react';
import axios from 'axios';

function RandomKitty() {
  const [kittyImage, setKittyImage] = useState('');
  const [loading, setLoading] = useState(false);

  const getRandomKitty = async () => {
    setLoading(true);

    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      const imageUrl = response.data[0].url;
      setKittyImage(imageUrl);
    } catch (error) {
      console.error('Error fetching a random kitty image:', error);
    }

    setLoading(false);
  };

const imageStyle = {
    maxWidth: '600px',  // Set your desired maximum width
    maxHeight: '600px', // Set your desired maximum height
};

  return (
    <div>
      <h1>Random Kitty Image</h1>
      <button onClick={getRandomKitty} disabled={loading}>
        {loading ? 'Loading...' : 'Get Random Kitty'}
      </button>
      {kittyImage && (
        <div>
          <img src={kittyImage} alt="Random Kitty" style={imageStyle} />
        </div>
      )}
    </div>
  );
}

export default RandomKitty;
