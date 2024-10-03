import { Button, Heading, Stack, Text } from "@chakra-ui/react";

const WelcomeMessage = () => {
  return (
    <>
      <Stack ml={"2rem"} mt={"10rem"}>
        <Heading as="h1" fontSize="3.5rem">
          Hi <span style={{ color: "purple" }}>User</span>
          <br />
          Welcome to <span style={{ color: "#006dfd" }}> Connect!</span>
        </Heading>
        <Text as={"h3"} fontSize="1.5rem" color={"gray"}>
          Getting Started By
          <Button
            ml={25}
            px={5}
            py={14}
            rounded={"5px"}
            fontSize={20}
            fontWeight={"semibold"}
            bg={"#4e9ee9"}
            border={"none"}
          >
            Creating Slots
          </Button>
        </Text>
      </Stack>
    </>
  );
};

export default WelcomeMessage;
