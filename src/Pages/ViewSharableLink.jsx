import { useParams } from "react-router-dom"
import { useEffect , useState} from "react";
import { displayLoadingModal , hideLoadingModal ,setBookingDetailsObject , 
hideHamburgerIcon , setHostAvailabilityData} from "../App/Slices/MainSlice";
import { useDispatch , useSelector} from "react-redux";
import { Box , Flex , Text} from "@chakra-ui/react"; 
import MeetingSchedulerCalendar from "../Components/Calender/BookerCalender";

const ViewSharableLink = () => {

  const {id} = useParams();
  // id from url 
  const dispatch = useDispatch();
  const [hostInfo,setHostInfo] = useState({name:"",email:"",availability:[]})
 


  const fetchHostAvailability = async (bookerTimeZone) => {
    const url = `${import.meta.env.VITE_FETCH_HOST_AVAILABILITY_SLOTS}?id=${id}&bookerTimeZone=${bookerTimeZone}`;
    dispatch(displayLoadingModal());
    try {
      //
      const response = await fetch(url);
      const {info:{name,email,convertedAvailability}} = await response.json();
      setHostInfo({
        ...hostInfo,
        name,
        email,
        availability : convertedAvailability
      })
      dispatch(setBookingDetailsObject({id,bookerTimeZone}))
      dispatch(setHostAvailabilityData(convertedAvailability))
      dispatch(hideLoadingModal());
    }catch(error) {

      dispatch(hideLoadingModal());
    }
    
  }
  // function for fetch host availability details
  const captureBookerTimeZone = () => {
     dispatch(hideHamburgerIcon())
     const bookerTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
     fetchHostAvailability(bookerTimeZone); 
  }
  // function for capturing booker timezone first
  useEffect(captureBookerTimeZone,[]); // for capture booker timezone before browser paints the screen
  
  const textArray = [{
    name:"Book an",
    c :"black"
  },{
    name :'One:One',
    c:"#4C9FEB"
  },{
    name:"Session with",
    c:"black"
  },{
    name :hostInfo.name,
    c:"#4C9FEB"
  }];
  const textHolderFlex = {
  gap:['2px','3px','5px',"10px"],
  justifyContent :"center",
  fontSize:['15','20','20',"24px",],
  fontWeight:"600",
  alignItems:"center"
  };
  const mainBox = {
    marginTop:10
  }

return (
 <Box w='100%' h='100vh' sx={mainBox} >
  <Flex sx={textHolderFlex}>
   {textArray.map(({name,c},index)=>(<Text key={index} color={c}>{name}</Text>))}
  </Flex>
  <Box w={['90%','65%','40%','30%']} margin='auto' mt={10}>
  <MeetingSchedulerCalendar availability={hostInfo.availability}/>
  </Box>
 </Box>
)

}


export default ViewSharableLink
