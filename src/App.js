import { useState } from 'react';
import './darkmode.css';
import './lightmode.css';

function App() {

  const [degis, setDegis] = useState(true);

  const degisButton = () => {
    setDegis(false);
  }

  const degisButton2 = () => {
    setDegis(true);
  }

  if (degis === true) {
    return (
      <div className='genel-div'>
        <div className='kısa-bilgi'>
          <div className='kısa-bos'></div>
          <div className='kısa-yazi'>Copyright © 2023, All Rights Reserved.</div>
          <div className='kısa-button'>
            <div className='dark-mode'>
              {degis ? <button onClick={degisButton} className='moon-button'>
                {degis ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i>}

              </button> : <button onClick={degisButton2} className='sun-button'>
                {degis ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i>}

              </button>}


            </div>
          </div>
        </div>


        <div className='body-div'>
          <ul class="navigation">
            <li class="navigation__item">
              <a class="navigation__link" href="/home" data-text="Home">Home</a>
            </li>
            <li class="navigation__item">
              <a class="navigation__link" href="/about" data-text="About">About</a>
            </li>
            <li class="navigation__item">
              <a class="navigation__link" href="/portfolio" data-text="Portfolio">Portfolio</a>
            </li>
            <li class="navigation__item">
              <a class="navigation__link" href="/contact" data-text="Contact">Contact</a>
            </li>
          </ul></div>

      </div>
    );

  } else {
    return (
      <div className='genel-div'>
        <div className='kısa-bilgi-dark'>
          <div className='kısa-bos-dark'></div>
          <div className='kısa-yazi-dark'>Copyright © 2023, All Rights Reserved.</div>
          <div className='kısa-button-dark'>
            <div className='dark-mode-dark'>
              {degis ? <button onClick={degisButton} className='moon-button-dark'>
                {degis ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i>}

              </button> : <button onClick={degisButton2} className='sun-button-dark'>
                {degis ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i>}

              </button>}


            </div>
          </div>
        </div>


        <div className='body-div-dark'>
          <ul class="navigation-dark">
            <li class="navigation__item-dark">
              <a class="navigation__link-dark" href="/home" data-text="Home">Home</a>
            </li>
            <li class="navigation__item-dark">
              <a class="navigation__link-dark" href="/about" data-text="About">About</a>
            </li>
            <li class="navigation__item-dark">
              <a class="navigation__link-dark" href="/portfolio" data-text="Portfolio">Portfolio</a>
            </li>
            <li class="navigation__item-dark">
              <a class="navigation__link-dark" href="/contact" data-text="Contact">Contact</a>
            </li>
          </ul></div>

      </div>
    );

  }



}

export default App;
