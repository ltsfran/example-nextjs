import Link from 'next/link';
import { Layout } from '../../components';
import { Wrapper } from './styled';

export const Showcase: React.FC = () => (
  <Layout>
    <Wrapper>
      Showcase
      <br />
      <Link href="/home">Back to home</Link>
    </Wrapper>
  </Layout>
);
