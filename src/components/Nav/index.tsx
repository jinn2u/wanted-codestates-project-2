import NavItem from './NavItem';
import { filterValidChildren } from './navUtils/filterValidChildren';
import { Container, Inp, Search, SearchIcon, Tab, Wrapper } from './style';
import { Props } from './types';

const Nav = ({ children }: Props) => {
  const validChildren = filterValidChildren(children);
  return (
    <Wrapper>
      <Container>
        <Tab>{validChildren}</Tab>
        <Search>
          <Inp placeholder="닉네임 검색" />
          <SearchIcon size={20} />
        </Search>
      </Container>
    </Wrapper>
  );
};
Nav.Item = NavItem;

export default Nav;
