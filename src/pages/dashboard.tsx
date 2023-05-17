import { Center, Flex } from "@chakra-ui/react";
import { getSession, signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";

type dashboardProps = {};

const dashboard: React.FC<dashboardProps> = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) {
    return <Flex>Loading...</Flex>;
  }
  return <Flex justifyContent={"center"}>Dashboard</Flex>;
};
export default dashboard;
