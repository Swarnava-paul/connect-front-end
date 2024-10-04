import { Flex } from "@chakra-ui/react"
import { displaySideBar, hideSideBar } from "../App/Slices/MainSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"

const HamburgerIcon = () => {
const [crossHamburger,setCrossHamburger] = useState(false);
const [class_name,setClass_name] = useState('fa-solid fa-bars')
const dispatch = useDispatch();


  return (
   <Flex top='0%' ml={2} mt={3} fontSize={28} pos='absolute' display={['flex','flex','flex','none']}>
    <i style={{color:"black"}} className={class_name}
    onClick={()=>{
        if(crossHamburger == false) {
            setCrossHamburger(true);
            setClass_name('fa-solid fa-xmark')
            dispatch(displaySideBar());
        }else {
            setCrossHamburger(false)
            setClass_name('fa-solid fa-bars')
            dispatch(hideSideBar())
        }
    }}></i>
   </Flex>
  )
}

export default HamburgerIcon
