import Link from 'next/link';
import React, { useRef } from 'react';

import Button from '~/components/Button';
import { useImmutable } from '~/contexts/ImmutableContext';
import { Creators } from '~/contexts/ImmutableContext/ducks';

const { increment, decrement, setValue } = Creators;

export interface State {
  count: number;
}

const Home: React.FC = () => {
  const { state, dispatch } = useImmutable();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();

    const inputValue = inputRef?.current?.value;

    if (inputValue) {
      dispatch(setValue(Number(inputValue)));
    }
  };

  return (
    <div style={{ height: '80vh' }}>
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            width: '250px',
            border: '1px solid #c3c3c3',
            padding: '10px',
          }}
        >
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
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button onClick={() => dispatch(increment())}>+</Button>
            <Button marginLeft="10px" color="yellow" onClick={() => dispatch(decrement())}>
              -
            </Button>
          </div>
        </div>
        <div
          style={{
            width: '250px',
            border: '1px solid #c3c3c3',
            padding: '10px',
            marginTop: '5px',
          }}
        >
          <form onSubmit={handleOnSubmit}>
            <div
              style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <input
                ref={inputRef}
                style={{ width: '100%', height: '43px', marginRight: '10px', fontSize: '20px' }}
              />
              <Button color="green" type="submit">
                ✔
              </Button>
            </div>
          </form>
        </div>
        <Link href="/">
          <a
            style={{
              marginTop: '10px',
              color: '#227ba8',
            }}
          >
            Go to <span style={{ fontWeight: 'bold' }}>default javascript object</span> demo
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
