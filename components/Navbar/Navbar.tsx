import Link from 'next/link';
import {
  Menu,
  Item,
  LinkStyled
} from './styled';

export const Navbar: React.FC = () => {
  return (
    <Menu>
      <Item>
        <Link href="/showcase">
          <LinkStyled>Showcase</LinkStyled>
        </Link>
      </Item>
      <Item>Docs</Item>
      <Item>Analytics and Commerce</Item>
    </Menu>
  );
};

Navbar.displayName = 'Navbar';
