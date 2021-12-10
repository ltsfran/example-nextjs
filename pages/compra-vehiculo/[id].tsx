const CompraVehiculoTest: React.FC = () => {
  return <div>Hola mundo</div>;
};

export const getStaticPaths = async (): Promise<any> => {
  return {
    paths: [
      { params: { id: 'index' } }
    ],
    fallback: false
  };
};

export const getStaticProps = async (): Promise<any> => {
  return {
    props: {}
  };
};

export default CompraVehiculoTest;
