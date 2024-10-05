import React from "react";
import { Box, Center, Image, Text } from "@chakra-ui/react";

const Section_4 = () => {
  return (
    <Box flexGrow={1}>
      <Center mb={20}>
        <Text fontFamily="sans-serif" fontSize="32px" fontWeight="bold">
          Compliance with Laws
        </Text>
      </Center>
      <Box>
        <Text
          fontFamily="sans-serif"
          fontSize="16px"
          fontWeight="700"
          color="#333"
          mb={50}
          lineHeight={10}
        >
          UniConn is committed to complying with applicable data protection
          regulations, including the General Data Protection Regulation (GDPR)
          and the California Consumer Privacy Act (CCPA). We ensure that your
          data is handled lawfully, fairly, and transparently.
        </Text>
      </Box>
      <Center mb={20}>
        <Text fontFamily="sans-serif" fontSize="32px" fontWeight="bold">
          Changes to the Privacy Policy
        </Text>
      </Center>
      <Box width="100%">
        <Text
          fontFamily="sans-serif"
          fontSize="16px"
          fontWeight="700"
          color="#333"
          mb={10}
          lineHeight={10}
        >
          We may update this policy from time to time. If we make significant
          changes, we will notify you via email or a notice on our platform.
          Your continued use of UniConn after such changes constitutes your
          acceptance of the updated Privacy Policy.
        </Text>
      </Box>
      <Center>
        <Image
          src="https://img.freepik.com/free-psd/contact-us-label-illustration_23-2151600830.jpg?t=st=1727970236~exp=1727973836~hmac=8fcb7678ade9cc7ccf4473102eb749183c205588e98ed648e3d1a451f14059fc&w=826"
          alt="Contact Us"
          boxSize="260px"
          objectFit="contain"
        />
      </Center>
      <Box width="100%">
        <Text
          fontFamily="sans-serif"
          fontSize="16px"
          fontWeight="700"
          color="#333"
        >
          Contact Us
        </Text>
        <Text
          fontFamily="sans-serif"
          fontSize="16px"
          fontWeight="700"
          maxW="100%"
          color="#333"
        >
          If you have any questions or concerns about our Privacy Policy or how
          we handle your data, please contact us at:
        </Text>
        <Text
          fontFamily="sans-serif"
          fontSize="16px"
          fontWeight="700"
          mt={2}
          color="#333"
        >
          Email: team@unicconn.co.in
        </Text>
      </Box>
    </Box>
  );
};

export default Section_4;
