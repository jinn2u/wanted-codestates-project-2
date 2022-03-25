import { Inp } from './style';
import { Props } from './types';

const Input = ({
  width = 230,
  height = 35,
  borderColor = 'white',
  placeholder = '',
  ...props
}: Props) => {
  return (
    <Inp
      width={width}
      height={height}
      borderColor={borderColor}
      placeholder={placeholder}
      {...props}
    />
  );
};
export default Input;
