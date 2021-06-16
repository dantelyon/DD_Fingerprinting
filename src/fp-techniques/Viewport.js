import { useState, useEffect } from 'react';
import React from 'react';

function getWindowDimensions() {
  //Chrome alternative: window.visualViewport
  //outerWidth and outerHeight for browser window size.
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
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
    <tr>
      <td>Viewport</td>
      <td>{width}x{height}</td>
    </tr>
  );
}

export default useWindowDimensions