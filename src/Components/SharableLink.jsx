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
    navigator.clipboard.writeText(sharableLink);
    setTimeout(() => {
      setcopied(false);
    }, 5000);
  };

  return (
    <Grid
      gridTemplateRows={"repeat(6, 1fr)"}
      w={"100%"}
      h={"100vh"}
      placeItems={"center"}
      alignContent={"center"}
    >
      <Flex gridRowStart={3} flexDirection={"column"} alignItems={"center"}>
        <Box as={"test"}>
          <Flex
            fontFamily={"sans-serif"}
            fontSize={{
              base: "12px",
              sm: "16px",
              md: "20px",
              lg: "24px",
            }}
            fontWeight={"bold"}
            columnGap={3}
            mr={1}
            mb={7}
            flexDirection={{ base: "column", lg: "row" }}
            alignItems={"center"}
          >
            <Text>Your Sharable Link is: </Text>

            <Text flex={1} w={"100vws"} color="#4C9FEB">
              {sharableLink}
            </Text>
          </Flex>
          <Center>
            <Button
              fontFamily={"sans-serif"}
              fontSize={{
                base: "11px",
                sm: "12px",
                md: "13px",
                lg: "17px",
              }}
              fontWeight={"600"}
              w={{ base: "95px", sm: "110px", md: "130", lg: "136px" }}
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
        gridRowStart={"6"}
        width={{ base: "330px", sm: "440px", md: "500px", lg: "610px" }}
        p={7}
        bg={"#9D9FA2"}
        color={"white"}
        borderRadius={"md"}
        fontFamily={"sans-serif"}
        fontSize={{
          base: "10px",
          sm: "11px",
          md: "12px",
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
// placeItems={"center "}
//       py={30}
//       px={10}
//       alignItems={"flex-end"}
//       h={"100vh"}
