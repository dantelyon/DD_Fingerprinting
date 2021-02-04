import { useState, useEffect } from 'react';
import React from 'react';

function getWindowDimensions() {
  const { outerWidth: width, outerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const { height, width } = windowDimensions;
  return (
    <tr><td>Browser window size</td><td>width: {width} ~ height: {height}</td></tr>
  );
}
export default useWindowDimensions