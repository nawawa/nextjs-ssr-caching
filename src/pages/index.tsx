import type { NextPage, GetServerSideProps } from "next"

type Props = {
  currentTime: string;
};

export const getServerSideProps: GetServerSideProps = async ({res}) => {
  const date = new Date();
  const currentTime = date.toLocaleString();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=86400"
  );

  return {
    props: {
      currentTime,
    },
  };
};

const Page: NextPage<Props> = ({ currentTime }) => {
  return <p>{currentTime}</p>;
};

export default Page
