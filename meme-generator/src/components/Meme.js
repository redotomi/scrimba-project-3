import React, { useState } from 'react';
import { data } from "../data/data";


export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })
  const [allMemeImages, setAllMemeImages] = useState(data);


  function generateRandomMeme() {
    const randomNum = Math.floor(Math.random() * allMemeImages.data.memes.length);
    const url = allMemeImages.data.memes[randomNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url
    }))
  }



  return (
    <>
      <div className='meme-form' >
        <input type='text' className='form--input' placeholder='Top-text' />
        <input type='text' className='form--input' placeholder='Bottom-text' />
        <button
          className='form--button'
          onClick={generateRandomMeme}
        >Get a new meme image 🖼</button>
      </div>
      <div className='img-container'>
        <img className='meme-img' src={meme.randomImage} alt='meme' />
      </div>
    </>
  );
}
