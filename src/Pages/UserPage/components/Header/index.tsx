import LogoKart from '@assets/images/logoKart.png';
import LogoTmi from '@assets/images/logoTmi.png';

import Nav from '@components/Nav';
import { Head, Right } from './style';

const Header = () => {
  return (
    <>
      <Head>
        <div>
          <img src={LogoKart} alt="카트라이더 로고1" />
          <img src={LogoTmi} alt="카트라이더 로고2" />
        </div>
        <Right>카트라이더 홈페이지 바로가기</Right>
      </Head>
      <Nav>
        <Nav.Item text="홈" href="asdf" />
        <Nav.Item text="랭킹" href="asdf" />
        <Nav.Item text="카트" href="asdf" />
        <Nav.Item text="트랙" href="asdf" />
      </Nav>
    </>
  );
};
export default Header;
