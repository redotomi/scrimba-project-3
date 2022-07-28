import React, { useState } from 'react';
import { data } from "../data/data";


export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })
  const [allMemeImages, setAllMemeImages] = useState(data);


  function generateRandomMeme(ev) {
    ev.preventDefault()
    const randomNum = Math.floor(Math.random() * allMemeImages.data.memes.length);
    const url = allMemeImages.data.memes[randomNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  console.log(meme);



  return (
    <>
      <form className='meme-form' >
        <input
          type='text'
          className='form--input'
          placeholder='Top text'
          name='topText'
          value={meme.topText}
          onChange={handleChange} />
        <input
          type='text'
          className='form--input'
          placeholder='Bottom text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange} />
        <button
          className='form--button'
          onClick={generateRandomMeme}
        >Get a new meme image 🖼</button>
      </form>
      <div className='meme'>
        <img className='meme--img' src={meme.randomImage} alt='meme' />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
}
