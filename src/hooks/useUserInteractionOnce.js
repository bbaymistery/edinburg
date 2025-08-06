import { useEffect } from 'react';

// Custom hook: 
// This hook listens for the user's first interaction (scroll, mousemove, keydown, or touchstart),
// and runs a callback function exactly once when any of those events occur.
export const useUserInteractionOnce = (callback) => {
  useEffect(() => {
    let called = false; // Flag to ensure the callback only runs once

    // This function is triggered on user interaction
    const handleInteraction = () => {
      if (called) return; // If already called, do nothing
      called = true;      // Set the flag to true

      callback();         // Call the provided function (only once)

      // Clean up: Remove all event listeners after first interaction
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    // Attach event listeners for various user interactions
    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('mousemove', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    // Cleanup function: remove listeners when component unmounts
    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [callback]); // Dependency: re-run effect if the callback function changes
};
