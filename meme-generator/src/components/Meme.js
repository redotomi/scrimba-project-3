import React, { useState } from 'react';
import { data } from "../data/data";

function generateRandomMeme() {
  const randomNum = Math.floor(Math.random() * data.data.memes.length);
  return data.data.memes[randomNum].url;
}

export default function Meme() {
  const [meme, setMeme] = useState(generateRandomMeme())


  return (
    <>
      <div className='meme-form' >
        <input type='text' className='form--input' placeholder='Top-text' />
        <input type='text' className='form--input' placeholder='Bottom-text' />
        <button
          className='form--button'
          onClick={() => setMeme(generateRandomMeme())}
        >Get a new meme image 🖼</button>
      </div>
      <div className='img-container'>
        <img className='meme-img' src={meme} alt='meme' />
      </div>
    </>
  );
}
