import React from "react";
import { Grid , Button , Text , Flex, border} from "@chakra-ui/react"
import { DynamicComponentContext } from "../DynamicComponentControl/DynamicComponentController";
import { useState  } from "react";
import { Link } from "react-router-dom";
// icons
import { AiOutlinePlus } from "react-icons/ai";
import { BsCalendar3 , BsLink45Deg , BsClockHistory , BsShieldCheck} from "react-icons/bs";

const SideBar = () => {

  // context
  const {requestDynamicComponent} = React.useContext(DynamicComponentContext);
  const [previousEvent,setPreviousEvent] = useState()
  const arr = [
    {name:'Meetings',dispatch:"ViewMeetings",Icon:BsCalendar3},
    {name:'Sharable Link',dispatch:"SharableLink",Icon:BsLink45Deg},
    {name:'TimeZone',dispatch:"TimeZone",Icon:BsClockHistory}
  ]
  const parentGrid = {
   width:"20%",
   height:"100vh",
   boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",

  };

  const arrButtons = {
  paddingLeft:"10px",
  border:"none",
   backgroundColor:"white",
   height:"8vh",
   borderRadius:"6px",
   fontFamily :"sans-serif",
   fontSize:"17px",
   width:"91%",
   alignItems:"center",
   margin:"auto",
   gap:"20px"
  }

  function determineButtonBackgroundColor (e) {
    if(previousEvent) {
      previousEvent.style.backgroundColor = 'white';
      previousEvent.style.color = 'black'
    }
    e.target.style.backgroundColor = 'whitesmoke';
    e.target.style.color = 'RGB(0, 96, 230)'
  }

  return (
    <Grid sx={parentGrid}>
     <Button gap={10} fontSize={15} margin='auto' h='8vh' color='white' mt={20} borderRadius={20} bg='RGB(0, 96, 230)'w='90%' border='none'>
        <AiOutlinePlus />
        Create Availability Slot
      </Button>
      <Grid h='auto' mt='-50%'>
      {
        arr.map(({name,dispatch,Icon},index)=>(
          <Flex key={index} sx={arrButtons} color='black'
          onClick={(e)=>{
            requestDynamicComponent({type:dispatch});
            setPreviousEvent(e.target)
            determineButtonBackgroundColor(e)
           }}>
            <Icon/>
            {name}
          </Flex>
        ))
      }
      </Grid>
      <Flex sx={arrButtons}><BsShieldCheck/><Link style={{textDecoration:"none"}} to='/privacy&policy'>Privacy Policy & Security</Link></Flex>
    </Grid>
  )
}

export default SideBar
