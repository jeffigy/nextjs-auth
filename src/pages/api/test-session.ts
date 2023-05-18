import { getSession } from "next-auth/react";

const handler = async (req: any, res: any) => {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: "Unauthenticated user" });
  } else {
    res.status(200).json({ message: "You are authenticated", session });
  }
};

export default handler;
