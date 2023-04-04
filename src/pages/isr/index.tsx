import type { NextPage, GetStaticProps } from "next";

type Props = {
  currentTime: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const date = new Date();
  const currentTime = date.toLocaleString();

  return {
    props: {
      currentTime,
    },
    revalidate: 60
  };
};

const Page: NextPage<Props> = ({ currentTime }) => {
  return (
    <div>
      <h2>ISR</h2>
      <p>revalidate: 60</p>
      <p>{currentTime}</p>
    </div>
  );
};

export default Page;
