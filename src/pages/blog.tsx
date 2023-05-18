import { getSession } from "next-auth/react";
import React from "react";

type blogProps = {
  data: any;
};

const blog: React.FC<blogProps> = ({ data }) => {
  return (
    <div>
      <h1>blog page</h1>
      <h4>{data}</h4>
    </div>
  );
};
export default blog;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  return {
    props: {
      data: session
        ? "list of 100 personalized blog posts"
        : "list of 100 non-personalized blog posts",
    },
  };
}
