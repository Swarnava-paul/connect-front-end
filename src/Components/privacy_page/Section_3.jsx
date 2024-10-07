import React from "react";
import {
  Box,
  Center,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import Img from "../../assets/global-data-security-personal-da.webp";
import Img_1 from "../../assets/cloud-storage-idea-online-comput.webp";

const Section_3 = () => {
  return (
    <Box flexGrow={1} mb={{ base: 20 }}>
      <Center mb={{ base: "40px", lg: 20 }}>
        <Text
          fontFamily={"sans-serif"}
          fontSize={{
            base: "20px",
            sm: "22px",
            md: "28px",
            lg: "32px",
          }}
          fontWeight={"bold"}
        >
          Data Sharing,Disclosure & Security
        </Text>
      </Center>
      <Flex
        flexDirection={{ base: "column-reverse", md: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={{ base: 20, lg: 100 }}
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
          mt={{ base: 10, md: 0 }}
          lineHeight={{ base: "26px", sm: "28px", lg: "40px" }}
        >
          <ListItem>
            UniConn does not share, sell, or transfer your personal data to any
            third parties, including other individuals or organizations.{" "}
          </ListItem>
          <ListItem mb={10}>
            Your information is strictly used for facilitating session bookings
            within our platform and is stored securely.
          </ListItem>
          <ListItem color={"#322E2E"}>
            We implement industry-standard security measures to protect your
            data from unauthorized access, loss, or misuse. This includes
            encryption, secure servers, and regular security audits. We also
            ensure that all third-party services, including Google Calendar,
            adhere to strong data protection standards.
          </ListItem>
        </UnorderedList>
        <Image
          src={Img}
          boxSize={{ base: "270px", lg: "350px" }}
          objectFit="cover"
        />
      </Flex>
      <Center mb={{ base: "40px", lg: 20 }}>
        <Text
          fontFamily={"sans-serif"}
          fontSize={{
            base: "20px",
            sm: "22px",
            md: "28px",
            lg: "32px",
          }}
          fontWeight={"bold"}
        >
          Your Rights and Control
        </Text>
      </Center>
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
          mt={{ base: 10, md: 0 }}
          lineHeight={{ base: "26px", sm: "28px", lg: "40px" }}
        >
          <ListItem>
            You retain control over your data at all times. You can:
          </ListItem>
          <ListItem>
            Revoke Google Calendar access at any time through your Google
            account settings.
          </ListItem>
          <ListItem>
            Request access to or deletion of your personal data by contacting
            our support team at
          </ListItem>
          <ListItem>
            Manage your account settings and adjust your privacy preferences.
          </ListItem>
        </UnorderedList>
        <Image
          boxSize={{ base: "270px", lg: "350px" }}
          objectFit="cover"
          src={Img_1}
        />
      </Flex>
    </Box>
  );
};

export default Section_3;
