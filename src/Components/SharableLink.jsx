import { Grid, Text, Box, Flex, Button, Center } from "@chakra-ui/react";

import { useState } from "react";
import { useSelector } from "react-redux";
const SharableLink = () => {
  // this holds a sharable link display it
  const sharableLink = useSelector(
    (state) => state.slice.UserInfo.sharableLink
  );

  const [copied, setcopied] = useState(false);

  // COPY BUTTON CLICK FUNCION
  const handleClick = () => {
    setcopied(true);
    setTimeout(() => {
      setcopied(false);
    }, 5000);
  };

  return (
    <Grid
      placeItems={"center "}
      py={30}
      px={10}
      alignItems={"flex-end"}
      h={"100vh"}
    >
      <Flex gap={10} flexDirection={"column"} alignItems={"center"}>
        <Box>
          <Flex
            fontFamily={"sans-serif"}
            fontSize={{
              base: "20px",
              sm: "22px",
              md: "28px",
              lg: "32px",
            }}
            fontWeight={"bold"}
            columnGap={5}
            mb={7}
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Text>Your Sharable Link is: </Text>

            <Text flex={1} color="#4C9FEB">
              {sharableLink}
            </Text>
          </Flex>
          <Center>
            <Button
              fontFamily={"sans-serif"}
              fontSize={{
                base: "12px",
                sm: "13px",
                md: "15px",
                lg: "17px",
              }}
              fontWeight={"600"}
              w={"136px"}
              color={"white"}
              py={"10px"}
              borderRadius={"md"}
              bg={copied ? "#00E600" : "#4C9FEB"}
              onClick={handleClick}
            >
              {copied ? "Copied" : "Copy link"}
            </Button>
          </Center>
        </Box>
      </Flex>
      <Box
        textAlign={"center"}
        width={{ base: "300px", md: "500px", lg: "610px" }}
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
        with this link anyone able to book one to one session with you on your
        given availability date
      </Box>
    </Grid>
  );
};

export default SharableLink;
