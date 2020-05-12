import React, { useState, useEffect, useRef } from 'react';
import './Navbar.scss';
import navigation from '../navigation.json';
import CurrentTime from './CurrentTime';

const MARGIN = 30;

function Navbar() {
  const navRef = useRef(null);
  const [markerLeft, setMarkerLeft] = useState(0);
  const [markerWidth, setMarkerWidth] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  useEffect(() => {
    function setMarkerPosition() {
      const rect = navRef.current.children[activeItem].getBoundingClientRect();
      setMarkerLeft(rect.x - MARGIN);
      setMarkerWidth(rect.width);
    }
    // initialize the marker position
    setMarkerPosition();
    window.addEventListener('resize', setMarkerPosition);
  }, [activeItem]);

  const onNavClick = (rect, index) => {
    setActiveItem(index);
    setMarkerLeft(rect.x - MARGIN);
    setMarkerWidth(rect.width);
  };
  return (
    <div>
      <nav>
        <ul ref={navRef}>
          {navigation.cities.map((city, i) => {
            return (
              <li
                key={city.section}
                onClick={(e) => onNavClick(e.target.getBoundingClientRect(), i)}
                className={activeItem === i ? 'active' : null}
              >
                {city.label}
              </li>
            );
          })}
        </ul>
        <div
          className="marker"
          style={{
            marginLeft: markerLeft,
            width: `${markerWidth}px`,
          }}
        />
      </nav>
      <CurrentTime timeZone={navigation.cities[activeItem].timeZone} />
    </div>
  );
}

export default Navbar;
