import React from 'react';
import Spline from '@splinetool/react-spline';

import { Container } from './styles';

function SplinePage() {
  return (
    <Container>
      <Spline 
        scene="./scene.spline" 
        style={{ 
          position: 'fixed', 
          top: '0', 
          left: '0'
        }}
      />
      <h1>Hello World<br/><strong>Spline Design 🚀</strong></h1>
    </Container>
  );
}

export default SplinePage;