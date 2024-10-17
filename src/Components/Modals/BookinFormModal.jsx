import { Grid , Text , Button } from "@chakra-ui/react"
import { useSelector , useDispatch } from "react-redux"
import { hideBookingFormModalDisplay , setBookingDetailsObject } from "../../App/Slices/MainSlice"
import { useState } from "react"
import { button } from "framer-motion/client"
import { json } from "react-router-dom"

const BookinFormModal = () => {

    const bookingFormModalDisplay = useSelector((state)=> state.slice.bookingFormModalDisplay) 
    const bookingDetailsObject = useSelector((state)=>state.slice.bookingDetailsObject);
    const [buttonState,setButtonState] = useState(true);
    const dispatch = useDispatch();
    const handleForm = (e) => {
          dispatch(setBookingDetailsObject({[e.target.name]:e.target.value}));
        
    };
    const bookSession = async() => {
        const endpoint = import.meta.env.VITE_BOOK_SESSION
          try {
           const request = await fetch(endpoint,{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(bookingDetailsObject)
           });
           
           if(request.ok == false) {
             throw new Error('Error During Booking')
           }else {
            const response = await request.json();
            const {bookingInfo:{location,meetingDuration,meetingEndDate_Time,meetingLink,meetingStartDate_Time},
            bookingWithPersonInfo:{name,email}
            } = response;
            
           }
          }catch (error) {
            alert('Error During Booking Session please Try again');
          }
    }
    

  return (
    <Grid pos='absolute' display={bookingFormModalDisplay} zIndex={2000} top='-8%' w='100%' h='106vh' bg='rgb(0,0,0,0.6)'>
     <Grid w={['90%','80%','70%','50%','40%']} h='80%' 
       placeItems='center' bg='white'
        margin='auto' onChange={(e)=>handleForm(e)} borderRadius={10}>
        <Button onClick={()=>dispatch(hideBookingFormModalDisplay())} >Close</Button>
        <input type="text" name='bookerName' style={{width:"80%",border:"1px solid black",height:"10vh",outline:"none",borderRadius:"6px"}} placeholder="Enter your name"/>
        <input type="email" name='bookerEmail' style={{width:"80%",border:"1px solid black",height:"10vh",outline:"none",borderRadius:"6px"}} placeholder="Enter your Email"/>
        <Button bg='#4C9FEB' h='7vh' fontSize={15} p={5} 
        borderRadius={6}  color='white' onClick={()=>bookSession()}>Book Session</Button>
     </Grid>
    </Grid>
  )
}

export default BookinFormModal


