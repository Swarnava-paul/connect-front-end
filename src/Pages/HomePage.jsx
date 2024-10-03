import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SideBar, MainSection } from "../Components/exports";
import { Box, Container, Flex } from "@chakra-ui/react";

const HomePage = () => {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);

  const tokenFromUrl = queryParam.get("token"); // get token value from front-end url useful when after sign up or login
  // we will redirect to /dashboard then get the token value from url and store first in localStorage
  // then call the getUserinfo function

  const checkTokenIsPresentOrNot = () => {
    // this function will check is token is present ot not in localStorage
    // if token is present it will call a function getUserInfo
    // if no token display loginModal
  };

  const getUserInfo = async () => {
    // this function will send a get request to an api with token and in response get user info like
    // name , email etc...
    // display a loading untill this request will complete
    // after response get we need to store user name email in a redux state
    // and redux auth state to true
  };

  useEffect(() => {
    if (!tokenFromUrl) {
      checkTokenIsPresentOrNot();
    }
  }, [tokenFromUrl]);

  useEffect(() => {
    if (tokenFromUrl != null || tokenFromUrl != undefined) {
      localStorage.setItem(JSON.stringify("token", tokenFromUrl));
      getUserInfo();
    }
  }, [tokenFromUrl]);

  return (
    <>
      <Flex>
        <SideBar />
        <Box ml={"18rem"} flexGrow={1} px={30} h={"100vh"}>
          <MainSection />
        </Box>
      </Flex>
    </> /* only display this Home page  if redux auth state is true  and also display a loader is loading state will true */
  );
};

export default HomePage;
