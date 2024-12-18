import React from 'react';
import { styled } from '@mui/system';

// Main styled container
const StyledContainer = styled('div')(
  () => `
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ensure it covers the entire viewport height */
  width: 100vw;    /* Ensure it covers the entire viewport width */
  background: #000; /* Black background for a clean slate */
  margin: 0;       /* Remove default margins */
  padding: 0;      /* Remove default padding */
  position: fixed; /* Fix the background to the viewport */
  top: 0;          /* Position at the top */
  left: 0;         /* Position at the left */
`
);

// Futuristic styled text
const FuturisticText = styled('h1')(
  () => `
  font-family: 'Orbitron', sans-serif; 
  /* Fallback font */
  font-size: 10vw; /* Text scales based on screen size */
  font-weight: 700;
  color: #e0e0e0; /* Off-white for a softer look */
  letter-spacing: 0.1em; /* Subtle letter spacing */
  margin: 0;
  padding: 0;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.2); /* Subtle glow */
  
  /* Add a subtle background highlight for a futuristic touch */
  padding: 10px 20px; /* Add some padding around the text */
  border-radius: 5px; /* Rounded corners */
  }
`
);

const ZéroText: React.FC = () => {
  return (
    <StyledContainer>
      <FuturisticText>Zéro</FuturisticText>
    </StyledContainer>
  );
};

export default ZéroText;
