import React  from "react"
import { DynamicComponentContext } from "../DynamicComponentControl/DynamicComponentController"

const MainSection = () => {

  const {Component} = React.useContext(DynamicComponentContext);

  return (
    <>
    <Component/>
    </>
  )
}

export default MainSection
