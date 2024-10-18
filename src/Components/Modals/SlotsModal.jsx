import { Flex , Box , Button , Text, useSlider} from "@chakra-ui/react"
import { useSelector , useDispatch } from "react-redux"
import { hideSlotsModal , pushdateToAvailability } from "../../App/Slices/MainSlice"
import { useState , useMemo} from "react"
import axios from "axios"

const SlotsModal = () => {

const dispatch = useDispatch();
const selectedDate = useSelector((state)=>state.slice.storeSelectedDate);
const availability = useSelector((state)=>state.slice.availability);

const [slots,setSlots] = useState([]);

const [times,setTimes] = useState([
    { start: '09:00', end: '09:30' },
    { start: '09:30', end: '10:00' },
    { start: '10:00', end: '10:30' },
    { start: '10:30', end: '11:00' },
    { start: '11:00', end: '11:30' },
    { start: '11:30', end: '12:00' },
    { start: '12:00', end: '12:30' },
    { start: '12:30', end: '13:00' },
    { start: '13:00', end: '13:30' },
    { start: '13:30', end: '14:00' },
    { start: '14:00', end: '14:30' },
    { start: '14:30', end: '15:00' },
    { start: '15:00', end: '15:30' },
    { start: '15:30', end: '16:00' },
    { start: '16:00', end: '16:30' },
    { start: '16:30', end: '17:00' },
    { start: '17:00', end: '17:30' },
    { start: '17:30', end: '18:00' },
    { start: '18:00', end: '18:30' },
    { start: '18:30', end: '19:00' },
    { start: '19:00', end: '19:30' },
    { start: '19:30', end: '20:00' },
    { start: '20:00', end: '20:30' },
    { start: '20:30', end: '21:00' }
] )
  
const slotsModalDisplay = useSelector((state)=>state.slice.slotsModalDisplay );

const mainFlex = {
    backgroundColor : 'rgb(0,0,0,0.5)',
    width:'100%' ,
    height:'100vh',
    paddingBottom : 10,
    position:"absolute",
    justifyContent : "center",
    alignItems:"center",
    top : '0%',
    zIndex : 2000
};
 
const boxContainer = {
    backgroundColor :"white",
    width:['95%','80%','50%','60%',"40%"],
    padding :10,
    rowGap : 10,
    marginTop : 5,
    overflowY:"scroll",
    borderRadius :10,
    display : 'grid',
    fontSize : 15,
    height : '90vh'
}

const createAvailability = async () => {

const apiEndpoint = import.meta.env.VITE_CREATE_NEW_SLOTS;
const token = localStorage.getItem('token');

const dateObj = new Date(selectedDate);
// Extract day and month
const day = dateObj.getDate().toString(); // Day of the month
const month = (dateObj.getMonth() + 1).toString(); // Month is zero-indexed, so add 1

const body = {
        newAvailabilityDate : {
            date : day,
            month,
            slots
        }
} // request body
 
axios.post(apiEndpoint,body,{
    headers : {
        'Authorization' : `Bearer ${token}`
    }
    }).then((successResponse)=>{
        const availabilityObject = {
            month:parseInt(month,10),
            date : parseInt(day,10),
            slots
        }
        dispatch(pushdateToAvailability(availabilityObject));
        alert('Slot created')
        dispatch(hideSlotsModal())
    }).catch((errorResponse)=>{
     alert('Slots Creation Failed');
})
 // after slots push to db we need to push the newly cerated availability object to availability array in redux store for local
 // rendering logic 
}

  return (
   <Flex  display={slotsModalDisplay} sx={mainFlex}>
    <Box sx={boxContainer}>

        <Text textAlign='center' fontWeight='600'>Select Time Slots for {selectedDate}</Text>
        <Button w={['20%','25%','20%','15%']} h='6vh' color='white' borderRadius={5} fontSize={19} bg='#4C9FEB' 
        onClick={()=>dispatch(hideSlotsModal())}>Close</Button>
      {
       times.map(({start,end},index)=>(
        <EachSlot key={index} start={start} index={index} end={end} setSlots={setSlots} slots={slots}/>
       ))
      }
      <Button pos='absolute' borderRadius={6} m={['130% 0% 20% 50%','100% 0% 20% 45%','55% 0% 20% 29%','40% 0% 20% 44%','31% 0% 20% 24%']}
      fontSize={15} color='white'  bg='#4C9FEB' w='120px' h='8vh' onClick={()=>{
       createAvailability();
      }}>Submit</Button>
    </Box>
   </Flex>
  )
}


const EachSlot = ({start,end,index,setSlots,slots}) => {

const [checkStatus,setCheckStatus] = useState(false)


const changeCheckStatus = () => {
 if(checkStatus == false) {
    // push slot object with start and end time in slots array
    const Allslots = [...slots];
    Allslots.push({start,end,key:index});
    setSlots(Allslots);
    setCheckStatus(true);
 } else if (checkStatus == true) {
    // remove that slot object from slots array
    const FilteredSlots = [...slots].filter((i)=>(
        i.key != index
    ));
    setSlots(FilteredSlots);
    setCheckStatus(false);
 }
}

const boxStyle = {
     width:"40%",
     display:"flex",
     justifyContent:"center",
     alignItems:'center',
     fontSize:"18px",
     fontFamily:"sans-serif",
     fontWeight:"600",
     borderRadius:"4px",
     cursor:"pointer",
     backgroundColor:"#BCC0C5"
}
    return (
        <>
        <Flex  h='9vh' w='100%' justifyContent='space-between'>
        <input type="checkbox" style={{transform:"scale(1.3)"}} onChange={()=>changeCheckStatus()}/>
            <Box sx={boxStyle} bg='grey'>{start}</Box>
            <Box sx={boxStyle}>{end}</Box>
        </Flex>
        </>
    )
}

export default SlotsModal
