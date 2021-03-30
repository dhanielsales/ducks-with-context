import { useButtons } from '~/contexts/ButtonsContext';
import { Creators } from '~/contexts/ButtonsContext/ducks';

const { increment } = Creators;

const IncrementButton: React.FC = ({ children }) => {
  const { dispatch } = useButtons();

  const handleIncrement = () => dispatch(increment());

  return (
    <button
      style={{
        width: '100%',
        height: '43px',
        borderColor: '#2fa3de',
        background: '#2fa3de',
        fontSize: '20px',
      }}
      onClick={handleIncrement}
    >
      {children}
    </button>
  );
};

export default IncrementButton;
