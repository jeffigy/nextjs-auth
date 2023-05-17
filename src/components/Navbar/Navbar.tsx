import {
  Button,
  Text,
  Flex,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const { data: session, status } = useSession();

  return (
    <Flex
      px={"20px"}
      position={"sticky"}
      top={0}
      height={"80px"}
      zIndex={"1"}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderBottom={"1px solid #eaeaea"}
    >
      {status === "authenticated" ? (
        <HStack>
          <Link href={"/dashboard"}>Dashboard</Link>
          <Link href={"/blog"}>blog</Link>
        </HStack>
      ) : (
        <div></div>
      )}
      {status === "loading" && <Text>Loading...</Text>}
      {session && <Text>{session.user?.email}</Text>}
      <HStack>
        {!session && <Button onClick={() => signIn()}>Login</Button>}
        {session && <Button onClick={() => signOut()}>Logout</Button>}
      </HStack>
    </Flex>
  );
};
export default Navbar;
