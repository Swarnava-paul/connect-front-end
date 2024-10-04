import { Grid , Image , Text , Box} from "@chakra-ui/react"
import { useSelector } from "react-redux"
const SharableLink = () => {
  const sharableLink = useSelector((state)=>state.slice.UserInfo.sharableLink);
  // this holds a sharable link display it
  return (
    <Grid  w='100%'>
 
    </Grid>
  )
}

export default SharableLink
