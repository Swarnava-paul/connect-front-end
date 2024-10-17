import { useSelector , useDispatch } from "react-redux"
import { Grid , Button , Text , Flex , Box} from "@chakra-ui/react";
import { useState , useEffect} from "react";
import { hideSlotsModalForBookerDisplay , setBookingDetailsObject , displayBookingFormModalDisplay } from "../../App/Slices/MainSlice";


const SlotsModalForBooker = () => {

    const hostAvailabilityHolder = useSelector((state)=>state.slice.hostAvailabilityHolder);
    const selectedDate = useSelector((state)=>state.slice.userSelectedDateOnHostAvailability);
    const SlotsModalForBookerDisplay = useSelector((state)=>state.slice.slotsModalForBookerDisplay);
    const [slots,setSlots] = useState([])
    const dispatch = useDispatch();

    const filterTimeSlotsOnly = () => {
        const day = new Date(selectedDate).getDate();
        const slot = hostAvailabilityHolder.filter((i)=>(i.date == day));
        if(slot.length > 0) {
          setSlots(slot[0].slots)
          dispatch(setBookingDetailsObject ({availabilityId:slot[0]._id}))
        }else {
          setSlots([])
        }
    }
    
    useEffect(filterTimeSlotsOnly,[selectedDate]);
    
    const crossSymbol = <i className="fa-solid fa-xmark"></i>
    
  return (
    <>
    <Grid display={SlotsModalForBookerDisplay} w='100%' h='110vh' pos='absolute' top='-8%' bg='rgb(0,0,0,0.6)' zIndex={2000}>
      <Grid bg='white' w='40%' height='85vh' margin='auto' borderRadius={10} overflowY='scroll' p={4}>
      <Button onClick={()=>dispatch(hideSlotsModalForBookerDisplay())}
       color='black' pos='absolute'
      margin='1% 0% 0% 2%' fontSize={30}  _hover={{transform:"scaleX(1.1)",transition:"0.10s"}} >{crossSymbol}</Button>
      <Text mt={10} textAlign='center'>Select Time Slot for {selectedDate}</Text>
      <Grid mt={1} placeItems='center'>
        {
          slots.map((i,index)=>{
            const startDate = new Date(i.start);
            const endDate = new Date(i.end);

           // Extract hours and minutes
             const startHours = startDate.getHours();
             const startMinutes = startDate.getMinutes();
             const endHours = endDate.getHours();
             const endMinutes = endDate.getMinutes();

            // Format the output
            const formattedStartTime = `${startHours}.${String(startMinutes).padStart(2, '0')}`;
            const formattedEndTime = `${endHours}.${String(endMinutes).padStart(2, '0')}`;
            return (
              <Flex key={index} color='black' mt={10} gap={2}  w='90%' justify='center' justifyContent='space-between'>
              <Box bg='whitesmoke' fontSize={17} fontWeight='500' w='30%' p={3} textAlign='center' borderRadius={4}>{formattedStartTime}</Box>
              <Box bg='whitesmoke' fontSize={17} fontWeight='500' w='30%' p={3} textAlign='center' borderRadius={4}>{formattedEndTime}</Box>
              <Button bg='#4C9FEB' w='30%' color='white' borderRadius={4} _hover={{transform:"scaleX(1.1)",transition:"0.10s"}} onClick={()=>{
                dispatch(setBookingDetailsObject({slotId:i._id,startTime:i.start}));
                dispatch(hideSlotsModalForBookerDisplay())
                dispatch(displayBookingFormModalDisplay())
              }}>Select</Button>
            </Flex>
            )
          })
        }
        </Grid>
      </Grid>
    </Grid>
    </>
  )
}

export default SlotsModalForBooker
