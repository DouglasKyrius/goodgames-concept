import React from 'react';
import ArrowEast from '../../assets/img/arrow-east.png';
import WallpaperImage from '../../assets/img/wallpaperv2.png';

const Header = () => {
  return(
    <section>
      <div className="firstContent">
        <div className="leftHeader">
          <p>Discover Games You Will Love</p>
          <h1>
            Read About Games
            <br/>That You Enjoy
          </h1>
          <button>
            Start Exploring
            <img src={ArrowEast} alt="Teste"/>
          </button>
        </div>
        <div className="rightHeader">
          <img src={WallpaperImage} alt=""/>
        </div>
      </div>
    </section>
  );
}

export default Header;