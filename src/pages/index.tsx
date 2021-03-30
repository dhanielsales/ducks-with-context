import React from 'react';

import DecrementButton from '~/components/DecrementButton';
import IncrementButton from '~/components/IncrementButton';
import { useButtons } from '~/contexts/ButtonsContext';

const Home: React.FC = () => {
  const { state } = useButtons();

  return (
    <div style={{ height: '80vh' }}>
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: '250px', border: '1px solid #c3c3c3', padding: '10px' }}>
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              padding: '10px',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            Contador: {state.count}
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IncrementButton>+</IncrementButton>
            <DecrementButton>-</DecrementButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
