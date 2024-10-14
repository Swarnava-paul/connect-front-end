import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const formattedDate = new Date(data.sessionInfo.StartDateAndTime)
    .toISOString()
    .split("T")[0]
    .replace(/-/g, "/");

  const formattedTime = new Date(
    data.sessionInfo.StartDateAndTime
  ).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",

    hour12: true,
  });


  return (
    <Flex
      flexDirection={"column"}
      borderTop={"12px solid #4C9FEB"}
      borderX={"1px solid"}
      borderBottom={"1px solid"}
      rounded={"md"}
      p={{ base: 2, md: 5 }}
      gap={5}
      minW={{ base: "17rem", sm: "18rem", md: "24rem" }}
      fontFamily={"sans-serif"}
      fontSize={{
        base: "14px",
        sm: "16px",
        md: "18px",
        lg: "20px",
      }}
      fontWeight={"500"}
      boxShadow={"0px 0px 5px 1px rgba(0,0,0,0.47);"}
    >
      <Box>
        Session with{" "}
        <Text display={"inline-block"} color={"#4C9FEB"}>
          {data.bookerInfo.bookerName}
        </Text>
      </Box>
      <Text>Date - {formattedDate}</Text>
      <Text>Time - {formattedTime}</Text>

      <Button
        w={"8rem"}
        color={"white"}
        bg={"#4C9FEB"}
        py={2}
        px={9}
        rounded={"md"}
        alignSelf={"end"}
      >
        <Link to={data.sessionInfo.meetingLink} target="_blank">
          Join
        </Link>
      </Button>
    </Flex>
  );
};

export default Card;
