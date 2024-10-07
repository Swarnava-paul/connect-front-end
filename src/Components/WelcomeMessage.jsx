import { useSelector , useDispatch } from "react-redux"
import { Flex,Text,Grid,Image,Button} from "@chakra-ui/react"
import { useEffect } from "react"
import { displaySharableLinkModal} from "../App/Slices/MainSlice"
import axios from "axios"

const WelcomeMessage = () => {

  const userName = useSelector((state)=>state.slice.UserInfo.name)
  // getting name from userInfo object on redux slice
  const userTimeZone = useSelector((state)=>state.slice.UserInfo.timeZone);

  const sharableLink = useSelector((state)=>state.slice.UserInfo.sharableLink)
  // getting sharable link state from redux store 
   const dispatch = useDispatch();

   const setTimeZone = async (userTimeZone) => {
    const apiEndpoint = import.meta.env.VITE_SET_TIMEZONE;
    const token = localStorage.getItem('token');
    axios.post(apiEndpoint,
      {
        timeZone : userTimeZone
      },
      {
        headers : {
          'Authorization' : `Bearer ${token}`
        }
      })
   }
   // call api and set timeZone to the user in database

  useEffect(()=>{
    if(sharableLink == 'false') {
      // display generate sharable link modal
      dispatch(displaySharableLinkModal())
    }
    if (userTimeZone == 'false') {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTimeZone(userTimeZone);
      // pass user detected timeZone from browser setting as argument to 
      // setTimeZone function 
    }
    
  },[])

  const text = {
    fontSize:['31px','50px','50px','60px'],
    fontFamily:"sans-serif",
    fontWeight:"600",

  }

  return (
    <Grid 
    height={['20vh','20vh','20vh','40vh']} justifyContent='center' mt={['34%','24%','17%','14%']} p={4}>
     <Flex gap={[3,3,3,3]}>
      <Text sx={text}>Hi</Text>
      <Text sx={text} color='#6351D3'>{userName}</Text>
      </Flex>
      <Flex align='center' gap={15}>
        <Text sx={text}>Welcome to</Text>
        <Image w='35%' mt='2%' src='https://uniconn.co.in/images/Logo.svg'/>
      </Flex>
      <br />
      <Flex gap={4} align='center'>
       <Text fontSize={[20,20,20,34]} fontFamily='sans-serif' fontWeight='600' color='#73777C'>Getting Started by</Text>
       <Button pos='static' border='none' w='8rem' h='7vh' borderRadius={5} bg='#4C9FEB' fontSize='1rem' color='white'>Creating Slots</Button>
      </Flex>
    </Grid>
  )
}

export default WelcomeMessage
