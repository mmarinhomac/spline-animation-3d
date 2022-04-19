import React from 'react';
import Spline from '@splinetool/react-spline';

import { Container } from './styles';

function SplinePage() {
  return (
    <Container>
      <div>
        <h1>Hello Spline 🚀</h1>
        <Spline scene="./scene.spline" style={{ width: '900px', height: '900px' }} />
      </div>
    </Container>
  );
}

export default SplinePage;