import { useSelector } from "react-redux"
import { Flex,Text,Grid,Image,Button} from "@chakra-ui/react"
const WelcomeMessage = () => {
  const userName = useSelector((state)=>state.slice.UserInfo.name)//
  // getting name from userInfo object on redux slice

  const text = {
    fontSize:"70px",
    fontFamily:"sans-serif",
    fontWeight:"600"
  }

  return (
    <Grid w='60%'
    height='40vh' margin='auto'>
     <Flex gap={14}>
      <Text sx={text}>Hi</Text>
      <Text sx={text} color='#6351D3'>{userName}</Text>
      </Flex>
      <Flex align='center' gap={15}>
        <Text sx={text}>Welcome to</Text>
        <Image w='35%' mt='2%' src='https://uniconn.co.in/images/Logo.svg'/>
      </Flex>
      <br />
      <Flex gap={15} align='center'>
       <Text fontSize={34} fontFamily='sans-serif' fontWeight='600' color='#73777C'>Getting Started by</Text>
       <Button border='none' w='8rem' h='7vh' borderRadius={5} bg='#4C9FEB' fontSize='1rem' color='white'>Creating Slots</Button>
      </Flex>
    </Grid>
  )
}

export default WelcomeMessage
