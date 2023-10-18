import './style.css';
import React, { useState } from 'react';
import axios from 'axios';

function RandomDog() {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(false);

  const getRandomDog = async () => {
    setLoading(true);

    try {
      const response = await axios.get('https://api.thedogapi.com/v1/images/search');
      const imageUrl = response.data[0].url;
      setDogImage(imageUrl);
    } catch (error) {
      console.error('Error fetching a random dog image:', error);
    }

    setLoading(false);
  };

const imageStyle = {
    maxWidth: '600px',  // Set your desired maximum width
    maxHeight: '600px', // Set your desired maximum height
};

  return (
    <div>
      <h1>Random Doggy Image</h1>
      <button onClick={getRandomDog} disabled={loading}>
        {loading ? 'Loading...' : 'Get Random Doggy'}
      </button>
      {dogImage && (
        <div>
          <img src={dogImage} alt="Random Doggy" style={imageStyle} />
        </div>
      )}
    </div>
  );
}

export default RandomDog;
