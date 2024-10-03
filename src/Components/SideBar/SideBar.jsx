import { useContext, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { RiCalendar2Line } from "react-icons/ri";
import { PiTimer } from "react-icons/pi";
import { AiOutlineLink } from "react-icons/ai";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import ButtonCom from "../ButtonCom";
import { DynamicComponentContext } from "../DynamicComponentControl/DynamicComponentController";
import { FaBarsStaggered } from "react-icons/fa6";

const SideBar = () => {
  const { Component, requestDynamicComponent } = useContext(
    DynamicComponentContext
  );

  const handleCreateSlot = () => {
    requestDynamicComponent({ type: "CreateAvailability" });
  };
  const handleGenerateLink = () => {
    requestDynamicComponent({ type: "GenerateSharableLink" });
  };
  const handleMeetings = () => {
    requestDynamicComponent({ type: "ViewMeetings" });
  };
  const handleCustom = () => {
    requestDynamicComponent({ type: "CustomizeBookingPage" });
  };
  const handleAccount = () => {
    requestDynamicComponent({ type: "ManageAccount" });
  };

  const Menus = [
    {
      title: "Create Availability Slot",
      iconT: <IoMdAdd fontSize={"1.5rem"} />,
      onClick: handleCreateSlot,
      backT: "#006dfd",
      colT: "#fdffff",
      ringT: "2rem",
      paddT: "20px",
      marT: "2rem",
    },
    {
      title: "Generate Sharable Link",
      iconT: <AiOutlineLink fontSize={"1.5rem"} />,
      onClick: handleGenerateLink,
      backT: "transparent",
    },
    {
      title: "Meetings",
      iconT: <RiCalendar2Line fontSize={"1.5rem"} />,
      onClick: handleMeetings,
      backT: "transparent",
    },
    {
      title: "Customize Booking Page",
      iconT: <PiTimer fontSize={"1.5rem"} />,
      onClick: handleCustom,
      backT: "transparent",
      marT: "2rem",
      borT: "1px solid",
    },
    {
      title: "Manage Account",
      iconT: <MdOutlineSupervisorAccount fontSize={"1.5rem"} />,
      onClick: handleAccount,
      backT: "transparent",
    },
  ];

  return (
    <>
      <Box
        w={"18rem"}
        // h={"calc(100vh - 30px)"}
        h={"100vh"}
        position={"fixed"}
        as={"aside"}
        bg={"white"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"baseline"}
        boxShadow={"10px 0px 45px -4px rgba(0,0,0,0.53)"}
        px={10}
        // py={38}
        pt={"20px"}
      >
        <Flex bg={"red"} flexDirection={"column"}></Flex>
        <Flex flexDirection={"column"} rowGap={10}>
          {/* <Box alignSelf={"flex-end"} cursor={"pointer"}>
            <FaBarsStaggered fontSize={"30px"} />
          </Box> */}
          {Menus.map((M, index) => (
            <ButtonCom
              // bordT={borT}
              colT={M.colT}
              margT={M.marT}
              p={M.paddT}
              rounded={M.ringT}
              bg={M.backT}
              onClick={M.onClick}
              key={index}
            >
              <span>{M.iconT}</span>
              {M.title}
            </ButtonCom>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default SideBar;
