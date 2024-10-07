import React from "react";
import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  UnorderedList,
  ListItem,
  Divider,
} from "@chakra-ui/react";

const Section_2 = () => {
  return (
    <Box flexGrow={1}>
      <Center mb={{ base: "40px", lg: 20 }}>
        <Text 
          fontFamily={"sans-serif"} 
          fontWeight={"bold"}
          fontSize={{
            base: "20px",
            sm: "22px",
            md: "28px",
            lg: "32px",
          }} 
        >
          How We Use Your Data
        </Text>
      </Center>

      <Flex 
        flexDirection={{ base: "column-reverse", md: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        columnGap={2}
        mb={{ base: 20, lg: 100 }}
      >
        <Box>
          <Text
            fontFamily={"sans-serif"}
            fontSize={{
              base: "12px",
              sm: "13px",
              md: "15px",
              lg: "16px",
            }}
            fontWeight={"600"}
            mt={2}
          >
            We use information we collect solely to provide, improve, and
            support our services. Specifically, we use your data to:
          </Text>
          <Divider mt={4} mb={15} />
          <UnorderedList
            lineHeight={{ base: "26px", sm: "28px", lg: "40px" }}
            fontFamily={"sans-serif"}
            fontWeight={"700"}
            fontSize={{
              base: "12px",
              sm: "13px",
              md: "15px",
              lg: "16px",
            }}
            mt={{ base: 10, md: 0 }}
          >
            <ListItem>Facilitate one-on-one session bookings.</ListItem>
            <ListItem>
              Manage and synchronize your bookings with your Google Calendar.
            </ListItem>
            <ListItem>
              Send notifications and reminders related to session bookings.
            </ListItem>
          </UnorderedList>
        </Box>
        <Image
          src="https://img.freepik.com/free-vector/appointment-booking-with-woman-smartphone_23-2148557484.jpg?ga=GA1.1.445490132.1727162141&semt=ais_hybrid"
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
          Google Calendar Access
        </Text>
      </Center>

      <Flex 
        flexDirection={{ base: "column-reverse", md: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        columnGap={2}
        mb={{ base: 20, lg: 100 }}
      >
        <Box>
          <Text
            fontFamily={"sans-serif"}
            fontSize={{
              base: "12px",
              sm: "13px",
              md: "15px",
              lg: "16px",
            }}
            fontWeight={"600"}
            mt={2}
          >
            When you connect your Google Calendar, we request the minimum
            necessary permissions required to:
          </Text>
          <Divider mt={4} mb={15} />
          <UnorderedList
            lineHeight={{ base: "26px", sm: "28px", lg: "40px" }}
            fontFamily={"sans-serif"}
            fontSize={{
              base: "12px",
              sm: "13px",
              md: "15px",
              lg: "16px",
            }}
            fontWeight={"600"}
            mt={{ base: 10, md: 0 }}
          >
            <ListItem>View and create events on your behalf.</ListItem>
            <ListItem>
              Display your availability for session bookings. We only access
              calendar information needed to schedule and manage bookings. Your
              calendar data is used solely for the intended purpose of our
              application and is not shared with any third parties.
            </ListItem>
          </UnorderedList>
        </Box>
        <Image
          src="https://img.freepik.com/free-vector/appointment-booking-smartphone_23-2148559902.jpg?ga=GA1.1.445490132.1727162141&semt=ais_hybrid"
          boxSize={{ base: "270px", lg: "350px" }}
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
};

export default Section_2;
