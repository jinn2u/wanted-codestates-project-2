import { Span, Wrapper } from './style';
import { Props } from './types';
import { BsCalculator } from 'react-icons/bs';
const Matching = ({ nickname }: Props) => {
  return (
    <Wrapper>
      1대1 매칭 시뮬레이터 - {`'${nickname}'`} 와 가상 대결을 펼쳐보세요.
      <Span>
        <BsCalculator />
        매칭하기
      </Span>
    </Wrapper>
  );
};
export default Matching;
