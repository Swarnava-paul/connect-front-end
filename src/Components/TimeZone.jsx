import { Box, Center, Flex, Grid, HStack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const TimeZone = () => {
  // in this component users time zone should be visible
  const userTimeZone = useSelector((state) => state.slice.UserInfo.timeZone);

  return (
    <>
      <Grid
        h={"100vh"}
        placeItems={"center"}
        alignItems={"flex-end"}
        py={30}
        px={10}
      >
        <Flex flexDirection={"column"}>
          <Center
            fontFamily={"sans-serif"}
            fontSize={{
              base: "20px",
              sm: "22px",
              md: "28px",
              lg: "32px",
            }}
            fontWeight={"bold"}
            alignItems={{ base: "center", lg: "flex-end" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Text mr={5}>Your Detected TimeZone is:</Text>
            <Text color={"#4C9FEB"}>{userTimeZone}</Text>
          </Center>
        </Flex>
        <Center
          textAlign={"center"}
          w={{ base: "300px", sm: "400px", md: "500px", lg: "610px" }}
          p={7}
          bg={"#9D9FA2"}
          color={"white"}
          borderRadius={"md"}
          fontFamily={"sans-serif"}
          fontSize={{
            base: "12px",
            sm: "13px",
            md: "15px",
            lg: "15px",
          }}
          fontWeight={"600"}
        >
          Time zone will affect Availability slots on time of UTC time
          Conversion , from your time time zone to Booker timezone
        </Center>
      </Grid>
    </>
  );
};

export default TimeZone;
