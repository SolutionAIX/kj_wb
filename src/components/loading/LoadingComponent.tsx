// src/components/loading/LoadingComponent.tsx
import React from 'react';

const LoadingComponent: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>Loading...</div>
    </div>
  );
};

export default LoadingComponent;
