import { useState, useLayoutEffect } from 'react';

export function useWindowSize() {
  let [size, setSize] = [0, 0];
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

// estimate what the device is based on the viewport size
export function getDeviceEstimate () {
  
}