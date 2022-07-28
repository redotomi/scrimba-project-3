import '../style.css';
import trollFace from '../img/troll-face.png';

export default function Header() {
  return (
    <nav>
      <div className='nav-title' >
        <img className='nav--image' src={trollFace} alt='Troll Face' />
        <h2 className='nav--text' >Meme Generator</h2>
      </div>
      <span className='nav-description'>React Course - Project 3</span>
    </nav>
  )
}