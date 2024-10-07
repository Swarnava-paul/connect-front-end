import React from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import Img from "../../assets/customer-service-guide-abstract.webp";

const Section_1 = () => {
  const text = {
    fontFamily: "sans-serif",
    fontWeight: "700",
    color: "#73777C",
  };

  return (
    <>
      <Box flexDirection={"column"} flexGrow={1} mb={{ base: 20 }}>
        <Flex
          // gap={{ base: "30px", lg: "40px" }}
          flexDirection={"column"}
          mb={{ base: 20, lg: 100 }}
        >
          <Center mb={{ base: 20 }}>
            <Heading
              fontSize={{
                base: "26px",
                sm: "35px",
                md: "43px",
                lg: "60px",
                xl: "56px",
                "2xl": "60px",
              }}
              sx={text}
            >
              Privacy Policy
            </Heading>
          </Center>
          <Text
            fontFamily={"sans-serif"}
            fontSize={{
              base: "20px",
              sm: "22px",
              md: "28px",
              lg: "32px",
            }}
            fontWeight={"bold"}
            mb={{ base: "30px", lg: 20 }}
          >
            Effective Date: 2/10/2024
          </Text>
          <Text
            fontFamily={"sans-serif"}
            fontSize={{
              base: "12px",
              sm: "13px",
              md: "15px",
              lg: "16px",
            }}
            fontWeight={"600"}
            color={"#322E2E"}
            lineHeight={{ base: "26px", sm: "28px", lg: "40px" }}
          >
            At UniConn, your privacy and the security of your personal
            information are our top priorities. This Privacy Policy explains how
            we collect, use, and safeguard the data we collect when you use our
            platform and services, including accessing your Google Calendar to
            facilitate one-on-one session bookings. By using UniConn, you agree
            to the terms outlined in this policy.
          </Text>
        </Flex>
        <Center mb={{ base: "40px", lg: 20 }}>
          <Text
            fontSize={{
              base: "20px",
              sm: "22px",
              md: "28px",
              lg: "32px",
            }}
            fontFamily={"sans-serif"}
            fontWeight={"bold"}
          >
            Information We Collect
          </Text>
        </Center>

        <Flex
          gap={{ base: 10, md: 0 }}
          flexDirection={"column"}
          color={"#322E2E"}
          position={"relative"}
          mb={{ base: 20, lg: 100 }}
        >
          <Text
            position={{ lg: "absolute" }}
            top={10}
            fontFamily={"sans-serif"}
            fontSize={{
              base: "12px",
              sm: "13px",
              md: "15px",
              lg: "16px",
            }}
            fontWeight={"600"}
          >
            We collect the following types of personal information to provide
            our services effectively:
          </Text>

          <Flex
            flexDirection={{ base: "column-reverse", md: "row" }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <UnorderedList
              fontFamily={"sans-serif"}
              fontSize={{
                base: "12px",
                sm: "13px",
                md: "15px",
                lg: "16px",
              }}
              fontWeight={"600"}
              color={"#322E2E"}
              pl={18}
              lineHeight={{ base: "26px", sm: "28px", lg: "40px" }}
            >
              <ListItem>
                Account Information: Name, email address, and contact details
                when you create an account.
              </ListItem>
              <ListItem>
                Session Booking Information: Details related to one-on-one
                session bookings, including time, date, and participant details.
              </ListItem>
              <ListItem>
                Google Calendar Access: With your permission, we access your
                Google Calendar to book, manage, and display available sessions.
              </ListItem>
            </UnorderedList>
            <Image
              boxSize={{ base: "270px", lg: "350px" }}
              objectFit="cover"
              src={Img}
              alt=""
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Section_1;
