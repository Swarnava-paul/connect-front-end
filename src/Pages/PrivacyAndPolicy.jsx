import { Box } from "@chakra-ui/react";
import Section_1 from "../Components/privacy_page/Section_1";
import Section_3 from "../Components/privacy_page/Section_3";
import Section_2 from "../Components/privacy_page/Section_2";
import Section_4 from "../Components/privacy_page/Section_4";

const PrivacyAndPolicy = () => {
  return (
    <>
      <Box px={100} py={15}>
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
      </Box>
    </>
  );
};

export default PrivacyAndPolicy;
