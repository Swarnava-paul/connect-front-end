import { MeetingSchedulerCalendar } from "./Calender/HostCalender"
import { Box , Text , Flex} from "@chakra-ui/react"
import { useSelector } from "react-redux"
const CreateAvailability = () => {
 

  return (
    <>
    <Box mt={[24,14,10,10]} display='grid' justifyContent='center' rowGap={10}>
      <Text fontWeight='600' fontFamily='sans-serif'>Choose Date and Create Availability Slots</Text>
      <MeetingSchedulerCalendar/>
      </Box>
      <Flex p={2} mb={6} w={['90%','90%','80%','50%']} margin='auto' mt={5} borderRadius={8} minH='10vh' maxH='auto' justify='center' align='center' bg='grey' color='white'>
      <Text fontSize={12}>You are only able to create Availability slots in range of 7 days
        <br /> 
        and you will able to create slots on those dates you previously not created any slots
        <br />
        SH(Already Scheduled Dates)
      </Text>
      </Flex>
      </>
  )
}

export default CreateAvailability
