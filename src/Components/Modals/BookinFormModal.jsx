import { Grid , Text , Button ,Box} from "@chakra-ui/react"
import { useSelector , useDispatch } from "react-redux"
import { hideBookingFormModalDisplay , setBookingDetailsObject } from "../../App/Slices/MainSlice"
import { useState } from "react"
import { button } from "framer-motion/client"
import { json } from "react-router-dom"
import { useEffect } from "react"

const BookinFormModal = () => {

    const bookingFormModalDisplay = useSelector((state)=> state.slice.bookingFormModalDisplay) 
    const bookingDetailsObject = useSelector((state)=>state.slice.bookingDetailsObject);
    const [bookingState,setBookingState] = useState();
    const [bookingResponse,setBookingResponse] = useState()
    const [bookSessionButton,setBookSessionButton] = useState('Book Session')
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
            setBookingResponse({location,meetingDuration,meetingEndDate_Time,meetingLink,meetingStartDate_Time,
              name,email
            })
            setBookingState(true)
           }
          }catch (error) {
           // alert('Error During Booking Session please Try again');
            setBookingState(false)
          }
          setBookSessionButton('Book session');
    }
    

  return (
    <Grid pos='absolute' display={bookingFormModalDisplay} zIndex={2000} top='-8%' w='100%' h='106vh' bg='rgb(0,0,0,0.6)'>
     <Grid w={['90%','80%','70%','50%','40%']} h='80%' 
       placeItems='center' bg='white' display={ bookingState == true || bookingState == false ? 'none' : null }
        margin='auto' onChange={(e)=>handleForm(e)} borderRadius={10}>
        <Button onClick={()=>dispatch(hideBookingFormModalDisplay())} >Close</Button>
        <input type="text" name='bookerName' style={{width:"80%",border:"1px solid black",height:"10vh",outline:"none",borderRadius:"6px"}} placeholder="Enter your name"/>
        <input type="email" name='bookerEmail' style={{width:"80%",border:"1px solid black",height:"10vh",outline:"none",borderRadius:"6px"}} placeholder="Enter your Email"/>
        <Button bg='#4C9FEB' h='7vh' fontSize={15} p={5} 
        borderRadius={6}  color='white' onClick={()=>{
          bookSession();
          setBookSessionButton(<i style={{fontSize:25}} className="fa-solid fa-spinner fa-spin"></i>)
        }}>{bookSessionButton}</Button>
     </Grid>
     {
      (bookingState == true ? (<BookingSuccessFull bookingResponse={bookingResponse}/>) : bookingState == false ?
       (<BookingFailed setBookingState={setBookingState}/>):null)
     }
    </Grid>
  )
}


const BookingSuccessFull = ({bookingResponse}) => {


  return (
    <Grid zIndex={2000} bg='white' w={['90%','90%','90%','40%']} margin='auto' 
    borderRadius={10} placeItems='center' rowGap={5} p={2} fontWeight='600'>
    <Button bg='green' w={['25%','20%','10%','22%']} h={['10vh','10vh','10vh','20vh']} fontSize={30} color='white' borderRadius={100}>
    <i className="fa-solid fa-check"></i>
    </Button>
    <Text>Session Booked with {bookingResponse.name}</Text>
    <Text>Host Email : {bookingResponse.email}</Text>
    <Text fontSize={14} fontWeight='600'>Session Start Date & Time : {bookingResponse.meetingStartDate_Time}</Text>
    <Text>Meeting Duration : {bookingResponse.meetingDuration}</Text>
    <Text>Meeting Location : {bookingResponse.location}</Text>
    <Text>Meeting Link : {bookingResponse.meetingLink}</Text>
    <Button p={2} borderRadius={3} color='white'  onClick={()=>window.location.href=''} bg='#4C9FEB'>Close</Button>
    </Grid>
  )
};


const BookingFailed = ({setBookingState}) => {

  useEffect(()=>{
   setTimeout(()=>{
    setBookingState(null)
   },2000)
  },[])

  return (
    <Grid zIndex={2000} bg='white' w={['80%','','','40%']}  margin='auto'
     borderRadius={10} placeItems='center' p={2} rowGap={10}>
    <Button bg='tomato' w={['40%','28%','23%','22%']} h='20vh' fontSize={30} color='white' borderRadius={100}>
    <i className="fa-solid fa-xmark"></i>
    </Button>
    <Text fontSize={18}>Session Booking Failed</Text>
    </Grid>
  )
}

export default BookinFormModal


