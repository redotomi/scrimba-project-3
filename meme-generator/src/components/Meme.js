import React, { useEffect, useState } from 'react';


export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })
  const [allMeme, setAllMeme] = useState();

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(re => re.json())
      .then(data => setAllMeme(data.data.memes))
  }, [])


  function generateRandomMeme(ev) {
    ev.preventDefault()
    const randomNum = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNum].url;
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
