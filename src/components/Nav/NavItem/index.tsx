import { Link } from 'react-router-dom';

import { VALID_NAV_ITEM } from '../navUtils/constant';
import { Li } from './style';
import { Props } from './types';

const NavItem = ({ href, text, ...props }: Props) => {
  return (
    <Li {...props}>
      <Link to={href}>{text}</Link>
    </Li>
  );
};

NavItem.defaultProps = {
  __TYPE: VALID_NAV_ITEM,
};

export default NavItem;
