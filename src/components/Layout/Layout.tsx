import React from "react";
import Navbar from "../Navbar/Navbar";
import { Flex } from "@chakra-ui/react";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <Flex p={"20px"}>{children}</Flex>
      </main>
    </>
  );
};
export default Layout;
