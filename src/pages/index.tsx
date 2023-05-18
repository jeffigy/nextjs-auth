import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(`status: ${status}, session: ${session}`);
  return <>The quick brown fox jumps over the lazy dog.</>;
}
