import React from 'react';

import PlusSquare from '../../assets/img/trending/plus.png';
import FireIcon from '../../assets/img/trending/fire-icon.png';

const Trending = () => {
  return(
    <section className="trending">

      <div className="title">
        <h2>Currently Trending Games</h2>
        <button>See All</button>
      </div>

      <div className="card-list">
        
        <div className="card">
          <a href=" ">
            <div className="follow">
              <img src={PlusSquare} alt=""/>
            </div>
          
            <div className="info">
              <img src={FireIcon} alt=""/>
              <p>5,000 Followers</p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href=" ">
            <div className="follow">
              <img src={PlusSquare} alt=""/>
            </div>
          
            <div className="info">
              <img src={FireIcon} alt=""/>
              <p>4,400 Followers</p>
            </div>
          </a>
        </div>
        
        <div className="card">
          <a href=" ">
            <div className="follow">
              <img src={PlusSquare} alt=""/>
            </div>
          
            <div className="info">
              <img src={FireIcon} alt=""/>
              <p>3,700 Followers</p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href=" ">
            <div className="follow">
              <img src={PlusSquare} alt=""/>
            </div>
          
            <div className="info">
              <img src={FireIcon} alt=""/>
              <p>3,100 Followers</p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href=" ">
            <div className="follow">
              <img src={PlusSquare} alt=""/>
            </div>
          
            <div className="info">
              <img src={FireIcon} alt=""/>
              <p>1,700 Followers</p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href=" ">
            <div className="follow">
              <img src={PlusSquare} alt=""/>
            </div>

            <div className="info">
              <img src={FireIcon} alt=""/>
              <p>800 Followers</p>
            </div>
          </a>
        </div>
      </div>

    </section>
  );
}

export default Trending;