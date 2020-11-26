import { Header } from '../../components';

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);
