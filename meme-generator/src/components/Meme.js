import { data } from "../data/data";

function generateRandomMeme() {
  const randomNum = Math.floor(Math.random() * data.data.memes.length);
  return data.data.memes[randomNum].url;
}

export default function Meme() {
  return (
    <div className='meme-form' >
      <input type='text' className='form--input' placeholder='Top-text' />
      <input type='text' className='form--input' placeholder='Bottom-text' />
      <button
        className='form--button'
        onClick={() => { console.log(generateRandomMeme()) }}
      >Get a new meme image 🖼</button>
    </div>
  );
}
