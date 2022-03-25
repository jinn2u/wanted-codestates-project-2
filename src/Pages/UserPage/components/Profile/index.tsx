import { AiOutlineReload } from 'react-icons/ai';
import {
  BsFillBellFill,
  BsFillShareFill,
  BsFillPersonFill,
  BsPeopleFill,
  BsFillInfoCircleFill,
} from 'react-icons/bs';

import * as S from './style';
import { Props } from './types';
import profileBackground from '@assets/images/profileBackground.png';
import ProfileImg from '@assets/character/0f3e859ef54345c9e0d39bb7de8c93753c6cb0fcdb24936bc6dd8ac1241fabe8.png';
import license from '@assets/images/license.png';

const Profile = ({ nickname }: Props) => {
  return (
    <S.Wrapper style={{ backgroundImage: `url(${profileBackground})` }}>
      <S.Info>
        <BsFillInfoCircleFill /> 카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다
      </S.Info>
      <S.Container>
        <S.ProfileImage src={ProfileImg} />
        <S.ProfileInfo>
          <S.Name>
            {nickname}
            <S.License style={{ backgroundImage: `url(${license})` }} />
          </S.Name>
          <S.BtnWrapper>
            <S.TeamSelectWrap>
              <S.TeamSelect className="indi">
                <BsFillPersonFill />
                개인전
              </S.TeamSelect>
              <S.TeamSelect className="team">
                <BsPeopleFill />
                팀전
              </S.TeamSelect>
            </S.TeamSelectWrap>
            <S.ActionWrapper>
              <S.Action>
                <AiOutlineReload size={16} />
                전적 갱신
              </S.Action>
              <S.Action>
                <BsFillBellFill size={12} />
                신고하기
              </S.Action>
              <S.Action>
                <BsFillShareFill size={12} />
                공유하기
              </S.Action>
            </S.ActionWrapper>
          </S.BtnWrapper>
        </S.ProfileInfo>
      </S.Container>
    </S.Wrapper>
  );
};
export default Profile;
