import React from 'react';

import Kotaku from '../../assets/img/recommended/kotaku.webp';
import Steam from '../../assets/img/recommended/steam-logo.png';
import USGamer from '../../assets/img/recommended/usgamer-logo.jpg';

const Recommended = () => {
  return(
    <section className="recommended">

      <div className="title">
        <h2>Recommended Articles</h2>
        <button>See All</button>
      </div>
      
      <section className="articles">
        <div className="mainArticle">
          <div className="linear-background">
            <div className="date">
              <img src={Kotaku} alt="Kotaku logo"/>
              <div className="date-name">
                <h4>Kotaku</h4>
                <p>12.07.2020</p>
              </div>
            </div>
              <div className="valorant-game"></div>
              <p className="text">
                Valorant Twitch Streamers Are Gaming The System <br/>
                With 24/7 Streams That Rack Up Viewers <br/>
                Desperate For Beta Keys <br/>

                <p className="subText">
                  If you take a look at many of Twitch's top Valorant streams right now, <br/>
                  you'll note that they claim to be running "24/7."
                </p>
              </p>
          </div>
        </div>

        <div className="subArticles">

          <div className="smallArticle">
            <div className="linear-background">
              <div className="date">
                <img src={Steam} alt="Steam logo"/>
                <div className="date-name">
                  <h4>STEAM</h4>
                  <p>10.07.2020</p>
                </div>
              </div>
              <div className="wp-game"></div>
              <p className="text">
                Fort Frills, Features, And <br/>
                Facilities 
              </p>
            </div>
          </div>

          <div className="smallArticle">
          <div className="linear-background">
              <div className="date">
                <img src={USGamer} alt="USGamer logo"/>
                <div className="date-name">
                  <h4>USGAMER</h4>
                  <p>10.07.2020</p>
                </div>
              </div>
              <div className="wp-game"></div>
              <p className="text">
                Guerrilla Games Hint At <br/>
                Horizon Zero Dawn Sequ...
              </p>
            </div>
          </div>
        </div>
      </section>

    </section>
  );
}

export default Recommended;