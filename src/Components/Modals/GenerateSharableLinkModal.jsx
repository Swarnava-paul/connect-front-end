import { Flex , Box , Text , Button} from "@chakra-ui/react"
import { useSelector , useDispatch } from "react-redux"
import axios from "axios";
import { useState } from "react";
import { setSharableLink , hideSharableLinkModal , setUserInfo } from "../../App/Slices/MainSlice";

const GenerateSharableLinkModal = () => {

const sharableLinkEndpoint = import.meta.env.VITE_GENERATE_SHARABLE_LINK;
// import api endpoint from .env above
const GeneratesharableLinkModalDisplay = useSelector((state)=>state.slice.SharableLinkDisplay);
// get the state of sharableModal display for control display

const dispatch = useDispatch();

const [generateButtonContent,setGenerateButtonContent] = useState('Generate')
const [textContent,setTextContent] = useState('Click on Generate to generate Sharable link , with this link any person will able to book an one to one session with you in future')
const [buttonBgColor,setButtonBgColor] = useState('#4C9FEB')

async function generateSharableLink () {

setGenerateButtonContent(<i style={{color:"white",fontSize:'25px'}} className="fa-solid fa-spinner fa-spin"></i>) 
// on function calling change generate button content to a loading spinner inside button

const token = localStorage.getItem('token');
// first get token from ls

axios.post(sharableLinkEndpoint,{},{
  headers : {
    'Authorization' : `Bearer ${token}`
  }
}).then((data)=>{
  const {data:{sharable_link}} = data
  setGenerateButtonContent('Link Generated');
  setButtonBgColor('#73EC8B')
  setTextContent('Link Generated go to Sharable link Menu in Side Bar')
  setTimeout(()=>{
    dispatch(hideSharableLinkModal());
  },5000)
  dispatch(setUserInfo({sharableLink:sharable_link}))
}).catch((error)=>{
  setGenerateButtonContent('Generation Failed');
  setTimeout(()=>{
  setGenerateButtonContent('Generate') // if failed force user to try generate again
  },2000)
})

// incase of success of link generation .then chang generate button text to Link Generated
// and also text content then after 5s delay hide the GenerateSharable Link Modal
// and also setting the returned generated link to userInfo inside sharableLink

}
// the above function will handle the logic of generate sharable link and
// also handeling error and success senarious


  return (
    <Flex display={GeneratesharableLinkModalDisplay} position='absolute' justify='center' align='center' top='0%' w='100%' h='100vh'
     bg='rgb(0, 0, 0 , 0.8)'>
       <Box bg='white' w={['90%','90%','50%','40%']}  borderRadius={10}  display='grid' h='40vh' p={5} placeItems='center'>
        <Text textAlign='center' fontFamily='sans-serif' fontSize={14} mt={30}>
         {textContent}
        </Text>
        <Button border='none' w='30%' p={2} h='2.4rem' borderRadius={6} bg={buttonBgColor} color='white'
        onClick={()=>generateSharableLink()}>
          {generateButtonContent}
        </Button>
       </Box>
    </Flex>
  )
}

export default GenerateSharableLinkModal
