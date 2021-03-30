import { useButtons } from '~/contexts/ButtonsContext';
import { Creators } from '~/contexts/ButtonsContext/actions';

const { decrement } = Creators;

const DecrementButton: React.FC = ({ children }) => {
  const { dispatch } = useButtons();

  const handleDecrement = () => dispatch(decrement());

  return (
    <button
      style={{
        width: '100%',
        height: '43px',
        borderColor: '#e3b132',
        background: '#e3b132',
        marginLeft: '10px',
        fontSize: '20px',
      }}
      onClick={handleDecrement}
    >
      {children}
    </button>
  );
};

export default DecrementButton;
