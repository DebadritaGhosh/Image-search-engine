import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [images, setImages] = useState([]);
  //LziCfs6rm0GAqgVSU54hf2B4RvwIgx5BmJPlDMEIENs

  const fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos?client_id=LziCfs6rm0GAqgVSU54hf2B4RvwIgx5BmJPlDMEIENs&query=${inputText}`)
      .then(response => response.json())
      .then(data => setImages(data.results))
  }
  return (
    <div className="App">
      <div className="App__header">
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button onClick={fetchImages}>Send</button>
      </div>
      <div className="App__gallery">
        {
          images.map((image) => {
            return (
              <img key={image.id} src={image.urls.regular} alt={image.urls.regular} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
