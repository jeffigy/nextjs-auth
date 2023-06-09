import { sign } from "crypto";
import { getSession, signIn } from "next-auth/react";
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
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: session
        ? "list of 100 personalized blog posts"
        : "list of 100 non-personalized blog posts",
    },
  };
}
