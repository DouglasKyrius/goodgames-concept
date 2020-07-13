import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows, faXbox, faPlaystation } from '@fortawesome/free-brands-svg-icons'
const New = () => {
  return(
    <section className="whatsnew">
      <div className="title">
        <h2>What's New</h2>
        <div>
          <FontAwesomeIcon className="icons" icon={faWindows} />
          <FontAwesomeIcon className="icons" icon={faXbox} />
          <FontAwesomeIcon className="icons" icon={faPlaystation} />
          <button>Explore</button>
        </div>
      </div>
    </section>
  );
}

export default New;