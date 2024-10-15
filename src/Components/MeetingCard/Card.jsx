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
      rounded={"md"}
      p={{ base: 2, md: 5 }}
      gap={{ base: 5, lg: 3, "2xl": 5 }}
      minW={{
        base: "15rem",
        sm: "18rem",
        md: "19rem",
        lg: "14rem",
        xl: "18rem",
        "2xl": "22rem",
      }}
      fontFamily={"sans-serif"}
      fontSize={{
        base: "13px",
        sm: "14px",
        md: "15px",
        lg: "14px",
        "2xl": "20px",
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
        w={{ base: "5rem", lg: "4rem", xl: "5rem", "2xl": "6rem" }}
        color={"white"}
        bg={"#4C9FEB"}
        py={{ base: 2, lg: 1, xl: 2 }}
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
