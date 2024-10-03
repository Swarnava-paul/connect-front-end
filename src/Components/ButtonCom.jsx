import { Button } from "@chakra-ui/react";
import React from "react";

const ButtonCom = (props) => {
  const { children, onClick, bg, rounded, margT, colT } = props;
  return (
    <Button
      w={"18rem"}
      h={"45px"}
      fontSize={17}
      fontWeight={"bold"}
      cursor={"pointer"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      _hover={{
        bg: "#CCE2FE",
        // background: "#3582FF",
        color: "black",
      }}
      onClick={onClick}
      bg={bg}
      color={colT}
      p={"1rem"}
      gap={20}
      border={"none"}
      borderRadius={rounded}
      mb={margT}
      display={"flex"}
    >
      {children}
    </Button>
  );
};

export default ButtonCom;
