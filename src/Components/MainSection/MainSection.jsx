import React  from "react"
import { DynamicComponentContext } from "../DynamicComponentControl/DynamicComponentController"
import { Box } from "@chakra-ui/react";
const MainSection = () => {

  const {Component} = React.useContext(DynamicComponentContext);

  return (
    <Box alignContent='center' w='80%'>
    <Component/>
    </Box>
  )
}

export default MainSection
