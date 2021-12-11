import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

const Slug: React.FC = () => {
  const router = useRouter();

  console.log(router.query, 'router query');

  return <div>Slug</div>;
};

const getUrlSlugById = async (id: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`mouse-gaming-${id}`);
    }, 1000);
  });
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params.slug.toString();
  const vehicleType = params.vehicleType.toString();
  const condition = params.condition.toString();
  const urlId = Number(slug.split('-').slice(-1).toString());

  if (!urlId) {
    return {
      notFound: true
    };
  }

  const urlSlug = await getUrlSlugById(urlId);
  const hasDiferentSlug: boolean = slug !== urlSlug;

  if (hasDiferentSlug) {
    return {
      redirect: {
        destination: `/${vehicleType}/${condition}/${urlSlug}`,
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
};

export default Slug;
