interface Props {
  onClick?: () => void;
  color?: 'blue' | 'yellow' | 'green';
  marginLeft?: string;
}

type ButtonProps = Props & JSX.IntrinsicElements['button'];

const Button: React.FC<ButtonProps> = ({ children, onClick, color = 'blue', marginLeft }) => {
  return (
    <button
      style={{
        width: '100%',
        height: '43px',
        borderColor: color === 'blue' ? '#2fa3de' : color === 'yellow' ? '#e3b132' : '#34eb4f',
        background: color === 'blue' ? '#2fa3de' : color === 'yellow' ? '#e3b132' : '#34eb4f',
        fontSize: '20px',
        marginLeft: marginLeft ? marginLeft : '0',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
