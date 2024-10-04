import { Flex , Box , Text , Button} from "@chakra-ui/react"
import { useSelector } from "react-redux"

const GenerateSharableLinkModal = () => {

const GeneratesharableLinkModalDisplay = useSelector((state)=>state.SharableLinkDisplay);


  return (
    <Flex display={GeneratesharableLinkModalDisplay}  position='absolute' top='0%' w='100%' h='100vh'
    justify='center' align='center' bg='rgb(0, 0, 0 , 0.8)'>
       <Box bg='white' w='40%'  borderRadius={10} display='grid' h='40vh' p={20} placeItems='center'>
        <Text textAlign='center' fontFamily='sans-serif' fontSize={14} mt={30}>
        Click on Generate to generate Sharable link , with this link any person will able to book an one to one session with you in future
        </Text>
        <Button border='none' w='20%' h='2.4rem' borderRadius={6} bg='#4C9FEB' color='white'>Generate</Button>
       </Box>
    </Flex>
  )
}

export default GenerateSharableLinkModal
